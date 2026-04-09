//@ts-nocheck
import { shopifyApp } from "@shopify/shopify-app-react-router/server";

export const shopify = shopifyApp({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET,
  scopes: process.env.SCOPES?.split(","),
  appUrl: process.env.SHOPIFY_APP_URL,
  authPathPrefix: "/auth",

  webhooks: {
    PRODUCTS_CREATE: {
      deliveryMethod: "http",
      callbackUrl: "/webhooks/products/create",
    },
  },

  hooks: {
    afterAuth: async ({ session }) => {
      await shopify.registerWebhooks({ session });
    },
  },
});