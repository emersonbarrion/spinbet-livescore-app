import type { Metadata } from 'next';
import '../styles/globals.css';
import { ReactNode } from 'react';
import barlow from '@/lib/fonts';
import StyledComponentsRegistry from '@/app/StyledComponentsRegistry';
import ClarityInit from '@/telemetry/ClarityInit';

export const metadata: Metadata = {
    title: 'SpinBet Livescore App',
    description: 'Generated by create next app',
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${barlow.className}`}>
                <ClarityInit />
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    );
}
