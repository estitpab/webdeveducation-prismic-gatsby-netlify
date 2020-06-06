import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"


export const query = graphql`
    query allContact_pages {
        prismic {
            allContact_pages {
                edges {
                    node {
                        form_fields {
                            field_name
                            field_type
                            required
                        }
                    }
                }
            }
        }
    }

`

const Form = styled.form`
  padding: 10px;
  background: #eee;
  margin-top: 20px;
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
`

const Button = styled.button`
  background: orange;
  color:white;
  cursor:pointer;
  padding: 4px 8px;
  box-shadow: none;
  border-radius: 4px;
`


const ContactPage = (props) => {
  console.log({ props })
  return (
    <Layout>
      <Form onSubmit={e => e.preventDefault}>
        {props.data.prismic.allContact_pages.edges[0].node.form_fields.map((field, i) => {
          if (field.field_type === "textarea") {
            return (
              <div key={i}>
                <label htmlFor={field.field_name}>{field.field_name}:</label><br/>
                <textarea
                  required={field.required === 'Yes'}
                  id={field.field_name}
                  name={field.field_name}/>
              </div>
            )
          } else {
            return (
              <div key={i}>
                <label htmlFor={field.field_name}>{field.field_name}:</label><br/>
                <input
                  required={field.required === 'Yes'}
                  type={field.type}
                  id={field.field_name}
                  name={field.field_name}/>
              </div>
            )
          }
        })}
        <Button type="submit">
            Sumbit
        </Button>
      </Form>
    </Layout>
  )
}

export default ContactPage
