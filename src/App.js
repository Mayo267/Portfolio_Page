import Container from 'react-bootstrap/Container'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'

import Greeting from './Pages/Greeting'
import Nav from './Components/Nav'


function App() {
  return (
    <div className="App">

      <Container className='sidebar' >
        <Nav />
      </Container>
       
      <Container className='page' >
        <Greeting />
      </Container>
    </div>
  );
}

export default App;
