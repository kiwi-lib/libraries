# Eslint Config
## Usage
### 1. Install
#### 1.1 Install package
```
y add -D @kiwi-lib/eslint-config
```

#### 1.2 Install dependencies, if you use yarn berry
```
y add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-import eslint-plugin-prettier prettier
```

### 2. config eslint
Edit your .eslintrc.js
```javascript
module.exports = {
	extends: ['@kiwi-lib'],
	// or
  	// extends: ['@kiwi-lib/eslint-config'],
}
```

### 3. config prettier
Edit your package.json
```json
{
	"prettier": "@kiwi-lib/eslint-config/prettier.config"
}
```

### 4. Create tsconfig.eslint.json
Add the path to be linted to "include" and not to be linted to "exclude"
```json
{
	"extends": "./tsconfig.json",
	"include": ["src", "test"],
	"exclude": ["node_modules"]
}
```