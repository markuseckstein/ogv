import { graphql, PageProps } from "gatsby";
import { IGatsbyImageData, StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";
import "../styles/kontakt.css";

const KontaktPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout
      teaserImage={data.file.childImageSharp.gatsbyImageData}
      teaserPosition="50% 37%"
      teaserAltText="Willkommen beim Obst- und Gartenbauverein Pattenhofen Altenthann e.V."
      backgroundColor="#f8f9fa"
    >
      <h1>Kontakt</h1>

      <div className="flex-container">
        <div className="flex-item">
          <h3>1. Vorsitzender</h3>
          <p>
            Thomas Schmid
            <br />
            Pattenhofener Straße 18
            <br />
            90592 Schwarzenbruck
            <br />
            <a href="tel:+49-9183-1052">Tel. 09183 / 1052</a>
            <br />
            <a href="mailto:thomas.schmid@ogv-altenthann-pattenhofen.de">
              thomas.schmid@ogv-altenthann-pattenhofen.de
            </a>
            <br />
          </p>
        </div>

        <div className="flex-item">
          <h3>2. Vorsitzender</h3>
          <p>
            Erwin Haubner
            <br />
            Ochenbrucker Straße 39
            <br />
            90592 Schwarzenbruck
            <br />
            <a href="tel:+49-9183-8319">Tel. 09183 / 8319</a>
            <br />
            <a href="mailto:erwin.haubner@ogv-altenthann-pattenhofen.de">
              erwin.haubner@ogv-altenthann-pattenhofen.de
            </a>
            <br />
          </p>
        </div>
        <div className="flex-item">
          <h3>Kassier</h3>
          <p>
            Karin Tempelmeier
            <br />
            Wallersbergstr. 9
            <br />
            90592 Schwarzenbruck
            <br />
            <a href="tel:+49-9183-7451">Tel. 09183 / 7451</a>
            <br />
            <a href="mailto:karin.tempelmeier@ogv-altenthann-pattenhofen.de">
              karin.tempelmeier@ogv-altenthann-pattenhofen.de
            </a>
            <br />
          </p>
        </div>
        <div className="flex-item">
          <h3>Schriftführer</h3>
          <p>
            Brigitte Oberreuther-Oerthel
            <br />
            Lettenfeldstr. 5
            <br />
            90592 Schwarzenbruck
            <br />
            <a href="tel:+49-15174334867">Tel. 0151 74334867</a>
            <br />
            <a href="mailto:brigitte.oberreuther-oerthel@ogv-altenthann-pattenhofen.de">
              brigitte.oberreuther-oerthel@ogv-altenthann-pattenhofen.de
            </a>
            <br />
          </p>
        </div>
        <div className="flex-item">
          <h3>Gerätewart</h3>
          <p>
            Michael Nerreter
            <br />
            Ochenbrucker Str. 32
            <br />
            90592 Schwarzenbruck
            <br />
            <a href="tel:+49-162-4560291">Tel. 0162 4560291</a>
            <br />
            <a href="mailto:michael.nerreter@ogv-altenthann-pattenhofen.de">
              michael.nerreter@ogv-altenthann-pattenhofen.de
            </a>
          </p>
        </div>
      </div>
      <StaticImage
        src="../images/kontakt02.jpg"
        alt="erweiterte Vorstandschaft"
      ></StaticImage>
    </Layout>
  );
};

export default KontaktPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "kontakt01.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

type DataProps = {
  file: {
    childImageSharp: { gatsbyImageData: IGatsbyImageData };
    
  };
};
