import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

export default function Navbar() {
    const { budgetMode, setBudgetMode } = useContext(BudgetContext);

    function BudjetOn() {
        setBudgetMode(!budgetMode);
    }

    return (
        <nav style={{ padding: "10px", background: "#eee" }}>
            <button onClick={BudjetOn}>
                {budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}
            </button>
        </nav>
    );
}
