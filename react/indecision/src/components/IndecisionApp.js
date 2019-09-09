import React from 'react';

import Action from './Action';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.info('will unmount');
  }

  handleDeleteOption = option => {
    this.setState(prevState => ({
      options: prevState.options.filter(item => {
        return item !== option;
      }),
    }));
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleAddOption = option => {
    if (!option) {
      return 'Not valid';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Duplicate!';
    } else {
      this.setState(prevState => ({ options: prevState.options.concat(option) }));
    }
  };

  handlePick = () => {
    const rand = Math.floor(Math.random() * this.state.options.length);
    const selectedOption = this.state.options[rand];

    this.setState(() => ({ selectedOption }));
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  render() {
    const subtitle = 'Trust the Computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action hasOptions={this.state.options.length} handlePick={this.handlePick} />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}
