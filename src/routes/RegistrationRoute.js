import React, { Component } from "react";
import RegistrationForm from "../components/RegistrationForm";

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleRegistrationSuccess = () => {
    const { history } = this.props;
    history.push("/login");
  };

  render() {
    return (
      <section className="registration">
        <p className="reg-p">
          Practice learning a language with the spaced reptition revision
          technique.
        </p>
        <div className="wrapper">
          <h2>Sign up</h2>

          <RegistrationForm
            onRegistrationSuccess={this.handleRegistrationSuccess}
          />
        </div>
      </section>
    );
  }
}

export default RegistrationRoute;
