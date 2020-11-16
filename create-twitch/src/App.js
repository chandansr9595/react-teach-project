import {BrowserRouter, Route} from 'react-router-dom';

import SreamCreate from './components/streams/StreamCreate';
import StreamDelete from './components/streams/StreamDelete';
import StreamEdit from './components/streams/StreamEdit';
import StreamList from './components/streams/StreamList';
import StreamShow from './components/streams/StreamShow';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={SreamCreate} />
        <Route path="/streams/edit" exact component={StreamEdit} />
        <Route path="/streams/delete" exact component={StreamDelete} />
        <Route path="/streams/show" exact component={StreamShow} />
      </BrowserRouter>
    </div>
  );
}

export default App;
