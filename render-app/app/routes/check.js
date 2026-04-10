export async function loader() {
  return new Response(
    JSON.stringify({ message: "Webhook check working" }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}