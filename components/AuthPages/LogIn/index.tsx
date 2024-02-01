import GoogleIcon from '@/public/google-icon';
import {FormContainer,Input, LogInButton,Container,Line, Text, SocialContainer } from './style'
import FacebookIcon from '@/public/facebook-icon';
import InstagramIcon from '@/public/instagram-icon';


const LoginForm = () => {
    return (
      <FormContainer>
        <div>Email</div>
        <Input type="email"  />
        <div>Password</div>
        <Input type="password" />
        <div>forgot password</div>
        <LogInButton>Log in</LogInButton>
        <Container>
            <Line />
            <Text>Or continue with</Text>
            <Line />
        </Container>
        <SocialContainer>
            <GoogleIcon/>
            <FacebookIcon/>
            <InstagramIcon/>
        </SocialContainer>
      </FormContainer>
    );
  };
  
  export default LoginForm;