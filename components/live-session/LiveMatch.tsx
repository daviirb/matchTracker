import { Text, View } from "react-native";
import { LiveCard } from "../ui/Card";
import { Team } from "./LiveTeam";

type MatchProps = {
  match: Match;
};

export function LiveMatch({ match }: MatchProps) {
  return (
    <LiveCard>
      <View className="h-40 w-[300] items-center">
        <View className="absolute top-2  z-20">
          <Text className="font-bold text-white">{match.competition.name}</Text>
        </View>
        <View className="flex-row flex-1 items-center">
          <View className="w-[35%]">
            <Team name={match.homeTeam.shortName} code={match.homeTeam.id} />
          </View>
          <View className="items-center w-[30%]">
            <Text className="font-bold text-4xl text-white">{`${
              match.score.fullTime.home ?? 0
            } : ${match.score.fullTime.away ?? 0}`}</Text>
          </View>
          <View className="w-[35%]">
            <Team name={match.awayTeam.shortName} code={match.awayTeam.id} />
          </View>
        </View>
        <View className="absolute bottom-2  z-20">
          <Text className="font-bold text-white">
            {match.status != "IN_PLAY" ? "COMING SOON" : "LIVE"}
          </Text>
        </View>
      </View>
    </LiveCard>
  );
}
export function ScheduleMatch({ match }: MatchProps) {
  return (
    <LiveCard>
      <View className="h-40 w-[300] items-center">
        <View className="absolute top-2  z-20">
          <Text className="font-bold text-white">{match.competition.name}</Text>
        </View>
        <View className="flex-row flex-1 items-center">
          <View className="w-[35%]">
            <Team name={match.homeTeam.shortName} code={match.homeTeam.id} />
          </View>
          <View className="items-center w-[30%]">
            <Text className="font-bold text-4xl text-white">{`${match.score.fullTime.home} : ${match.score.fullTime.away}`}</Text>
          </View>
          <View className="w-[35%]">
            <Team name={match.awayTeam.shortName} code={match.awayTeam.id} />
          </View>
        </View>
      </View>
    </LiveCard>
  );
}
