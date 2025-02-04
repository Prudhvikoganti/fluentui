import * as React from 'react';
import { Text } from '../index'; // codesandbox-dependency: @fluentui/react-text ^9.0.0-beta

export const Weight = () => (
  <div style={{ display: 'flex', gap: 20 }}>
    <Text weight="regular">Regular weight</Text>
    <Text weight="medium">Medium weight</Text>
    <Text weight="semibold">Semibold weight</Text>
  </div>
);
