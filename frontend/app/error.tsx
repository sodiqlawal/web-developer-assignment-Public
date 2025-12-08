'use client';

import Button from '@/components/ui/Button';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="p-4 flex flex-col justify-center items-center">
            <h2 className="font-semibold text-[32px] text-danger-500">Something went wrong!</h2>
            <Button
                onClick={() => reset()}
                className="mt-4"
                title='Try again'
                isOutlined
            />
        </div>
    );
}
