# perception typescript api

this package aims to provide a typed api for the perception game engine.

## documentation

you can find the full documentation [here](https://9s.github.io/perception-api/).

## quickstart

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
      "perception-api/cs2", // for counter strike 2 api
      "perception-api/engine", // for engine api
      "perception-api/fs", // for file system api
      "perception-api/input", // for input api
      "perception-api/m", // for memory api
      "perception-api/net", // for network
      "perception-api/proc", // for process api
      "perception-api/render", // for render api
      "perception-api/universal", // for universal api
      "perception-api/valorant", // for valorant api
      "perception-api/winapi", // for windows api
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
