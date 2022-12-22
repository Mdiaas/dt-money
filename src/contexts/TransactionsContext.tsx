import {  createContext, ReactNode, useEffect, useState } from "react";


interface Transaction{
    id: number;
    description : string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

interface TransactionContextType{
    transactions: Transaction[]
}
export const TransactionsContext = createContext({} as TransactionContextType);

interface TransactionsContextProviderProps{
    children: ReactNode
}
export function TransactionsContextProvider({children} :TransactionsContextProviderProps){

    const [transactions, settransactions] = useState<Transaction[]>([]);

    async function loadTransactions(){
        const response = await fetch('http://localhost:3000/transactions')
        const data = await response.json();
        settransactions(data);
        
    }

    useEffect(() => {
        loadTransactions();
    }, [])


    return (
        <TransactionsContext.Provider value = {{ transactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}