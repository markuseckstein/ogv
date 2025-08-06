import { graphql, PageProps } from "gatsby";
import { IGatsbyImageData, StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

const MostereiPressePage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout
      teaserImage={data.file.childImageSharp.gatsbyImageData}
      teaserPosition="50% 53%"
      teaserAltText="Willkommen beim Obst- und Gartenbauverein Pattenhofen Altenthann e.V."
      backgroundColor="#f8f9fa"
    >
      <h1>Förder-Projekt „Mosterei Altenthann – Fit für die Zukunft“</h1>

      <p>
        In unserer Vereinsmosterei in Altenthann stellen wir aus den
        angelieferten Äpfeln unserer Mitglieder und weiterer Kunden Apfelsaft
        her. Die Äpfel stammen meist von alten, ökologisch wertvollen Bäumen.
        Durch die Herstellung von Saft aus dem eigenen Obst bieten wir dem
        Erhalt der Bäume eine Zukunft. Darüber Hinaus kann das Obst von neu
        gepflanzten Obstbäumen sinnvoll verwertet werden, wenn die noch jungen
        Bäume in den Ertrag kommen.
      </p>

      <p>
        Um die Qualität des hergestellten Saftes noch weiter zu verbessern und
        um den Ablauf der Saftherstellung zu erleichtern, wurde in eine neue
        Presse investiert.
      </p>

      <p>
        Durch die Aufwertung unserer Mosterei wird dem Most- Team die Arbeit
        erleichtert und dadurch die Leistung an hergestelltem Saft erhöht.
        Dadurch können wir der Nachfrage nach „eigenem Saft aus eigenem Obst“
        besser nachkommen.
      </p>

      <p>
        Die Inbetriebnahme der neuen Technik wurde mit einem kleinen Mosthaus-
        Fest gefeiert. Dabei konnten sich interessierte Besucher über die neue
        Technik, die Saftherstellung, alte Obstsorten informieren. Bei
        verschiedenen Mitmach-Aktionen konnten Herbstfrüchte in Fühlboxen
        ertastet werden, Obstarten anhand Blüte, Baum und Früchte zugeordnet
        werden. Abschließend konnte mit einer Verkostung der Saft aus der
        Vereinsmosterei probiert werden. Bei Kaffee und Kuchen konnten noch
        Erfahrungen und Gartenerlebnisse ausgetauscht werden.
      </p>

      <p>
        Wir pressen aber nicht nur Saft, auch die Information über Garten und
        Natur sind uns wichtig.
      </p>
      <p>
        Durch die Vereinsaktionen wird das Dorfleben aktiv bereichert und stärkt
        den Zusammenhalt. So stehen wir für Bürgerengagement, Umweltbildung und
        Nachhaltiges Handeln:
      </p>
      <p style={{ textAlign: "center", fontStyle: "italic" }}>
        „Mosterei Altenthann- Fit für die Zukunft“
      </p>
      <section>
        <p>
          <StaticImage
            alt="Anlieferung der neuen Presse"
            src="../images/leader/presse_einbau01.jpg"
          />
        </p>
        <p>
          <StaticImage
            alt="Einbau der neuen Presse"
            src="../images/leader/presse_einbau02.jpg"
          />
        </p>
      </section>
    </Layout>
  );
};

export default MostereiPressePage;

export const query = graphql`
  query {
    file(relativePath: { eq: "leader.jpg" }) {
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
