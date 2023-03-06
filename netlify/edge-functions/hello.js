export default async (request, context) => {
  context.log("Calling hello.js edge function");

  const { FOOBAR } = process.env;

  return new Response("Hello, World from the edge!" + FOOBAR, {
    headers: { "content-type": "text/html" },
  });
};
