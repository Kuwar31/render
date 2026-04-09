// app/routes/check.js

import { redirect } from "@remix-run/node";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  const { admin } = await authenticate.admin(request);

  const res = await admin.graphql(`
    query { shop { name } }
  `);

  const data = await res.json();

  if (data?.data?.shop?.name) {
    return redirect("/app/success");
  }

  return redirect("/app/error");
};