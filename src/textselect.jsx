var React = require('react')
var lodashMap = require('lodash.map')

var TextSelect = React.createClass({
  propTypes: {
    options: React.PropTypes.any.isRequired,
    active: React.PropTypes.any.isRequired,
    onChange: React.PropTypes.func.isRequired,
    className: React.PropTypes.string
  },

  handleChange (event) {
    this.props.onChange(event, event.target.value, this.props.options[event.target.value])
  },

  render () {
    var {options, active, className} = this.props

    var classes = 'react-textselect'
    if (className) classes += ' ' + className

    return (
      <span className={classes}>
      {options[active]}

      <select className='react-textselect-input' onChange={this.handleChange} value={active}>
        {lodashMap(options, function mapOptions (value, key) {
          return (
            <option value={key} key={key}>{value}</option>
          )
        })}
        </select>
      </span>
    )
  }
})

module.exports = TextSelect
