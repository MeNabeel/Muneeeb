import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { SocialBar } from "@/components/portfolio/social-bar";
import { Marquee } from "@/components/portfolio/marquee";
import { TrustStrip } from "@/components/portfolio/trust-strip";
import { About } from "@/components/portfolio/about";
import { FeaturedWork } from "@/components/portfolio/featured-work";
import { Experience } from "@/components/portfolio/experience";
import { Skills } from "@/components/portfolio/skills";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { StudioLighting } from "@/components/portfolio/studio-lighting";
import { heroMarqueeWords } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F0E] text-[#F7F4ED] relative selection:bg-[#1F7A70] selection:text-[#F7F4ED]">
      {/* Studio Lighting & Mouse Cursor Spotlight Layer */}
      <StudioLighting />

      {/* Floating Desktop Social Bar */}
      <SocialBar />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Single Page Content */}
      <Hero />
      <Marquee words={heroMarqueeWords} />
      <TrustStrip />
      <About />
      <FeaturedWork />
      <Experience />
      <Skills />
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
