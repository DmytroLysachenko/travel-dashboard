import * as Sentry from "@sentry/react-router";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://8f106cc03d82716a570c8ad1615982af@o4508646704349184.ingest.de.sentry.io/4509441661075536",
  sendDefaultPii: true,
  integrations: [nodeProfilingIntegration()],
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
});
