import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormContainer, Input, FormLabel, ErrorText , FieldContainer} from "../style";
import Button from '@/components/ui/Button';
import { signUpSchema } from '@/schemas/authentication.schema';
import { useActions } from '@/lib/hooks/useActions';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/hooks/useAuth';

const SignUp = () => {
    const {register} = useActions();
    const router = useRouter();


  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        mobileNumber: '',
      }}
      validationSchema={signUpSchema} 
      onSubmit={(data) => {
        register(data);
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
                <FormLabel>Mobile number</FormLabel>
                <Field type="string" name="phone" as={Input} />
                <ErrorMessage name="phone" component={ErrorText} />
            </FieldContainer>
          
                <Button
                    onClick={() => router.replace('/')} 
                    color="white" 
                    label="Register"
                />
        </FormContainer>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
