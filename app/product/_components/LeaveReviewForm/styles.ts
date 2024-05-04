import styled from 'styled-components'

export const SuccessText = styled.div`
    font-size: 18px;
    color: var(--primary-color)
`

export const ButtonContainer = styled.div`
    margin: 10px 0;
    display: flex;
    justify-content: center;
`

export const ReviewForm = styled.form`
    padding: 10px 10px 0 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const ReviewTextArea = styled.textarea`
    width: 250px; 
    height: 100px; 
    border-radius: 3px;
    padding: 10px;
    border: 1px solid var(--backgroundGrayDark-color);
    resize: none;
`