// let visible = false;
// const toggle = () => {
//   visible = !visible;
//   render();
// };

// const appRoot = document.getElementById('app');

// const render = () => {
//   const template = (
//     <div>
//       <h1>Vis Toggle</h1>
//       <button onClick={toggle}>{visible ? 'hide' : 'show'}</button>
//       {visible && <p>message</p>}
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };

// render();
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      visible: false,
    };
  }
  toggle() {
    this.setState(prevState => {
      return {
        visible: !prevState.visible,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Vis Toggle</h1>
        <button onClick={this.toggle}>{this.state.visible ? 'hide' : 'show'}</button>
        {this.state.visible && <p>{'message'}</p>}
      </div>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById('app'));
