# Inner-Circle-Auth

## Getting Started

```
npm ci

npm start
```

## Create local docker container to connect it with local-env

```
npm run docker:build:local-env
```

## Create local docker container to work in it (local docker container for layout-ui service must run too)
```
npm run docker:build

npm run docker:run
```

## E2E tests

For e2e tests you must ask your colleagues for the cypress.config.prod.ts file if necessary

to open cypress use this command

```
npm run cypress:open:e2e
```

to run it in console

```
npm run cypress:run:e2e
```

to run test in local-env you need `cypress.config.local-env.ts` file and use command

```
npm run cypress:run:e2e:local-env
```
