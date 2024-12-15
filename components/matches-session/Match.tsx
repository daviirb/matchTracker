import { formatTimeFromUtc, formatUtcDate } from "@/utils/dateFormat";
import { isToday } from "date-fns";
import { Text, View } from "react-native";
import { AwayTeam, HomeTeam } from "../Team";
import { Card } from "../ui/Card";

type MatchProps = {
  match: Match;
};

export function Match({ match }: MatchProps) {
  const matchDate = new Date(match.utcDate);

  return (
    <Card>
      <View className="w-[40%]">
        <HomeTeam name={match.homeTeam.shortName} code={match.homeTeam.id} />
      </View>
      <View className="items-center w-[20%]">
        <Text className="text-primary font-bold">
          {formatTimeFromUtc(match.utcDate)}
        </Text>
        <Text className="text-[12px]">
          {isToday(matchDate) ? "Today" : formatUtcDate(match.utcDate)}
        </Text>
      </View>
      <View className="w-[40%]">
        <AwayTeam name={match.awayTeam.shortName} code={match.awayTeam.id} />
      </View>
    </Card>
  );
}
