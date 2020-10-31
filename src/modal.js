const React = require("react");

const Modal = require("./libs/modal.js");

import * as Utils from "./utils.js";
import * as Progress from "./progress.js";

const Budget = function ({ budget, ...props }) {
  const [value, setValue] = React.useState("");
  const onChange = function (e) {
    setValue(e.target.value);
  };

  const inputEl = React.useRef(null);
  React.useEffect(function () {
    setTimeout(function () {
      inputEl.current.focus();
    }, 500);
  }, []);

  const onSubmit = function (e) {
    e.preventDefault();
    props.hide();
    props.action(parseFloat(value));
  };

  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">{budget["name"]}</h5>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form onSubmit={onSubmit}>
        <div className="modal-body">
          <div className="form-group">
            <label>Quanto hai speso?</label>
            <input
              ref={inputEl}
              type="number"
              step="0.01"
              className="form-control"
              value={value}
              onChange={onChange}
              required
            />
            <small className="form-text text-muted">
              Il tuo budget è {Utils.toCurrency(budget["amount"])}
            </small>
          </div>
          {/*<Progress.BarTot amount={budget['amount']} weekly_budget={budget['weekly_budget']} weekly_amount={budget['weekly_amount']} />*/}
          <Progress.Bar
            amount={budget["amount"]}
            weekly_amount={budget["weekly_amount"]}
          />
        </div>
        <div className="modal-footer">
          <button type="submit" className="btn btn-outline-primary">
            Sure!
          </button>
        </div>
      </form>
    </div>
  );
};

const Confirm = function ({ message, ...props }) {
  const action = function (value) {
    return function () {
      props.action(value);
      props.hide();
    };
  };

  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Confirm</h5>
      </div>
      <div className="modal-body">{message}</div>
      <div className="modal-footer" style={{ display: "block" }}>
        <button
          className="btn btn-outline-danger float-left"
          onClick={action(false)}
        >
          No
        </button>
        <button
          className="btn btn-outline-primary float-right"
          onClick={action(true)}
        >
          Sì
        </button>
      </div>
    </div>
  );
};

export const open = function (budget, action) {
  Modal.render(Budget, { budget, action });
};

export const confirm = function (message, cb) {
  const action = function (value) {
    if (value) cb();
  };
  Modal.render(Confirm, { message, action });
};
