const express = require('express');
const router = express.Router();
const fetch = require('node-fetch'); 

router.get('/convert', async (req, res) => {
    const { amount, fromCurrency, toCurrency } = req.query;

    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/8b0e1282b470e044364e1983/latest/${fromCurrency}`);
        const data = await response.json();

        const rate = data.conversion_rates[toCurrency];
        if (rate === undefined) {
            return res.status(404).send(`Taux de change non disponible pour ${toCurrency}`);
        }

        const convertedAmount = amount * rate;
        res.json({
            convertedAmount: convertedAmount,
            fromCurrency: fromCurrency,
            toCurrency: toCurrency,
            rate: rate
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur lors de la conversion');
    }
});

module.exports = router;
