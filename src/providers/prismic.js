import * as prismic from '@prismicio/client';
import { secretKey } from '../secretKey';

export const repositoryName = 'routing-maciej-necka';
const endpoint = prismic.getRepositoryEndpoint(repositoryName);

export const client = prismic.createClient(endpoint, {
  accessToken: secretKey,

  routes: [
    {
      type: 'header',
      path: '/',
    },
  ],
});
