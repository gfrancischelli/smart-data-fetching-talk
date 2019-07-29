import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import { TalkList_query } from "./__generated__/TalkList_query.graphql";

import TalkListItem from "./TalkListItem";

type Props = {
  // query: any;
  query: TalkList_query;
};

export const TalkList: React.FC<Props> = ({ query }) => {
  const edges = query.allTalks.edges || [];
  return (
    <div>
      {edges.map(edge =>
        edge && edge.node ? (
          <TalkListItem key={edge.node.id} query={edge.node} />
        ) : null
      )}
    </div>
  );
};

export default createFragmentContainer(TalkList, {
  query: graphql`
    fragment TalkList_query on Viewer {
      allTalks {
        edges {
          node {
            id
            ...TalkListItem_query
          }
        }
      }
    }
  `
});
