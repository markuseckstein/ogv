import { graphql, Link, PageProps } from "gatsby";
import { IGatsbyImageData, StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
// import tagDerGartentuer from "../download/Flyer_offene_Gartentuer_2022.pdf";

// markup
const IndexPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout
      teaserImage={data.file.childImageSharp.gatsbyImageData}
      teaserPosition="50% 27%"
      teaserAltText="Willkommen beim Obst- und Gartenbauverein Pattenhofen Altenthann e.V."
      backgroundColor={data.file.colors.lightMuted}
    >
      <h1>Herzlich Willkommen</h1>
      <p>
        auf der Homepage des Vereins für Gartenbau und Landespflege
        Pattenhofen-Altenthann e.V.
      </p>

      {/* <aside style={{ backgroundColor: '#ffb3b3', borderRadius: 5, padding: 10, marginBottom: 15 }}>
        <h4>Aktueller Hinweis</h4>
        <p>Die für den 3.4.2020 geplante Flurreinigung findet wegen der aktuellen Coronavirus-Lage NICHT statt.</p>
      </aside> */}

      <p>
        Wir freuen uns, dass Sie unsere Seite angeklickt haben. Hier finden Sie
        Infos über Verein, Arbeit, Veranstaltungen und Geräte.
      </p>
      <p>
        Viel Spaß beim Durchschauen. Vielleicht haben wir Ihr Interesse geweckt
        und sehen Sie bald bei einer unserer Veranstaltungen.
      </p>
      <p>
        Ihr
        <br /> Gartenbauverein
      </p>
      <StaticImage
        src="../images//ogv_logo.gif"
        alt="Logo OGV"
        loading="eager"
      />

      {/* <aside
        style={{
          marginTop: "50px",
          backgroundColor: "#DFFCD6",
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        <h2>Mostsaison 2024</h2>
        <p>
          Mosttermine können ab sofort über unser{" "}
          <Link to="/mosterei">Formular</Link> angefragt werden.
        </p>
      </aside> */}

      <aside
        style={{
          marginTop: "50px",
          backgroundColor: "#f9fcd4",
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        <h2>Information für unsere Mitglieder</h2>
        <p>
          Zum 31.10.2024 stellt die <strong>Firma Batzner Hagebaumarkt</strong>{" "}
          in Feucht das Rabattprogramm für Vereine generell - und somit auch für
          die Mitglieder des OGV ein.
        </p>
      </aside>

      <br />

      <Link to="/leader_tafel">
        <StaticImage
          alt="LEADER Projekttafel (Printversion)"
          src="../images/leader/leader_tafel.jpg"
          style={{
            borderRadius: "5px",
          }}
        />
      </Link>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "willkommen.jpg" }) {
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
