const React = require('react');

const Utils = require('./utils.js');


const BudgetCard = function (props) {
    const budget = props['budget'];

    return (
        <div key={budget['id']} className="col-sm-6">
            <div className="card" style={{margin: '10px'}}>
                <div className="card-header">
                    {budget['name']} <sub>{Utils.toCurrency(budget['weekly_budget'])}</sub>
                    <span className="float-right">
                        <form className="form-inline">
                            <strong style={{marginRight: '1em'}}><em>{Utils.toCurrency(budget['amount'])}</em></strong>
                            <div className="dropdown">
                                <button className="btn btn-sm btn-outline-secondary" type="button" data-toggle="dropdown">⚙</button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <button className="dropdown-item" onClick={(e)=>{e.preventDefault()}}>TODO</button>
                                    <button className="dropdown-item" onClick={(e)=>{e.preventDefault()}}>TODO</button>
                                </div>
                            </div>
                        </form>
                    </span>
                </div>
                <div className="card-body">
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
