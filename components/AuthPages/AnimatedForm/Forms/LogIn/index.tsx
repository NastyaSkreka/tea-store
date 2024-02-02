import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import GoogleIcon from '@/public/google-icon';
import {FormContainer,
        Input, 
        Button,
        ContinueContainer,
        Line, 
        ContinueText, 
        SocialContainer,
        FormLabel,
        FormLink,
        FieldContainer, 
        ErrorText} from '../style'
import FacebookIcon from '@/public/facebook-icon';
import InstagramIcon from '@/public/instagram-icon';


const LoginForm = () => {
    
    return (
        <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Invalid email').required('Email is required'),
          password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({}) => (
        <Form>
            <FormContainer>
                <FieldContainer>
                    <FormLabel>Email</FormLabel>
                    <Field type="email" name="email" as={Input} />
                    <ErrorMessage name="email" component={ErrorText}  />
                </FieldContainer>
                <FieldContainer>
                    <FormLabel>Password</FormLabel>
                    <Field type="password" name="password" as={Input} />
                    <ErrorMessage name="password" component={ErrorText}  />
                </FieldContainer>
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
        </Form>
         )}
    </Formik>
    );
  };
  
  export default LoginForm;