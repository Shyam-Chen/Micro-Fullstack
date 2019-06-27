import { join } from 'path';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import compression from 'compression';
import morgan from 'morgan';
import session from 'express-session';
import connectRedis from 'connect-redis';
import rendertron from 'rendertron-middleware';
import history from 'express-history-api-fallback';
import Raven from 'raven';

import apolloServer from '~/core/graphql';
import redis from '~/core/redis';

const app = express();

if (NODE_ENV === 'production') Raven.config(SENTRY_DSN).install();

app.use(helmet());
app.use(cors());
app.use(rateLimit({ max: Number(RATE_LIMIT), windowMs: 15 * 60 * 1000 }));
app.use(compression());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (NODE_ENV === 'production') app.use(Raven.requestHandler());

apolloServer.applyMiddleware({ app, path: '/__/graphql' });

if (NODE_ENV === 'production') app.use(Raven.errorHandler());

export default app;
