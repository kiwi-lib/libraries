# senseful - 알잘딱깔센 library for the world

## Install

```bash
npm install senseful
yarn add senseful
pnpm add senseful
```

## Usage

```typescript
import { senseful } from 'senseful';

const yyyyMMdd = senseful.yyyyMMdd('2022/01/01'); // 20220101
const yyyyMMddWithDash = senseful.yyyyMMdd('2022.01.01', { separator: '-' }); // 2022-01-01

const phoneNumber = senseful.krPhoneNumber('010-1234-1234'); // 01012341234
const phoneNumberWithDash = senseful.krPhoneNumber('010.1234.1234', { withDash: true }); // 010-1234-1234
```
