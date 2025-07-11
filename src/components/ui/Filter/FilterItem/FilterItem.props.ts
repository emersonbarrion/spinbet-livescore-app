export interface FilterItemProps {
    isActive: boolean;
    count: number;
    label: string;
    setSelected: (id: string) => void;
}
