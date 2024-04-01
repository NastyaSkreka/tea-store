import PaymentNavigate from '@/components/PaymentPage/PaymentNavigate';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { FaRegClock } from 'react-icons/fa';
import { RiSecurePaymentFill } from 'react-icons/ri';
import PageLayout from '@/components/ui/pageLayout';
import {
  TotalCostContainer,
  CostText,
  CostTotalPrice,
  ApplyButton,
  ApplyInput,
  ApplyContainer,
  Title,
  PlaceOrderButton,
  PromoCodeContainer,
  Text,
  GuaranteedIconsContainer,
  IconContainer,
  IconText,
} from './style';
import { usePathname } from 'next/navigation';

export default function TotalPricePage() {
  const pathname = usePathname().replace('/', ' ');

  return (
    <PageLayout headerVariant="with-arr-path" path={pathname}>
      <PaymentNavigate />
      <TotalCostContainer>
        <div>
          <CostText>Product Report</CostText>
          <CostText>Tax</CostText>
          <CostText>Total Cost</CostText>
        </div>
        <div>
          <CostText>60.77</CostText>
          <CostText>18.84</CostText>
          <CostTotalPrice>Rs. 78.61</CostTotalPrice>
        </div>
      </TotalCostContainer>
      <PromoCodeContainer>
        <Title>Promo Code</Title>
        <ApplyContainer>
          <ApplyInput />
          <ApplyButton>Apply</ApplyButton>
        </ApplyContainer>
        <PlaceOrderButton>Place Order</PlaceOrderButton>
      </PromoCodeContainer>
      <Text>
        Price is subject to change based on market demand. Please proceed to be
        guaranteed this cost for the appraisal report.
      </Text>
      <GuaranteedIconsContainer>
        <IconContainer>
          <MdOutlineAttachMoney />
          <IconText>Money-back Guarantee</IconText>
        </IconContainer>
        <IconContainer>
          <RiSecurePaymentFill />
          <IconText>Secure Checkout</IconText>
        </IconContainer>
        <IconContainer>
          <FaRegClock />
          <IconText>Fast Turn Around</IconText>
        </IconContainer>
      </GuaranteedIconsContainer>
    </PageLayout>
  );
}
