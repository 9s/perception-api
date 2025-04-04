# perception typescript api

this package aims to provide a typed api for the perception game engine.

currently only the universal api is supported.

## usage

```bash
bun add --dev typescript perception-api typescript-to-lua lua-types
```

add

```json5
{
  "$schema": "https://raw.githubusercontent.com/TypeScriptToLua/TypeScriptToLua/master/tsconfig-schema.json",
  "compilerOptions": {
    "types": [
      "lua-types/5.4",
      "perception-api/universal", // for universal api
      "perception-api/cs2", // for counter strike 2 api,
      "perception-api/rivals", // for marvel rivals api,
      "perception-api/valorant" // for marvel rivals api,
    ]
  },
  "tstl": {
    "luaTarget": "5.4",
    "noHeader": true,
    "noImplicitGlobalVariables": true,
    "noImplicitSelf": true
  }
}
```

to your tsconfig.json.

## example

```typescript
engine.log(
    "Hello, world!",
    255, 255, 255, 255
)
```

full example [here](https://github.com/9s/perception-api-example.git)
