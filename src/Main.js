import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';

class Main extends React.Component {

  render() {

    let beasts = [];
    this.props.data.forEach((beast) => {
      beasts.push(
        <HornedBeast
          key={beast._id}
          image_url={beast.image_url}
          title={beast.title}
          description={beast.description}
          keyword={beast.keyword}
          horns={beast.horns}
          openModalHandler={this.props.openModalHandler}
        />)
    });


    return (
      <main>
        {beasts}
      </main>
    );
  }
}

export default Main;