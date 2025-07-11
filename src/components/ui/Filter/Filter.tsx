import React, { FC } from 'react';
import FilterItem from '@/components/ui/Filter/FilterItem/FilterItem';
import FilterStyled from '@/components/ui/Filter/Filter.styled';
import { FilterProps } from '@/components/ui/Filter/Filter.props';
import { FilterType } from '@/components/ui/Filter/Filter.viewmodel';

const Filter: FC<FilterProps> = ({ selectedStatus, handleSelected, countByStatus }) => {
    return (
        <FilterStyled>
            <div>Filters</div>
            {Object.values(FilterType).map((f: string) => {
                return (
                    <FilterItem
                        key={f}
                        label={f}
                        isActive={selectedStatus === f}
                        count={countByStatus[f]}
                        setSelected={handleSelected}
                    />
                );
            })}
        </FilterStyled>
    );
};

export default Filter;
