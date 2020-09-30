# @nacelle/types

> TypeScript & GraphQL types for use with Nacelle products

## Install

```bash
npm i @nacelle/types
```

## Using the GraphQL Types

This package exports GraphQL type definitions which can be merged with type definitions in another project.

```js
import { sharedTypeDefs } from '@nacelle/types';
import { mergeTypeDefs } from '@graphql-tools/merge';

import { typeDefs } from './src/your/type/defs';

const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs([sharedTypeDefs, typeDefs]),
  resolvers
});
```

## Generating TypeScript Types

To generate TypeScript interfaces from the GraphQL type defintions, run `npm run generate`.

## Using the TypeScript Types

```js
import { NacelleProduct } from '@nacelle/types';

const product: NacelleProduct = { ... };
```

## License

ISC © [getnacelle](https://github.com/getnacelle)
