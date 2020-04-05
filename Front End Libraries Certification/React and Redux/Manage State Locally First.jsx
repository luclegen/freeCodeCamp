class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // add handleChange() and submitMessage() methods here
  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }
  submitMessage(){
    this.setState({
      input: '',
      messages: this.state.messages.concat(this.state.input)
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }
        <input onChange={this.handleChange.bind(this)} value={this.state.input} />
        <button onClick={this.submitMessage.bind(this)}/>
        <ul>{this.state.messages.map(i => <li>{i}</li>)}</ul>
        { /* change code above this line */ }
      </div>
    );
  }
};
