import { createContext, useState } from "react";

const BudgetContext = createContext();

export default BudgetContext;

export function BudgetProvider({ children }) {
    const [BudgetMode, setBudgetMode] = useState(false);

    return (
        <BudgetContext.Provider
            value={{ BudgetMode, setBudgetMode }}
        >
            {children}
        </BudgetContext.Provider>
    );
}
