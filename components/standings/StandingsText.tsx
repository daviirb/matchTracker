import { Text } from "react-native";
type StandingsProps = {
  text: string | number;
};
export function StandingsText({ text }: StandingsProps) {
  return <Text className="w-5 text-[12px]">{text}</Text>;
}
