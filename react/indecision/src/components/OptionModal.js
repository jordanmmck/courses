import React from 'react';
import Modal from 'react-modal';

export default class OptionModal extends React.Component {
  componentDidMount() {
    Modal.setAppElement('body');
  }

  render() {
    return (
      <Modal
        isOpen={!!this.props.selectedOption}
        contentLabel="selected option"
        onRequestClose={this.props.handleClearSelectedOption}
        closeTimeoutMS={200}
        className="modal"
      >
        <h3 className="modal__title">Selected Option</h3>
        {this.props.selectedOption && <p className="modal__body">{this.props.selectedOption}</p>}
        <button className="button" onClick={this.props.handleClearSelectedOption}>
          Close
        </button>
      </Modal>
    );
  }
}
