import React, { CSSProperties, FunctionComponent } from "react";
import { BadgeProps } from "../types";

const badgeDefaultStyles: CSSProperties = {
  textTransform: "uppercase",
  fontSize: "10px",
  padding: "4px 8px",
  borderRadius: "4px",
  lineHeight: "1.333334",
  fontFamily: "sans-serif",
  fontWeight: "600",
};

const BadgeComponent: FunctionComponent<BadgeProps> = ({
  title,
  description,
  style,
  defaultStyles = badgeDefaultStyles,
}) => {
  const resolvedDefaultStyles =
    typeof defaultStyles === "boolean"
      ? defaultStyles
        ? badgeDefaultStyles
        : {}
      : typeof defaultStyles === "object"
        ? defaultStyles
        : {};

  return (
    <div
      title={description}
      style={{
        ...resolvedDefaultStyles,
        ...style,
      }}
    >
      {title}
    </div>
  );
};

export const Badge = Object.assign(BadgeComponent, { badgeDefaultStyles });
