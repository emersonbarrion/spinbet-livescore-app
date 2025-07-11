import styled from 'styled-components';

const FilterStyled = styled.div`
    font-family: 'Barlow', sans-serif;
    background-color: #fff;
    color: #000;

    &:hover {
        cursor: pointer;
    }

    & > div:first-child {
        padding: 20px;
        font-size: 1.5rem;
        border-bottom: 2px solid #c3c3c3;
    }

    div + div {
        border-bottom: 2px solid #c3c3c3;
    }
`;

export default FilterStyled;
