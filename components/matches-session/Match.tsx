import { formatTimeFromUtc, formatUtcDate } from "@/utils/dateFormat";
import { Text, View } from "react-native";
import { AwayTeam, HomeTeam } from "./Team";

type MatchProps = {
  match: Match;
};

export function Match({ match }: MatchProps) {
  return (
    <View
      className="px-4 py-2 flex-row items-center justify-between bg-white rounded-2xl mb-4"
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
    >
      <View className="w-[40%]">
        <HomeTeam name={match.homeTeam.shortName} code={match.homeTeam.id} />
      </View>
      <View className="items-center w-[20%]">
        <Text className="text-green-500 font-bold">
          {formatTimeFromUtc(match.utcDate)}
        </Text>
        <Text className="text-[12px]">{formatUtcDate(match.utcDate)}</Text>
      </View>
      <View className="w-[40%]">
        <AwayTeam name={match.awayTeam.shortName} code={match.awayTeam.id} />
      </View>
    </View>
  );
}
