import { useRef, useCallback, useEffect } from "react";

const debounceTracker = new Map<number, NodeJS.Timeout>();

let functionCounter = 0;

/**
 * useDebounceFunc - A hook that returns a debounced function for efficient API calls.
 *
 * @param actionFunction Function to execute after the delay.
 * @param delayTime Delay time in milliseconds.
 * @returns Debounced function that should be called inside event handlers.
 */
export function useDebounceFunc<T extends (...args: any[]) => void>(
  actionFunction: T,
  delayTime: number
): (...args: Parameters<T>) => void {
  const ref = useRef(actionFunction);
  const functionKeyRef = useRef<number>(functionCounter++);

  // Update function reference when actionFunction changes
  useEffect(() => {
    ref.current = actionFunction;
  }, [actionFunction]);

  const functionKey = functionKeyRef.current;

  return useCallback(
    (...args: Parameters<T>) => {
      if (debounceTracker.has(functionKey)) {
        clearTimeout(debounceTracker.get(functionKey)!);
      }

      const timer = setTimeout(() => {
        ref.current(...args); // Always calls the latest function
        debounceTracker.delete(functionKey); // Cleanup
      }, delayTime);

      debounceTracker.set(functionKey, timer);
    },
    [functionKey, delayTime]
  );
}
