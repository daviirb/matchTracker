import { color } from "@/constants/Colors";
import Octicons from "@expo/vector-icons/Octicons";
import { Text, View } from "react-native";
import { LiveCard } from "../ui/Card";
import { Team } from "./LiveTeam";

type MatchProps = {
  match: Match;
};

export function LiveMatch({ match }: MatchProps) {
  const getStatus = (status: string) => {
    if (status === "IN_PLAY" || status === "PAUSED") {
      return "";
    }
    return "COMING SOON";
  };
  const status = getStatus(match.status);
  return (
    <LiveCard>
      {status === "" ? (
        <View className="absolute top-0 right-1 z-20 items-center">
          <Octicons name="dot-fill" size={20} color={color.secondary} />
          <Text className="px-2 bg-zinc-800 rounded-md text-white text-[12px]">
            Live
          </Text>
        </View>
      ) : null}
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
            {getStatus(match.status)}
          </Text>
        </View>
      </View>
    </LiveCard>
  );
}
