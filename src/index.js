import React from "react";
import ReactDOM from "react-dom";

import * as Utils from "./utils.js";
import * as Model from "./model.js";
import * as Modal from "./modal.js";
import BudgetCard from "./budget_card.js";
import OptionsButton from "./options_button.js";
import * as Progress from "./progress.js";
import * as Reducer from "./reducer.js";
import * as Observers from "./observers.js";

const App = function (props) {
  const [budgets, dispatch] = React.useReducer(Reducer.reducer, null);
  const Methods = Reducer.getMethods(dispatch);

  const [error, setError] = React.useState(null);
  React.useEffect(function () {
    Model.getBudgets()
      .then(function (budgets) {
        Methods.init(budgets);
      })
      .catch(function (e) {
        setError(e);
      });
  }, []);

  if (error !== null)
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">My Budgets</span>
        </nav>
        <div className="container">
          <div
            style={{ marginTop: "10px" }}
            className="alert alert-danger"
            role="alert"
          >
            <p>Errore nel caricamento dei budget!</p>
            <hr />
            <p>
              <em>{error.message}</em>
            </p>
          </div>
        </div>
      </React.Fragment>
    );

  if (budgets === null)
    return (
      <div
        style={{ marginTop: "50px" }}
        className="d-flex justify-content-center"
      >
        <div
          style={{ width: "3rem", height: "3rem" }}
          className="spinner-border"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );

  const rechargeAll = function () {
    Modal.confirm(`Sicuro di voler ricaricare tutti i budget?`, function () {
      budgets.forEach(function (budget, index) {
        Methods.recharge(budget);
      });
    });
  };

  const total = budgets.reduce(function (acc, item) {
    return acc + item["amount"];
  }, 0);
  const totalWeeklyBudget = budgets.reduce(function (acc, item) {
    return acc + item["weekly_budget"];
  }, 0);
  const totalWeeklyAmount = budgets.reduce(function (acc, item) {
    return acc + item["weekly_amount"];
  }, 0);

  const items = budgets.map(function (budget) {
    const spend = function () {
      Modal.open(budget, function (value) {
        Methods.spend(budget, value);
      });
    };
    const recharge = function () {
      Modal.confirm(
        `Sicuro di voler ricaricare ${Utils.toCurrency(
          budget["weekly_budget"]
        )}?`,
        function () {
          Methods.recharge(budget);
        }
      );
    };
    return (
      <BudgetCard
        key={budget["id"]}
        budget={budget}
        spend={spend}
        recharge={recharge}
      />
    );
  });

  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          My Budgets <sub>{Utils.toCurrency(totalWeeklyBudget)}</sub>
        </span>
        <form className="form-inline">
          <span className="navbar-text" style={{ marginRight: "20px" }}>
            <strong>
              <em>{Utils.toCurrency(total)}</em>
            </strong>
          </span>
          <OptionsButton rechargeAll={rechargeAll} />
        </form>
      </nav>
      <div className="container">
        {/*<div style={{marginTop: '4px'}}><Progress.BarTot amount={total} weekly_budget={totalWeeklyBudget} weekly_amount={totalWeeklyAmount} /></div>*/}
        <div style={{ marginTop: "4px" }}>
          <Progress.Bar amount={total} weekly_amount={totalWeeklyAmount} />
        </div>
        <div className="row">{items}</div>
      </div>
      <Observers.Loading />
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
