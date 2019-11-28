import React from 'react';
import FormBuilder from './form-builder';
import ComponentsContext from './components-context';

const App = ({ componentMapper, componentProperties, pickerMapper }) => (
  <ComponentsContext.Provider value={{ componentMapper, componentProperties, pickerMapper }}>
    <FormBuilder />
  </ComponentsContext.Provider>
);

export default App;
