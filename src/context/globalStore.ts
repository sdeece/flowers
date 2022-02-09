import { createContext } from 'react'
import { IGlobalStores, RootStore } from '../stores/RootStore'

const GlobalStores = createContext<IGlobalStores>(RootStore.stores)

export default GlobalStores