import { FinishedSession } from "@/components/finished-session/FinishedSession";
import { Leagues } from "@/components/Leagues";
import { Container } from "@/components/ui/Base";
import { useLeagueStore } from "@/stores/leagues";
import { View } from "react-native";

export default function HomeScreen() {
  const league = useLeagueStore((state) => state.league);
  return (
    <Container>
      <Leagues />
      <View className="flex-1">
        <FinishedSession selectedLeague={league} />
      </View>
    </Container>
  );
}
