import { useMemo } from 'react';
import { EventCardViewmodel } from '@/components/ui/EventCard/EventCard.viewmodel';
import { EventListService } from '@/components/containers/EventList/EventList.service';

const useCountByStatus = (events: EventCardViewmodel[]) => {
    return useMemo(() => EventListService.getCountByStatus(events), [events]);
};

export default useCountByStatus;
