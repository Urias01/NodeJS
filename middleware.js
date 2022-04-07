// middleware pattern (chain of responsability)
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid 1';
    next();
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid 2'
    next();
}

const passo3 = (ctx, next) => {
    ctx.valor3 = 'mid 3'
}

const exec = (ctx, ...middleware) => {
    const execPasso = indice => {
        middleware && indice < middleware.length &&
            middleware[indice](ctx, () => {
                execPasso(indice + 1);
            })
    }
    execPasso(0)
}

const ctx = {}

exec(ctx);
console.log(ctx);

