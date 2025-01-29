import React, { useCallback, useState, FC } from 'react';

export type Open = {
  hide: () => void;
  show: () => void;
  toggle: () => void;
  open: boolean;
};

export const withOpen = <Props,>(WrappedComponent: FC<Props & Open>): FC<Props> => {
  return props => {
    const [open, setOpen] = useState(false);
    const show = useCallback(() => setOpen(true), []);
    const hide = useCallback(() => setOpen(false), []);
    const toggle = useCallback(() => setOpen(val => !val), []);
    return <WrappedComponent open={open} show={show} hide={hide} toggle={toggle} {...props} />;
  };
};
