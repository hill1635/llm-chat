import { Spacing, ThemeColor } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import React from "react";
import { StyleSheet, TextInput, type TextInputProps } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export type ThemedTextInputProps = TextInputProps & {
  type?: "default" | "clear" | "subdued" | "highlighted";
  themeColor?: ThemeColor;
};

export function ThemedTextInput({
  onChangeText,
  value,
  placeholder,
  style,
  type = "default",
  themeColor,
  ...rest
}: ThemedTextInputProps) {
  const theme = useTheme();

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={[
            { color: theme[themeColor ?? "text"] },
            type === "default" && styles.default,
          ]}
          onChangeText={onChangeText}
          placeholder={placeholder}
          value={value}
          {...rest}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  default: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: Spacing.four,
  },
  clear: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    backgroundColor: "transparent",
  },
});
