import React from 'react'
import BvIcon from './lib'

const App = () => {
  return (
    <BvIcon 
      variant={'duo'} 
      name={'cube'} 
      size={4} 
      
      title="Título do ícone" 
      label='Descrição do ícone' 
      hidden={true} />
  )
}

export default App