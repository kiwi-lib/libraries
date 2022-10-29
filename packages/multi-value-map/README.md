# MultiValueMap - Map for easy handling of maps with value of array

## Install

```bash
npm install multi-value-map
yarn add multi-value-map
pnpm add multi-value-map
```

## Usage

```typescript
import { MultiValueMap } from 'multi-value-map';

const map = new MultiValueMap();

map.push('foo', 'bar');
map.push('foo', 'baz');
map.get('foo'); // ['bar', 'baz']

map.get('empty'); // []
```
