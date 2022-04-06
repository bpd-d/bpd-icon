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

## Use custom CSS variables

There is possibility of changing svg color without setting a color attribute. It is enough to set custom css property called: `--{prefix}-icon-color` where prefix is a value set in JS initializer function (cui by default)
