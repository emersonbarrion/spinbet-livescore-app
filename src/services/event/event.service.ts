import { LIVESCORE_API_URL_PROD } from '@/services/event/event.const';

const getEventList = async () => {
    const res = await fetch(LIVESCORE_API_URL_PROD);
    if (!res.ok) {
        throw new Error('Failed to fetch users');
    }
    return res.json();
};

const service = {
    eventList: getEventList(),
};

export default service;
