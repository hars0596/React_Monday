import React, { Component } from "react";
import { DatePicker, DatePickerInput } from "rc-datepicker";
import "moment/locale/it.js";
import "rc-datepicker/lib/style.css";
import "./App.css";
import {
  Button,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Carousel,
  Modal,
  Tab,
  Row,
  Col,
  PageHeader,
  Label
} from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      CurrentCompanyName: null,
      CurrentPackage: null,
      ExpectedPackage: null,
      CurrentLocation: null,
      PermanentLocation: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        technology: "",
        CurrentCompanyName: "",
        CurrentPackage: "",
        ExpectedPackage: "",
        CurrentLocation: "",
        PermanentLocation: ""
      },
      selectedDate: "",
      techData: ["Select", "Web Development"],
      eduData: ["Select", "BCA", "Btech"],
      desigData: ["Select", "Web Developer"],
      collegeData: [
        "Select",
        "Lovely Professional University",
        "Chandigarh University"
      ]
    };
    this.onChange = this.onChange.bind(this);
  }
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  onChange(date) {
    this.setState({
      selectedDate: date
    });
  }

  render() {
    return (
      <div>
        <span>
          <PageHeader className="border" className="">
            <h1>
              <Label>Resume Builder</Label>
            </h1>
          </PageHeader>
        </span>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="clearfix">
            <Col sm={2}>
              <Nav bsStyle="pills" stacked className="background">
                <NavItem eventKey="first">Personal Imformation</NavItem>
                <NavItem eventKey="second">Qualification</NavItem>
                <NavItem eventKey="third">Search Resume</NavItem>
              </Nav>
            </Col>
            <Col sm={8}>
              <Tab.Content animation>
                <Tab.Pane eventKey="first">
                  <div className="wrapper">
                    <div className="form-wrapper">
                      <form>
                        <div className="firstname">
                          <label htmlFor="firstName">First Name</label>
                          <input
                            placeholder="First Name"
                            type="text"
                            name="firstName"
                            noValidate
                          />
                        </div>
                        <div className="lastname">
                          <label htmlFor="firstName">last Name</label>
                          <input
                            placeholder="Last Name"
                            type="text"
                            name="lastName"
                            noValidate
                          />
                        </div>
                        <div className="email">
                          <label htmlFor="email">Email</label>
                          <input
                            placeholder="Email"
                            type="email"
                            name="email"
                            noValidate
                            onChange={this.handleChange}
                          />
                        </div>
                        <div className="gender">
                          Gender:
                          <input type="radio" value="option1" checked={true} />
                          Male
                          <input type="radio" value="option2" />
                          Female
                          <input type="radio" value="option3" />
                          Others
                        </div>
                        <div>
                          DOB:
                          <DatePickerInput
                            onChange={this.onChange}
                            value={this.state.selectedDate}
                            className="my-custom-datepicker-component"
                          />
                          {/* this renders only a fixed datepicker */}
                        </div>
                        <div className="technology">
                          Marital Status:
                          <select
                            value={this.state.value}
                            onChange={this.handleChange}
                          >
                            <option value="default" selected="selected">
                              Select
                            </option>
                            <option value="">Unmarried</option>
                            <option value="">Married</option>
                          </select>
                        </div>
                        <div className="email">
                          <label htmlFor="email">Mobile No</label>
                          <input
                            placeholder="Email"
                            type="email"
                            name="email"
                            noValidate
                            onChange={this.handleChange}
                          />
                        </div>
                        <div className="createAccount">
                          <button type="submit" onSubmit="">
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Tab 2 content</Tab.Pane>
                <Tab.Pane eventKey="third">Tab 3 content</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        ;
      </div>
    );
  }
}

export default App;
