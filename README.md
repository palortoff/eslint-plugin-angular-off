[![Npm dependencies](https://david-dm.org/palortoff/eslint-plugin-angular-off.svg)](https://david-dm.org/palortoff/eslint-plugin-angular-off)
[![devDependency Status](https://david-dm.org/palortoff/eslint-plugin-angular-off/dev-status.png)](https://david-dm.org/palortoff/eslint-plugin-angular-off#info=devDependencies)

### Summary

This is a wrapper around [eslint-plugin-angular](https://github.com/Gillespie59/eslint-plugin-angular) to disable all eslint-plugin-angular rules by default.

### Install

````
npm install eslint-plugin-angular-off --save-dev
````

You also need to install ``eslint-plugin-angular``.

````
npm install eslint-plugin-angular --save-dev
````

### Usage

Enable the plugin in the ``.eslintrc``
````
{
  "plugins" : ["angular-off"]
}
````

Configure rules:

````
{
  "rules": {
      "angular-off/log" : 2
  }
}
````

### Rules

For rules documentation see [eslint-plugin-angular](https://github.com/Gillespie59/eslint-plugin-angular#rules).
All rules are defined in [eslint-plugin-angular](https://github.com/Gillespie59/eslint-plugin-angular).
This package is just a wrapper.

Prepend all rules with ``angular-off`` instead of ``angular``