import { Text, View } from "react-native";
import { StandingsText } from "./StandingsText";

type StandingProps = {
  standing: StandingTable;
};

export function Standing({ standing }: StandingProps) {
  const standingsStats = [
    standing.playedGames,
    standing.won,
    standing.draw,
    standing.lost,
    standing.goalDifference,
    standing.points,
  ];

  return (
    <View className="bg-white p-2 border-b border-lightGray flex-row justify-between">
      <View className="flex-row gap-x-2">
        <Text>{standing.position}</Text>
        <Text>{standing.team.shortName}</Text>
      </View>
      <View className="flex-row gap-x-3 mr-2">
        {standingsStats.map((value, index) => (
          <View key={index} className="flex-row items-center">
            <StandingsText text={value} />
          </View>
        ))}
      </View>
    </View>
  );
}
