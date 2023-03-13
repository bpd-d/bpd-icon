# bpd-icon

Web component that handles SVG icons

# Supports

Currently component supports icons in format of XML - created from path elements - see cui-icons.

# How to

To use package on environment first you need to import icons package

Call `window.initCuiIcon(iconPack, options?)`
where options

- prefix - custom prefix value. Default is 'cui'

In your html use `<cui-icon name="your-icon-name" ratio="$ratio" color="$color"></cui-icon>`
where:

- $ratio - is a mulitplier for icon size. Value is multiplied by 20 and set as width and height
- $color - any valid CSS color string - black is default
- $padding - number - 2 is default - amount of padding in px added to host element

## Use custom CSS variables

There is possibility of changing svg color without setting a color attribute. It is enough to set custom css property called: `--{prefix}-icon-color` where prefix is a value set in JS initializer function (cui by default)

## Example initialization

Below example show how to initialize icon component with direct scripts import:

Example link to icons:
https://cdn.jsdelivr.net/npm/bpd-cui-icons@latest/cui-icons.js

Link to icon itself:
https://cdn.jsdelivr.net/npm/bpd-icon@latest/dist/cuiIcon.js

In yout main script call this line:
`window.initCuiIcon(CuiIconsPack);`

> `CuiIconsPack` comes from icons library

For more details about icons visit library github page:
https://github.com/bpd-d/cui-icons

## Create wrapper

In case you want control
