import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Custom hook to clean up prompt numbers when navigating away from game pages
export const useRouteCleanup = () => {
    const location = useLocation();

    useEffect(() => {
        // Pages that should preserve prompt numbers
        const gamePages = ['/game', '/game/roll', '/game/prompt', '/game/gameover'];
        
        // Check if current path is NOT a game page
        const isGamePage = gamePages.some(gamePage => 
            location.pathname === gamePage || location.pathname.startsWith(gamePage)
        );

        // If not on a game page, clear the prompt numbers
        if (!isGamePage) {
            sessionStorage.removeItem('promptNumber');
            sessionStorage.removeItem('previousPromptNumber');
        }
    }, [location.pathname]);
};