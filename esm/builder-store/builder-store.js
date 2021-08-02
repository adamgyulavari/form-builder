import { createStore } from 'redux';
import builderReducer from './builder-reducer';
var builderStore = createStore(builderReducer, {
  initialized: false
});
export default builderStore;