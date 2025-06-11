import { useEffect, useState } from "react";
import { persistStore } from "redux-persist";
import { store } from "@/stores";

/**
 * Define the usePersistHydrated hook
 * @returns The usePersistHydrated hook
 */
export const usePersistHydrated = () => {
  const [hydrated, setHydrated] = useState(false);

  /**
   * Use effect to persist the store
   * @returns The useEffect function
   */
  useEffect(() => {
    const persistor = persistStore(store, {}, () => {
      setHydrated(true);
    });
    return () => persistor.pause();
  }, []);

  /**
   * Return the hydrated state
   * @returns The hydrated state
   */
  return hydrated;
};
