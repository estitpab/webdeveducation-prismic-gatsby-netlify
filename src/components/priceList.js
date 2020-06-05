import React from "react"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"
import PriceItem from "./priceItem"

const PriceListWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
  
  div:last-child{
    display: flex;
  }

`

const PriceList = ({ title, prices }) => {
  return (
    <PriceListWrapper>
      <RichText render={title}/>
      <div>
        {prices.map((price, i) => {
          return (
            <PriceItem
              key={i}
              title={price.price_list_title}
              description={price.price_list_description}
              price={price.price_per_month}
              type={price.price_type}
            />
          )
        })}
      </div>
    </PriceListWrapper>
  )

}

export default PriceList
