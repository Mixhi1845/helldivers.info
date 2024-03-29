import type { Metadata } from "next";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Shop",
  description: "-",
};

import Container from "@/components/containerCard";

export default function ShopPage() {
  return (
    <Container title="Shop">
      <CardDescription>Updates in:</CardDescription>
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        <Card className="row-span-2 aspect-square">
          <CardHeader>
            <CardTitle>1</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
        <Card className="row-auto">
          <CardHeader>
            <CardTitle>2</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
        <Card className="col-start-2 row-auto row-start-2">
          <CardHeader>
            <CardTitle>3</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
        <Card className="col-start-3 row-span-2 row-start-1 aspect-square">
          <CardHeader>
            <CardTitle>4</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
