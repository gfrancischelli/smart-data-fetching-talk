import React from "react";
import { QueryRenderer, GraphQLTaggedNode } from "react-relay";

import environment from "./createRelayEnvironment";

export const createQueryRenderer = (
  Component: React.ComponentType<{ query: any }>,
  query: GraphQLTaggedNode
) => {
  return () => (
    <QueryRenderer
      variables={{}}
      query={query}
      environment={environment}
      render={({ error, props }) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (!props) {
          return <div>Loading</div>;
        }
        // @ts-ignore
        return <Component query={props.viewer} />;
      }}
    />
  );
};
