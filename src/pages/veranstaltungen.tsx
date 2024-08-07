import { graphql, PageProps } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

import React from "react";
import Layout from "../components/layout";
import satzungsaenderungen from "../download/vergleich_satzungen_2023.pdf";

const VeranstaltungenPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout
      teaserImage={data.file.childImageSharp.gatsbyImageData}
      teaserPosition="50% 38%"
      teaserAltText="Willkommen beim Obst- und Gartenbauverein Pattenhofen Altenthann e.V."
      backgroundColor={data.file.colors.lightMuted}
    >
      <h1>Jahresprogramm 2024</h1>
      <p>
        <table>
          <tr>
            <td style={{ whiteSpace: "nowrap", verticalAlign: "top" }}>
              14.03.2024
            </td>
            <td>Helferessen, im Weissen Kreuz, 19:00 Uhr</td>
          </tr>

          <tr>
            <td style={{ whiteSpace: "nowrap", verticalAlign: "top" }}>
              20.03.2024
            </td>
            <td>
              Jahreshauptversammlung 19:00 Uhr im Gasthaus "Weisses Kreuz".
            </td>
          </tr>

          <tr>
            <td style={{ whiteSpace: "nowrap", verticalAlign: "top" }}>
              22.03.2024
            </td>
            <td>Flurreinigung 17:00 Uhr, Treffpunkt am Dorfweiher.</td>
          </tr>
          <tr>
            <td style={{ whiteSpace: "nowrap", verticalAlign: "top" }}>
              12.04.2024
            </td>
            <td>Veredelungskurs, im alten Feuerwehrhaus, 15:00 Uhr.</td>
          </tr>
          <tr>
            <td
              style={{
                whiteSpace: "nowrap",
                verticalAlign: "top",
                textDecoration: "line-through",
              }}
            >
              05.07.2024
            </td>
            <td>
              <strong style={{ color: "red" }}>Vereinsabend verschoben auf 25.10.2024!</strong>
            </td>
          </tr>

          <tr>
            <td style={{ whiteSpace: "nowrap", verticalAlign: "top" }}>
              12.07.2024
            </td>
            <td>Sommerschnittkurs, 15:00 Uhr.</td>
          </tr>

          <tr>
            <td style={{ whiteSpace: "nowrap", verticalAlign: "top" }}>
              25.07.2024
            </td>
            <td>Mostersitzung, 19:00 Uhr</td>
          </tr>

          <tr>
            <td style={{ whiteSpace: "nowrap", verticalAlign: "top" }}>
              24.08.2024
            </td>
            <td>Obstbaumversteigerung, 14:00 Uhr</td>
          </tr>

          <tr>
            <td style={{ whiteSpace: "nowrap", verticalAlign: "top" }}>
              22.09.2024
            </td>
            <td>Herbstwanderung</td>
          </tr>
          <tr>
            <td>25.10.2024</td>
            <td>
              <p>Vereinsabend, im Weissen Kreuz um 19:00 Uhr</p>
              <p>
                <strong>Fachvortrag</strong> mit Annemarie Drüschler (Dipl.-Ing.
                Agrar- und Umweltwissenschaften) zum Thema:
              </p>
              <p>
                <i>
                  <strong>Gärtnern in Zeiten des Klimawandels</strong>
                  <br />
                  Was kann der Gärtner tun? Einsatz von angepassten Pflanzen,
                  Bodenverbesserung, Windschutz, Wassermanagement.
                </i>
              </p>
            </td>
          </tr>
        </table>
      </p>
      <p>
        Weitere Veranstaltungen die noch nicht terminiert sind werden
        rechtzeitig in der Tageszeitung veröffentlicht.
      </p>
    </Layout>
  );
};

export default VeranstaltungenPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "veranstaltungen.jpg" }) {
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
