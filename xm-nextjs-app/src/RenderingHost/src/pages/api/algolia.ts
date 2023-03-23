import type { NextApiRequest, NextApiResponse } from 'next';
import { GraphQLClient, gql } from 'graphql-request';
//import config from 'temp/config';
//import { GraphQLRobotsService } from '@sitecore-jss/sitecore-jss-nextjs';

const algoliaApi = async (
  _req: NextApiRequest,
  res: NextApiResponse
): Promise<NextApiResponse | void> => {
  // Ensure response is text/html
  res.setHeader('Content-Type', 'application/json');

  const algoliaResult = _req.body;

  const puslishItemId = algoliaResult?.PublisherOptions?.RootItemId;
  console.trace(`Algolia publish event ${algoliaResult}...`);

  const graphQLClient = new GraphQLClient('https://xmcloudcm.localhost/sitecore/api/graph/edge');
  graphQLClient.setHeader('sc_apikey', `317496D6-3657-4376-8EF3-22939CE4F9F3`);

  const query = gql`
  query {
    datasource: item(path: "${puslishItemId}", language: "en")   {
      id
      path
      name
    }
  }`;

  const data = await graphQLClient.request(query);

  //queryResult = `after call`;
  return res.status(200).send(data);
};

export default algoliaApi;
