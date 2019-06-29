# vue-zipcode-input

It's a lightweight component that give you the regex (and validate) of the different zipcode of countries. 

## Demo

![Output sample](/demo/zipcode-input.gif)

## Why ?

I see the nice project vue-tel-input, you can choose your country and it's give you the good phone number for your country.
I think that could be cool to have the same component for the zipcode.

## The props

That will come really soon guys !

## The events

| Property value | Arguments | Description |
| -------------- | --------- | ----------- |
| `@get-result-regex` | `String` | Fires when the input changes, give the result of the test of the regex (true or false)
| `@get-regex` | `Object` | Fires when the input changes, give the raw regex (Could be cool for vee-validate !)
| `@get-input` | `String` | Fires when the input changes, give the current value of input

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```