import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'

const init = () => {
  Sentry.init({
    dsn: 'https://fc93fe95e3eb42baad66a9c51697878e@o1137986.ingest.sentry.io/6191292',
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  })
}
const log = (error) => {
  Sentry.captureException(error)
}

const logger = {
  init,
  log,
}

export default logger
