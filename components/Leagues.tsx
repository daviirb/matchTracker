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
    <View className="px-4 mb-4">
      <ScrollView
        horizontal
        className="gap-2"
        showsHorizontalScrollIndicator={false}
      >
        {LEAGUES.map((league, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={() => handleSelect(league.code)}
            className={`flex-row items-center  ${
              isSelected && selectLeague === league.code
                ? "border-b-2 border-primary"
                : ""
            }`}
          >
            <Image
              src={`https://crests.football-data.org/${league.image}.png`}
              resizeMode="contain"
              className="w-14 h-14 p-1"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
