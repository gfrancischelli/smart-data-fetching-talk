// SpeakerInfo.tsx
import React from "react";
import { createFragmentContainer, graphql } from "react-relay";

const SpeakerInfo = ({ speaker }) => (
  <div>
    <img src={speaker.profilePic} />
    <span>{speaker.name}</span>
  </div>
);

export default createFragmentContainer(SpeakerInfo, {
  speaker: graphql`
    fragment SpeakerInfo_speaker on Speaker {
      name
      profilePic
    }
  `
});
