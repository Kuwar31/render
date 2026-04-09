import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  const { admin } = await authenticate.admin(request);

  const response = await admin.graphql(`
    query {
      products(first: 5) {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `);

  const data = await response.json();

  return data;
};