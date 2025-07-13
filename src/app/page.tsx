import React from 'react';
import EventList from '@/components/features/EventList/EventList';
import services from '@/services';
import { toViewModel } from '@/services/mapper/event.mapper';
import { EventCardViewmodel } from '@/components/ui/EventCard/EventCard.viewmodel';
import ErrorMessage from '@/components/ui/ErrorMessage/ErrorMessage';

const Page = async () => {
    let filteredEvents: EventCardViewmodel[] = [];

    try {
        const events = await services.event.eventList;
        filteredEvents = toViewModel(events);

        return <EventList events={filteredEvents} />;
    } catch (err: unknown) {
        console.log(err);
        return <ErrorMessage message="Error fetching Livescore API" />;
    }
};

export default Page;
