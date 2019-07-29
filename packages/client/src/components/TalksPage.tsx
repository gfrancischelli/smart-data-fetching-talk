import React from "react";
import { graphql } from "react-relay";

import { createQueryRenderer } from "../relay/createQueryRenderer";
import TalkList from "./TalkList";

import { TalksPageQueryResponse } from "./__generated__/TalksPageQuery.graphql";

type Props = {
  query: TalksPageQueryResponse;
};

const TalksPage: React.FC<Props> = ({ query }) => (
  <div>
    <h1>🎙 Talks</h1>
    <TalkList query={query.viewer} />
  </div>
);

export default createQueryRenderer(
  TalksPage,
  graphql`
    query TalksPageQuery {
      viewer {
        ...TalkList_query
      }
    }
  `
);
