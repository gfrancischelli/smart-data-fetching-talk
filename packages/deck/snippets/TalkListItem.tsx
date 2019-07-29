// TalkListItem.tsx
import React from "react";
import { createFragmentContainer, graphql } from "react-relay";

import TalkInfo from "./TalkInfo";
import SpeakerInfo from "./SpeakerInfo";

export const TalkList = ({ talk }) => (
  <li>
    <h4>{talk.name}</h4>
    <TalkInfo talk={talk} />
    <SpeakerInfo speaker={talk.speaker} />
  </li>
);

export default createFragmentContainer(TalkList, {
  talk: graphql`
    fragment TalkListItem_talk on Talk {
      name
      ...TalkInfo_talk
      speaker {
        ...SpeakerInfo_speaker
      }
    }
  `
});
