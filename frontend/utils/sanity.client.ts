import { ClientConfig, createClient } from 'next-sanity';

export const clientConfig: ClientConfig = {
  projectId: '7bkq1oo4',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-06-28',
};

export const client = createClient(clientConfig);
