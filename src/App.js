import React, { Component } from 'react';
import Layout from '../src/components/layout/layout';



class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <p>A wrapped component
          </p>
        </Layout>
      </div>
    );
  }
}

export default App;
