import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function Dashboard(){
  return <h1> Dashboard Page</h1>
}
function Profile(){
  return <h1> Profile Page</h1>
}
function Settings(){
  return <h1> Settings Page</h1>
}

function App(){
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Dashboard/>}/>
        <Route path = "/profile" element = {<Profile/>}/>
        <Route path = "/settings" element = {<Settings/>}/>
      </Routes>
    </Router>
  );
}

export default App;