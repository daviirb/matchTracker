import { color } from "@/constants/Colors";
import { getScheduledMatches } from "@/services/apiData";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Platform, View } from "react-native";
import { Session } from "../ui/Session";
import { Match } from "./Match";

type MatcheSessionProps = {
  selectedLeague: string;
};

export function MatcheSession({ selectedLeague }: MatcheSessionProps) {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(false);

  const platform = Platform.OS;
  const limit = 20;

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getScheduledMatches({
          league_code: selectedLeague,
          limit: limit,
        });

        setMatches(data);
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [selectedLeague]);

  return (
    <View className={platform === "android" ? "flex-1" : ""}>
      <Session title="Matches" link="/sd" />
      <FlatList
        className="p-2"
        data={matches}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => <Match match={item} />}
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
