import React from "react";

// reactstrap components
import { Container } from "reactstrap";

class InsertTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      content: "",
    };
    this.eventTest = this.eventTest.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  eventTest(e) {
    e.preventDefault();

    const post = {
      name: this.state.name,
      content: this.state.content,
    };

    fetch("http://localhost:7777/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    });
  }

  render() {
    const { name, content } = this.state;
    const { eventTest, onChange } = this;
    return (
      <>
        <Container className="content">
          <div>
            <h4>insert Test</h4>
            <form onSubmit={eventTest}>
              <div>
                <label>name:</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={onChange}
                />
              </div>
              <div>
                <label>content:</label>
                <input
                  type="text"
                  name="content"
                  value={content}
                  onChange={onChange}
                />
              </div>
              <div>
                <button type="submit">전송</button>
              </div>
            </form>
          </div>
        </Container>
      </>
    );
  }
}

export default InsertTest;
