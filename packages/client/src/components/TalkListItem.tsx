import React from "react";
import { createFragmentContainer, graphql } from "react-relay";

import { TalkListItem_query } from "./__generated__/TalkListItem_query.graphql";
import TalkInfo from "./TalkInfo";
import SpeakerInfo from "./SpeakerInfo";

type Props = {
  query: TalkListItem_query;
};

export const TalkList: React.FC<Props> = ({ query }) => (
  <li>
    <h4>{query.name}</h4>
    <div style={{ display: "flex" }}>
      <TalkInfo query={query} />
      <SpeakerInfo query={query} />
    </div>
  </li>
);

export default createFragmentContainer(TalkList, {
  query: graphql`
    fragment TalkListItem_query on Talk {
      name
      ...TalkInfo_query
      ...SpeakerInfo_query
    }
  `
});
