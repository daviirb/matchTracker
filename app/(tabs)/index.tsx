import { Leagues } from "@/components/Leagues";
import { MatcheSession } from "@/components/matches-session/MatcheSession";
import { Container } from "@/components/ui/Base";
import { useLeagueStore } from "@/stores/leagues";
import { View } from "react-native";

export default function HomeScreen() {
  const league = useLeagueStore((state) => state.league);
  return (
    <Container>
      <Leagues />
      <View className="flex-1">
        <MatcheSession selectedLeague={league} />
      </View>
    </Container>
  );
}
