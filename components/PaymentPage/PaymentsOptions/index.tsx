import { useState } from 'react';
import {CheckboxContainer, StyledCheckbox, Title} from './styles';


export default function PaymentOptions() {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const options = [
        { id: 'option1', label: 'State Bank Of India Net Banking', suggested: true },
        { id: 'option2', label: 'UPI' },
        { id: 'option3', label: 'Wallets' },
        { id: 'option4', label: 'Credit/Debit/ATM Card' },
        { id: 'option5', label: 'Net Banking' }
    ];

    const handleCheckboxChange = (option: string) => {
        if (selectedOptions.includes(option)) {
          setSelectedOptions(selectedOptions.filter((item) => item !== option)); 
        } else {
          setSelectedOptions([...selectedOptions, option]);
        }
    };

    return (
        <>
            {options.some(option => option.suggested) && <Title>Suggested for you</Title>}
            {options.map(option => (
                option.suggested &&
                <CheckboxContainer key={option.id}>
                    <StyledCheckbox
                        type="checkbox"
                        id={option.id}
                        checked={selectedOptions.includes(option.id)} 
                        onChange={() => handleCheckboxChange(option.id)}
                    />
                    <label htmlFor={option.id}>{option.label}</label>
                </CheckboxContainer>
            ))}

            <Title>All Other Options</Title>
            {options.map(option => (
                !option.suggested &&
                <CheckboxContainer key={option.id}>
                    <StyledCheckbox
                        type="checkbox"
                        id={option.id}
                        checked={selectedOptions.includes(option.id)} 
                        onChange={() => handleCheckboxChange(option.id)}
                    />
                    <label htmlFor={option.id}>{option.label}</label>
                </CheckboxContainer>
            ))}
        </>
    );
}

    

