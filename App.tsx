import React from 'react';
import { useFonts } from 'expo-font';
import { MainLayout } from './src/MainLayout';
import { TodosContext } from './src/context/todos/TodosContext';

export default function App() {
  const [loaded] = useFonts({
    'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
    'ComicNeue-Regular': require('./src/assets/fonts/ComicNeue-Regular.ttf'),
    'ComicNeue-Bold': require('./src/assets/fonts/ComicNeue-Bold.ttf'),
  });

  // возвращаеи null, ТОЛЬКО ПОСЛЕ ВЫПОЛНЕНИЯ ВСЕХ ХУКОВ (useState, useEffect, и т.д.)
  if (!loaded) return null;

  return (
    <TodosContext>
      <MainLayout />
    </TodosContext>
  );
}
