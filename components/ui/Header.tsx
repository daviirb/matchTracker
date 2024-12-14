import { Image, Text, View } from "react-native";

export function Header() {
  return (
    <View className="p-2 pb-2">
      <View className="flex-row items-center gap-2">
        <Image
          className="w-10 h-10"
          source={require("@/assets/images/logo.png")}
          resizeMode="cover"
        />
        <Text className="text-2xl font-bold">MatchTracker</Text>
      </View>
    </View>
  );
}
