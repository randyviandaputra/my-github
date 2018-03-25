import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const GITHUB_PERSONAL_TOKEN = '65120ad52f0f512bb1a4de011e176ff47bcb144f';

const client = new ApolloClient({
  link: new HttpLink({
    uri: `https://api.github.com/graphql`,
    headers: {
      Authorization: `Bearer ${GITHUB_PERSONAL_TOKEN}`
    }
  }),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();