import styled from 'styled-components';

export const FieldContainer = styled.div`
  margin: 10px 0;
  width: 240px;
`;

export const Input = styled.input`
  border-bottom: 1px solid #000;
  margin-bottom: 2px;
  padding: 5px;
  outline: none;
  width: 100%;
`;

export const ErrorText = styled.p`
  color: var(--error-color);
  font-size: 14px;
  margin: 0;
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 30px;
`;

export const FormLabel = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

export const PaymentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CheckoutContainer = styled.div``;


export const SummaryContainer = styled.div`
    margin-top: 15px;
    padding: 20px;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
    border-radius: 5px;

`;

export const InputsContainter = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Headline = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: var(--primary-color);
  margin: 20px 0;
`;

export const UpdateUserDataButton = styled.div`
    border-radius: 5px;
    width: 70px;
    height: 20px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: var(--textSecondary-color);
    background-color: var(--backgroundGrayDark-color);
    cursor: pointer;
}
`;

export const RadioContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const PaymentLabel = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const PaymentInput = styled.input``;


export const EditOrderLink = styled.a`
    display: inline-block;
    text-decoration: underline;
    color: var(--primary-color);
    margin-bottom: 15px;
`;
