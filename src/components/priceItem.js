import React from "react"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"

const PriceItemWrapper = styled.div`
  flex-grow:1;
  flex-basis:0;
  margin: 0 10px;
  
`


const priceItem = ({ title, description, price, type }) => {
  return (
    <PriceItemWrapper>
      <RichText render={title}/>
      <div className="price">
        {price} <span className="duration">/month</span>
      </div>
      <RichText render={description}/>
    </PriceItemWrapper>
  )
}

export default priceItem
