
import { shopifyApp } from "@shopify/shopify-app-remix/server";
import { restResources } from "@shopify/shopify-api/rest/admin/2024-01";

const shopify = shopifyApp({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET,
  scopes: process.env.SCOPES?.split(","),
  appUrl: process.env.SHOPIFY_APP_URL,
  authPathPrefix: "/auth",
  sessionStorage: undefined, // keep default for now
  restResources,
});

export default shopify;

// ✅ THIS FIXES YOUR ERROR
export function addDocumentResponseHeaders(headers, request, context) {
  return headers;
}