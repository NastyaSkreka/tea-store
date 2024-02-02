import { FormContainer, 
        Input, 
        Button,
        FormLabel } from "../style";

const SignUp = () => {
    return (
      <FormContainer>
        <FormLabel>Email</FormLabel>
        <Input type="email"  />
        <FormLabel>Password</FormLabel>
        <Input type="password" />
        <FormLabel>Retype password</FormLabel>
        <Input type="password" />
        <FormLabel>mobile number</FormLabel>
        <Input type="number" />
        <Button>Register</Button>
      </FormContainer>
    );
  };
  
  export default SignUp;