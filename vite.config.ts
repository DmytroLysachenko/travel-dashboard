import { reactRouter } from "@react-router/dev/vite";
import {
  sentryReactRouter,
  type SentryReactRouterBuildOptions,
} from "@sentry/react-router";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "my-own-company-c1",
  project: "javascript-react",
  authToken:
    "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",
};

export default defineConfig((config) => {
  return {
    plugins: [
      tailwindcss(),
      tsconfigPaths(),
      reactRouter(),
      sentryReactRouter(sentryConfig, config),
    ],
    ssr: { noExternal: [/@syncfusion/] },
  };
});
