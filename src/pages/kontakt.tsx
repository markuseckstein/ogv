import { graphql, PageProps } from "gatsby";
import { IGatsbyImageData, StaticImage, } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";
import "../styles/kontakt.css"


const KontaktPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout teaserImage={data.file.childImageSharp.gatsbyImageData} teaserPosition="50% 30%" teaserAltText="Willkommen beim Obst- und Gartenbauverein Pattenhofen Altenthann e.V." backgroundColor={data.file.colors.lightMuted}>
      <h1>Kontakt</h1>


      <div className="flex-container">
        <div className="flex-item">
          <h3>1. Vorsitzender</h3>
          <p>
            Günter Blos<br />
            Ochenbrucker Straße 6<br />
            90592 Schwarzenbruck<br />
            <a href="tel:+49-9183-3369">Tel. 09183 / 3369</a><br />
            <a href="mailto:guenter.blos@ogv-altenthann-pattenhofen.de">guenter.blos@ogv-altenthann-pattenhofen.de</a>
            <br />
          </p>
        </div>

        <div className="flex-item">
          <h3>
            2. Vorsitzender</h3>
          <p>
            Erwin Haubner<br />
            Ochenbrucker Straße 39<br />
            90592 Schwarzenbruck<br />
            <a href="tel:+49-9183-8319">Tel. 09183 / 8319</a><br />
            <a href="mailto:erwin.haubner@ogv-altenthann-pattenhofen.de">erwin.haubner@ogv-altenthann-pattenhofen.de</a>
            <br />
          </p>
        </div>
        <div className="flex-item">
          <h3>
            Kassier</h3>
          <p>
            Gerhard Billhöfer<br />
            Hügelstraße 1 <br />
            90592 Schwarzenbruck<br />
            <a href="tel:+49-9183-8215">Tel. 09183 / 8215</a><br />
            <a href="mailto:gerhard.billhoefer@ogv-altenthann-pattenhofen.de">gerhard.billhoefer@ogv-altenthann-pattenhofen.de</a>
            <br />
          </p>
        </div>
        <div className="flex-item">
          <h3>
            Schriftführer</h3>
          <p>
            Thomas Schmid<br />
            Pattenhofener Straße 18<br />
            90592 Schwarzenbruck<br />
            <a href="tel:+49-9183-1707">Tel. 09183 / 1052</a><br />
            <a href="mailto:thomas.schmid@ogv-altenthann-pattenhofen.de">thomas.schmid@ogv-altenthann-pattenhofen.de</a>
            <br />
          </p>
        </div>
        <div className="flex-item">
          <h3>Gerätewart</h3>
          <p>
            Robert Koch<br />
            Pattenhofener Straße 5<br />
            90592 Schwarzenbruck<br />
            <a href="tel:+49-9183-1689">Tel. 09183 / 1689</a><br />
          </p>
        </div>
      </div>
      <StaticImage src="../images/kontakt02.jpg" alt="erweiterte Vorstandschaft"></StaticImage>




    </Layout>
  )
}

export default KontaktPage

export const query = graphql`
  query {
    file(relativePath: { eq: "kontakt03.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      },
      colors {
          ...GatsbyImageColors
      }
    }
  }`

type DataProps = { file: { childImageSharp: { gatsbyImageData: IGatsbyImageData }, colors: { lightMuted: string } } };


