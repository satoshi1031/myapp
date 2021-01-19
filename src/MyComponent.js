import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Button, Badge } from "react-bootstrap";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 0 };
  }

  render() {
    return (
      <div className={this.props.className}>
        <Jumbotron>
          <h1>{this.props.title}</h1>
          <p>{this.props.text}</p>
          <p>
            <Button
              variant="primary"
              onClick={() => {
                this.setState({ clickCount: this.state.clickCount + 1 });
              }}
            >
              Learn more
              <Badge variant="warning" className="ml-2">
                {this.state.clickCount}
              </Badge>
            </Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default MyComponent;