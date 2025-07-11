import { FilterType } from '@/components/ui/Filter/Filter.viewmodel';

export interface FilterProps {
    selectedStatus: string;
    countByStatus: {
        [FilterType.All]: number;
        [FilterType.Upcoming]: number;
        [FilterType.Live]: number;
        [FilterType.Result]: number;
    };
    handleSelected: (id: string) => void;
}
