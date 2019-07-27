import {
  Environment,
  FetchFunction,
  Network,
  RecordSource,
  Store
} from "relay-runtime";

const fetchQuery: FetchFunction = (operation, variables) => {
  return fetch("https://api.graph.cool/relay/v1/cjyln47wx5f3v0113c4i878lo", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
};

const network = Network.create(fetchQuery);

const source = new RecordSource();
const store = new Store(source);

export default new Environment({
  network,
  store
});
