import React from "react";

class RegisterPage extends React.Component {
  componentDidMount() {
    this.props.updateMeta(
      "Contact | Melrose Park ",
      "Get In Touch Today."
    );
  }

  render() {
    return (
      <div>
        <Register />
      </div>
    );
  }
}

export default RegisterPage;
