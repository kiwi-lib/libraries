# FrozenMap - Map for does not overwrite the value if the key is present

## Install

```bash
npm install frozen-map
yarn add frozen-map
pnpm add frozen-map
```

## Usage

```typescript
import { FrozenMap } from 'frozen-map';

const map = new FrozenMap();

map.set('A', '1');
map.set('A', '2');
map.set('A', '3');
map.get('A'); // 1
```
