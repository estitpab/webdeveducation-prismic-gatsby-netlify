import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SliceZone from "../components/slideZone"


export const query = graphql`
    query MyQuery {
        prismic {
            allHomepages {
                edges {
                    node {
                        body {
                            ... on PRISMIC_HomepageBodyHero {
                                type
                                primary {
                                    hero_content
                                    hero_title
                                    background_image
                                }
                            }
                        }
                    }
                }
            }
        }
    }

`


const IndexPage = (props) => {
  return (

    <Layout>
      <SEO title="Home"/>
      <SliceZone body={props.data.prismic.allHomepages.edges[0].node.body}/>
    </Layout>
  )
}

export default IndexPage
