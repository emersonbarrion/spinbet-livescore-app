import { periodFormatter, scoreFormatter } from '@/services/event/event.utils';

describe('scoreFormatter', () => {
    it('should format valid scores correctly', () => {
        expect(scoreFormatter(2, 1)).toBe('2 - 1');
        expect(scoreFormatter(0, 0)).toBe('0 - 0');
    });

    it('should return empty string if home is undefined', () => {
        expect(scoreFormatter(undefined, 1)).toBe('');
    });

    it('should return empty string if away is undefined', () => {
        expect(scoreFormatter(1, undefined)).toBe('');
    });

    it('should return empty string if both scores are undefined', () => {
        expect(scoreFormatter(undefined, undefined)).toBe('');
    });
});

describe('periodFormatter', () => {
    it('should return the period if it is valid', () => {
        expect(periodFormatter('1st Half')).toBe('1st Half');
        expect(periodFormatter('Extra Time')).toBe('Extra Time');
    });

    it('should return empty string for empty period', () => {
        expect(periodFormatter('')).toBe('');
    });

    it('should return empty string for "-"', () => {
        expect(periodFormatter('-')).toBe('');
    });

    it('should return empty string for "Canceled"', () => {
        expect(periodFormatter('Canceled')).toBe('');
    });

    it('should return empty string for null or undefined', () => {
        expect(periodFormatter(undefined)).toBe('');
        expect(periodFormatter(null)).toBe('');
    });
});
