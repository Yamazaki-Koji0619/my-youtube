import * as React from 'react';
import Header from './component/Header';
import Router from './Router';
import  "./styles/style.css";

/* react-reduxのProviderでラッピングしたコンポーネントをレンダリング */
class App extends React.Component {
  public render() {
    return (
      <>
        <Header />
        <main className="main">
          <Router/>
        </main>
      </>
    );
  }
}


export default App;
