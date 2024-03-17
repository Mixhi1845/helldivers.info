import { Separator } from "@/components/ui/separator";
import { InfoDialog } from "@/components/infoDialog";
import Link from "next/link";

import {
  FaDiscord,
  FaTwitter,
  FaReddit,
  FaFacebook,
  FaSteam,
  FaInstagram,
  FaYoutube,
  FaHouse,
} from "react-icons/fa6";

/**
 * This component design was generated by v0 by Vercel and modified by myself. @see https://v0.dev/t/QOqHo1Sfj63
 */

export default function Component() {
  return (
    <div>
      <Separator />
      <footer className="py-8 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h5 className="  text-sm font-semibold uppercase  tracking-wide">
              helldivers.info
            </h5>
            <p className="mt-4   text-sm  text-muted-foreground">
              A project by{" "}
              <Link
                className="underline"
                href="https://michaelwagner.vercel.app"
              >
                Michael Wagner.
              </Link>
            </p>
          </div>
          <div className="mt-8  grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h5 className="  text-sm font-semibold uppercase  tracking-wide">
                Site Navigation
              </h5>
              <nav className="mt-4 ">
                <ul>
                  <li>
                    <Link
                      className="block py-2 text-muted-foreground  transition hover:text-foreground"
                      href="/"
                    >
                      Status
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block py-2 text-muted-foreground  transition hover:text-foreground"
                      href="/shop"
                    >
                      Item Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block py-2 text-muted-foreground transition hover:text-foreground"
                      href="/news"
                    >
                      News
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block py-2 text-muted-foreground transition hover:text-foreground"
                      href="/faq"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <h5 className="  text-sm font-semibold uppercase  tracking-wide">
                Legal Stuff
              </h5>
              <nav className="mt-4 ">
                <ul>
                  <li className="block text-muted-foreground  transition hover:text-foreground">
                    <InfoDialog title="Privacy Policy">...</InfoDialog>
                  </li>
                  <li className="block text-muted-foreground  transition hover:text-foreground">
                    <InfoDialog title="About">...</InfoDialog>
                  </li>
                  <li className="block text-muted-foreground  transition hover:text-foreground">
                    <InfoDialog title="Credits">...</InfoDialog>
                  </li>
                  <li className="block text-muted-foreground  transition hover:text-foreground">
                    <InfoDialog title="Contact">...</InfoDialog>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <h5 className="  text-sm font-semibold uppercase  tracking-wide">
                My Other Sites
              </h5>
              <nav className="mt-4 ">
                <ul>
                  <li>
                    <a
                      target="_blank"
                      className="block py-2 text-muted-foreground  transition hover:text-foreground"
                      href="#"
                    >
                      Infogrid
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      className="block py-2 text-muted-foreground  transition hover:text-foreground"
                      href="#"
                    >
                      Glifico
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <h5 className="text-sm font-semibold uppercase  tracking-wide">
                Fan Communities
              </h5>
              <nav className="mb-8 mt-4 grid grid-cols-5 gap-1 sm:w-2/3 md:w-full lg:w-2/3">
                <a
                  target="_blank"
                  className="block py-2 text-muted-foreground transition hover:text-foreground"
                  href="https://steamcommunity.com/app/394510"
                >
                  <FaSteam className="size-6" />
                </a>
                <a
                  target="_blank"
                  className="block py-2 text-muted-foreground transition hover:text-foreground"
                  href="https://www.reddit.com/r/Helldivers/"
                >
                  <FaReddit className="size-6" />
                </a>
                <a
                  target="_blank"
                  className="block py-2 text-muted-foreground transition hover:text-foreground"
                  href="https://www.facebook.com/groups/helldiverscommunity/"
                >
                  <FaFacebook className="size-6" />
                </a>
                <a
                  target="_blank"
                  className="block py-2 text-muted-foreground transition hover:text-foreground"
                  href="https://twitter.com/helldivers2"
                >
                  <FaTwitter className="size-6" />
                </a>
                <a
                  target="_blank"
                  className="block py-2 text-muted-foreground transition hover:text-foreground"
                  href="https://discord.com/invite/Dm5JBDGUMF"
                >
                  <FaDiscord className="size-6" />
                </a>
              </nav>
              <h5 className="  text-sm font-semibold uppercase  tracking-wide">
                Arrowhead Accounts
              </h5>
              <nav className="mt-4 grid  grid-cols-5 gap-1 sm:w-2/3 md:w-full lg:w-2/3">
                <a
                  target="_blank"
                  className="block py-2 text-muted-foreground transition hover:text-foreground"
                  href="https://www.arrowheadgamestudios.com/"
                >
                  <FaHouse className="size-6" />
                </a>
                <a
                  target="_blank"
                  className="block py-2 text-muted-foreground transition hover:text-foreground"
                  href="https://instagram.com/arrowheadgamestudios/"
                >
                  <FaInstagram className="size-6" />
                </a>
                <a
                  target="_blank"
                  className="block py-2 text-muted-foreground transition hover:text-foreground"
                  href="https://twitter.com/arrowheadgs"
                >
                  <FaTwitter className="size-6" />
                </a>
                <a
                  target="_blank"
                  className="block py-2 text-muted-foreground transition hover:text-foreground"
                  href="https://www.facebook.com/ArrowheadGS"
                >
                  <FaFacebook className="size-6" />
                </a>
                <a
                  target="_blank"
                  className="block py-2 text-muted-foreground transition hover:text-foreground"
                  href="https://www.youtube.com/user/ArrowheadGameStudios"
                >
                  <FaYoutube className="size-6" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      <Separator />
      <p className="mt-8 text-center   text-sm  text-muted-foreground">
        This site is fan-made and not affiliated with the Arrowhead Game Studios
        in any way.
      </p>
      <div className="container mt-4">
        <p className="my-4 text-center   text-sm  text-muted-foreground">
          © 2024 Michael Wagner
        </p>
      </div>
    </div>
  );
}
