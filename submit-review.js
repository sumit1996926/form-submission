// lambda/submit-review.js

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    // Handle form submission logic here, e.g., save to a database.

    // If successful, you can redirect to the success page.
    return {
      statusCode: 302,
      headers: {
        Location: "/success",
      },
      body: "",
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};
