import MoneyIcon from '@/public/money-icon';
import { Text, GuaranteedIconsContainer, IconContainer, IconText} from './styles'
import TimeIcon from '@/public/time-icon';
import SecureIcon from '@/public/secure-icon';


export default function GuaranteedCost() {
    return (
        <>
        <Text>Price is subject to change based on market demand. 
        Please proceed to be guaranteed this cost for the 
        appraisal report.</Text>
        <GuaranteedIconsContainer>
            <IconContainer>
                <MoneyIcon/>
                <IconText>Money-back Guarantee</IconText>
            </IconContainer>
            <IconContainer>
                <SecureIcon/>
                <IconText>Secure Checkout</IconText>
            </IconContainer>
            <IconContainer>
                <TimeIcon/>
                <IconText>Fast Turn Around</IconText>
            </IconContainer>
        </GuaranteedIconsContainer>
     </>
      );
}