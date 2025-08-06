import { graphql, Link, PageProps } from "gatsby";
import { IGatsbyImageData, StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

const GeraeteMostereiPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout
      teaserImage={data.file.childImageSharp.gatsbyImageData}
      teaserPosition="50% 57%"
      teaserAltText="Geräte"
      backgroundColor="#f8f9fa"
    >
      <h1>Geräte</h1>
      <p>
        Den Vereinsmitgliedern stehen auf Leihbasis nachstehende Geräte zur
        Verfügung.
      </p>

      <p>
        <table>
          <thead>
            <tr>
              <th>Gerät</th>
              <th>Leihgebühr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vertikutierer mit Benzinmotor</td>
              <td>5€ / Stunde</td>
            </tr>
            <tr>
              <td>Streuwagen</td>
              <td>kostenlos, freiwillige Spende</td>
            </tr>
            <tr>
              <td>Rasenwalze</td>
              <td>kostenlos, freiwillige Spende</td>
            </tr>
          </tbody>
        </table>
      </p>

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

      <h3>Mosterei</h3>
      <p>
        In unserer <Link to="/mosterei">Mosterei</Link> können die eigenen Äpfel
        zu Apfelsaft oder Most verarbeitet werden.
      </p>
    </Layout>
  );
};

export default GeraeteMostereiPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "geraete.jpg" }) {
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
