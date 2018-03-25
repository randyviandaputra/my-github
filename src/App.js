import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Container, Feed, Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Container text textAlign="left">
        <Card centered fluid>
          <Card.Content>
            <Card.Header>My Repositories Github</Card.Header>
          </Card.Content>
          <Card.Content>
            {this.props.data.viewer && (
              <Card.Group>
                {this.props.data.viewer.repositories.edges.map(
                  repo => (
                    <Card key={repo.node.id}>
                      <Card.Content>
                        <Card.Header>
                          <a href={repo.node.url}>{repo.node.name}</a>
                        </Card.Header>
                        <Card.Meta>
                          <span className='date'>
                            {repo.node.createdAt}
                          </span>
                        </Card.Meta>
                        <Feed>
                          Contributor : {repo.node.collaborators.edges.map(
                            contributor => (
                              <a key={contributor.node.id}>{contibutor.node.name}</a>
                            )
                          ).reduce((prev, curr) => [prev, ', ', curr])}
                        </Feed>
                        <Card.Description>
                          {repo.node.description}
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                      </Card.Content>
                    </Card>
                  )
                )}
              </Card.Group>
            )}
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

const queries = gql`
  query {
  viewer {
    repositories(first: 30) {
      edges {
        node {
          id
        	url
          nameWithOwner
          name
          url
          createdAt
          description
        	collaborators (first:20){
        	  edges {
        	    node {
                id
        	    	login
                name
        	    }
        	  }
        	}
        }
      }
    }
  }
}
`;
export default graphql(queries)(App);
