const toCurrency = function (value) {
    return new Intl.NumberFormat('it-IT', {style: 'currency', currency: 'EUR'}).format(value);
};


module.exports = {toCurrency};
