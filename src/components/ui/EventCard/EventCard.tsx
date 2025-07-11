'use client';

import { FC } from 'react';
import EventCardStyled from '@/components/ui/EventCard/EventCard.styled';
import { EventCardProps } from '@/components/ui/EventCard/EventCard.props';
import EventStatus from '@/components/ui/EventCard/EventStatus/EventStatus';
import Period from '@/components/ui/EventCard/Period/Period';
import { dateFormatter, DateFormatType } from '@/utils/date';

const EventCard: FC<EventCardProps> = ({ event }) => {
    const {
        countryName,
        competitionName,
        eventStatus,
        score,
        homeTeam,
        period,
        awayTeam,
        timestamp,
    } = event;

    const getStatus = () => {
        if (event.eventStatus === 'PREMATCH') {
            return dateFormatter(timestamp, DateFormatType.DDMMYYYY);
        }

        return event.eventStatus;
    };

    return (
        <EventCardStyled className="event-card">
            <div className="segment">
                <div className="country-name">{countryName}</div>
                <div className="competition-name">{competitionName}</div>
            </div>
            <EventStatus status={getStatus()} />
            <div className="score">{score}</div>
            <div className="event-name">
                <div className="home-team">{homeTeam}</div>
                <Period period={period} status={eventStatus} />
                <div className="away-team">{awayTeam}</div>
            </div>
        </EventCardStyled>
    );
};

export default EventCard;
