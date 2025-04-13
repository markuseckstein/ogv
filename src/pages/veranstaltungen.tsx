import { graphql, PageProps } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

import React from "react";
import Layout from "../components/layout";

const VeranstaltungenPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout
      teaserImage={data.file.childImageSharp.gatsbyImageData}
      teaserPosition="50% 38%"
      teaserAltText="Willkommen beim Obst- und Gartenbauverein Pattenhofen Altenthann e.V."
      backgroundColor={data.file.colors.lightMuted}
    >
      <h1>Jahresprogramm 2025</h1>
      <p>
        <table>
          <tr>
            <td style={{ whiteSpace: "nowrap", verticalAlign: "top" }}>
              13.03.2025
            </td>
            <td>Helferessen, im Weissen Kreuz, 19:00 Uhr</td>
          </tr>

          <tr>
            <td style={{ whiteSpace: "nowrap", verticalAlign: "top" }}>
              20.03.2025
            </td>
            <td>
              Jahreshauptversammlung, 19:00 Uhr im Gasthaus "Weisses Kreuz".
            </td>
          </tr>

          <tr>
            <td style={{ whiteSpace: "nowrap", verticalAlign: "top" }}>
              04.04.2025
            </td>
            <td>Flurreinigung, 17:00 Uhr altes Feuerwehrhaus.</td>
          </tr>
          <tr>
            <td style={{ whiteSpace: "nowrap", verticalAlign: "top" }}>
              02.05.2025
            </td>
            <td>Kräuterwanderung. 16:00 Uhr bei Fr. Anita Schrödel, Oberdorf 5, Lindelburg.
              <br />Treffpunkt am Weiher in Altenthann, Abfahrt in Fahrgemeinschaften um 15:45 Uhr.</td>
          </tr>
          <tr>
            <td style={{ whiteSpace: "nowrap", verticalAlign: "top" }}>
              16.05.2025
            </td>
            <td>
              Alternativtermin für die Kräuterwanderung. Ort wird noch bekannt
              gegeben.
            </td>
          </tr>
          <tr>
            <td
              style={{
                whiteSpace: "nowrap",
                verticalAlign: "top",
                // textDecoration: "line-through",
              }}
            >
              04.07.2025
            </td>
            <td>Vereinsabend, 19:30 im Gasthaus "Weisses Kreuz"</td>
          </tr>

          <tr>
            <td style={{ whiteSpace: "nowrap", verticalAlign: "top" }}>
              12.07.2025
            </td>
            <td>Schnittkurs, Treffpunkt um 14:00 Uhr am Vereinsheim in Weinhof.</td>
          </tr>

          <tr>
            <td style={{ whiteSpace: "nowrap", verticalAlign: "top" }}>
              24.07.2025
            </td>
            <td>Mostersitzung, 19:00 Uhr altes Feuerwehrhaus</td>
          </tr>

          <tr>
            <td style={{ whiteSpace: "nowrap", verticalAlign: "top" }}>
              30.08.2025
            </td>
            <td>Obstbaumversteigerung, 14:00 Uhr altes Feuerwehrhaus</td>
          </tr>

          <tr>
            <td style={{ whiteSpace: "nowrap", verticalAlign: "top" }}>
              14.09.2025
            </td>
            <td>Herbstwanderung nach Rasch, 10:00 Uhr altes Feuerwehrhaus</td>
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
