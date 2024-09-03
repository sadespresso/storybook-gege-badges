import React from "react";

export interface BadgeProps {
  title: string;
  description?: string;
  style?: React.CSSProperties;
  /**
   * @default true
   *
   * @see {@link Badge.badgeDefaultStyles}
   */
  defaultStyles?: boolean | React.CSSProperties;
}

export interface BadgesProps {
  badges: BadgeProps[];
}

export interface BadgePresets {
  [key: string]: BadgeProps;
}

export type BadgeItem = string | BadgeProps;
