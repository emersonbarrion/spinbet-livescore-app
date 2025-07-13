import { EventListService } from '@/components/features/EventList/EventList.service';
import { EventCardViewmodel } from '@/components/ui/EventCard/EventCard.viewmodel';
import { Status } from '@/services/event/event.model';
import { FilterType } from '@/components/ui/Filter/Filter.viewmodel';

const mockEvents: EventCardViewmodel[] = [
    { id: '1', eventStatus: Status.notstarted } as EventCardViewmodel,
    { id: '2', eventStatus: Status.inprogress } as EventCardViewmodel,
    { id: '3', eventStatus: Status.inprogress } as EventCardViewmodel,
    { id: '4', eventStatus: Status.finished } as EventCardViewmodel,
    { id: '5', eventStatus: Status.finished } as EventCardViewmodel,
];

describe('EventListService.getCountByStatus', () => {
    it('should count all statuses correctly', () => {
        const result = EventListService.getCountByStatus(mockEvents);

        expect(result[FilterType.All]).toBe(5);
        expect(result[FilterType.Upcoming]).toBe(1);
        expect(result[FilterType.Live]).toBe(2);
        expect(result[FilterType.Result]).toBe(2);
    });

    it('should return an empty record when no events are passed', () => {
        const result = EventListService.getCountByStatus([]);
        expect(result).toEqual({});
    });
});

describe('EventListService.updateEventStatus', () => {
    const event: EventCardViewmodel = {
        id: '99',
        eventStatus: Status.inprogress,
    } as EventCardViewmodel;

    it('should return true for matching Result status', () => {
        const finishedEvent = { ...event, eventStatus: Status.finished };
        expect(EventListService.updateEventStatus(finishedEvent, FilterType.Result)).toBe(true);
    });

    it('should return true for matching Live status', () => {
        expect(EventListService.updateEventStatus(event, FilterType.Live)).toBe(true);
    });

    it('should return true for matching Upcoming status', () => {
        const upcomingEvent = { ...event, eventStatus: Status.notstarted };
        expect(EventListService.updateEventStatus(upcomingEvent, FilterType.Upcoming)).toBe(true);
    });

    it('should return the original event when FilterType is All', () => {
        expect(EventListService.updateEventStatus(event, FilterType.All)).toEqual(event);
    });
});
