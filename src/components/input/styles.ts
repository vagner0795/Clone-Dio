import styled from 'styled-components'

export const InputContainer = styled.div`

    width: 100%;
    max-width: 275px;
    height: 30px;
    border-bottom: 1px solid #3b3450;

    display: flex;
    align-items: center;
    margin-bottom: 30px;
`;

export const IconContainer = styled.div`

    margin-right: 10px;
`;

export const InputText = styled.input`

    background-color: transparent;
    color: #fff;
    border: 0;
    height: 30px;
    width: 100%;

`;

export const ErrorText = styled.p`

    color: #ff0000;
    font-size: 16px;
    margin: 5px 0;
    font-weight: 400;

`;
