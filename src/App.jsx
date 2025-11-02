import { useEffect } from 'react'
import './App.css'

import { useTelegram } from './components/hooks/useTelegram'





export const  App = () => {

  const {tg,  onToggleButton} = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [tg])

  

  return (
    <>
      <div>
        
        <button onClick={onToggleButton}>toggle</button>
      </div>
    </>
  )
}


