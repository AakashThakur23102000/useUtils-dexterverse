let isThrottleTimerActive = false;

/**
 * useThrottleFunc - A simple throttle function for API calls.
 * 
 * @param interval Time interval in milliseconds to throttle the function.
 * @param actionFunction Function to execute at throttled intervals.
 */
export function useThrottleFunc(interval: number, actionFunction: () => void) {
    if (isThrottleTimerActive) {
        return; // Skip execution if the throttle timer is active
    }

    actionFunction(); // Execute the function
    isThrottleTimerActive = true; // Set the throttle timer as active

    setTimeout(() => {
        isThrottleTimerActive = false; // Reset the throttle timer after the interval
    }, interval);
}
