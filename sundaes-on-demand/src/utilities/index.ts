/**
 *
 * @function formatCurrency
 * Format number as currency (US Dollars)
 *
 * @para {number} currency
 * @returns {string} number formatted as currency
 *
 * @example
 *      formatCurrency(0)
 *      / => $0.00
 *
 *  * @example
 *      formatCurrency(1.5)
 *      / => $1.50
 *
 */

export const formatCurrency = (currency) => {
    return new Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }).format(currency);
};
