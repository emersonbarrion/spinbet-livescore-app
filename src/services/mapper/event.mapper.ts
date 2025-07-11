import { EventAPIResponse, Status } from '@/services/event/event.model';
import { EventCardViewmodel } from '@/components/ui/EventCard/EventCard.viewmodel';
import { periodFormatter, scoreFormatter } from '@/services/event/event.utils';

export const toViewModel = (events: EventAPIResponse[]): EventCardViewmodel[] => {
    return events.map((event: EventAPIResponse) => ({
        id: event.id,
        countryName: event.country,
        competitionName: event.competition,
        eventStatus: Status[event.status.type],
        score: scoreFormatter(event.homeScore.current, event.awayScore.current),
        homeTeam: event.homeTeam.name,
        awayTeam: event.awayTeam.name,
        period: periodFormatter(event.liveStatus),
        timestamp: event.timestamp,
    }));
};
