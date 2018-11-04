# Scaffolding any project

## Install
```sh
npm install -g scaffolding
```

## Simple to use
1.Prepare scaffolding.json
```json
{
  "properties": {
    "name": {
      "pattern": "^[a-zA-Z\\.\\-\\d]+$",
      "message": "Name must be only letters, numbers, dots, or dashes",
      "default": "sample",
      "required": true
    },
    "author": {
      "required": true
    }
  },
  "tpl": {
    "tpl/src/base.js": "dist/src/{{name}}.js",
    "tpl/test/base.test": "dist/test/{{name}}"
  }
}
```

2. Execute Script.
```bash
scaffolding
```

3. Input prompt answer.

4. Generates files by tpl settings. The file contents, filename will be replaced with prompt answer.

## CLI 

```bash
scaffolding [ConfigFile]
```

`[ConfigFile]` - relative path to scaffolding configuration json file. _Default: scaffolding.json_


## Global config file

Script will search for `.scaffolding.json` in current and parents directories. The file closes to current directory will be used.  

Structure of `.scaffolding.json`: 
```json
{
  "configDirectory": "scaffolding"
}

``` 

`configDirectory` - relative to `.scaffolding.json` path where Script will search for scaffolding configs


## Further customization
1. Prepare `.default.scaffolding.json`
```json
{
  "author": "sideroad"
}
```
2. You can override the default setting!


## Dependencies with awesome library
* [prompt](https://github.com/flatiron/prompt)
* [mustache](https://github.com/janl/mustache.js)
* [wrench](https://github.com/ryanmcgrath/wrench-js)

