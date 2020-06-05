import React from "react"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"
import PriceItem from "./priceItem"

const PriceListWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;

`

const PriceList = ({ title, prices }) => {
  return (
    <PriceListWrapper>
      <RichText render={title}/>
      {prices.map((price, i) => {
        return (
          <PriceItem
            key={i}
          />
        )
      })}
    </PriceListWrapper>
  )

}

export default PriceList
