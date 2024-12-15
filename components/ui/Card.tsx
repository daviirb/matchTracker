import { ImageBackground, View } from "react-native";
type CardProps = {
  children: React.ReactNode;
};
export function Card({ children }: CardProps) {
  return (
    <View
      className="px-4 py-2 flex-row items-center justify-between bg-white rounded-lg mb-2"
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
      }}
    >
      {children}
    </View>
  );
}

export function LiveCard({ children }: CardProps) {
  return (
    <ImageBackground
      source={require("@/assets/images/live.jpg")}
      className="rounded-lg overflow-hidden"
    >
      <View className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 overflow-hidden" />
      <View
        className="px-4 py-2 flex-row items-center justify-between"
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,
          elevation: 2,
        }}
      >
        {children}
      </View>
    </ImageBackground>
  );
}
