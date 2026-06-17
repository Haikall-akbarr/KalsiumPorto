import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Resume from "@/components/Resume";
import BeyondCode from "@/components/BeyondCode";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <article>
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Resume />
          <BeyondCode />
          <Contact />
        </article>
      </main>
      <Footer />
    </>
  );
}
