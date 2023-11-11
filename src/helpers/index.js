const formattedNumber = (number) => number.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) && number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });


export { formattedNumber }