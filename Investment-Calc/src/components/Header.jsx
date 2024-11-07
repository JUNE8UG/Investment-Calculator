import investImg from "../assets/investment-calculator-logo.png"


export default function Header() {
    return (
        <header id="header">
            {/* Display Investment LOGO*/}
            <img src={investImg} id="header" alt="Logo showing a money bag" />
            <h1>MONEY MOGUL</h1>
            <h3>Investment Calculator</h3>
        </header>

    );
}