import { BadgeProps } from "./types";

export const defaultBadgePresets: Record<string, BadgeProps> = {
  new: {
    title: "New",
    description: "Fresh out of the oven",
    style: {
      color: "#ffffff",
      backgroundColor: "#00a8ff",
    },
  },
  wip: {
    title: "WIP",
    description: "Not quite finished yet",
    style: {
      color: "#050505",
      backgroundColor: "#487eb0",
    },
  },
  deprecated: {
    title: "Deprecated",
    description: "Not for long",
    style: {
      color: "#ffffff",
      backgroundColor: "#7f8fa6",
    },
  },
  beta: {
    title: "Beta",
    description: "Not quite ready for prime time",
    style: {
      color: "#ffffff",
      backgroundColor: "#9c88ff",
    },
  },
  stable: {
    title: "Stable",
    description: "Ready for production",
    style: {
      color: "#ffffff",
      backgroundColor: "#44bd32",
    },
  },
};
