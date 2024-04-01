'use client';

import React from 'react';
import { persistor} from '@/lib/store';
import { PersistGate } from 'redux-persist/integration/react';

export const PersistProvider = (props: React.PropsWithChildren) => {
  return <PersistGate  loading={null} persistor={persistor}>{props.children}</PersistGate>;
};