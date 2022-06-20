import React from 'react';
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal
        size="lg"
        show={this.props.isModalDisplaying}
        onHide={this.props.closeModalHandler}>
        <Modal.Body>
          <img
            src={this.props.beastPic}
            alt={this.props.beastDesc}
            title={this.props.beastDesc}
          />
        </Modal.Body>
        <Modal.Footer>{this.props.beastDesc}</Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;