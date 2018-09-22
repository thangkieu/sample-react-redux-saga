import React from 'react';
import PropTypes from 'prop-types';

class LoginPage extends React.PureComponent {
  static propTypes = {
    onSignIn: PropTypes.func.isRequired,
    errors: PropTypes.array,
    signingIn: PropTypes.bool
  };

  constructor(p) {
    super(p);

    this.state = {
      email: '', // 'daud.abas@2359media.com',
      password: '' //'2359Media@'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onSignIn({ email: this.state.email, password: this.state.password });
  }

  render() {
    const { signingIn } = this.props;

    return (
      <div
        className="login-page"
        style={{ backgroundImage: `url('./img/agenda-analysis-business-990818.jpg')` }}
      >
        <form className="card shadow" onSubmit={this.handleSubmit}>
          <div className="card-header">
            <h5 className="card-title mb-0 text-uppercase text-primary">LOGIN</h5>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="">USER ID</label>
              <input
                required
                type="text"
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <div className="text-right">
                <a className="help-text">Forgot user id?</a>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input
                type="password"
                required
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <div className="text-right">
                <a className="help-text">Forgot password?</a>
              </div>
            </div>
            <div className="text-right">
              <button disabled={signingIn} className="btn btn-primary text-uppercase">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default LoginPage;
