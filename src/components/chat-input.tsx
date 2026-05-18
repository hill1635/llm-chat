import { Spacing, ThemeColor } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import React from "react";
import { StyleSheet } from "react-native";
import { ThemedButton } from "./themed-button";
import { ThemedTextInput } from "./themed-text-input";
import { ThemedView } from "./themed-view";

export type ChatInputProps = {
  type?: "default";
  themeColor?: ThemeColor;
};

export function ChatInput({
  type = "default",
  themeColor,
  ...rest
}: ChatInputProps) {
  const theme = useTheme();

  return (
    <ThemedView type="background" style={styles.default}>
      <ThemedButton type="primary" title="+" onPress={() => {}} />
      <ThemedTextInput
        type="clear"
        placeholder="Type here to chat..."
        themeColor={themeColor}
        {...rest}
      />
      <ThemedButton type="primary" title="&#8594;" onPress={() => {}} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  default: {
    height: "auto",
    padding: 10,
    borderRadius: Spacing.four,
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: Spacing.two,
  },
});
