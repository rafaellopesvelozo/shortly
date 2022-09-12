import React from 'react';
import Header from '../Templates/Header/index'

import Footer from '../Templates/Footer';
import Content from '../Templates/Content';
import './styles.css'

function App() {
  return (
    <div className="Container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
