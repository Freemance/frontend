import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://freemance-backend2.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

export default async (req: any, res: any) => {
  const search = req.body;
  try {
    const { data } = await client.query({
      query: gql`
        query filterUser {
          ProfileFilter(orderBy: { field: {id: "${search}"}, direction: asc }, query: "") {
            edges {
              node {
                slykUser
                id
              }
            }
            totalCount
          }
        }
      `,
    });
    res
      .status(200)
      .json({ freelancers: data.ProfileFilter.edges, error: null });
  } catch (error) {
    if (error.message === '404: Not Found') {
      res.status(404).json({ freelancers: null, error: 'No Freelancer Found' });
    } else {
      res.status(500).json({
        freelancers: null,
        error: 'Internal Error, Please try again ',
      });
    }
  }
};
