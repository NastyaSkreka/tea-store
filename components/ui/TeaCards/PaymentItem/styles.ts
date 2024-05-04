import styled from 'styled-components';
import Image from "next/image";

export const PaymentTeaItemContainer = styled.div`
    margin: 10px 0;
    display: flex;
    align-items: center;
    gap: 30px;
`

export const TeaInfoContainer = styled.div`
    display: flex;
    flex-direction:column;
    gap: 10px;
`

export const TeaImage = styled(Image)`
    object-fit: cover;
`
export const TeaTitle = styled.div`
    font-size: 16px;
    font-weight: 600;
`

export const TeaText = styled.div`
`