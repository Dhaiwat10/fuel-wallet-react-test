'use client'
import { FuelProvider } from '@fuel-wallet/react';

export function Providers({ children }: {
    children: React.ReactNode;
}) {
    return (
        <FuelProvider>
            {children}
        </FuelProvider>
    );
}