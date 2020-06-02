import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import CallToActionBlock from "./callToActionBlock"

const CallToActionGridWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;

`


const CallToActionGrid = ({title, callToActions}) => {
  return(
    <CallToActionGridWrapper>
      <RichText render={title}/>
      {callToActions.map((callToAction,i)=>{
        return(
          <CallToActionBlock
            title={callToAction.call_to_action_title}
            content={callToAction.content}
            buttonLabel={callToAction.button_label}
            buttonDestination={`/${callToAction.button_destination._meta.uid}`}
            featuredImage={callToAction.featured_image.url}
            key={i}/>
        )
      })}
    </CallToActionGridWrapper>
  )
};

export default CallToActionGrid;
