import * as React from 'react';
import Header from './component/Header';
import Router from './Router';
import  "./styles/style.css";
import { Main } from './styles/index';

/* react-reduxのProviderでラッピングしたコンポーネントをレンダリング */
class App extends React.Component {
  public render() {
    return (
      <Main>
        <Header />
        <main className="main">
          <Router/>
        </main>
      </Main>
    );
  }
}


export default App;
