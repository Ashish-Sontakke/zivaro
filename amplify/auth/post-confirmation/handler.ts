import type { PostConfirmationTriggerHandler } from "aws-lambda";
import {
  CognitoIdentityProviderClient,
  AdminAddUserToGroupCommand,
} from "@aws-sdk/client-cognito-identity-provider";

// Predefined list of admin emails
const ADMIN_EMAILS = [
  "admin@zivaro.ai",
  "support@zivaro.ai",
  // Add more admin emails as needed
];

const client = new CognitoIdentityProviderClient();

export const handler: PostConfirmationTriggerHandler = async (event) => {
  try {
    console.log("Post confirmation event:", JSON.stringify(event, null, 2));

    // Extract user email from attributes
    const userEmail = event.request.userAttributes.email;
    let groupName = "candidate"; // Default group

    // Determine which group the user should be added to
    if (ADMIN_EMAILS.includes(userEmail)) {
      groupName = "admin";
    }

    // Add user to the appropriate group
    const command = new AdminAddUserToGroupCommand({
      GroupName: groupName,
      Username: event.userName,
      UserPoolId: event.userPoolId,
    });

    const response = await client.send(command);
    console.log(
      `User ${userEmail} added to ${groupName} group. RequestId: ${response.$metadata.requestId}`
    );

    return event;
  } catch (error) {
    console.error("Error in post confirmation handler:", error);
    // Return the event to continue the flow even if there's an error
    // This prevents blocking user sign-up if group assignment fails
    return event;
  }
};
