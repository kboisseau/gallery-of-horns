
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import Form from 'react-bootstrap/Form'

import './App.css';
import SelectedBeast from './SelectedBeast.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalDisplaying: false,
      beastPic: '',
      beastDesc: '',
      data: data
    }
  }

  openModalHandler = (photo, description) => {
    this.setState({
      isModalDisplaying: true,
      beastPic: photo,
      beastDesc: description
    });
  };

  closeModalHandler = () => {
    this.setState({
      isModalDisplaying: false,
    });
  };

  handleSelect = (e) => {
    let selected = e.target.value;
    console.log(selected);
    if (selected === 'one') {
      let newData = data.filter((beast) => beast.horns === 1);
      this.setState({ data: newData });
    } else if (selected === 'two') {
      let newData = data.filter((beast) => beast.horns === 2);
      this.setState({ data: newData });
    } else if (selected === 'three') {
      let newData = data.filter((beast) => beast.horns === 3);
      this.setState({ data: newData });
    } else if (selected === 'hundred') {
      let newData = data.filter((beast) => beast.horns === 100);
      this.setState({ data: newData });
    } else {

    }
  }

  render() {
    return (
      <>
        <Header />
        <Form>
          <Form.Group>
            <Form.Select
              onChange={this.handleSelect}
            >
              <option>Choose number of horns to filter by</option>
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
              <option value="hundred">More than three</option>
            </Form.Select>
          </Form.Group>
        </Form>
        <Main
          data={this.state.data}
          openModalHandler={this.openModalHandler}
        />
        <Footer />
        <SelectedBeast
          closeModalHandler={this.closeModalHandler}
          isModalDisplaying={this.state.isModalDisplaying}
          beastPic={this.state.beastPic}
          beastDesc={this.state.beastDesc}
        />
      </>
    );
  }
}

export default App;