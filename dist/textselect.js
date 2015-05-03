'use strict';

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var React = require('react');

var TextSelect = React.createClass({
    displayName: 'TextSelect',

    propTypes: {
        options: React.PropTypes.array.isRequired,
        active: React.PropTypes.number.isRequired,
        onChange: React.PropTypes.func.isRequired
    },

    handleChange: function handleChange(event) {
        this.props.onChange(event, this.props.options.indexOf(event.target.value), event.target.value);
    },

    render: function render() {
        var _props = this.props;
        var options = _props.options;
        var active = _props.active;
        var onChange = _props.onChange;
        var className = _props.className;

        var other = _objectWithoutProperties(_props, ['options', 'active', 'onChange', 'className']);

        var classes = 'react-textselect';

        if (className) classes += ' ' + className;

        return React.createElement(
            'span',
            { className: classes },
            options[active],
            React.createElement(
                'select',
                { className: 'react-textselect-input', onChange: this.handleChange },
                options.map(function (value, index) {
                    return React.createElement(
                        'option',
                        { key: index },
                        value
                    );
                })
            )
        );
    }

});

module.exports = TextSelect;
