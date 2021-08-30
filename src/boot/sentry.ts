import { boot } from 'quasar/wrappers';
import * as Sentry from '@sentry/vue';
import { Integrations } from '@sentry/tracing';

export default boot(({ app, router }) => {
    Sentry.init({
        app,
        trackComponents: false,
        dsn: 'https://1351ef5284af4f0eb039811196fa2de5@sentry.s-c.systems/3',
        integrations: [
          new Integrations.BrowserTracing({
            routingInstrumentation: Sentry.vueRouterInstrumentation(router),
            tracingOrigins: ['localhost:8080', 'pr0sauce.info', /^\//],
          })
        ],
        tracesSampleRate: 1.0,
      });
});
