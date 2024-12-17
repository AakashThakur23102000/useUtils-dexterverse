let useDebounceFuncTimer: ReturnType<typeof setTimeout>;

/**
 * useDebounceFunc - A simple inline-friendly debounce function for API calls.
 * 
 * @param delayTime Delay time in milliseconds.
 * @param actionFunction Function to execute after the delay.
 */
export function useDebounceFunc(delayTime: number, actionFunction: () => void) {
    clearTimeout(useDebounceFuncTimer); // Clears the previous timer
    useDebounceFuncTimer = setTimeout(() => {
        actionFunction();
    }, delayTime);
}
