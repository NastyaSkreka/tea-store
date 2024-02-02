import GoogleIcon from '@/public/google-icon';
import {FormContainer,
        Input, 
        Button,
        ContinueContainer,
        Line, 
        ContinueText, 
        SocialContainer,
        FormLabel,
        FormLink} from '../style'
import FacebookIcon from '@/public/facebook-icon';
import InstagramIcon from '@/public/instagram-icon';


const LoginForm = () => {
    return (
      <FormContainer>
        <FormLabel>Email</FormLabel>
        <Input type="email"  />
        <FormLabel>Password</FormLabel>
        <Input type="password" />
        <FormLink>forgot password</FormLink>
        <Button>Log in</Button>
        <ContinueContainer>
            <Line />
            <ContinueText>Or continue with</ContinueText>
            <Line />
        </ContinueContainer>
        <SocialContainer>
            <GoogleIcon/>
            <FacebookIcon/>
            <InstagramIcon/>
        </SocialContainer>
      </FormContainer>
    );
  };
  
  export default LoginForm;