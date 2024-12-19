'use client';

import { useEffect, useState } from 'react';

export default function DisableActions() {
    const [isDevToolsOpen, setIsDevToolsOpen] = useState(false);
    const threshold = 160;

    const isDevToolsOpened = () => {
        return (
            window.outerWidth - window.innerWidth > threshold || 
            window.outerHeight - window.innerHeight > threshold
        );
    };

    useEffect(() => {
        const checkDevToolsOpen = () => {
            const devToolsOpened = isDevToolsOpened();

            if (devToolsOpened !== isDevToolsOpen) {
                setIsDevToolsOpen(devToolsOpened);
                if (devToolsOpened) {

                }
            }
        };

        const handleKeyDown = (event) => {
            const blockedKeys = [
                'F12', 'I', 'C', 'U', 'J', 'S', 'P', 'R', 'T', 'F5',
                'f12', 'i', 'c', 'u', 'j', 's', 'p', 'r', 't', 'f5'
            ];
            const key = event.key;

            if (blockedKeys.includes(key) || 
                (event.ctrlKey && ['I', 'C', 'U', 'J', 'S', 'P', 'R', 'T'].includes(key))) {
                event.preventDefault();
            }
        };

        const handleContextMenu = (event) => {
            event.preventDefault(); 
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('contextmenu', handleContextMenu);
        const interval = setInterval(checkDevToolsOpen, 1000);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('contextmenu', handleContextMenu);
            clearInterval(interval);
        };
    }, [isDevToolsOpen]);

    return null;
}
