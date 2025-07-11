'use client';

import React, { FC } from 'react';
import { ErrorMessageProps } from '@/components/ui/ErrorMessage/ErrorMessage.props';
import ErrorMessageStyled from '@/components/ui/ErrorMessage/ErrorMessage.styled';

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
    return (
        <ErrorMessageStyled>
            <span>&#9888;</span>
            <span>{message}</span>
        </ErrorMessageStyled>
    );
};

export default ErrorMessage;
