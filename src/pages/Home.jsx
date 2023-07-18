/*eslint-disable */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Reason from "../components/Reason/Reason";
import Plan from "../components/Plan/Plan";
import Testimonials from "../components/Testimonials/Testimonials";
import Questions from "../components/faq/Questions";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    }
    var Tawk_API: any = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1: any = document.createElement("script"),
        s0: any = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/64b7153d94cf5d49dc64715f/1h5lilul6";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <About />
      <Reason />
      <Plan />
      <Testimonials />
      <Questions />
      <Footer />
    </React.Fragment>
  );
};

export default Home;

