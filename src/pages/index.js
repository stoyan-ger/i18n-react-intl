import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useLocalization } from "gatsby-theme-i18n"
import { useIntl } from "react-intl"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const { locale, config, defaultLang } = useLocalization()
  const intl = useIntl()
  return (
    <Layout>
      <Seo title="Home" />
      <div>Current locale: {locale}</div>
      <div>Current defaultLang: {defaultLang}</div>
      <h1>{intl.formatMessage({ id: "helloWorld" })}</h1>

      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
    </Layout>
  )
}

export default IndexPage
