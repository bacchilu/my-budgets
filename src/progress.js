const React = require('react');

const Utils = require('./utils.js');


const getPercData = function (value, total) {
    return value * 100 / total;
};


const Bar = function (props) {
    const total = props['weekly_budget'];

    const v = Math.max(0, total - props['weekly_amount']);
    const p = getPercData(v, total);

    return <div className="progress"><div className="progress-bar" style={{width: `${p}%`}}>{Utils.toCurrency(v)}</div></div>;
};


const BarTot = function (props) {
    const total = props['amount'] + props['weekly_amount'];

    const v1 = Math.max(0, total - props['weekly_budget']);
    const p1 = getPercData(v1, total);

    const v2 = Math.max(0, props['weekly_budget'] - props['weekly_amount']);
    const p2 = getPercData(v2, total);

    return (
        <div className="progress">
            <div className="progress-bar bg-danger" style={{width: `${p1}%`}}>{Utils.toCurrency(v1)}</div>
            <div className="progress-bar" style={{width: `${p2}%`}}>{Utils.toCurrency(v2)}</div>
        </div>
    );
};


module.exports = {Bar, BarTot};
