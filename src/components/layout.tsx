import * as React from "react";
import {
  graphql,
  Link,
  PageProps,
  StaticQuery,
  StaticQueryProps,
} from "gatsby";
import "../styles/main.scss";
import "./layout.scss";
import {
  GatsbyImage,
  IGatsbyImageData,
  StaticImage,
} from "gatsby-plugin-image";

const query = graphql`
  query {
    site {
      siteMetadata {
        menuLinks {
          name
          link
        }
      }
    }
  }
`;

type DataProps = {
  site: {
    siteMetadata: {
      menuLinks: { name: string; link: string }[];
    };
  };
};

const Layout: React.FC<{
  teaserImage: IGatsbyImageData;
  teaserPosition: string;
  teaserAltText: string;
  backgroundColor: string;
}> = ({
  children,
  teaserImage,
  teaserPosition,
  teaserAltText = "Teaser Bild",
  backgroundColor,
}) => {
  const year = new Date().getFullYear();
  return (
    <StaticQuery
      query={query}
      render={(data: DataProps) => (
        <>
          <header role="banner" className="site-header">
            <div className="site-header__image"></div>

            <div className="wrapper">
              <h1 className="site-title">
                <Link to="/">
                  Obst- und Gartenbauverein <br />
                  Pattenhofen-Altenthann
                </Link>
              </h1>
              <nav className="site-nav">
                <input
                  type="checkbox"
                  id="nav-trigger"
                  className="nav-trigger"
                />
                <label htmlFor="nav-trigger">
                  <span className="menu-icon">
                    <svg viewBox="0 0 18 15" width="18px" height="15px">
                      <path
                        fill="#424242"
                        d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z"
                      />
                      <path
                        fill="#424242"
                        d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z"
                      />
                      <path
                        fill="#424242"
                        d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z"
                      />
                    </svg>
                  </span>
                </label>
                <div className="trigger">
                  {data.site.siteMetadata.menuLinks.map((link) => (
                    <Link
                      key={link.link}
                      className="page-link"
                      activeClassName="page-link--active"
                      to={link.link}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          </header>

          <GatsbyImage
            className="teaser-image"
            objectPosition={teaserPosition}
            image={teaserImage}
            alt={teaserAltText}
          />
          <main className="content">{children}</main>

          <footer className="site-footer">
            <p className="footer-content">
              &copy; {year} OGV Pattenhofen Altenthann
            </p>
          </footer>
        </>
      )}
    ></StaticQuery>
  );
};

export default Layout;
