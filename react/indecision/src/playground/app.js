class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: [],
    };
  }
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

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(option) {
    this.setState(prevState => ({
      options: prevState.options.filter(item => {
        return item !== option;
      }),
    }));
  }

  handlePick() {
    console.info(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Not valid';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Duplicate!';
    }
    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  }

  render() {
    const subtitle = 'Trust the Computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action hasOptions={this.state.options.length} handlePick={this.handlePick} />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined,
    };
  }

  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision',
};

const Action = props => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>
        What should I do?
      </button>
    </div>
  );
};

const Option = props => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={e => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Add option</p>}
      {props.options.map(option => (
        <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption} />
      ))}
    </div>
  );
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
