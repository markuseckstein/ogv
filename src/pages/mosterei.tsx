import { graphql, PageProps } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

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

      <h2>Mosttermine 2022</h2>
      <p>Die Termine für 2022 sind</p>
      <ul>
        <li>Freitag, 16. September</li>
        <li>Samstag, 17. September</li>
        <li>Freitag, 23. September</li>
        <li>Samstag, 24. September</li>
        <li>Freitag, 30. September</li>
        <li>Samstag, 01. Oktober</li>
        <li>Freitag, 07. Oktober</li>
        <li>Samstag, 08. Oktober</li>
        <li>Freitag, 14. Oktober</li>
        <li>Samstag, 15. Oktober</li>
        <li>Freitag, 21. Oktober</li>
        <li>Samstag, 22. Oktober</li>
      </ul>
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
      </iframe>
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
