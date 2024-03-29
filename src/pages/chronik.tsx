import { graphql, PageProps } from "gatsby";
import { IGatsbyImageData, StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

const KurzchronikPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout
      teaserImage={data.file.childImageSharp.gatsbyImageData}
      teaserPosition="50% 15%"
      teaserAltText="Willkommen beim Obst- und Gartenbauverein Pattenhofen Altenthann e.V."
      backgroundColor={data.file.colors.lightMuted}
    >
      <h1>Kurzchronik</h1>
      <p>
        Der Verein wurde am 28. Juli 1947 im Gasthaus "Zum Felsenkeller" in
        Pattenhofen gegründet. Der Ort Pattenhofen gehörte bis zur Gebietsreform
        1972 zur ehemaligen eigenständigen Gemeinde Altenthann. Der Gründung
        ging, laut Protokoll, eine lebhafte, achtstündige Diskussion voraus.
        Dann war es geschafft. Der Obst- und Gartenbauverein, so der damalige
        Name, wurde von 37 Personen gegründet. Erster Vorstand wurde Georg
        Pickel aus Pattenhofen.
      </p>
      <p>
        <StaticImage
          src="../images/kurzchronik-01.jpg"
          alt={"Kurzchronik 1"}
        ></StaticImage>
      </p>
      <p>
        <StaticImage
          src="../images/kurzchronik-02.jpg"
          alt={"Kurzchronik 2"}
        ></StaticImage>
      </p>
      <p>
        Der Verein stieß auf großes Interesse in der Bevölkerung. Viele neue
        Mitglieder kamen auch aus dem benachbarten Burgthann und bald hatte der
        Verein über 100 Mitglieder. Schon Anfag der 1950er Jahre wurde der
        Wunsch nach einer Mosterei laut und 1953 konnte durch viel Eigenleistung
        eine kleine Mostanlage in Pattenhofen in Betrieb genommen werden. Die
        Jahre bis Mitte 1965 waren geprägt von Obstbaumpflanzungen,
        Fachvorträgen, Schnittkursen usw. Auch der Blumenschmuck an Häusern und
        Balkonen kam groß in Mode und die Mitglieder des Gartenbauvereins waren
        mit als Erste dabei.
      </p>

      <p>
        Im Jahr 1966 dann eine Zäsur. Mitglieder aus Burgthann gründeten in
        ihrem Ort einen eigenen Verein und die Mitgliederzahl halbierte sich.
        Aber es ging weiter beim OGV Pattenhofen-Altenthann und der Verein
        erholte sich. 1972 konnte mit einem Festakt das 25-jährige Jubiläum
        gefeiert werden und 1987 unter großer Beteiligung der Bevölkerung das
        40-jährige Bestehen.
      </p>

      <p>
        Zu dem Zeitpunkt hatte sich der Verein auf Vorschlag des Kreisverbandes
        in "Verein für Gartenbau und Landespflege Pattenhofen-Altenthann e.V."
        umbenannt, aber im örtlichen Sprachbereich spricht man heute noch vom
        Obst- und Gartenbauverein.
      </p>

      <p>
        Eine große Gemeinschaftsleistung war zu dieser Zeit die Einrichtung
        einer neuen modernisierten Mosterei im ehemaligen Schulhaus Altenthann.
        Die Mitgliederzahl stieg ständig und 1991 war der Verein auf über 190
        Personen angewachsen. Dieser Stand hat sich bis heute gehalten.
      </p>

      <p>
        Am 23. September 2001 konnte mit großer Unterstützung der Gemeinde
        Schwarzenbruck ein neu erbautes geräumiges Mosthaus eingeweiht werden,
        in dem bis heute der Saft der eigenen Äpfel zu haltbarem Apfelsaft
        abgefüllt wird.
      </p>

      <p>
        Mosterei, Blumenabend, Fachvorträge, Vereinsausflüge und Teilnahme am
        Ferienprogramm der Gemeinde sind heute die Schwerpunkte des
        Vereinslebens.
      </p>
    </Layout>
  );
};

export default KurzchronikPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "kurzchronik.jpg" }) {
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
