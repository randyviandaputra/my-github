import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const GITHUB_PERSONAL_TOKEN = 'b8841c2349761f263b34253fa116682219b9fa90'; // generate personal token your github in setting

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