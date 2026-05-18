import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Cursor from "../components/cursor/Cursor";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import Footer from "../components/footer/Footer";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Contact from "./contact/Contact";
import SplashScreen from "./splashScreen/SplashScreen";
import TechBackground from "../components/techBackground/TechBackground";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import "./Main.scss";

const Main = () => {
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  return (
    <div className="dark-mode">
      <div className="grid-overlay"></div>
      <StyleProvider value={{isDark: true, changeTheme: () => {}}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Cursor />
            <TechBackground />
            <Header />
            <Greeting />
            <Skills />
            <WorkExperience />
            <Projects />
            <Education />
            <Contact />
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
