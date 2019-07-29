// TalkInfo.tsx
import React from "react";
import { createFragmentContainer, graphql } from "react-relay";

const TalkInfo = ({ talk }) => {
  const { description, event } = talk;
  return (
    <div>
      🌎 <a href={event.url}>{event.name}</a>
      <div>{description}</div>
    </div>
  );
};

export default createFragmentContainer(TalkInfo, {
  talk: graphql`
    fragment TalkInfo_talk on Talk {
      description
      event {
        name
        url
      }
    }
  `
});
