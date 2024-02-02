import {TotalCostContainer,
        CostText,
        CostTotalPrice
} from './style'

export default function TotalCost() {
    return (
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
      );
}