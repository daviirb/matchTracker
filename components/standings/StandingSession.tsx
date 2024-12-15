import { color } from "@/constants/Colors";
import { getCompetitionData, getTable } from "@/services/apiData";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Platform,
  Text,
  View,
} from "react-native";
import { Session } from "../ui/Session";
import { Standing } from "./Standing";
import { StandingsText } from "./StandingsText";

type MatcheSessionProps = {
  selectedLeague: string;
};

export function StandingSession({ selectedLeague }: MatcheSessionProps) {
  const [standings, setStandings] = useState<StandingTable[]>([]);
  const [competitionData, setCompetitionData] = useState<CompetitionData[]>([]);
  const [loading, setLoading] = useState(false);

  const platform = Platform.OS;

  const standingsStats = ["MP", "W", "D", "L", "GD", "Pts"];

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const standingsData = await getTable({
          league_code: selectedLeague,
        });
        const competitionData = await getCompetitionData({
          league_code: selectedLeague,
        });
        setStandings(standingsData);
        setCompetitionData(competitionData);
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [selectedLeague]);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color={color.primary} />
      </View>
    );
  }

  if (competitionData.length === 0 || !competitionData[0].competition) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Erro ao carregar dados da competição</Text>
      </View>
    );
  }

  return (
    <View className={platform === "android" ? "flex-1" : ""}>
      <Session title="Table" />
      <View className="p-2">
        <Text className="text-lg">{competitionData[0].competition.name}</Text>
        <Text className="">Season: {competitionData[0].filters.season}</Text>
      </View>
      <View className="px-2">
        <View className="px-2 py-1 border-b border-lightGray bg-white flex-row justify-between">
          <Text>Club</Text>
          <View className="flex-row gap-x-3 mr-2">
            {standingsStats.map((value, index) => (
              <View key={index} className="flex-row items-center">
                <StandingsText text={value} />
              </View>
            ))}
          </View>
        </View>
      </View>
      <FlatList
        className="px-2"
        data={standings}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => <Standing standing={item} />}
        onEndReachedThreshold={0.5}
        keyboardShouldPersistTaps="handled"
        ListFooterComponent={
          loading ? (
            <View className="items-center p-4">
              <ActivityIndicator size="large" color={color.primary} />
            </View>
          ) : null
        }
      />
    </View>
  );
}
