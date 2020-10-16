import * as React from 'react';
import { Provider } from 'react-redux';
import { buildTodoStore } from './redux/store';
import Container from './redux/Container';

/* react-reduxのProviderでラッピングしたコンポーネントをレンダリング */
class App extends React.Component {
  public render() {
    return (
      <Provider store={buildTodoStore()}>
        <Container/>
      </Provider>
    );
  }
}


export default App;
