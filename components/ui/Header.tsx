import { Image, Text, View } from "react-native";

export function Header() {
  return (
    <View className="p-2 pb-2">
      <View className="flex-row items-center ">
        <Image
          className="h-14 w-14"
          source={require("@/assets/images/logo.png")}
          resizeMode="contain"
        />
        <Text className="font-bold">MATCHTRACKER</Text>
      </View>
    </View>
  );
}
