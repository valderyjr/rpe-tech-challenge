"use client";

import { RefObject, useEffect, useRef } from "react";

export function useOutsideClick(
  ref: RefObject<HTMLElement | null>,
  callback: (event: MouseEvent | TouchEvent) => void
) {
  const handlerRef = useRef(callback);

  /**
   * Update callback if it changes
   */
  useEffect(() => {
    handlerRef.current = callback;
  });

  /**
   * Add and remove event listeners
   */
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (ref && ref.current) {
        const target = event.target as Element;
        if (target.shadowRoot) {
          if (!target.shadowRoot.contains(ref.current)) {
            handlerRef.current(event);
          }
        } else {
          if (!ref.current.contains(target)) {
            handlerRef.current(event);
          }
        }
      }
    };

    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("click", listener);
    };
  });
}
