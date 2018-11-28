# Scaffolding any project

## Install
```sh
npm install -g @chmurson/scaffolding
```

## Simple to use
1. Prepare scaffolding templates

`tpl/src/base.js`
```
This is template of {{ name }}.
The name can be written in different cases, e.g.
param case: {{#paramCase}}{{ name }}{{/paramCase}}
camel case: {{#camelCase}}{{ name }}{{/camelCase}}
```

> Note: Case conversations are made via npm module `change-case`. For all possible 
methods please see [its README.md](https://www.npmjs.com/package/change-case)


2. Prepare scaffolding.json 
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

3. Execute the script.
```bash
scaffolding
```

4. Input prompt answer.

5. Generates files by tpl settings. The file contents, filename will be replaced with prompt answer.

## Example of use 

![Example of use](https://chmurson.github.io/scaffolding/example-of-use.gif)

## CLI 

```bash
scaffolding [ConfigFile]
```

`[ConfigFile]` - relative path to scaffolding configuration json file. _Default: scaffolding.json_


## Global config file

The script searches for `.scaffolding.json` in current and parent directories. The closest file to current directory is taken.

Structure of `.scaffolding.json`: 
```json
{
  "configDirectory": "scaffolding"
}

``` 

`configDirectory` - relative to `.scaffolding.json` path where Script will search for scaffolding configs.

> Thanks to it the script can be run quicker e.g. `scaffolding my-config.json` instead of `scaffolding ../../scaffoldings/my-config.json`


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

