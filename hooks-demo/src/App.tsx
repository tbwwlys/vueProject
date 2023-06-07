import { useState } from 'react'
import { MyComponent } from './demo'
import { MyAjax } from './ajax'

const App = () => {

  return (
    <>
      <h1>Hello React!</h1>
      <MyComponent></MyComponent>
      <MyAjax></MyAjax>
    </>
  )

}

export default App