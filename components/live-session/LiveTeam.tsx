import { Image, Text, View } from "react-native";

type TeamProps = {
  name: string;
  code: string | number;
};
export function Team({ name, code }: TeamProps) {
  return (
    <View className="items-center justify-end rounded-xl gap-y-2">
      <Image
        src={`https://crests.football-data.org/${code}.png`}
        resizeMode="contain"
        className="w-10 h-10 ml-2"
      />
      <Text className="font-bold text-white">{name}</Text>
    </View>
  );
}
