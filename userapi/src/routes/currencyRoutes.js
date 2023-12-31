const express = require('express');
const router = express.Router();
const fetch = require('node-fetch'); 

/**
 * @swagger
 * tags:
 *   name: Currency Conversion
 *   description: API pour la conversion de devises
 */

/**
 * @swagger
 * /convert:
 *   get:
 *     summary: Convertit un montant d'une devise à une autre
 *     tags: [Currency Conversion]
 *     parameters:
 *       - in: query
 *         name: amount
 *         required: true
 *         description: Montant à convertir
 *         schema:
 *           type: number
 *       - in: query
 *         name: fromCurrency
 *         required: true
 *         description: Devise d'origine
 *         schema:
 *           type: string
 *       - in: query
 *         name: toCurrency
 *         required: true
 *         description: Devise de destination
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Conversion réussie
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 convertedAmount:
 *                   type: number
 *                 fromCurrency:
 *                   type: string
 *                 toCurrency:
 *                   type: string
 *                 rate:
 *                   type: number
 *       '404':
 *         description: Devise de destination non disponible
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       '500':
 *         description: Erreur serveur
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/convert', async (req, res) => {
    const { amount, fromCurrency, toCurrency } = req.query;

    try {
        const apiKey = process.env.EXCHANGERATE_API_KEY;
        console.log(apiKey);
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
