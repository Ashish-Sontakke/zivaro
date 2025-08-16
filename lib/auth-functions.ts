import { fetchAuthSession, signUp } from "aws-amplify/auth";
import { confirmSignUp } from "aws-amplify/auth";
import { signIn } from "aws-amplify/auth";
import { signOut } from "aws-amplify/auth";
import { getCurrentUser } from "aws-amplify/auth";
import { resetPassword, confirmResetPassword } from "aws-amplify/auth";

export const customSignUp = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const { isSignUpComplete, userId, nextStep } = await signUp({
    username: username,
    password: password,
    options: {
      userAttributes: {
        email: username,
      },
      autoSignIn: {
        authFlowType: "USER_AUTH",
      },
    },
  });

  return { isSignUpComplete, userId, nextStep };
};

export const customConfirmSignUp = async ({
  username,
  confirmationCode,
}: {
  username: string;
  confirmationCode: string;
}) => {
  const { isSignUpComplete, nextStep } = await confirmSignUp({
    username: username,
    confirmationCode: confirmationCode,
  });

  return { isSignUpComplete, nextStep };
};

export const customSignIn = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const { nextStep, isSignedIn } = await signIn({
    username: username,
    password: password,
  });

  return { nextStep, isSignedIn };
};

export const customSignOut = async () => {
  await signOut({
    global: true,
  });

  return true;
};

export const currentUser = async () => {
  const { username, userId, signInDetails } = await getCurrentUser();
  const { tokens } = await fetchAuthSession();
  const email = tokens?.idToken?.payload.email;
  const groups = tokens?.idToken?.payload["cognito:groups"] || [];

  return { username, userId, signInDetails, email, groups };
};

export const customResetPassword = async (username: string) => {
  const output = await resetPassword({ username });
  return output;
};

export const customConfirmResetPassword = async ({
  username,
  confirmationCode,
  newPassword,
}: {
  username: string;
  confirmationCode: string;
  newPassword: string;
}) => {
  await confirmResetPassword({ username, confirmationCode, newPassword });
};
