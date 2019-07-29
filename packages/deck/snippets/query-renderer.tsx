// TaskList.tsx
import React from "react";
import TalkListItem from "./TalkListItem";
import { environment } from "../relay/createRelayEnvironment";
import { QueryRenderer, graphql } from "react-relay";

const TalkList: React.FC = ({ query }) => (
  <div>
    {query.talks.map(talk => (
      <TalkListItem key={talk.id} talk={talk} />
    ))}
  </div>
);

const query = graphql`
  query TaskListQuery {
    talks {
      id
      name

      description
      tags
      event {
        name
        url
      }

      speaker {
        username
        profile_picture
      }
    }
  }
`;

export default () => (
  <QueryRenderer
    query={query}
    environment={environment}
    render={({ error, props }) => {
      if (error) {
        return <div>{error.message}</div>;
      } else if (!props) {
        return <div>Loading...</div>;
      }
      return <TalkList query={props} />;
    }}
  />
);
