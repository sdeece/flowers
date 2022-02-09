import * as React from 'react'
import GlobalStore from './context/globalStore'
import { RootStore } from './stores/RootStore'
import { Page } from './Page'

const App = () => (
  <GlobalStore.Provider value={RootStore.stores}>
    <Page />
  </GlobalStore.Provider>
)

export default App
