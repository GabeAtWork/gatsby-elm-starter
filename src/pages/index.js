import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ElmHandler from "../components/elm-handler"
import { Elm } from "../Elm/Main.elm"

const IndexPage = () => {
  const flags = { getOrElse: () => {} }

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Elm with Gatsby</h1>

      <ElmHandler
        src={Elm.Main}
        ports={() => {}}
        flags={flags}
        options={flags}
      />
    </Layout>
  )
}

export default IndexPage
