import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function Profile(){
  return (
    <div>
      <marquee loop = "5">
      <h1>Welcome t my profile</h1>
      </marquee>
      <h1> My Name</h1>
      <h2> Full Stack Developer</h2>
    </div>
  );
}

function Dashboard(){
  return <h1> Dashboard Page</h1>
}


function App(){
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Dashboard/>}/>
        <Route path = "/profile" element = {<Profile/>}/>
        <Route path = "/dashboard" element = {<Settings/>}/>
      </Routes>

      <Link to = "/profile"><button>Go to profile</button></Link>
      <br/>
      <Link to = "/dashboard"><button>Go to Dashboard</button></Link>
    </Router>
  );
}

export default App;