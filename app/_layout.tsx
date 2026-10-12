import { Stack } from 'expo-router';
import { SQLiteProvider } from 'expo-sqlite';
import { criarTabelas } from '../database/schema';

export default function RootLayout() {
  return (
    <SQLiteProvider databaseName="facilitamed.db" onInit={criarTabelas}>
      <Stack screenOptions={{ headerShown: false }} />
    </SQLiteProvider>
  );
}