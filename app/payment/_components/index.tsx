import Button from '../../../components/ui/Button';
import {
  PaymentWrapper,
  InputsContainter,
  CheckoutContainer,
  SummaryContainer,
  Headline,
  ErrorText,
  FieldContainer,
  FormLabel,
  Input,
  UpdateUserDataButton,
  RadioContainer,
  PaymentLabel,
  PaymentInput,
  EditOrderLink,
} from './styles';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useProfile } from '@/lib/hooks/useProfile';
import { ChangeEvent, useState } from 'react';
import { useCart } from '@/lib/hooks/useCart';
import image from '@/public/image/image2.png';
import Banner from '../../../components/ui/Banner';
import PaymentItem from '@/components/ui/TeaCards/PaymentItem';
import Link from 'next/link';

type PaymentMethod = 'Cash' | 'Card' | 'Online';

export default function PaymentPage() {
  const { profile } = useProfile();
  const { items, total } = useCart();
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethod>('Card');

  const handlePaymentMethodChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedPaymentMethod(event.target.value as PaymentMethod);
  };

  return (
    <>
      <PaymentWrapper>
        <CheckoutContainer>
          <Formik
            initialValues={{
              email: '',
              password: '',
              confirmPassword: '',
              mobileNumber: '',
            }}
            // validationSchema={}
            onSubmit={(data) => {
              console.log('SignUp =>', data);
            }}
          >
            {({}) => (
              <Form>
                <Headline>Contacts</Headline>

                <InputsContainter>
                  <FieldContainer>
                    <FormLabel>Email</FormLabel>
                    <Field
                      type="email"
                      name="email"
                      as={Input}
                      value={profile?.data.email}
                    />
                    <ErrorMessage name="email" component={ErrorText} />
                  </FieldContainer>

                  <FieldContainer>
                    <FormLabel>Mobile number</FormLabel>
                    <Field
                      type="string"
                      name="phone"
                      as={Input}
                      value={profile?.data.phone}
                    />
                    <ErrorMessage name="phone" component={ErrorText} />
                  </FieldContainer>
                </InputsContainter>

                <UpdateUserDataButton>Update</UpdateUserDataButton>

                <Headline>Shipping Address</Headline>
                <InputsContainter>
                  <FieldContainer>
                    <FormLabel>City</FormLabel>
                    <Field type="string" name="city" as={Input} />
                    <ErrorMessage name="city" component={ErrorText} />
                  </FieldContainer>

                  <FieldContainer>
                    <FormLabel>Street</FormLabel>
                    <Field type="string" name="street" as={Input} />
                    <ErrorMessage name="street" component={ErrorText} />
                  </FieldContainer>
                </InputsContainter>
                <InputsContainter>
                  <FieldContainer>
                    <FormLabel>Apartment</FormLabel>
                    <Field type="string" name="apartment" as={Input} />
                    <ErrorMessage name="apartment" component={ErrorText} />
                  </FieldContainer>

                  <FieldContainer>
                    <FormLabel>Delivery date</FormLabel>
                    <Field type="date" name="date" as={Input} />
                    <ErrorMessage name="date" component={ErrorText} />
                  </FieldContainer>
                </InputsContainter>

                <Headline>Payment Method</Headline>

                <RadioContainer>
                  <PaymentLabel>
                    <PaymentInput
                      type="radio"
                      name="paymentMethod"
                      value="Cash"
                      as={Input}
                      checked={selectedPaymentMethod === 'Cash'}
                      onChange={handlePaymentMethodChange}
                    />
                    Cash
                  </PaymentLabel>
                  <PaymentLabel>
                    <PaymentInput
                      type="radio"
                      name="paymentMethod"
                      value="Card"
                      as={Input}
                      checked={selectedPaymentMethod === 'Card'}
                      onChange={handlePaymentMethodChange}
                    />
                    Card
                  </PaymentLabel>
                  <PaymentLabel>
                    <PaymentInput
                      type="radio"
                      name="paymentMethod"
                      value="Online"
                      as={Input}
                      checked={selectedPaymentMethod === 'Online'}
                      onChange={handlePaymentMethodChange}
                    />
                    Online
                  </PaymentLabel>
                </RadioContainer>
                <Button color="green" label="Confirm order" />
              </Form>
            )}
          </Formik>
        </CheckoutContainer>
        <SummaryContainer>
          <Headline>Order summary</Headline>
          {items &&
            items.map((product) => (
              <PaymentItem item={product} key={product.id} />
            ))}
          <Link href="/cart">
            <EditOrderLink>Edit order</EditOrderLink>
          </Link>
          <PaymentLabel>Total - {total}$</PaymentLabel>
        </SummaryContainer>
      </PaymentWrapper>
      <Banner image={image} title="enjoy our tea" position="imageFirst" />
    </>
  );
}
