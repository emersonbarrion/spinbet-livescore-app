import styled, { css } from 'styled-components';

const EventStatusStyled = styled.div<{ $status: string }>`
    font-size: 0.8rem;
    margin: 10px 0;
    letter-spacing: 2px;

    ${({ $status }) => {
        switch ($status) {
            case 'ENDED':
                return css`
                    color: #43ce5b;
                `;
            case 'LIVE':
                return css`
                    color: #9c912d;
                `;
            case 'CANCELLED':
                return css`
                    color: #ca6875;
                `;
            default:
                return css`
                    color: white;
                `;
        }
    }}
`;

export default EventStatusStyled;
