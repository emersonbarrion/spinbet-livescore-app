'use client';

import clarity from '@microsoft/clarity';
import { useEffect } from 'react';

export default function ClarityInit() {
    useEffect(() => {
        clarity.init('sd1g19kt3q');
    }, []);
    return null;
}
