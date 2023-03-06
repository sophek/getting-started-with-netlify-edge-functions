export default async (request, context) => {
  context.log("Calling hello.js edge function");

  const foo = import.meta.env.FOOBAR;

  return new Response("Hello, World from the edge!" + foo, {
    headers: { "content-type": "text/html" },
  });
};
