import { Text, View } from "react-native";
import { AwayTeam, HomeTeam } from "../Team";
import { Card } from "../ui/Card";

type MatchProps = {
  match: Match;
};

export function FinishedMatch({ match }: MatchProps) {
  return (
    <Card>
      <View className="w-[45%]">
        <HomeTeam name={match.homeTeam.shortName} code={match.homeTeam.id} />
      </View>
      <View className="items-center w-[15%]">
        <Text className="font-bold">{`${match.score.fullTime.home ?? 0} : ${
          match.score.fullTime.away ?? 0
        }`}</Text>
      </View>
      <View className="w-[45%]">
        <AwayTeam name={match.awayTeam.shortName} code={match.awayTeam.id} />
      </View>
    </Card>
  );
}
