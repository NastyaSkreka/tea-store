import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormContainer, Input, FormLabel, ErrorText , FieldContainer} from "../style";
import Button from '@/components/ui/Button';
import { signUpSchema } from '@/schemas/authentication.schema';

const SignUp = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        mobileNumber: '',
      }}
      validationSchema={signUpSchema} 
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
            <FieldContainer>
                <FormLabel>Retype password</FormLabel>
                <Field type="password" name="confirmPassword" as={Input} />
                <ErrorMessage name="confirmPassword" component={ErrorText}  />
            </FieldContainer>
            <FieldContainer>
                <FormLabel>Mobile number</FormLabel>
                <Field type="text" name="mobileNumber" as={Input} />
                <ErrorMessage name="mobileNumber" component={ErrorText} />
            </FieldContainer>
                <Button color="white" label="Register" position='absolute'/>
        </FormContainer>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
