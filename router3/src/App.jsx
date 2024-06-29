import React from 'react';
import GithubUsers from './components/GithubUsers';

const App = () => {
  return (
    
    <div className="App">
      <container>
        <routes>
        <Route path="/" element={<GithubUsers />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
        </routes>
      </container>
      <h1>GitHub User Search</h1>
      <GithubUsers />
    </div>
  );
};

export default App;
