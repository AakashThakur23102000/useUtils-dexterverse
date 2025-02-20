import { useRef, useCallback } from "react";

/**
 * useThrottleFunc - A hook that returns a throttled function.
 * 
 * @param actionFunction Function to execute at throttled intervals.
 * @param interval Time interval in milliseconds.
 * @returns A throttled function.
 */
export function useThrottleFunc<T extends (...args: any[]) => void>(
  actionFunction: T,
  interval: number
) {
  const isThrottleActive = useRef(false);

  return useCallback(
    (...args: Parameters<T>) => {
      if (isThrottleActive.current) {
        return; // Skip execution if throttle is active
      }

      actionFunction(...args); // Execute function
      isThrottleActive.current = true; // Set throttle active

      setTimeout(() => {
        isThrottleActive.current = false; // Reset throttle after interval
      }, interval);
    },
    [actionFunction, interval]
  );
}
