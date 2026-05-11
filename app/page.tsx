import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Work } from "@/components/sections/work";
import { Writing } from "@/components/sections/writing";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="grain relative">
      <Nav />
      <Hero />
      <Services />
      <Process />
      <Work />
      <Writing />
      <About />
      <Contact />
    </main>
  );
}
