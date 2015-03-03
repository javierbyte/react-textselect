# React Text Select

Simple component to put a invisible `Select` dropdown over a text.

![](docs/img1.png)
![](docs/img2.png)
![](docs/img3.png)

## Installation

    npm install react-textselect --save

## Usage.

    var Textselect = require('react-textselect');

    <TextSelect
        options={['total', 'unique', 'lorem ipsum dolor sit amet']}
        active={this.state.selectedOption}
        onChange={this.onTextSelectChange}/>


### Add styles.

Dont forget to add styles.

    <link rel="stylesheet" href="/node_modules/react-textselect/textselect.css">
