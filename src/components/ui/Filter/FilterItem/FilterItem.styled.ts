import styled from 'styled-components';
import { mixins } from '@/styles/mixin';

const FilterItem = styled.div`
    ${mixins.flexCenter}
    flex-direction: space-between;
    font-family: 'Barlow', sans-serif;
    padding: 10px 20px;

    span {
        flex: 1;
    }

    & > div {
        width: 50px;
        text-align: center;
        background-color: black;
        color: white;
        padding: 5px 0;
    }

    &.active,
    &:hover {
        background-color: #c3c3c3;
    }
`;

export default FilterItem;
