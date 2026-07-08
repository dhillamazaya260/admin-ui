import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignUp from "../components/Fragments/FormSignUp";

const SignUpPage = () => {
  return (
    <AuthLayout
      title="Create an account"
      type="signup"
    >
      <FormSignUp />
    </AuthLayout>
  );
};

export default SignUpPage;