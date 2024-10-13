import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// styles
const pageStyles = {
  width: "100%",
};

// markup
const LeaderLogoPage = () => {
  return (
    <main style={pageStyles}>
      <title>LEADER Tafel (Printversion)</title>
      <StaticImage
        src="../images/leader/leader_tafel.jpg"
        alt={"LEADER Fördertafel (Printversion)"}
      />
    </main>
  );
};

export default LeaderLogoPage;
