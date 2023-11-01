/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const fetch = require("node-fetch");

exports.handler = async (event) => {
  console.log("Event received:", JSON.stringify(event, null, 2));

  const GRAPHQL_ENDPOINT = process.env.API_MIAAMPLIFY_GRAPHQLAPIENDPOINTOUTPUT;
  const GRAPHQL_API_KEY = process.env.API_MIAAMPLIFY_GRAPHQLAPIKEYOUTPUT;

  const query = /* GraphQL */ `
    mutation CREATE_USER($input: CreateUserInput!){
      createUser($input){
        username,
        email
      };
    }`;

  const variables = {
    input: {
      username: event.username,
      email: event.request.userAttributes.email,
    },
  };
  const options = {
    method: "POST",
    headers: {
      "x-api-key": GRAPHQL_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  };

  const response = {};

  try {
    const res = await fetch(GRAPHQL_ENDPOINT, options);
    response.data = await res.json();
    if (response.data.errors) response.statusCode = 400;
  } catch (error) {
    response.statusCode = 400;
    response.body = {
      errors: [
        {
          message: error.message,
          stack: error.stack,
        },
      ],
    };
  }

  return {
    ...response,
    body: JSON.stringify(response.body),
  };
};
