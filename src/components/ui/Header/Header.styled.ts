import styled from 'styled-components';

const HeaderStyled = styled.div`
    position: fixed;
    width: 100vw;
    z-index: 1;

    .menu {
        display: flex;
        justify-content: flex-end;
        background-color: #313131;
        padding-right: 10px;
    }

    .filter-menu {
        max-width: 500px;
        margin-left: auto;
    }

    button {
        padding: 5px 10px;
        background-color: #595959;
        color: #fff;
        margin: 8px;
        border-radius: 5px;
        border: 1px solid gray;
    }
`;

export default HeaderStyled;
