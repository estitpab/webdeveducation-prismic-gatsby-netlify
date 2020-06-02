/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import "./layout.css"
import styled from "styled-components"

const MainWrapper = styled.main`
  max-width: 800px;
  margin: 0 auto;
`

const Header = styled.header`
  display: flex;
  background: black;
  height:66px;
  padding: 0 16px;
  box-sizing: border-box;
  `
const Branding = styled.div`
  color: orange;
  font-weight-bold;
  margin: auto 0;
  font-size:20px;
  `

const NavLinks = styled.div`
  margin-left:auto;
  display:flex;
  `
const NavLink = styled.div`
  margin: auto 0;
  
  a{
    color:white;
    padding: 0 16px;
    text-decoration:none;
    font-weight:bold;
    font-size:14px;
    
    &:hover{
      color: orange;
    }
  }
`

const Layout = ({ children }) => {
  const { prismic } = useStaticQuery(
    graphql`
        query {
            prismic {
                allNavigations {
                    edges {
                        node {
                            branding
                            navigation_links {
                                label
                                link {
                                    ... on PRISMIC_Page {
                                        _meta {
                                            uid
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

    `);

  const prismicNavigation = prismic.allNavigations.edges[0];
  if(!prismicNavigation) return null;
  const branding = prismicNavigation.node.branding;
  const navigation_links = prismicNavigation.node.navigation_links;

  return (
    <>
      <Header>
        <Branding>
          {branding}
        </Branding>
        <NavLinks>
          {navigation_links.map((link) => (
            <NavLink key={link.link._meta.uid}>
              <Link to={link.link._meta.uid}>{link.label}</Link>
            </NavLink>
          ))}
        </NavLinks>
      </Header>
      <MainWrapper>{children}</MainWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
