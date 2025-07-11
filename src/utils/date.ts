export enum DateFormatType {
    DDMMYYYY = 'dd-mm-yyyy',
}
export const dateFormatter = (timestamp: number, type: DateFormatType): string => {
    if (type === DateFormatType.DDMMYYYY) {
        const date = new Date(timestamp * 1000);

        const wordMonthList = [
            'JAN',
            'FEB',
            'MAR',
            'APR',
            'MAY',
            'JUN',
            'JUL',
            'AUG',
            'SEP',
            'OCT',
            'NOV',
            'DEC',
        ];
        const wordMonth = wordMonthList[date.getMonth()];

        const day = date.getUTCDate();
        const hour = date.getUTCHours().toString().padStart(2, '0');
        const minute = date.getUTCMinutes().toString().padStart(2, '0');

        const getDaySuffix = (d: number) => {
            if (d >= 11 && d <= 13) return 'TH';
            const lastDigit = d % 10;
            return { 1: 'ST', 2: 'ND', 3: 'RD' }[lastDigit] || 'TH';
        };

        const wordDay = getDaySuffix(day);

        return `${wordMonth} ${day}${wordDay} ${hour}:${minute}`;
    }

    return '';
};
