import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `OGV Pattenhofen-Altenthann e.V.`,
    siteUrl: `https://www.ogv-altenthann-pattenhofen.de`,
    menuLinks: [
      { name: 'Vereinszweck', link: '/vereinszweck'},
      { name: 'Kurzchronik', link: '/chronik'},
      { name: 'Geräte', link: '/geraete'},
      { name: 'Mosterei', link: '/mosterei'},
      { name: 'Veranstaltungen', link: '/veranstaltungen'},
      { name: 'Mitgliedschaft', link: '/mitgliedschaft'},
      { name: 'Kontakt', link: '/kontakt'},
      { name: 'Impressum', link: '/impressum'},
      { name: 'Fotogalerie', link: '/fotogalerie'},
      { name: 'LEADER Projekt', link: '/leader'},
    ]
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-extract-image-colors", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};

export default config;
