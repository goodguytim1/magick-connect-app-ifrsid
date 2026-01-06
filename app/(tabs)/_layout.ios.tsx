
import React from 'react';
import { Stack } from 'expo-router';
import FloatingTabBar, { TabBarItem } from '@/components/FloatingTabBar';

export default function TabLayout() {
  // Define the tabs configuration
  const tabs: TabBarItem[] = [
    {
      name: '(home)',
      route: '/(tabs)/(home)/',
      icon: 'home',
      label: 'Home',
    },
    {
      name: 'draw',
      route: '/(tabs)/draw',
      icon: 'style',
      label: 'Draw',
    },
    {
      name: 'daily',
      route: '/(tabs)/daily',
      icon: 'calendar-today',
      label: 'Daily',
    },
    {
      name: 'favorites',
      route: '/(tabs)/favorites',
      icon: 'favorite',
      label: 'Favorites',
    },
    {
      name: 'settings',
      route: '/(tabs)/settings',
      icon: 'settings',
      label: 'Settings',
    },
  ];

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}
      >
        <Stack.Screen key="home" name="(home)" />
        <Stack.Screen key="draw" name="draw" />
        <Stack.Screen key="daily" name="daily" />
        <Stack.Screen key="favorites" name="favorites" />
        <Stack.Screen key="settings" name="settings" />
      </Stack>
      <FloatingTabBar tabs={tabs} />
    </>
  );
}
