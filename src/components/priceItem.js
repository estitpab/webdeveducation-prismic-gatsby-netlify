import React from "react"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"

const PriceItemWrapper = styled.div`
  flex-grow:1;
  flex-basis:0;
  margin: 0 10px;
  color: ${props => props.mostPopular ? '#fff' : '#000'};
  padding: 10px;
  background: #eee;
  position: relative;
  
  &.mostPopular{
    background: orange;
  }
  
  .macaron{
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
    background: limegreen;
    color: #fff;
    font-weight: bold;
    font-size: 12px;
    border-radius: 0 0 0 10px;
    border-bottom: 1px solid;
    border-left: 1px solid;
    box-shadow: -5px 5px 10px 0 rgba(0,0,0,.2); 
    
  }
  
  .description{
    margin-top: 20px;
  }
  
  .price{
    text-align: center;
    font-size: 30px;
    background: rgba(0,0,0,0.2);
    padding: 10px;
    margin-left: -10px;
    margin-right: -10px;
    
    .duration{
      font-size: 16px;
    }
  }
  
`


const priceItem = ({ title, description, price, mostPopular }) => {
  return (
    <PriceItemWrapper mostPopular={mostPopular} className={mostPopular ? 'mostPopular' : 'classic'} >
      {!!mostPopular &&
      <div className="macaron">
        Most popular
      </div>
      }

      <RichText render={title}/>
      <div className="price">
        ${price} <span className="duration">/month</span>
      </div>
      <div className="description">
        <RichText render={description}/>
      </div>
    </PriceItemWrapper>
  )
}

export default priceItem
