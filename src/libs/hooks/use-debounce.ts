import { useEffect, useRef } from 'react';

type Cb = () => void;
type Deps = [number | undefined, ...any[]];

export const useDebounce = (cb: Cb, deps: Deps) => {
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const depsRef = useRef<string>();

  useEffect(() => {
    if (depsRef.current === JSON.stringify(deps)) return;
    timerRef.current && clearTimeout(timerRef.current);
    timerRef.current = setTimeout(cb, deps[0] || 1000);
    depsRef.current = JSON.stringify(deps);
  }, [cb, deps]);
};
