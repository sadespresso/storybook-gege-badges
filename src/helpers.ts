import { useParameter } from "storybook/internal/manager-api";

import { PARAM_KEY, PRESETS_KEY } from "./constants";
import { defaultBadgePresets } from "./defaults";
import { BadgeItem, BadgePresets } from "./types";

export function usePresets(): BadgePresets | undefined {
  return useParameter<BadgePresets | undefined>(
    PRESETS_KEY,
    defaultBadgePresets,
  );
}

export function useBadges(): BadgeItem[] {
  return useParameter<BadgeItem[] | undefined>(PARAM_KEY, undefined);
}
