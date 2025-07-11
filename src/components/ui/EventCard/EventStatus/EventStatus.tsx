import React, { FC } from 'react';
import { EventStatusProps } from '@/components/ui/EventCard/EventStatus/EventStatus.props';
import EventStatusStyled from '@/components/ui/EventCard/EventStatus/EventStatus.styled';

const EventStatus: FC<EventStatusProps> = ({ status }) => {
    return <EventStatusStyled $status={status}>{status}</EventStatusStyled>;
};

export default EventStatus;
