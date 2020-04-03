class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// change code below this line
CampSite.defaultProps = { name: 'CamperBot' }
class Camper extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <p>{ this.props.name }</p>
      );
    }
}
Camper.defaultProps = { name: 'CamperBot' }
Camper.propTypes = { name: PropTypes.string.isRequired }
