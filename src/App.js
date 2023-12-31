import Greet from './components/Greet';
import {Header}  from './components/Header'
import {Balance} from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import './App.css';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <>
    <GlobalProvider className="App">
      {/* < Greet/> */}

      < Header/>
             <div>
             < Balance/>
             </div>  
      < IncomeExpenses/> 
      < TransactionList/>
      <AddTransaction/>
    </GlobalProvider>
    </>
  );
}

export default App;
