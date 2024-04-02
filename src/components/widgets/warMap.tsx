"use client";

import { useEffect, useState } from "react";
import {
  MapContainer,
  CircleMarker,
  TileLayer,
  ImageOverlay,
  Popup,
  LayersControl,
  FeatureGroup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngBounds } from "leaflet";
import { fetchPlanetsData } from "@/components/widgets/util/getWarMap"; // Import the fetchPlanetsData function
import { Progress } from "../ui/progress";

interface Planet {
  players: number;
  liberation: number;
  planet: {
    name: string;
    initial_owner: string;
    position: {
      x: number;
      y: number;
    };
  };
}

export default function MyMap() {
  const [planets, setPlanets] = useState<Planet[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const planetsData = await fetchPlanetsData(); // Call the fetchPlanetsData function
      setPlanets(planetsData);
    };
    fetchData();
  }, []);

  const allPlanets = planets;

  const activePlanets = planets.filter(
    (planet: { players: number; liberation: number }) => {
      return planet.players > 2000 && planet.liberation !== 100;
    },
  );

  const liberatedPlanets = planets.filter(
    (planet: { players: number; liberation: number }) => {
      return planet.liberation === 100;
    },
  );

  {
    /*Planets we never were on
    const unseenPlanets = planets.filter(
    (planet: { players: number; liberation: number }) => {
      return planet.liberation === 0;
    },
  );

   Planet on which the major order happens
    const majorPlanets = planets.filter(
    (planet: { players: number; liberation: number }) => {
      return planet.liberation === 100;
    },
  );*/
  }

  // Define the angle offset in degrees
  const angleOffsetDegrees = 90; // Adjust as needed

  const renderPlanetMarkers = (filteredPlanets: Planet[]): JSX.Element[] => {
    return filteredPlanets.map((planet, index) => {
      // Calculate new coordinates with angle offset
      const newX =
        planet.planet.position.x *
          Math.cos(angleOffsetDegrees * (Math.PI / 180)) -
        planet.planet.position.y *
          Math.sin(angleOffsetDegrees * (Math.PI / 180));
      const newY =
        planet.planet.position.x *
          Math.sin(angleOffsetDegrees * (Math.PI / 180)) +
        planet.planet.position.y *
          Math.cos(angleOffsetDegrees * (Math.PI / 180));

      let fillColor = "";
      let fillOpacity = 0;
      let color = "";
      let radius = 5;

      if (planet.liberation < 100) {
        fillColor = "";
        fillOpacity = 0.6;
        color = "red";
        radius = 6;
      } else {
        fillColor = "";
        fillOpacity = 0.4;
        color = "green";
        radius = 4;
      }

      return (
        <CircleMarker
          key={index}
          center={[
            newX / -100, // Divide by 100 if necessary
            newY / 100, // Divide by 100 if necessary
          ]}
          radius={radius}
          fillColor={fillColor}
          fillOpacity={fillOpacity}
          color={color}
          weight={1}
        >
          <Popup>
            <p>Name: {planet.planet.name}</p>
            <p>Players: {planet.players}</p>
            <p>
              {Math.round(planet.liberation)}% Liberation
              <Progress value={planet.liberation} />
            </p>
          </Popup>
        </CircleMarker>
      );
    });
  };

  return (
    <MapContainer
      className="aspect-square rounded-lg border md:aspect-video"
      center={[0, 0]}
      zoom={window.innerWidth < 768 ? 7 : 8}
      maxZoom={9}
      minZoom={7}
      maxBounds={new LatLngBounds([-1.5, -1.5], [1.5, 1.5])}
      boxZoom={false}
      doubleClickZoom={false}
      keyboard={false}
      scrollWheelZoom={false}
      touchZoom={false}
    >
      <TileLayer url="/tile.webp" />
      <ImageOverlay
        url="/sectormap.webp"
        bounds={new LatLngBounds([-1, -1], [1, 1])}
        opacity={0.5}
      />
      <LayersControl position="bottomleft">
        <LayersControl.Overlay name="all Planets">
          <FeatureGroup>{renderPlanetMarkers(allPlanets)}</FeatureGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay checked name="active Planets">
          <FeatureGroup>{renderPlanetMarkers(activePlanets)} </FeatureGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="inactive Planets">
          <FeatureGroup>{renderPlanetMarkers(liberatedPlanets)} </FeatureGroup>
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
}
