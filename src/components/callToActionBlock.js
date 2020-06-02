import React from "react"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"
import { Link } from "gatsby"

const CallToActionBlocWrapper = styled.section`
  padding: 20px;
  background: #eee;
  border-radius: 20px;
  margin: 20px 0;
  
  .call-to-action-content{
    display: flex;
    
    .featured-image-wrapper{
      background: white;
      padding: 10px;
      border-radius: 10px;
      margin: auto 10px;
    }

    img{
      max-width: 100px;
      margin: 0;
    }
  
  }
`

const Button = styled.div`
  background: orange;
  display: inline-block;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  
  a{
  text-decoration: none;
  color: white;
  padding: 4px 8px;
  }
`

const CallToActionBlock = ({ title, content, buttonLabel, buttonDestination, featuredImage }) => {
  return (
    <CallToActionBlocWrapper>
      <RichText render={title}/>
      <div className="call-to-action-content">
        <RichText render={content}/>
        <div className="featured-image-wrapper">
          <img src={featuredImage} alt="Featured"/>
        </div>
      </div>
      <Button>
        <Link to={buttonDestination}>
          {buttonLabel}
        </Link>
      </Button>
    </CallToActionBlocWrapper>
  )
}

export default CallToActionBlock
