import React from "react";
import { graphql } from "react-relay";

import { createQueryRenderer } from "./createQueryRenderer";
import TalkListItem from "./TalkListItem";

export const TalkList = ({ query }) => {
  const { talks } = query;
  return (
    <div>
      {talks.map(talks => (
        <TalkListItem key={talks.id} talk={talk} />
      ))}
    </div>
  );
};

export default createQueryRenderer(TalkList, {
  query: graphql`
    query TalkListQuery {
      talks {
        ...TalkListItem_talk
      }
    }
  `
});
