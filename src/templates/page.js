import React from 'react';
import {graphql} from "gatsby";
import {RichText} from "prismic-reactjs";
import Layout from '../components/layout';

export const query = graphql`

    query PageQuery($id: String){
        prismic {
            allPages(id: $id) {
                edges {
                    node {
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
  const prismicAllpages = props.data.prismic.allPages.edges[0];
  if (!prismicAllpages) return null;

  const pageTitle = prismicAllpages.node.page_title;
  const content = prismicAllpages.node.content;
  return(
    <Layout>
      <RichText render={pageTitle}/>
      <RichText render={content}/>
    </Layout>
  )
}

export default Page;
