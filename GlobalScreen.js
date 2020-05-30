import React from 'react';
import { StyleSheet } from 'react-native';

import useGlobalInfo from './useGlobalInfo';
import Screen from './Screen';
import DynamicContent from './DynamicContent';
import Card from './Card';

const GlobalScreen = () => {
  const {
    fetchGlobalInfo,
    cancel,
    isLoading,
    globalInfo,
    error,
  } = useGlobalInfo();

  const hasContent = Object.keys(globalInfo).length > 0;

  return (
    <Screen
      style={s.root}
      onEnter={fetchGlobalInfo}
      onLeave={cancel}
    >
      <DynamicContent
        isLoading={isLoading}
        hasContent={hasContent}
        error={error}
      >
        <Card
          style={s.card}
          name="Global"
          title="Coronavirus cases"
          value={globalInfo.cases}
        />

        <Card
          style={s.card}
          name="Global"
          title="Deaths"
          value={globalInfo.deaths}
        />

        <Card
          style={s.card}
          name="Global"
          title="Recovered"
          value={globalInfo.recovered}
        />
      </DynamicContent>
    </Screen>
  );
};

const s = StyleSheet.create({
  root: {
    paddingHorizontal: 10,
  },
  card: {
    marginTop: 10,
  },
});

export default GlobalScreen;