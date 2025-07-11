import { dateFormatter, DateFormatType } from '@/utils/date';

describe('dateFormatter', () => {
    it('should format a valid timestamp to "dd-mm-yyyy" style', () => {
        const timestamp = 1470574800;
        const formatted = dateFormatter(timestamp, DateFormatType.DDMMYYYY);

        expect(formatted).toBe('AUG 7TH 13:00');
    });

    it('should handle single-digit suffixes correctly', () => {
        const timestamp = 1470495600;
        const formatted = dateFormatter(timestamp, DateFormatType.DDMMYYYY);

        expect(formatted).toBe('AUG 6TH 15:00');
    });

    it('should return empty string if format type is unsupported', () => {
        expect(dateFormatter(1720405200, 'unknown' as DateFormatType)).toBe('');
    });

    it('should return correct ordinal suffix (1ST, 2ND, 3RD)', () => {
        const suffixTests = [
            { day: 1, expected: 'ST' },
            { day: 2, expected: 'ND' },
            { day: 3, expected: 'RD' },
            { day: 4, expected: 'TH' },
        ];

        suffixTests.forEach(({ day, expected }) => {
            const date = new Date(Date.UTC(2024, 6, day, 10, 30));
            const timestamp = Math.floor(date.getTime() / 1000);
            const result = dateFormatter(timestamp, DateFormatType.DDMMYYYY);

            expect(result).toContain(`${day}${expected}`);
        });
    });

    it('should pad hour and minute with zeros', () => {
        const date = new Date(Date.UTC(2024, 6, 5, 7, 5));
        const timestamp = Math.floor(date.getTime() / 1000);
        const result = dateFormatter(timestamp, DateFormatType.DDMMYYYY);

        expect(result).toContain('07:05');
    });
});
