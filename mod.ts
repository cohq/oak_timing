import { type Middleware } from "https://deno.land/x/oak@v10.5.1/mod.ts";

export const LoggerMiddleware: Middleware = async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
};

export const TimingMiddleware: Middleware = async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
};
