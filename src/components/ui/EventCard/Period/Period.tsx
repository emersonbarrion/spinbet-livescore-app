import React, { FC } from 'react';
import { PeriodProps } from '@/components/ui/EventCard/Period/Period.props';
import PeriodStyled from '@/components/ui/EventCard/Period/Period.styled';

const Period: FC<PeriodProps> = ({ period, status }) => {
    return (
        <PeriodStyled $status={status} className="circle">
            {period === 'HT' ? (
                <>
                    <div className="overlay"></div>
                    <div className="halftime">{period}</div>
                </>
            ) : (
                period
            )}
        </PeriodStyled>
    );
};

export default Period;
