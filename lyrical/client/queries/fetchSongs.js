import gql from 'graphql-tag';

// language=GraphQL
export default gql`
  {
    songs {
      id
      title
    }
  }
`;
