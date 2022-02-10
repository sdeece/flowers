import { useContext } from 'react'
import GlobalStores from '../context/globalStore'
import { IGlobalStores } from '../stores/RootStore'

const useScrollAndResizeStore = () => {
  const stores: IGlobalStores = useContext(GlobalStores)
  return stores.scrollAndResizeStore
}

export {
  useScrollAndResizeStore,
}