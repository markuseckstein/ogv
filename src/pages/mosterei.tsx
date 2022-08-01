import { graphql, PageProps } from "gatsby";
import { IGatsbyImageData, StaticImage } from "gatsby-plugin-image";
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
        Wegen Corona-Auflagen sind beim Mostbetrieb 2022 Einschänkungen
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
      <p>Die Termine für 2022 sind</p>
      <ol>
        <li>Tag 1</li>
        <li>Tag 2</li>
        <li>Tag 3</li>
      </ol>
      <p>Sie können hier eine Terminanfrage stellen. Wir werden uns dann so schnell wie möglich telefonisch bei Ihnen zur genauen Terminabsprache melden.</p>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdBFKKI-loeuCRLt-9a2uKvjV6TLFwBzyg9DMQFcv2g_qWASw/viewform?embedded=true" width="640" height="2187" frameborder="0" marginheight="0" marginwidth="0">Wird geladen…</iframe>
    </Layout>
  );
};

export default MostereiPage;

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
