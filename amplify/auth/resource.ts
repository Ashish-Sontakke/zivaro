import { defineAuth } from "@aws-amplify/backend";
import { postConfirmation } from "./post-confirmation/resource";
/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailSubject: "Verify your new account for Zivaro",
    },
  },
  // Define user groups
  groups: ["admin", "candidate"],
  // Grant permissions to the add-user-to-group function
  access: (allow) => [allow.resource(postConfirmation).to(["addUserToGroup"])],
  // Configure the post-confirmation trigger to add users to groups
  triggers: {
    postConfirmation,
  },
});
