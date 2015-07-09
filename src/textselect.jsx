var React = require('react');

var TextSelect = React.createClass({

  propTypes: {
    options: React.PropTypes.array.isRequired,
    active: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired,
    className: React.PropTypes.string
  },

  handleChange(event) {
    this.props.onChange(event, this.props.options.indexOf(event.target.value), event.target.value);
  },

  render() {
    var {options, active, className} = this.props;

    var classes = 'react-textselect';
    if (className) classes += ' ' + className;

    return (
      <span className={classes}>
      {options[active]}

      <select className='react-textselect-input' onChange={this.handleChange}>
        {options.map(function mapOptions(value, index) {
          return (
            <option key={index}>{value}</option>
          );
        })}
        </select>
      </span>
      );
  }

});

module.exports = TextSelect;
