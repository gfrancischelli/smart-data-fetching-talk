import { graphql, createFragmentContainer } from "react-relay";

const TalkList = () => {};

const App = ({ query }) => {
  return (
    <div>
      <h1>🎙 TalkList</h1>
      <TalkList talks={query.talks} />
    </div>
  );
};

export default createQueryRenderer(App, {
  query: graphql`
    query TalkList_query {
      talks {
        name
        tags
        description

        speaker {
          username
          profile_picture
        }

        location {
          name
          url
        }
      }
    }
  `
});
