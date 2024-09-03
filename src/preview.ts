/**
 * A decorator is a way to wrap a story in extra “rendering” functionality. Many addons define decorators
 * in order to augment stories:
 * - with extra rendering
 * - gather details about how a story is rendered
 *
 * When writing stories, decorators are typically used to wrap stories with extra markup or context mocking.
 *
 * https://storybook.js.org/docs/react/writing-stories/decorators
 */
import type { ProjectAnnotations, Renderer } from "storybook/internal/types";

import { PRESETS_KEY } from "./constants";
import { defaultBadgePresets } from "./defaults";

export const parameters = {
  [PRESETS_KEY]: {
    ...defaultBadgePresets,
  },
};

const preview: ProjectAnnotations<Renderer> = {};

export default preview;
