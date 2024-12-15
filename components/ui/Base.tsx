import { forwardRef } from "react";
import {
  Text,
  TextProps,
  TouchableOpacity,
  View,
  ViewProps,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const SafeAreaContainer = forwardRef<View, ViewProps>(
  ({ children, className, style, ...props }, ref) => {
    const { top } = useSafeAreaInsets();
    return (
      <View
        {...props}
        style={[{ paddingTop: top, backgroundColor: "#f8f8f8" }, style]}
        ref={ref}
        className="flex-1"
      >
        {children}
      </View>
    );
  }
);

export const Container = forwardRef<View, ViewProps>(
  ({ children, className, style, ...props }, ref) => {
    const { bottom } = useSafeAreaInsets();

    return (
      <View
        {...props}
        style={[{ paddingBottom: bottom }, style]}
        ref={ref}
        className="flex-1"
      >
        {children}
      </View>
    );
  }
);

export const Title = forwardRef<Text, TextProps>(
  ({ children, className, ...props }, ref) => (
    <Text
      ref={ref}
      className="font-bold text-2xl text-zinc-900 py-1"
      {...props}
    >
      {children}
    </Text>
  )
);

export const Link = forwardRef<Text, TextProps>(
  ({ children, className, ...props }, ref) => (
    <TouchableOpacity>
      <Text
        ref={ref}
        className="font-bold text-sm text-green-500 py-1"
        {...props}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
);
