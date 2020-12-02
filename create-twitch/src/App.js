import React from 'react';
import { Router, Route } from 'react-router-dom';

import Header from './components/Header';
import StreamCreate from './components/streams/StreamCreate';
import StreamList from './components/streams/StreamList';
import StreamDelete from './components/streams/StreamDelete';
import StreamView from './components/streams/StreamView';
import StreamEdit from './components/streams/StreamEdit';

import history from './history';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Route path="/" exact component={StreamList}/>
        <Route path="/streams/create" exact component={StreamCreate}/>
        <Route path="/streams/delete" exact component={StreamDelete}/>
        <Route path="/streams/view" exact component={StreamView}/>
        <Route path="/streams/edit" exact component={StreamEdit}/>
      </Router>
    </div>
  );
}

export default App;
