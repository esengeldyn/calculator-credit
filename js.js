document.getElementById('btn').addEventListener('click', function () {
    function calculateMonthlyPayment(S, i, n) {
        const P = (S * i) / (1 - Math.pow(1 + i, -n));
        return P;
    }

    const creditSum = Number(document.getElementById('numOne').value)
    const creditTerm = Number(document.getElementById('numTwo').value)
    const creditPercent = 0.12 / Number(document.getElementById('numThree').value)

    const resultPay = calculateMonthlyPayment(creditSum, creditPercent, creditTerm )

    const totalPay = resultPay * creditTerm
    const overpaymentPay = totalPay - creditSum

    console.log((resultPay).toFixed(2))
    console.log((totalPay).toFixed(2))
    console.log((overpaymentPay).toFixed(2) )

    document.getElementById('result-pay').textContent = resultPay.toFixed(2);
    document.getElementById('result-pay-two').textContent = totalPay.toFixed(2);
    document.getElementById('result-pay-three').textContent = overpaymentPay.toFixed(2);
})