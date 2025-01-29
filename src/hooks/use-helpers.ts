import { useEffect, useRef } from 'react';

export const useIsMounted = () => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
};

export const useHasChanged = (val: any, skipUndefined?: boolean) => {
  const prevVal = usePrevious(val);
  if (prevVal === undefined && skipUndefined) return false;
  return prevVal !== val;
};

export const usePrevious = <T extends unknown>(value: T): T | undefined => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

/**
 * Usefull links:
 * https://stackoverflow.com/questions/53446020/how-to-compare-oldvalues-and-newvalues-on-react-hooks-useeffect
 **/
