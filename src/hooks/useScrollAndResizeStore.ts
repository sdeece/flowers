import { useContext } from 'react'
import GlobalStores from '../context/globalStore'
import { IGlobalStores } from '../stores/RootStore'

const useStore = () => {
  const stores: IGlobalStores = useContext(GlobalStores)
  return stores.scrollAndResizeStore
}

export {
  useStore,
}