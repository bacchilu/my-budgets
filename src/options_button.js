const React = require("react");

export default function (props) {
  const onClick = function (e) {
    e.preventDefault();
  };

  const rechargeAll = function (e) {
    e.preventDefault();
    props.rechargeAll();
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-outline-secondary"
        type="button"
        data-toggle="dropdown"
      >
        ⚙
      </button>
      <div className="dropdown-menu dropdown-menu-right">
        <button className="dropdown-item" onClick={onClick}>
          New Budget
        </button>
        <button className="dropdown-item" onClick={rechargeAll}>
          Recharge All
        </button>
      </div>
    </div>
  );
};
