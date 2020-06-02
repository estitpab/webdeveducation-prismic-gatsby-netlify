import React from 'react';
import Hero from "./hero"

const SliceZone = ({body}) => {
  console.log(body)
  return (
    <div>
      {body.map((bodyContent, i)=>{
        if(bodyContent.type === 'hero'){
          return(
            <Hero
              title={bodyContent.primary.hero_title}
              content={bodyContent.primary.hero_content}
              backgroundImage={bodyContent.primary.background_image.url}
              key={i}/>
          )
        }else{
          return null;
        }
      })}
    </div>
    )

}

export default SliceZone;
