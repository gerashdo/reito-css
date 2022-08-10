import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { SearchProvider } from './context/SearchProvider'
import { DateScreen } from './screens/DateScreen'
import { LoginScreen } from './screens/LoginScreen'
import { RegisterScreen } from './screens/RegisterScreen'
import { SearchScreen } from './screens/SearchScreen'

function ReitoApp() {

  return (
    <div className="App">
      <SearchProvider>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='login' element={ <LoginScreen /> } />
            <Route path='register' element={ <RegisterScreen /> } />
            <Route path='/' element={ <SearchScreen /> } />
            <Route path='date' element={ <DateScreen /> } />
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </div>
  )
}

export default ReitoApp
