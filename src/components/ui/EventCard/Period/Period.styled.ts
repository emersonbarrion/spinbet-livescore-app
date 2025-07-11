import styled, { css } from 'styled-components';
import { mixins } from '@/styles/mixin';

const PeriodStyled = styled.div<{ $status: string }>`
    ${mixins.flexCenter}
    color: #43ce5b;
    border: 2px solid #434543;

    ${({ $status }) => {
        switch ($status) {
            case 'ENDED':
                return css`
                    border-color: #43ce5b;
                `;
            default:
                return css`
                    color: white;
                    border-color: #434543;
                `;
        }
    }}

    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: relative;
    box-sizing: border-box;

    .overlay {
        position: absolute;
        top: 0;
        left: 50%;
        width: 50%;
        height: 100%;
        border-right: 2px solid #43ce5b;
        border-top: 2px solid #43ce5b;
        border-bottom: 2px solid #43ce5b;
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
        box-sizing: border-box;
        pointer-events: none;
    }

    .halftime {
        position: absolute;
        left: 26%;
    }
`;

export default PeriodStyled;
