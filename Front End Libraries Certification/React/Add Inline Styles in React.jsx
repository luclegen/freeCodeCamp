const styles = {
  color: "purple",
  fontSize: 40,
  border: "2px solid purple"
}
// change code above this line
class Colorful extends React.Component {
  render() {
    // change code below this line
    return (
      <div style={{color: styles.color, fontSize: styles.fontSize, border: styles.border}}>Style Me!</div>
    );
    // change code above this line
  }
};
