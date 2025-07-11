export enum Status {
    inprogress = 'LIVE', // Live
    notstarted = 'PREMATCH', // Upcoming
    finished = 'ENDED', // Result
    canceled = 'CANCELLED', // Cancelled
}

export type EventStatus = keyof typeof Status;

export interface EventAPIResponse {
    id: string;
    country: string;
    competition: string;
    status: {
        type: EventStatus;
    };
    homeScore: {
        current: number;
    };
    awayScore: {
        current: number;
    };
    homeTeam: {
        name: string;
    };
    awayTeam: {
        name: string;
    };
    liveStatus: string;
    timestamp: number;
}
