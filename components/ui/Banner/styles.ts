import styled from 'styled-components';
import Image from "next/image";

export const BannerWrapper = styled.div`
  margin: 20px 0;
  width: 100%;
  height: 415px;
  background-color: var(--primary-color);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  overflow: hidden;

`
export const BannerContainer = styled.div<{ position: string }>`
    display: flex;
    justify-content: space-between;
    align-items:center;
    flex-direction: ${(props) => (props.position === 'textFirst' ? 'row' : 'row-reverse')};

`
export const BannerText = styled.div`
    padding: 10px;
    font-size: 55px;
    color: var( --textSecondary-color);

`
export const BannerImage = styled(Image)`
  object-fit: cover;
  height: 420px;
  width: 80%;
`;

