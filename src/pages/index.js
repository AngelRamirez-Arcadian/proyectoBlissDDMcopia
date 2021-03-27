import * as React from "react"
import Hero from "../components/hero";
import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <main className="w-full">
      <SEO
        keywords={["Daniel Rocha", "personal website"]}
        title="Dan Rocha | Software Engineer"
      />
      <Hero />
    </main>
  )
}

export default IndexPage
