
let React = require('react');
let IconBase = require('react-icon-base');

export default class IoBatteryHalf extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m34.2 15c0.5 0 0.8 0.3 0.8 0.8v8.4c0 0.5-0.3 0.8-0.8 0.8h-2.9v4.2c0 0.5-0.3 0.8-0.8 0.8h-29.7c-0.5 0-0.8-0.3-0.8-0.8v-18.4c0-0.5 0.3-0.8 0.8-0.8h29.7c0.5 0 0.8 0.3 0.8 0.8v4.2h2.9z m-1.7 7.5v-5h-3.7v-5h-6.3l2.5 15h3.8v-5h3.7z"/></g>
            </IconBase>
        );
    }
}
