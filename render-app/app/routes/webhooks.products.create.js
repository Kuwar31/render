import { authenticate } from "../shopify.server";

export const action = async ({ request }) => {
  const { topic, shop } = await authenticate.webhook(request);

  const payload = await request.json();

  console.log("Webhook fired!");
  console.log(topic, shop, payload);

  return new Response("OK");
};