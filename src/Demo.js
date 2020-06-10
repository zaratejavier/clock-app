import React from "react";
export default class Demo extends React.Component {
  state = {
    ballX: 0,
    ballY: 10,
    dx: 5,
    dy: 4,
  };
  componentDidMount() {
    this.ticker = setInterval(() => {
      this.tick();
    }, 200);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.ballX > length - ballSize) {
      this.setState({
        dx: -5,
        ballX: length - ballSize,
      });
    }
    if (prevState.ballX < 1) {
      // console.log(prevState.ballX);
      this.setState({
        dx: 5,
        ballX: 1,
      });
    }
    if (prevState.ballY > length - ballSize) {
      this.setState({
        dy: -4,
        ballY: length - ballSize,
      });
    }
    if (prevState.ballY < 1) {
      this.setState({
        dy: 4,
        ballY: 1,
      });
    }
  }
  tick() {
    const { ballX, ballY, dx, dy } = this.state;
    // console.log(ballX);
    // console.log(ballY);
    const newBallX = ballX + dx;
    const newBallY = ballY + dy;
    this.setState({
      ballX: newBallX,
      ballY: newBallY,
    });
  }
  render() {
    const { ballX, ballY } = this.state;
    const r = ballX % 255;
    const g = (ballX * 1.2) % 255;
    const b = (ballX * 2.2) % 255;
    const rgb = `rgb(${r}, ${g}, ${b})`;
    return (
      <div style={styles}>
        <div style={{ ...ballStyles, top: ballY, left: ballX, color: rgb }}>
          DVD
        </div>
      </div>
    );
  }
}
const length = 400;
const ballSize = 50;
const ballStyles = {
  position: "absolute",
  // background: "red",
  // color: "rgb(255,55,10)",
  width: `${ballSize}px`,
  height: `${ballSize}px`,
  borderRadius: `100%`,
  fontSize: "8px",
  fontSize: "18px",
};
const styles = {
  position: "relative",
  background: "grey",
  margin: "auto",
  border: "1px solid",
  width: `${length}px`,
  height: `${length}px`,
};