import { useContext, useEffect, useRef } from "react";
import About from "../About/About";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Deals from "../Deals/Deals";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";
import Subscribe from "../Subscribe/Subscribe";
import { scrollContext } from "../../context/ScrollContext";

function Home() {
  const {setScrollActive} = useContext(scrollContext)

  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const blogsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleSection = () => {
      const scrollNum = window.scrollY + 250;

      if (scrollNum >= contactRef.current.offsetTop) {
        setScrollActive("contact");
      } else if (scrollNum >= blogsRef.current.offsetTop) {
        setScrollActive("blogs");
      } else if (scrollNum >= servicesRef.current.offsetTop) {
        setScrollActive("services");
      } else if (scrollNum >= aboutRef.current.offsetTop) {
        setScrollActive("about");
      } else {
        setScrollActive("home");
      }
    };

    window.addEventListener("scroll", handleSection);
    return () => window.removeEventListener("scroll", handleSection);
  }, [setScrollActive]);

  return (
    <>
      <Header />
      <Slider />
      <section ref={aboutRef} id="about">
        <About />
      </section>
      <section ref={servicesRef} id="services">
        <Services />
      </section>
      <Deals />
      <section ref={blogsRef} id="blogs">
        <Blogs />
      </section>
      <Subscribe />
      <section ref={contactRef} id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;
