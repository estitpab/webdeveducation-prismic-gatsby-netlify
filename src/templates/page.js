import React from "react"
import { graphql } from "gatsby"
import RichText from "../components/richText"
import Layout from "../components/layout"
import SliceZone from "../components/sliceZone"

export const query = graphql`

    query PageQuery($id: String){
        prismic {
            allPages(id: $id) {
                edges {
                    node {
                        body {
                            ... on PRISMIC_PageBodyCall_to_action_grid {
                                type
                                label
                                fields {
                                    button_destination {
                                        ... on PRISMIC_Contact_page {
                                            _meta {
                                                uid
                                            }
                                        }
                                    }
                                    button_label
                                    call_to_action_title
                                    content
                                    featured_image
                                }
                                primary {
                                    section_title
                                }
                            }
                        }
                        content
                        page_title
                        _meta {
                            id
                            uid
                        }
                    }
                }
            }
        }
    }


`


const Page = (props) => {
  console.log(props);
  const prismicAllpages = props.data.prismic.allPages.edges[0]
  if (!prismicAllpages) return null

  const pageTitle = prismicAllpages.node.page_title
  const content = prismicAllpages.node.content
  return (
    <Layout>
      <RichText render={pageTitle}/>
      <RichText render={content}/>
      <SliceZone body={props.data.prismic.allPages.edges[0].node.body} />
    </Layout>
  )
}

export default Page
