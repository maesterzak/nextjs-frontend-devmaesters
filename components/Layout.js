import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { check_auth_status } from "../actions/auth";

import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const ThemeContext = React.createContext();

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const currentTheme = {
    theme,
    setTheme,
  };
  const { asPath } = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(check_auth_status());
    }
  }, [dispatch]);

  useEffect(() => {
    const Storedtheme = JSON.parse(localStorage.getItem("theme")) ?? true;
    setTheme(Storedtheme);
  }, []);

  const light = {
    cardcolor: "rgba(255, 255, 255, .8)",

    backgroundcolor: "white",
    linkcolor: "rgb(255, 168, 6)",
    linkhover: "#ffa200a4",
    fontcolor: "black",
    secondbackground: "rgb(150, 98, 1)",
    cardheadercolor: "rgb(200, 131, 4)",
    imgOpacity: "100%",
  };
  const dark = {
    cardcolor: "rgba(34, 34, 34, 0.2)",
    backgroundcolor: "#16151d",
    linkcolor: "rgb(255, 168, 6)",
    linkhover: "#ffa200a4",
    fontcolor: "white",
    secondbackground: "#03031b",
    cardheadercolor: "#463610",
    imgOpacity: "30%",
  };
  useEffect(() => {
    const color = getComputedStyle(document.documentElement).getPropertyValue(
      "--card-color"
    );
    if (theme === false) {
      document.documentElement.style.setProperty(
        "--card-color",
        light.cardcolor
      );
      document.documentElement.style.setProperty(
        "--background-color",
        light.backgroundcolor
      );
      document.documentElement.style.setProperty(
        "--link-color",
        light.linkcolor
      );
      document.documentElement.style.setProperty(
        "--link-hover",
        light.linkhover
      );
      document.documentElement.style.setProperty(
        "--second-background",
        light.secondbackground
      );
      document.documentElement.style.setProperty(
        "--font-color",
        light.fontcolor
      );
      document.documentElement.style.setProperty(
        "--card-header-color",
        light.cardheadercolor
      );
      document.documentElement.style.setProperty(
        "--img-opacity",
        light.imgOpacity
      );
    } else {
      document.documentElement.style.setProperty(
        "--card-color",
        dark.cardcolor
      );
      document.documentElement.style.setProperty(
        "--background-color",
        dark.backgroundcolor
      );
      document.documentElement.style.setProperty(
        "--link-color",
        dark.linkcolor
      );
      document.documentElement.style.setProperty(
        "--link-hover",
        dark.linkhover
      );
      document.documentElement.style.setProperty(
        "--second-background",
        dark.secondbackground
      );
      document.documentElement.style.setProperty(
        "--font-color",
        dark.fontcolor
      );
      document.documentElement.style.setProperty(
        "--card-header-color",
        dark.cardheadercolor
      );
      document.documentElement.style.setProperty(
        "--img-opacity",
        dark.imgOpacity
      );
    }
  }, [theme]);

  const [PrivacyPolicy, setPrivacyPolicy] = useState("d-none");

  useEffect(() => {
    if (asPath != "/portfolio") {
      const currentPolicyState = localStorage.getItem("Accept-Privacy-Policy");

      if (currentPolicyState != "true") {
        setPrivacyPolicy("d-block");
      }
    }
  }, []);
  const policyHandler = () => {
    setPrivacyPolicy("d-none");
    localStorage.setItem("Accept-Privacy-Policy", true);
  };

  return (
    <div className="position-relative">
      <ThemeContext.Provider value={currentTheme}>
        {children}
      </ThemeContext.Provider>

      <div
        style={{ bottom: 0, border: "solid 2px white" }}
        className={`col-8 col-md-4 mx-3 mb-1 card position-fixed p-1 ${PrivacyPolicy}`}
      >
        <div className="card-body">
          <h6 className="h3 text-center">Privacy Policy </h6>
          <p>
            By using our website, <br />
            you agree that devmaesters can store cookies on your device and
            disclose information in accordance with our{" "}
            <Link href={"/privacy-policy"}>privacy policy</Link>.
          </p>
          <div className="d-flex justify-content-center">
            <button onClick={policyHandler} className="btn button">
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
