import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import RichText from "../components/richText"


export const query = graphql`
    query allContact_pages {
        prismic {
            allContact_pages {
                edges {
                    node {
                        form_description
                        form_title
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
const ContentWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
`


const Form = styled.form`
  padding: 10px;
  background: #eee;
  margin-top: 20px;
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
  
  input{
    margin-bottom: 10px;
    border-radius: 4px;
    height: 40px;
    border:1px solid #eee;
    width: 100%;
  }
  
  textarea{
    margin-bottom: 10px;
    border-radius: 4px;
    height: 100px;
    border:1px solid #eee;
    width: 100%;
    resize: none;
  }
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
      <ContentWrapper>
        <RichText render={props.data.prismic.allContact_pages.edges[0].node.form_title}/>
        <RichText render={props.data.prismic.allContact_pages.edges[0].node.form_description}/>
        <Form
            name ="contact-us"
            method="POST"
            data-netlify="true"
            action="/contact-success"
            onSubmit={e => e.preventDefault()}>
              <input type="hidden" name="form-name" value="contact-us"/>
          {props.data.prismic.allContact_pages.edges[0].node.form_fields.map((field, i) => {
            if (field.field_type === "textarea") {
              return (
                <div key={i}>
                  <label htmlFor={field.field_name}>{field.field_name}:</label><br/>
                  <textarea
                    required={field.required === "Yes"}
                    id={field.field_name}
                    name={field.field_name}/>
                </div>
              )
            } else {
              return (
                <div key={i}>
                  <label htmlFor={field.field_name}>{field.field_name}:</label><br/>
                  <input
                    required={field.required === "Yes"}
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
      </ContentWrapper>

    </Layout>
  )
}

export default ContactPage
