import styled from 'styled-components';
import { mixins } from '@/styles/mixin';

const EventCardStyled = styled.div`
    ${mixins.flexCenter}
    background-color: #3d3d3d;
    color: #fff;
    font-family: 'Barlow', sans-serif;
    padding: 20px;
    flex-direction: column;
    flex: 0 0 100%;
    height: 285px;

    .segment {
        ${mixins.flexCenter}
        flex-direction: column;
        gap: 10px;
    }

    .country-name {
        font-size: 0.8rem;
        color: #a1a1a1;
        letter-spacing: 2px;
    }

    .competition-name {
        font-size: 1.2rem;
    }

    .home-team {
        font-size: 1rem;
        text-align: right;
    }

    .away-team {
        font-size: 1rem;
        text-align: left;
    }

    .score {
        margin: 20px 0;
        font-size: 3.2rem;
        min-height: 60px;
    }

    .event-name {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        gap: 20px;
    }

    @media (min-width: 641px) {
        flex: 0 0 calc((100% - 1 * 1px) / 2);
    }

    @media (min-width: 1025px) {
        flex: 0 0 calc((100% - 2 * 1px) / 3);
    }

    @media (min-width: 1537px) {
        flex: 0 0 calc((100% - 3 * 1px) / 4);
    }
`;

export default EventCardStyled;
