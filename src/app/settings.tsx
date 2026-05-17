import React from "react";
import { Platform, ScrollView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Collapsible } from "@/components/ui/collapsible";
import { WebBadge } from "@/components/web-badge";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";

export default function TabTwoScreen() {
  const safeAreaInsets = useSafeAreaInsets();
  const insets = {
    ...safeAreaInsets,
    bottom: safeAreaInsets.bottom + BottomTabInset + Spacing.three,
  };
  const theme = useTheme();

  const contentPlatformStyle = Platform.select({
    android: {
      paddingTop: insets.top,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      paddingBottom: insets.bottom,
    },
    web: {
      paddingTop: Spacing.six,
      paddingBottom: Spacing.four,
    },
  });

  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: theme.background }]}
      contentInset={insets}
      contentContainerStyle={[styles.contentContainer, contentPlatformStyle]}
    >
      <ThemedView style={styles.container}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="subtitle">Settings</ThemedText>
          <ThemedText style={styles.centerText} themeColor="textSecondary">
            This is where the settings will be located to customize default chat
            preferences, instructions, and other options.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.sectionsWrapper}>
          <Collapsible title="Default persona">
            <ThemedText type="small">
              This is where the default instructions will live for the chat
              persona. Instructions will be defined by a category
              ("Personality"), a name ("Friendly"), and the instruction content
              itself. Users will be able to select from a list of default
              instructions when creating a new chat, and the selected
              instructions will be applied as the persona for the new chat.
              Personas will be saved as objects with name, summary, and list of
              instruction objects.
            </ThemedText>
          </Collapsible>

          <Collapsible title="Saved personas">
            <ThemedView
              type="backgroundElement"
              style={styles.collapsibleContent}
            >
              <ThemedText type="small">
                This is where saved personas will live. Users will be able to
                create, edit, and delete saved personas. When creating or
                editing a saved persona, users will be able to select from the
                list of default instructions to apply to the persona, as well as
                add custom instructions that they create themselves. Personas
                will be saved as objects with name, summary, and list of
                instruction objects.
              </ThemedText>
            </ThemedView>
          </Collapsible>

          <Collapsible title="Instructions">
            <ThemedText type="small">
              This is where individual custom instructions will live.
              Instructions will be sorted by category (e.g. "Personality",
              "Behavior", "Knowledge"), and users will be able to create, edit,
              and delete instructions within each category. When creating or
              editing a saved persona, users will be able to select from this
              list of instructions to apply to the persona. Instructions will be
              saved as objects with name, content, and category. The content of
              an instruction will be the actual text of the instruction that
              will be applied to the chat persona when the instruction is
              selected for a persona.
            </ThemedText>
          </Collapsible>

          <Collapsible title="Tasks">
            <ThemedText type="small">
              Tasks will act more as micro-instructions to guide the behavior of
              the chat persona when looking for a specific kind of response to a
              request (e.g. "Provide a summary", "Translate to Spanish"). Tasks
              will be saved as objects with name, content, and category. The
              content of a task will be the actual text of the task that will be
              applied to the chat persona when the task is selected for a
              persona.
            </ThemedText>
          </Collapsible>
        </ThemedView>
        {Platform.OS === "web" && <WebBadge />}
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  container: {
    maxWidth: MaxContentWidth,
    flexGrow: 1,
  },
  titleContainer: {
    gap: Spacing.three,
    alignItems: "center",
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.six,
  },
  centerText: {
    textAlign: "center",
  },
  pressed: {
    opacity: 0.7,
  },
  linkButton: {
    flexDirection: "row",
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.two,
    borderRadius: Spacing.five,
    justifyContent: "center",
    gap: Spacing.one,
    alignItems: "center",
  },
  sectionsWrapper: {
    gap: Spacing.five,
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.three,
  },
  collapsibleContent: {
    alignItems: "center",
  },
  imageTutorial: {
    width: "100%",
    aspectRatio: 296 / 171,
    borderRadius: Spacing.three,
    marginTop: Spacing.two,
  },
  imageReact: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
});
