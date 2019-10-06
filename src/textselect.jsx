var React = require('react')
var PropTypes = require('prop-types')
var lodashMap = require('lodash.map')

var TextSelect = React.createClass({
  propTypes: {
    options: PropTypes.any.isRequired,
    active: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string
  },
  
  getInitialState() {
    return {
      selectedOption: this.props.active
    }
  },
  componentWillReceiveProps(nextProps) {
    (this.props.active !== nextProps.active) && this.setState({ selectedOption: nextProps.active });
  }

  handleChange (event) {
    this.setState({
      selectedOption: event.target.value
    });
    
    this.props.onChange(event, event.target.value, this.props.options[event.target.value])
  },

  render () {
    var {options, active, className} = this.props

    var classes = 'react-textselect'
    if (className) classes += ' ' + className

    return (
      <span className={classes}>
      {options[active]}

      <select className='react-textselect-input' onChange={this.handleChange} value={this.state.selectedOption}>
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
