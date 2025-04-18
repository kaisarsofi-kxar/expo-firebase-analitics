// app/index.tsx
import { Redirect } from "expo-router";

export default function HomeScreen() {
  // Redirect to the tabs
  return <Redirect href="/(tabs)" />;
}
