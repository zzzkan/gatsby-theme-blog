import React from "react"
import { Heading, Link } from "@chakra-ui/react"
import { Layout } from "@zzzkan/gatsby-theme-blog/src/components/Layout"

const Home: React.FC = () => {
  return (
    <Layout>
      <Heading as={"h1"} marginBottom={3}>
        Home
      </Heading>
      <Link href={"/base"} color={"tint"}>
        blog
      </Link>
    </Layout>
  )
}

export default Home
