import styled from 'styled-components';

export const TotalCostContainer = styled.div`
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 290px;
`;

export const CostText = styled.div`
  margin-bottom: 10px;
`;

export const CostTotalPrice = styled.div`
  color: var(--primary-color);
`;

export const PromoCodeContainer = styled.div`
  margin: 20px 0;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const ApplyContainer = styled.div`
  display: flex;
  gap: 20px;
`;
export const ApplyInput = styled.input`
  border-radius: 5px;
  padding: 8px;
  outline: none;
  border: 1px solid var(--backgroundGrayLight-color);
`;
export const ApplyButton = styled.button`
  background-color: var(--primary-color);
  color: var(--textSecondary-color);
  width: 80px;
  height: 35px;
  border-radius: 5px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlaceOrderButton = styled.button`
  margin: 20px 0;
  background-color: var(--primary-color);
  color: var(--textSecondary-color);
  width: 100%;
  height: 45px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.div`
  font-size: 14px;
`;

export const GuaranteedIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100px;
`;

export const IconText = styled.div`
  text-align: center;
  margin-top: 10px;
`;
