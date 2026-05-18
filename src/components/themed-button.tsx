import { Button, type ButtonProps } from "react-native";

import { ThemeColor } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";

export type ThemedButtonProps = ButtonProps & {
  type?: "primary" | "secondary" | "subdued";
  themeColor?: ThemeColor;
};

export function ThemedButton({
  title,
  type,
  themeColor,
  ...rest
}: ThemedButtonProps) {
  const theme = useTheme();

  return (
    <Button
      title={title}
      color={
        type === "primary"
          ? theme.text
          : type === "secondary"
            ? theme.background
            : type === "subdued"
              ? theme.backgroundElement
              : undefined
      }
      {...rest}
    />
  );
}
