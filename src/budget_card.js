const React = require('react');

const Utils = require('./utils.js');
const Progress = require('./progress.js');


const BudgetCard = function (props) {
    const budget = props['budget'];

    return (
        <div key={budget['id']} className="col-sm-6">
            <div className="card" style={{margin: '10px'}}>
                <div className="card-header">
                    {budget['name']} <sub>{Utils.toCurrency(budget['weekly_budget'])}</sub>
                    <span className="float-right"><strong><em>{Utils.toCurrency(budget['amount'])}</em></strong></span>
                </div>
                <div className="card-body">
                    {/*<Progress.Bar weekly_budget={budget['weekly_budget']} weekly_amount={budget['weekly_amount']} />*/}
                    <Progress.BarTot amount={budget['amount']} weekly_budget={budget['weekly_budget']} weekly_amount={budget['weekly_amount']} />
                    <p style={{marginTop: '4px'}}>
                        <span className="card-subtitle mb-2 text-muted">{Utils.toCurrency(budget['weekly_amount'])}</span>
                        <button className="btn btn-outline-primary float-right" onClick={props.spend}>Add cost</button>
                    </p>
              </div>
            </div>
        </div>
    );
};


module.exports = BudgetCard;
