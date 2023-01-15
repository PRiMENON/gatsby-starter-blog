/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"
import propTypes from "prop-types"

const Seo = ({ description, title, children, topFlag }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
            social {
              twitter
            }
          }
        }
      }
    `
  )
  const { pathname } = useLocation()
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const image = site.siteMetadata?.siteUrl + `/` + site.siteMetadata?.image
  const siteUrl = site.siteMetadata?.siteUrl + pathname || site.siteMetadata?.siteUrl
  const ogType = topFlag ? "website" : "article"
  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={defaultTitle ? `${title} | ${defaultTitle}` : title} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={image || ``} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={site.siteMetadata?.social?.twitter || ``} />
      <meta name="twitter:creator" content={site.siteMetadata?.social?.twitter || ``} />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image || ``} />
      {children}
    </>
  )
}

Seo.defaultProps = {
  topFlag: false,
}

Seo.propTypes = {
  topFlag: propTypes.bool,
}

export default Seo
