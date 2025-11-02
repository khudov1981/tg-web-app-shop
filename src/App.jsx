import { useEffect } from 'react'

import { Header } from './components/Header/Header'
import { useTelegram } from './components/hooks/useTelegram'
import './App.css'

export const  App = () => {

  const {tg,  onToggleButton} = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [tg])

  

  return (
    <>
      <div>
        <Header/>
        <button onClick={onToggleButton}>toggle</button>
      </div>
    </>
  )
}


