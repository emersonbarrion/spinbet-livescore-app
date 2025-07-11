'use client';

import styled from 'styled-components';
import { mixins } from '@/styles/mixin';

const ErrorMessageStyled = styled.div`
    ${mixins.flexCenter}
    padding: 15px 20px;
    margin: 20px auto;
    max-width: 400px;
    background-color: #ffe0e0;
    border: 1px solid #ff4d4d;
    border-radius: 8px;
    color: #a94442;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

    span:first-child {
        font-size: 20px;
        margin-right: 10px;
    }

    span:last-child {
        font-size: 16px;
        font-weight: 500;
    }
`;

export default ErrorMessageStyled;
