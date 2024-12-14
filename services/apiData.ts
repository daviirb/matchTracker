import apiClient from "./apiClient";

type ScheduledMatchesProps = {
  league_code: string;
  limit?: number;
};
export async function getScheduledMatches({
  league_code,
  limit,
}: ScheduledMatchesProps) {
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
    console.error("Erro ao buscar jogos agendados:", error);
    throw error;
  }
}
