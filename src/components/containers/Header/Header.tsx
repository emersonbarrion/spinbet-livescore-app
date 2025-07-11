'use client';

import React, { FC, ReactNode, useState } from 'react';
import HeaderStyled from '@/components/containers/Header/Header.styled';

const Header: FC<{ children?: ReactNode }> = ({ children }) => {
    const [showFilter, setShowFilter] = useState(false);

    const handleShowFilter = () => {
        setShowFilter(!showFilter);
    };

    return (
        <HeaderStyled>
            <div className="menu">
                <button onClick={handleShowFilter}>&#10729;</button>
            </div>
            <div className="filter-menu">{showFilter && children}</div>
        </HeaderStyled>
    );
};

export default Header;
