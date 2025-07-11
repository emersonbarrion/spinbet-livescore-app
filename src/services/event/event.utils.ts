export const generateEvents = (count: number) => {
    const eventMap: Record<number, string> = {
        0: '',
        1: 'PREMATCH',
        2: 'LIVE',
        3: 'ENDED',
        4: 'CANCELLED',
    };

    const periodMap: Record<number, string> = {
        0: '',
        1: "32'",
        2: 'HT',
        3: 'FT',
    };

    const events = [];
    for (let i = 1; i <= count; i++) {
        const eventStatus = eventMap[Math.floor(Math.random() * 4)];
        const score = `${Math.floor(Math.random() * 15)} - ${Math.floor(Math.random() * 15)}`;
        const period = periodMap[Math.floor(Math.random() * 4)];

        events.push({
            id: String(i),
            countryName: 'RUSSIA',
            competitionName: 'Football National League',
            eventStatus,
            score,
            homeTeam: 'FK Tyumen',
            awayTeam: 'Lunch-Energiya',
            period,
            timestamp: 1470484800,
        });
    }
    return events;
};

export const scoreFormatter = (home: number | undefined, away: number | undefined): string => {
    if (home === undefined || away === undefined) {
        return '';
    }

    return `${home} - ${away}`;
};

export const periodFormatter = (period: string | undefined | null): string => {
    if (!period || period === '-' || period === 'Canceled') {
        return '';
    }

    return period;
};
