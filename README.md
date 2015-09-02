# React Text Select

Simple component to put an invisible `Select` dropdown over a text.

[Live demo](http://javierbyte.github.io/react-textselect/)

![react-textselect screenshot](docs/screenshot.png)

## Installation

```
npm install react-textselect --save
```

## Usage.

```jsx
var TextSelect = require('react-textselect');

<TextSelect
  options={['text select', 'react component', 'dropdown']}
  active={this.state.selectedOption}
  onChange={this.onTextSelectChange} />
```


### Add styles.

Dont forget to add styles.

```html
<link rel="stylesheet" href="/node_modules/react-textselect/dist/textselect.css">
```

# Build

If you want to build this from source, you will need babel and less.

```
npm install -g babel less
```

And run the pre publish script

```
npm run prepublish
```
