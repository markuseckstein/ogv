import { graphql, PageProps } from "gatsby";
import { IGatsbyImageData, StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

const GeraeteMostereiPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout
      teaserImage={data.file.childImageSharp.gatsbyImageData}
      teaserPosition="50% 57%"
      teaserAltText="Geräte und Mosterei"
      backgroundColor={data.file.colors.lightMuted}
    >
      <h1>Geräte und Mosterei</h1>
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
              <td>Combi-Häcksler mit Benzinmotor</td>
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
            <tr>
              <td>Alu-Mehrzweckleiter</td>
              <td>kostenlos, freiwillige Spende</td>
            </tr>
            <tr>
              <td>Baumsäge mit langem Stiel</td>
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
        In unserer Mosterei können die eigenen Äpfel zu Apfelsaft oder Most
        verarbeitet werden.
      </p>
      <h4 style={{ color: "red" }}>Wichtige Hinweise!</h4>
      <p>
        Wegen Corona-Auflagen sind beim Mostbetrieb 2021 Einschänkungen
        notwendig:
      </p>
      <p>
        Es können <strong>nur Mitglieder</strong> des Vereins für Gartenbau und
        Landespflege Pattenhofen-Altenthann angenommen werden.
      </p>
      <p>Es werden nur Beutel (3, 5 oder 10 Liter) abgefüllt.</p>
      <p>
        Das angelieferte Obst soll in Säcken oder Kisten mit{" "}
        <strong>max. 25 kg Gesamtgewicht</strong> angeliefert werden.
      </p>
      <p>
        Von Mostkunden dürfen sich nur 2 Personen als Helfer im Mosthaus
        aufhalten.
      </p>
      <p>Schutzmaske und Mindestabstand 1,5 m sind Vorschrift.</p>

      <h4>Mosttermine 2022</h4>
      <p>Die Termine für 2022 stehen noch nicht fest.</p>
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
      colors {
        ...GatsbyImageColors
      }
    }
  }
`;

type DataProps = {
  file: {
    childImageSharp: { gatsbyImageData: IGatsbyImageData };
    colors: { lightMuted: string };
  };
};
