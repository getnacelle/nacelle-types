# @nacelle/types

> TypeScript & GraphQL types for use with Nacelle products

## Install

```bash
npm i @nacelle/types
```

## Project Structure

In the `src` directory, there are two folders: `custom` & `graphql`. The `graphql` folder holds both the Graphql schema definitions and the TypeScript types generated from this schema. The GraphQL TypesScript types are programmatically generated from the `type-defs` file, so **making any changes in the generated.ts file will only be overwritten when new types are created**.

Types found in the `custom` directory are those that do not directly come from the GraphQL type definitions (i.e. data as it is stored in the DB, frontend-types, etc). These can extend the GraphQL types by importing from `generated.ts`.

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
