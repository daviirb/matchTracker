import { Text, TouchableOpacity, View } from "react-native";
import { Title } from "./Base";

type SessionProps = {
  title: string;
  link?: string;
};
export function Session({ link, title }: SessionProps) {
  return (
    <View className="px-2">
      <View className="flex-row items-center justify-between">
        <Title className="text-gray">{title}</Title>
        {link ? (
          <TouchableOpacity>
            <Text className="text-primary font-bold">See all</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}
