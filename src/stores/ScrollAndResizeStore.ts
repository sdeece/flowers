import { observable, computed, action, reaction } from 'mobx'
import AbstractGlobalStore from "../utils/AbstractGlobalStore"
import { IGlobalStores } from './RootStore'

enum DEVICE_MODE {
  UNKNOWN = 'UNKNOWN',
  DESKTOP = 'DESKTOP',
  TABLET = 'TABLET',
  MOBILE = 'MOBILE',

}

class ScrollAndResizeStore extends AbstractGlobalStore {
  @observable deviceMode = DEVICE_MODE.UNKNOWN

  constructor(stores: IGlobalStores) {
    super(stores)
    this.startDispatchingResizeEvents()
    reaction(() => document.documentElement.offsetWidth, () => console.log(123))
  }

  @computed get isMobile() {
    return this.deviceMode === DEVICE_MODE.MOBILE
  }

  @computed get isTablet() {
    return this.deviceMode === DEVICE_MODE.TABLET
  }

  @computed get isDesktop() {
    return this.deviceMode === DEVICE_MODE.DESKTOP
  }

  @action startDispatchingResizeEvents() {
    const toDeviceMode = () => {
      const screenWidth = document.documentElement.offsetWidth
      if (screenWidth <= 767) return DEVICE_MODE.MOBILE
      if (screenWidth <= 1152) return DEVICE_MODE.TABLET
      return DEVICE_MODE.DESKTOP
    }

    this.deviceMode = toDeviceMode()
  }

  @action.bound scrollPageToElement(cssSelector, conf?) {
    const elem = cssSelector ? document.querySelector(cssSelector) : null
    const scrollConf = { behavior: 'smooth', ...conf }
    elem.scrollIntoView(scrollConf)
  }
}

export {
  ScrollAndResizeStore,
  DEVICE_MODE,
}