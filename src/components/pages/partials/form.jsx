import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Thank you,your email has been recorded " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="mrg-form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="form-design"
            value={this.state.value}
            onChange={this.handleChange}
            required
          />

          <div className="dis">
            <input
              type="date"
              placeholder="Date of birth"
              className="form-design-2 mrg-right"
              required
            />

            <select className="form-design-2">
              <option value="">Nigeria</option>
              <option selected value="">
                United state{" "}
              </option>
              <option value="">Great britian</option>
              <option value="">South Africa</option>
            </select>
          </div>

          <button type="submit" className="newsletter-btn">
            Let's do this
          </button>

          <div>
            <label class="container-2">
              <input type="checkbox" />
              <span class="checkmark"></span>
              Yes! Send me CUEBALL news, products, events and promotions by
              email consistent with <span className="middle">Optimal plus Privacy & Cookie Policy.</span> I can
              unsubscribe at any time by changing my email preferences by emailing
              privacy_policy@optimalsplus.com with ATTN:Email Opt-Out. 
              
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
