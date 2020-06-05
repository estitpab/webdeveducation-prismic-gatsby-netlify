import React from "react"
import Hero from "./hero"
import CallToActionGrid from "./callToActionGrid"
import PriceList from "./priceList"


const SliceZone = ({ body }) => {
  console.log(body)
  return (
    <div>
      {body.map((bodyContent, i) => {
        if (bodyContent.type === "hero") {
          return (
            <Hero
              title={bodyContent.primary.hero_title}
              content={bodyContent.primary.hero_content}
              backgroundImage={bodyContent.primary.background_image.url}
              key={i}/>

          )
        } else if (bodyContent.type === "call_to_action_grid") {
          return(
            <CallToActionGrid
              title={bodyContent.primary.section_title}
              callToActions={bodyContent.fields}
              key={i}
            />
            )

        } else if (bodyContent.type === "price_list") {
          return(
            <PriceList
              title={bodyContent.primary.title}
              prices={bodyContent.fields}
              key={i}

            />
          )

        } else {
          return null
        }

      })}
    </div>
  )

}

export default SliceZone
