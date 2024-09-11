import React, { memo } from "react";
import { TOOL_ID } from "../constants";
import { useBadges, usePresets } from "../helpers";
import { Badge } from "./Badge";

export const Tool = memo(function Badges() {
  const badges = useBadges();
  const presets = usePresets();

  return (
    <div
      key={TOOL_ID}
      hidden={!badges || !badges.length}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "end",
        flexWrap: "nowrap",
        overflowX: "auto",
        gap: "4px",
      }}
    >
      {badges?.map((param, index) => {
        const badgeProps = typeof param === "string" ? presets[param] : param;

        if (badgeProps === null || badgeProps === undefined) return undefined;

        return (
          <Badge
            key={`${TOOL_ID}=${badgeProps.title}-${index}`}
            {...badgeProps}
          />
        );
      })}
    </div>
  );
});
