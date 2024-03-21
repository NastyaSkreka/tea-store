'use client';

import React from 'react';
import { store } from '@/lib/store';
import { Provider } from 'react-redux';

export const ReduxProvider = (props: React.PropsWithChildren) => {
  return <Provider store={store}>{props.children}</Provider>;
};
