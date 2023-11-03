import './App.scss';
import { QuotesProvider } from './Context/QuotesContext';
import Header from './components/Header/Header';
import QuotesTable from './components/QuotesTable/QuotesTable';

function App() {

  return (
    <div className="App">
      <QuotesProvider>
        <>
          <Header />
          <QuotesTable />
        </>
      </QuotesProvider>
    </div>
  )
}

export default App
