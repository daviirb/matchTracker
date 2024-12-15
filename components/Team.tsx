import { Image, Text, View } from "react-native";

type TeamProps = {
  name: string;
  code: string | number;
};
export function HomeTeam({ name, code }: TeamProps) {
  return (
    <View className="flex-row items-center justify-end rounded-xl">
      <Text className="font-semibold">{name}</Text>
      <Image
        src={`https://crests.football-data.org/${code}.png`}
        resizeMode="contain"
        className="w-10 h-10 ml-2"
      />
    </View>
  );
}

export function AwayTeam({ name, code }: TeamProps) {
  return (
    <View className="flex-row items-center justify-start rounded-xl">
      <Image
        src={`https://crests.football-data.org/${code}.png`}
        resizeMode="contain"
        className="w-10 h-10 mr-2"
      />
      <Text className="font-semibold">{name}</Text>
    </View>
  );
}
