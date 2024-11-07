import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Result({ input }) {
    // passing all state values for investment options to the 
    // calculateInvestmentResults to generate investment outcomes
    const resultsData = calculateInvestmentResults(input);
    // intiail investment will be the the first years end of year value minus the interest and minus the anual investment
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment

    console.log(resultsData);

    return(
        <table id ="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map((yearData) => {
                    // Total Interest will be :
                    // (the end of year value minus the (anualInvestment * the # of years the investment has been alive) ) 
                    // all subtracted by the initial investment 
                    const totalInterest = 
                    (yearData.valueEndOfYear - (yearData.annualInvestment * yearData.year)) - initialInvestment;

                    // invested capital
                    const totalAmountInvested = initialInvestment + (yearData.annualInvestment * yearData.year);
                    return <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                })}
            </tbody>

        </table>
    )
}