import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import React from "react";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#22c55e" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Matches",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="soccer-ball-o" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Standings",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="podium" color={color} size={28} />
          ),
        }}
      />
    </Tabs>
  );
}
