import { color } from "@/constants/Colors";
import { getFinishedMatches } from "@/services/apiData";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Platform, View } from "react-native";
import { Session } from "../ui/Session";
import { FinishedMatch } from "./FinishedMatch";

type MatcheSessionProps = {
  selectedLeague: string;
};

export function FinishedSession({ selectedLeague }: MatcheSessionProps) {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(false);

  const platform = Platform.OS;

  const today = new Date();
  const sevenDaysAgo = new Date();

  sevenDaysAgo.setDate(today.getDate() - 7);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getFinishedMatches({
          league_code: selectedLeague,
          dateFrom: sevenDaysAgo.toISOString().split("T")[0],
          dateTo: today.toISOString().split("T")[0],
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
      <Session title="Finished Matches" text="Last 7 days" />
      <FlatList
        className="p-2"
        data={matches}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => <FinishedMatch match={item} />}
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
