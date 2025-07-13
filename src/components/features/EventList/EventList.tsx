'use client';

import React, { FC, useState } from 'react';

import EventCard from '@/components/ui/EventCard/EventCard';
import { EventListProps } from '@/components/features/EventList/EventList.props';
import EventListStyled from '@/components/features/EventList/EventList.styled';
import { EventCardViewmodel } from '@/components/ui/EventCard/EventCard.viewmodel';
import { FilterType } from '@/components/ui/Filter/Filter.viewmodel';
import useCountByStatus from '@/components/features/EventList/useCountByStatus';
import useFilteredEvents from '@/components/features/EventList/useFilteredEvents';
import Header from '@/components/ui/Header/Header';
import Filter from '@/components/ui/Filter/Filter';

const EventList: FC<EventListProps> = ({ events }) => {
    const [selectedStatus, setSelectedStatus] = useState<string>(FilterType.All);

    const filteredEvents = useFilteredEvents(events, selectedStatus);
    const countByStatus = useCountByStatus(events);

    const handleFilter = (type: string) => {
        setSelectedStatus(type);
    };

    return (
        <>
            <Header>
                <Filter
                    selectedStatus={selectedStatus}
                    handleSelected={handleFilter}
                    countByStatus={countByStatus}
                />
            </Header>
            <EventListStyled className="event-list">
                {filteredEvents.map((event: EventCardViewmodel) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </EventListStyled>
        </>
    );
};

export default EventList;
