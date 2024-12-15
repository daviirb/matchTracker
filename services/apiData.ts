import apiClient from "./apiClient";

type MatchesProps = {
  league_code: string;
  limit?: number;
  dateFrom?: string;
  dateTo?: string;
};
export async function getScheduledMatches({
  league_code,
  limit,
}: MatchesProps) {
  try {
    const response = await apiClient.get(
      `/competitions/${league_code}/matches`,
      {
        params: { status: "SCHEDULED" },
      }
    );

    const matches = response.data.matches;

    return limit ? matches.slice(0, limit) : matches;
  } catch (error) {
    throw error;
  }
}

export async function getLiveMatches({
  league_code,
  limit,
}: MatchesProps): Promise<Match[]> {
  try {
    const response = await apiClient.get(
      `/competitions/${league_code}/matches`,
      {
        params: { status: "LIVE" },
      }
    );

    const matches = response.data.matches;

    return limit ? matches.slice(0, limit) : matches;
  } catch (error) {
    throw error;
  }
}
export async function getFinishedMatches({
  league_code,
  limit,
  dateFrom,
  dateTo,
}: MatchesProps): Promise<Match[]> {
  try {
    const response = await apiClient.get(
      `/competitions/${league_code}/matches`,
      {
        params: { status: "FINISHED", dateFrom, dateTo },
      }
    );

    const matches = response.data.matches;

    return limit ? matches.slice(0, limit) : matches;
  } catch (error) {
    throw error;
  }
}
export async function getStandings({
  league_code,
  limit,
}: MatchesProps): Promise<Standing[]> {
  try {
    const response = await apiClient.get(
      `/competitions/${league_code}/standings`,
      {
        params: {},
      }
    );

    const standings = response.data.standings;

    return limit ? standings.slice(0, limit) : standings;
  } catch (error) {
    throw error;
  }
}
export async function getTable({
  league_code,
  limit,
}: MatchesProps): Promise<StandingTable[]> {
  try {
    const response = await apiClient.get(
      `/competitions/${league_code}/standings`,
      {
        params: {},
      }
    );

    const standingsTable = response.data.standings[0]?.table;

    if (!standingsTable) {
      throw new Error("Not Found");
    }

    return limit ? standingsTable.slice(0, limit) : standingsTable;
  } catch (error) {
    throw error;
  }
}

export async function getCompetitionData({
  league_code,
  limit,
}: MatchesProps): Promise<CompetitionData[]> {
  try {
    const response = await apiClient.get(
      `/competitions/${league_code}/standings`,
      {
        params: {},
      }
    );

    const competitionData = response.data;
    return limit ? [competitionData].slice(0, limit) : [competitionData];
  } catch (error) {
    throw error;
  }
}
