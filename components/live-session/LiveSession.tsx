import { getLiveMatches, getScheduledMatches } from "@/services/apiData";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Session } from "../ui/Session";
import { LiveMatch } from "./LiveMatch";
const lve = {
  filters: {
    season: "2024",
    status: ["IN_PLAY", "PAUSED"],
  },
  resultSet: {
    count: 1,
    first: "2024-12-15",
    last: "2024-12-15",
    played: 0,
  },
  competition: {
    id: 2014,
    name: "Primera Division",
    code: "PD",
    type: "LEAGUE",
    emblem: "https://crests.football-data.org/laliga.png",
  },
  matches: [
    {
      area: {
        id: 2224,
        name: "Spain",
        code: "ESP",
        flag: "https://crests.football-data.org/760.svg",
      },
      competition: {
        id: 2014,
        name: "Primera Division",
        code: "PD",
        type: "LEAGUE",
        emblem: "https://crests.football-data.org/laliga.png",
      },
      season: {
        id: 2292,
        startDate: "2024-08-18",
        endDate: "2025-05-25",
        currentMatchday: 17,
        winner: null,
      },
      id: 498773,
      utcDate: "2024-12-15T13:00:00Z",
      status: "PAUSED",
      matchday: 17,
      stage: "REGULAR_SEASON",
      group: null,
      lastUpdated: "2024-12-15T13:55:01Z",
      homeTeam: {
        id: 78,
        name: "Club Atlético de Madrid",
        shortName: "Atleti",
        tla: "ATL",
        crest: "https://crests.football-data.org/78.png",
      },
      awayTeam: {
        id: 82,
        name: "Getafe CF",
        shortName: "Getafe",
        tla: "GET",
        crest: "https://crests.football-data.org/82.png",
      },
      score: {
        winner: "DRAW",
        duration: "REGULAR",
        fullTime: {
          home: 0,
          away: 0,
        },
        halfTime: {
          home: 0,
          away: 0,
        },
      },
      odds: {
        msg: "Activate Odds-Package in User-Panel to retrieve odds.",
      },
      referees: [
        {
          id: 207113,
          name: "César Soto Grado",
          type: "REFEREE",
          nationality: "Spain",
        },
      ],
    },
    {
      area: {
        id: 2224,
        name: "Spain",
        code: "ESP",
        flag: "https://crests.football-data.org/760.svg",
      },
      competition: {
        id: 2014,
        name: "Primera Division",
        code: "PD",
        type: "LEAGUE",
        emblem: "https://crests.football-data.org/laliga.png",
      },
      season: {
        id: 2292,
        startDate: "2024-08-18",
        endDate: "2025-05-25",
        currentMatchday: 17,
        winner: null,
      },
      id: 498773,
      utcDate: "2024-12-15T13:00:00Z",
      status: "PAUSED",
      matchday: 17,
      stage: "REGULAR_SEASON",
      group: null,
      lastUpdated: "2024-12-15T13:55:01Z",
      homeTeam: {
        id: 78,
        name: "Club Atlético de Madrid",
        shortName: "Atleti",
        tla: "ATL",
        crest: "https://crests.football-data.org/78.png",
      },
      awayTeam: {
        id: 82,
        name: "Getafe CF",
        shortName: "Getafe",
        tla: "GET",
        crest: "https://crests.football-data.org/82.png",
      },
      score: {
        winner: "DRAW",
        duration: "REGULAR",
        fullTime: {
          home: 0,
          away: 0,
        },
        halfTime: {
          home: 0,
          away: 0,
        },
      },
      odds: {
        msg: "Activate Odds-Package in User-Panel to retrieve odds.",
      },
      referees: [
        {
          id: 207113,
          name: "César Soto Grado",
          type: "REFEREE",
          nationality: "Spain",
        },
      ],
    },
    {
      area: {
        id: 2224,
        name: "Spain",
        code: "ESP",
        flag: "https://crests.football-data.org/760.svg",
      },
      competition: {
        id: 2014,
        name: "Primera Division",
        code: "PD",
        type: "LEAGUE",
        emblem: "https://crests.football-data.org/laliga.png",
      },
      season: {
        id: 2292,
        startDate: "2024-08-18",
        endDate: "2025-05-25",
        currentMatchday: 17,
        winner: null,
      },
      id: 498773,
      utcDate: "2024-12-15T13:00:00Z",
      status: "PAUSED",
      matchday: 17,
      stage: "REGULAR_SEASON",
      group: null,
      lastUpdated: "2024-12-15T13:55:01Z",
      homeTeam: {
        id: 78,
        name: "Club Atlético de Madrid",
        shortName: "Atleti",
        tla: "ATL",
        crest: "https://crests.football-data.org/78.png",
      },
      awayTeam: {
        id: 82,
        name: "Getafe CF",
        shortName: "Getafe",
        tla: "GET",
        crest: "https://crests.football-data.org/82.png",
      },
      score: {
        winner: "DRAW",
        duration: "REGULAR",
        fullTime: {
          home: 0,
          away: 0,
        },
        halfTime: {
          home: 0,
          away: 0,
        },
      },
      odds: {
        msg: "Activate Odds-Package in User-Panel to retrieve odds.",
      },
      referees: [
        {
          id: 207113,
          name: "César Soto Grado",
          type: "REFEREE",
          nationality: "Spain",
        },
      ],
    },
    {
      area: {
        id: 2224,
        name: "Spain",
        code: "ESP",
        flag: "https://crests.football-data.org/760.svg",
      },
      competition: {
        id: 2014,
        name: "Primera Division",
        code: "PD",
        type: "LEAGUE",
        emblem: "https://crests.football-data.org/laliga.png",
      },
      season: {
        id: 2292,
        startDate: "2024-08-18",
        endDate: "2025-05-25",
        currentMatchday: 17,
        winner: null,
      },
      id: 498773,
      utcDate: "2024-12-15T13:00:00Z",
      status: "PAUSED",
      matchday: 17,
      stage: "REGULAR_SEASON",
      group: null,
      lastUpdated: "2024-12-15T13:55:01Z",
      homeTeam: {
        id: 78,
        name: "Club Atlético de Madrid",
        shortName: "Atleti",
        tla: "ATL",
        crest: "https://crests.football-data.org/78.png",
      },
      awayTeam: {
        id: 82,
        name: "Getafe CF",
        shortName: "Getafe",
        tla: "GET",
        crest: "https://crests.football-data.org/82.png",
      },
      score: {
        winner: "DRAW",
        duration: "REGULAR",
        fullTime: {
          home: 0,
          away: 0,
        },
        halfTime: {
          home: 0,
          away: 0,
        },
      },
      odds: {
        msg: "Activate Odds-Package in User-Panel to retrieve odds.",
      },
      referees: [
        {
          id: 207113,
          name: "César Soto Grado",
          type: "REFEREE",
          nationality: "Spain",
        },
      ],
    },
  ],
};
type LiveSessionProps = {
  selectedLeague: string;
};

export function LiveSession({ selectedLeague }: LiveSessionProps) {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(false);

  const limit = 10;

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const live = await getLiveMatches({
          league_code: selectedLeague,
          limit: limit,
        });
        if (live.length > 0) {
          setMatches(live);
        } else {
          const schedule = await getScheduledMatches({
            league_code: selectedLeague,
            limit: 4,
          });
          setMatches(schedule);
        }
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [selectedLeague, limit]);

  return (
    <View>
      <Session title="Live Matches" />
      <View className="p-4">
        <FlatList
          className=""
          horizontal
          data={matches}
          keyExtractor={(_, idx) => idx.toString()}
          renderItem={({ item }) => <LiveMatch match={item} />}
          onEndReachedThreshold={0.5}
          keyboardShouldPersistTaps="handled"
          pagingEnabled
          snapToAlignment="start"
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: matches.length === 1 ? "center" : "flex-start",
          }}
          snapToInterval={matches.length === 1 ? undefined : 340}
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        />
      </View>
    </View>
  );
}
