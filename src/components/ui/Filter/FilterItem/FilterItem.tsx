import React, { FC } from 'react';
import FilterItemStyled from '@/components/ui/Filter/FilterItem/FilterItem.styled';
import { FilterItemProps } from '@/components/ui/Filter/FilterItem/FilterItem.props';

const FilterItem: FC<FilterItemProps> = ({ isActive, count, label, setSelected }) => {
    const handleSetSelected = () => {
        if (!isActive) {
            setSelected(label);
        }
    };
    return (
        <FilterItemStyled
            className={isActive ? `${label} active` : `${label}`}
            onClick={handleSetSelected}
        >
            <span>{label}</span>
            <div>{count}</div>
        </FilterItemStyled>
    );
};

export default FilterItem;
