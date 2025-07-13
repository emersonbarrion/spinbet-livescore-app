import { EventCardViewmodel } from '@/components/ui/EventCard/EventCard.viewmodel';
import { useCallback, useMemo } from 'react';
import { EventListService } from '@/components/features/EventList/EventList.service';
import { FilterType } from '@/components/ui/Filter/Filter.viewmodel';

const useFilteredEvents = (events: EventCardViewmodel[], selectedStatus: string) => {
    const filterByStatus = useCallback(
        (e: EventCardViewmodel) => EventListService.updateEventStatus(e, selectedStatus),
        [selectedStatus],
    );

    return useMemo(
        () => (selectedStatus === FilterType.All ? events : events.filter(filterByStatus)),
        [events, filterByStatus, selectedStatus],
    );
};

export default useFilteredEvents;
