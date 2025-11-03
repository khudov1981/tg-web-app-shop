import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { useTelegram } from './components/hooks/useTelegram'
import './App.css'
import { ProductList } from './components/ProductList/ProductList'
import { Form } from './components/Form/Form'

export const  App = () => {

  const {tg} = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [tg])

  

  return (
    <>
      <div>
        <Header/>
        
        < Routes>
          <Route index element={< ProductList />}/>
          <Route path={'form'} element={< Form />} />
        </Routes>
      </div>
    </>
  )
}


