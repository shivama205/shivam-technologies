import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
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
      <Writing />
      <About />
      <Contact />
    </main>
  );
}
