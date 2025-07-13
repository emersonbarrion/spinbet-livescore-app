import { EventCardViewmodel } from '@/components/ui/EventCard/EventCard.viewmodel';
import { FilterType } from '@/components/ui/Filter/Filter.viewmodel';
import { Status } from '@/services/event/event.model';

const getCountByStatus = (events: EventCardViewmodel[]) => {
    return events.reduce(
        (total: Record<string, number>, item: EventCardViewmodel) => {
            total[FilterType.All] = (total[FilterType.All] || 0) + 1;

            if (item.eventStatus === Status.notstarted) {
                total[FilterType.Upcoming] = (total[FilterType.Upcoming] || 0) + 1;
            }

            if (item.eventStatus === Status.inprogress) {
                total[FilterType.Live] = (total[FilterType.Live] || 0) + 1;
            }

            if (item.eventStatus === Status.finished) {
                total[FilterType.Result] = (total[FilterType.Result] || 0) + 1;
            }
            return total;
        },
        {} as Record<string, number>,
    );
};

const updateEventStatus = (eventDetails: EventCardViewmodel, selectedStatus: string) => {
    if (selectedStatus === FilterType.Result) return eventDetails.eventStatus === Status.finished;
    if (selectedStatus === FilterType.Live) return eventDetails.eventStatus === Status.inprogress;
    if (selectedStatus === FilterType.Upcoming)
        return eventDetails.eventStatus === Status.notstarted;

    return eventDetails;
};

export const EventListService = {
    getCountByStatus,
    updateEventStatus,
};
