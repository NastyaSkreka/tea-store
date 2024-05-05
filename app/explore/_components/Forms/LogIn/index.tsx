import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  FormContainer,
  Input,
  FormLabel,
  FieldContainer,
  ErrorText,
} from '../style';
import Button from '@/components/ui/Button';
import { signInSchema } from '@/schemas/authentication.schema';
import { useActions } from '@/lib/hooks/useActions';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const { login } = useActions();
  const router = useRouter();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={signInSchema}
      onSubmit={(values) => {
        login(values);
      }}
    >
      {({}) => (
        <Form>
          <FormContainer>
            <FieldContainer>
              <FormLabel>Email</FormLabel>
              <Field type="email" name="email" as={Input} />
              <ErrorMessage name="email" component={ErrorText} />
            </FieldContainer>
            <FieldContainer>
              <FormLabel>Password</FormLabel>
              <Field type="password" name="password" as={Input} />
              <ErrorMessage name="password" component={ErrorText} />
            </FieldContainer>
            <Button
              onClick={() => router.replace('/')}
              color="white"
              label="Log in"
            />
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
