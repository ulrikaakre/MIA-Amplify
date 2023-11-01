/* Amplify Params - DO NOT EDIT
	API_MIAAMPLIFY_GRAPHQLAPIENDPOINTOUTPUT
	API_MIAAMPLIFY_GRAPHQLAPIIDOUTPUT
	API_MIAAMPLIFY_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const fetch = require("node-fetch");

// API_MIAAMPLIFY_GRAPHQLAPIENDPOINTOUTPUT;
// API_MIAAMPLIFY_GRAPHQLAPIIDOUTPUT;
// API_MIAAMPLIFY_GRAPHQLAPIKEYOUTPUT;

exports.handler = async (event) => {
  console.log("-- Event received:", JSON.stringify(event, null, 2));

  const GRAPHQL_ENDPOINT = process.env.API_MIAAMPLIFY_GRAPHQLAPIENDPOINTOUTPUT;
  const GRAPHQL_API_KEY = process.env.API_MIAAMPLIFY_GRAPHQLAPIKEYOUTPUT;

  const query = /* GraphQL */ `
    mutation CREATE_USER($input: CreateUserInput!){
      createUser($input){
        username,
        email
      };
    }`;

  // Check if the event has the expected structure
  if (
    !event.Records ||
    event.Records.length === 0 ||
    !event.Records[0].dynamodb ||
    !event.Records[0].dynamodb.NewImage
  ) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid event structure." }),
    };
  }

  const newImage = event.Records[0].dynamodb.NewImage;
  const username = newImage.username ? newImage.username.S : null;
  const email = newImage.email ? newImage.email.S : null;

  if (!username || !email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Username or email not found in event." }),
    };
  }

  const variables = {
    input: {
      username: username,
      email: email,
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
