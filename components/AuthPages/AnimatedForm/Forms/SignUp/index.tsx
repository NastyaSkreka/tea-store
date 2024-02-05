import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormContainer, Input, FormLabel, ErrorText , FieldContainer} from "../style";
import Button from '@/components/ui/Button';

const SignUp = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        mobileNumber: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Confirm Password is required'),
        mobileNumber: Yup.string().matches(/^[0-9]+$/, 'Must be only digits').required('Mobile Number is required'),
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
