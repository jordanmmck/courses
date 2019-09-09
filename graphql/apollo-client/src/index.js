import ApolloBoost, { gql } from 'apollo-boost';

const client = new ApolloBoost({
  uri: 'http://localhost:4000',
});

const getUsers = gql`
  query {
    hello
  }
`;

client
  .query({
    query: getUsers,
  })
  .then(res => {
    console.info(res.data);
  });
