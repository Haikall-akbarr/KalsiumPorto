import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
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
          <Resume />
          <Services />
          <Skills />
          <Portfolio />
          <Blog />
          <Contact />
        </article>
      </main>
      <Footer />
    </>
  );
}
