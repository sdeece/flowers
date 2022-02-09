import { IGlobalStores } from "../stores/RootStore"

/**
 * Базовый класс для глобального стора приложения
 */

class AbstractGlobalStore {
  constructor(public stores: IGlobalStores) {}
}

export default AbstractGlobalStore