import { Tabs } from "expo-router";
import React from "react";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/style/Colors";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "FFD1_05",
        }}
      />
      <Tabs.Screen
        name="ffd1_2"
        options={{
          title: "FFD1_2",
        }}
      />
    </Tabs>
  );
}
