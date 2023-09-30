import { graphql, PageProps } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

const cellStyle: React.CSSProperties = {
  textAlign: "center",
  paddingLeft: "10px",
  paddingRight: "10px",
};

const MostereiPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout
      teaserImage={data.file.childImageSharp.gatsbyImageData}
      teaserPosition="50% 57%"
      teaserAltText="Mosterei"
      backgroundColor={data.file.colors.lightMuted}
    >
      <h1>Mosterei</h1>

      <p>
        In unserer Mosterei können die eigenen Äpfel zu Apfelsaft oder Most
        verarbeitet werden.
      </p>
      <h4 style={{ color: "red" }}>Wichtige Hinweise!</h4>
      <p>
        Der Mostbetrieb wird unter den zum Zeitpunkt geltenden COVID Auflagen
        durchgeführt.
      </p>

      <p>
        Wir füllen in Beutel und in Ihre eigenen Flaschen ab. Wir empfehlen aus
        hygienischen und Effizienz-Gründen die Abfüllung in Beutel (3, 5, 10
        Liter, bei uns erhältlich).
      </p>
      <p>Für die Abfüllung in Ihre eigenen Flaschen achten Sie bitte auf</p>
      <ul>
        <li>saubere Flaschen</li>
        <li>dichte Verschlüsse</li>
        <li>sinnvolle Größen</li>
      </ul>
      <p>
        Das angelieferte Obst soll in Säcken oder Kisten mit{" "}
        <strong>max. 25 kg Gesamtgewicht</strong> angeliefert werden.
      </p>
      <p>
        Von Mostkunden dürfen sich nur 2 Personen als Helfer im Mosthaus
        aufhalten.
      </p>
      <h2>Mostpreise</h2>

      <table>
        <thead>
          <tr>
            <th style={cellStyle}>Preise für</th>
            <th>Mitglieder</th>
            <th>Nicht-Mitglieder</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Most</td>
            <td style={cellStyle}>18 €</td>
            <td style={cellStyle}>22 €</td>
          </tr>
          <tr>
            <td>Sauermost</td>
            <td style={cellStyle}>9 €</td>
            <td style={cellStyle}>13 €</td>
          </tr>
          <tr>
            <td>Beutel 3 Liter</td>
            <td style={cellStyle} colSpan={2}>
              1,50 €
            </td>
          </tr>
          <tr>
            <td>Beutel 5 Liter</td>
            <td style={cellStyle} colSpan={2}>
              1,90 €
            </td>
          </tr>
          <tr>
            <td>Beutel 10 Liter</td>
            <td style={cellStyle} colSpan={2}>
              2,50 €
            </td>
          </tr>
          <tr>
            <td>Box 5 Liter</td>
            <td style={cellStyle} colSpan={2}>
              3,00 €
            </td>
          </tr>
          <tr>
            <td>Box 10 Liter</td>
            <td style={cellStyle} colSpan={2}>
              5,00 €
            </td>
          </tr>
        </tbody>
      </table>
      <br />

      <h2>Mosttermine 2023</h2>
      <p>Die Termine für 2023 sind</p>
      <ul>
        <li>Freitag, 29. September</li>
        <li>Samstag, 30. September</li>
        <li>Freitag, 06. Oktober</li>
        <li>Samstag, 07. Oktober</li>
      </ul>

      <p>Alle Termine für 2023 sind bereits ausgebucht.</p> 

      {/* <h2>Terminanfrage</h2>
      <p>
        Sie können hier eine Terminanfrage stellen. Wir werden uns dann so
        schnell wie möglich telefonisch bei Ihnen zur genauen Terminabsprache
        melden.
      </p>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdBFKKI-loeuCRLt-9a2uKvjV6TLFwBzyg9DMQFcv2g_qWASw/viewform?embedded=true"
        style={{ width: "100%" }}
        height="2287"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
      >
        Wird geladen…
      </iframe> */}
    </Layout>
  );
};

export default MostereiPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "mosterei.jpg" }) {
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
