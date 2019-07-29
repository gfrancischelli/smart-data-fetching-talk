import React from "react";
import { createFragmentContainer, graphql } from "react-relay";

import { SpeakerInfo_query } from "./__generated__/SpeakerInfo_query.graphql";

type Props = {
  query: SpeakerInfo_query;
};

const SpeakerInfo: React.FC<Props> = ({ query: { speaker } }) => (
  <div>
    <div>
      <img width="150" src={speaker.profilePic} />
    </div>
    {speaker.name}
  </div>
);

export default createFragmentContainer(SpeakerInfo, {
  query: graphql`
    fragment SpeakerInfo_query on Talk {
      speaker {
        name
        profilePic
      }
    }
  `
});
