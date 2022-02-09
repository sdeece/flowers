import { observable, computed } from 'mobx'
import { ScrollAndResizeStore } from './ScrollAndResizeStore'

interface IGlobalStores {
  scrollAndResizeStore: ScrollAndResizeStore
}

class RootStore {
  @observable.shallow private _appStores: IGlobalStores = {} as IGlobalStores

  constructor() {
    this._appStores.scrollAndResizeStore = new ScrollAndResizeStore(this.stores)
  }

  @computed get stores() {
    return this._appStores
  }
}

const store = new RootStore()

export {
  store as RootStore,
  IGlobalStores,
}