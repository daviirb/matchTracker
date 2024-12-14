import { LEAGUES } from "@/constants/Leagues";
import { useLeagueStore } from "@/stores/leagues";
import { useEffect, useState } from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";

export function Leagues() {
  const [isSelected, setIsSelected] = useState(false);
  const [selectLeague, setSelectLeague] = useState<string>("");
  const setLeague = useLeagueStore((state) => state.setLeague);

  useEffect(() => {
    setIsSelected(true);
    setSelectLeague(LEAGUES[0].code);
    setLeague(LEAGUES[0].code);
  }, []);

  const handleSelect = (value: string) => {
    setIsSelected(true);
    setSelectLeague(value);
    setLeague(value);
  };
  return (
    <View className="p-4">
      <ScrollView horizontal className="gap-2">
        {LEAGUES.map((league, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={() => handleSelect(league.code)}
            className={`flex-row items-center p-2 rounded-lg ${
              isSelected && selectLeague === league.code
                ? "bg-green-300"
                : "bg-white"
            }`}
          >
            <Image
              src={`https://crests.football-data.org/${league.code}.png`}
              resizeMode="contain"
              className="w-12 h-12"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
