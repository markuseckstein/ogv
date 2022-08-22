import { graphql, PageProps } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";

// markup
const DatenschutzPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout
      teaserImage={data.file.childImageSharp.gatsbyImageData}
      teaserPosition="55% 67%"
      teaserAltText="Willkommen beim Obst- und Gartenbauverein Pattenhofen Altenthann e.V."
      backgroundColor={data.file.colors.lightMuted}
    >
      <h2>
        <strong>Datenschutzerklärung</strong>
      </h2>
      <p>Verantwortlich im Sinne der Datenschutzgesetzes:</p>
      <p>
        OGV Pattenhofen-Altenthann
        <br /> Thomas Schmid
        <br />
        Pattenhofener Str. 8<br />
        90592 Schwarzenbruck
      </p>
      <p>
        <strong>Erfassung von Daten</strong>
      </p>
      <p>
        Während Sie auf unsere Webseiten zugreifen, erfassen wir automatisch
        Daten von allgemeiner Natur. Diese Daten (Server-Logfiles) umfassen zum
        Beispiel die Art ihres Browsers, ihr Betriebssystem, den Domainnamen
        Ihres Internetanbieters sowie weitere ähnliche allgemeine Daten. Diese
        Daten sind absolut Personen unabhängig und werden genutzt, um Ihnen die
        Webseiten korrekt darzustellen und werden bei jeder Nutzung des
        Internets abgerufen. Die absolut anonymen Daten werden statistisch
        ausgewertet um unseren Service für Sie zu verbessern.
      </p>
      <p>
        <strong>Kontaktformular</strong>
      </p>
      <p>
        Wenn Sie uns über unsere Kontaktseite kontaktieren oder uns eine E-Mail
        schicken werden die entsprechenden Daten zur Bearbeitung gespeichert.
      </p>
      <p>
        <strong>Löschung oder Sperrung von Daten</strong>
      </p>
      <p>
        Ihre persönlichen Daten werden nur so lange gespeichert, wie dies
        absolut notwendig ist um die angegebenen Dienste zu leisten und es vom
        Gesetz vorgeschrieben ist. Nach Ablauf dieser Fristen werden die
        persönlichen Daten der Nutzer regelmäßig gesperrt oder gelöscht.
      </p>

      <p>
        <strong>Google Analytics</strong>
      </p>
      <p>
        Unsere Webseite nutzt Google Analytics, den Webanalysedienst der Google
        Inc. („Google“). Google Analytics nutzt „Cookies“, kleine Textdateien,
        die auf Ihrem Rechner gespeichert werden und Daten zur Nutzung unserer
        Webseite speichern. Die vom Cookie erzeugten Daten über die Nutzung
        unserer Webseite werden an einen Google Server in die USA übertragen und
        gespeichert. Da auf unseren Webseiten eine IP-Anonymisierung aktiviert
        ist, wird Ihre IP-Adresse von Google gekürzt. Dies gilt für
        Mitgliedstaaten der Europäischen Union und anderen Vertragsstaaten des
        Abkommens über den Europäischen Wirtschaftsraum. In seltenen Fällen kann
        es vorkommen, dass die volle IP-Adresse an einen Google Server in den
        USA übertragen und erst dort gekürzt wird. Google nutzt diese
        Informationen um Ihre Nutzung unserer Webseite auszuwerten, um für uns
        Berichte über die Nutzung der Webseite zusammenzustellen und um weitere
        statistische Daten zu erheben. Ihre IP-Adresse wird dabei niemals mit
        anderen auf Google gespeicherten Daten zusammengeführt. Die Verwendung
        von Cookies kann durch eine Einstellung in ihrem Browser verboten
        werden; dies kann jedoch unter Umständen die Funktion unserer Webseite
        beeinträchtigen. Mittels eines speziellen Zusatzprogramms für ihren
        Browser (Add On) können Sie die Sammlung von Daten durch Google
        Analytics desaktivieren<strong>.</strong>
      </p>
      <p>
        <strong>Google Forms</strong>
      </p>
      <p>
        Unsere Webseite nutzt Google Forms von Google Inc. um Daten zu
        gewünschten Mostterminen von Ihnen entgegen zu nehmen. Diese Daten
        werden von Google in den USA gespeichert und von uns nur verwendet um
        die Mostplanung zu machen. Die eingegebenen Daten werden spätestens zum
        Ablauf des aktuellen Kalenderjahres gelöscht.
      </p>

      <p>
        <strong>Cookies</strong>
      </p>
      <p>
        Unsere Webseite verwendet „Cookies“. Cookies sind Textdateien, die vom
        Server einer Webseite auf Ihren Rechner übertragen werden. Bestimmte
        Daten wie IP-Adresse, Browser, Betriebssystem und Internet Verbindung
        werden dabei übertragen.
      </p>
      <p>
        Cookies starten keine Programme und übertragen keine Viren. Die durch
        Cookies gesammelten Informationen dienen dazu, Ihnen die Navigation zu
        erleichtern und die Anzeige unserer Webseiten zu optimieren.
      </p>
      <p>
        Daten, die von uns erfasst werden, werden niemals ohne Ihre Einwilligung
        an Daten an Dritte weitergegeben oder mit personenbezogenen Daten
        verknüpft.
      </p>
      <p>
        Die Verwendung von Cookies kann über Einstellungen in ihrem Browser
        verhindert werden. In den Erläuterungen zu Ihrem Internetbrowsers finden
        Sie Informationen darüber, wie man diese Einstellungen verändern kann.
        Einzelne Funktionen unserer Website können unter Umständen nicht richtig
        funktionieren, wenn die Verwendung von Cookies desaktiviert ist.
      </p>

      <p>
        <strong>
          Auskunft, Berichtigung, Sperre, Löschung und Widerspruch
        </strong>
      </p>
      <p>
        Sie können zu jedem Zeitpunkt Informationen über Ihre bei uns
        gespeicherten Daten erbitten. Diese können auch berichtigt, gesperrt
        oder, sofern die vorgeschriebene Zeiträume der Datenspeicherung zur
        Geschäftsabwicklung abgelaufen sind, gelöscht werden. Unser
        Datenschutzmitarbeiter hilft Ihnen bei allen entsprechenden Fragen.
        Seine Kontaktdaten finden Sie weiter unten.
      </p>
      <p>
        Gesperrte Daten werden in einer speziellen Sperrdatei zu Kontrollzwecken
        verwahrt. Wenn die gesetzliche Archivierungsverpflichtung abgelaufen ist
        können Sie auch die Löschung der Daten verlangen. Innerhalb der
        Archivierungsverpflichtung können wir Ihre Daten auf Wunsch sperren.
      </p>
      <p>
        Änderungen oder Widerruf von Einwilligungen können durch eine Mitteilung
        an uns vorgenommen werden. Dies ist auch für zukünftige Aktionen
        möglich.
      </p>
      <p>
        <strong>Änderung der Datenschutzbestimmungen</strong>
      </p>
      <p>
        Unsere Datenschutzerklärung können in unregelmäßigen Abständen angepasst
        werden, damit sie den aktuellen rechtlichen Anforderungen entsprechen
        oder um Änderungen unserer Dienstleistungen umzusetzen, z. B. bei der
        Einfügung neuer Angebote. Für Ihren nächsten Besuch gilt dann
        automatisch die neue Datenschutzerklärung.
      </p>
      <p>
        <strong>Kontakt zum Datenschutzmitarbeiter</strong>
      </p>
      <p>
        Für Fragen zum Datenschutz schicken Sie uns bitte eine Nachricht an
        info@ogv-altenthann-pattenhofen.de mit dem Betreff „Datenschutz“.
      </p>
      <p>
        Diese Widerrufsbelehrung Seite wurde bei{" "}
        <a
          href="https://xn--datenschutzerklrunggenerator-knc.de/"
          target="_blank"
        >
          datenschutzerklärunggenerator.de
        </a>
        &nbsp;erstellt.
      </p>
    </Layout>
  );
};
export default DatenschutzPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "impressum.jpg" }) {
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
