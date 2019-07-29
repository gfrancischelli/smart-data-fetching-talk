import React from "react";
import { createFragmentContainer, graphql } from "react-relay";

import { TalkInfo_query } from "./__generated__/TalkInfo_query.graphql";

type Props = {
  query: TalkInfo_query;
};

const TalkInfo: React.FC<Props> = ({ query: { description, event } }) => (
  <div>
    <div>
      🌎 <a href={event.url}>{event.name}</a>
    </div>
    {description}
  </div>
);

export default createFragmentContainer(TalkInfo, {
  query: graphql`
    fragment TalkInfo_query on Talk {
      description
      event {
        name
        url
      }
    }
  `
});
