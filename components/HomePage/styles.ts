import styled from 'styled-components';

export const TeaShopSection = styled.section`
  margin-top: 50px;
`;
export const Title = styled.div`
  max-width: 250px;
  font-size: 25px;
  line-height: 30px;
  font-weight: 600;
  color: var(--primary-color);
`;

export const SearchInput = styled.input`
  margin-top: 10px;
  width: 90%;
  border-radius: 10px;
  background-color: var(--backgroundGrayLight-color);
  padding: 10px;
  outline: none;
`;

export const FeaturedTeaSection = styled.section`
  margin-top: 10px;
`;

export const FeaturedTeaTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: var(--primary-color);
`;

export const TeaShopListContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-right: -4px;
  margin-left: -4px;
`;