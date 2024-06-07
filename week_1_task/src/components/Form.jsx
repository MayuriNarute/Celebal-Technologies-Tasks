import { Form, Col, Row, InputGroup, Button } from "react-bootstrap";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Forms = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    countrycode:"",
    phone: "",
    country: "",
    city: "",
    pan: "",
    aadhar: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    let validationErrors = {};

    // Regex patterns
    const namePattern = /^[A-Za-z]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const phonePattern = /^\d{10}$/;
    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    const aadharPattern = /^\d{12}$/;

    // Validation checks
    if (!formData.firstName)
      validationErrors.firstName = "First Name is required";
    else if (!namePattern.test(formData.firstName))
      validationErrors.firstName = "First Name is invalid";

    if (!formData.lastName) validationErrors.lastName = "Last Name is required";
    else if (!namePattern.test(formData.lastName))
      validationErrors.lastName = "Last Name is invalid";

    if (!formData.username) validationErrors.username = "Username is required";

    if (!formData.email) validationErrors.email = "Email is required";
    else if (!emailPattern.test(formData.email))
      validationErrors.email = "Email is invalid";

    if (!formData.password) validationErrors.password = "Password is required";
    else if (!passwordPattern.test(formData.password))
      validationErrors.password =
        "Password must be minimum eight characters, at least one letter and one number";

    if (!formData.phone) validationErrors.phone = "Phone Number is required";
    else if (!phonePattern.test(formData.phone))
      validationErrors.phone = "Phone Number must be 10 digits";

    if (!formData.country) validationErrors.country = "Country is required";

    if (!formData.city) validationErrors.city = "City is required";

    if (!formData.pan) validationErrors.pan = "Pan No is required";
    else if (!panPattern.test(formData.pan))
      validationErrors.pan = "Pan No is invalid";

    if (!formData.aadhar) validationErrors.aadhar = "Aadhar No is required";
    else if (!aadharPattern.test(formData.aadhar))
      validationErrors.aadhar = "Aadhar No is invalid";

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/result", { state: { formData } });
    }
  };

  return (
    <div className="container mt-3">
      <Form autoComplete="off" method="post" onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicFname">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              {errors.firstName && (
                <span className="error">{errors.firstName}</span>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicLname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="lastName"
                onChange={handleChange}
                value={formData.lastName}
                required
              />
              {errors.lastName && (
                <span className="error">{errors.lastName}</span>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formBasicuname">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoComplete="off"
            type="text"
            placeholder="Enter username"
            onChange={handleChange}
            value={formData.username}
            name="username"
            required
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            autoComplete="off"
            onChange={handleChange}
            value={formData.email}
            name="email"
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </Form.Group>
        <Form.Label>Password</Form.Label>

        <InputGroup className="mb-3">
          <Form.Control
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            name="password"
            autoComplete="new-password"
            onChange={handleChange}
            value={formData.password}
            required
          />
          <Button variant="outline-primary" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </Button>
        </InputGroup>
        {errors.password && <span className="error">{errors.password}</span>}

        <Form.Group as={Row} controlId="formCountryCode" className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Col sm={2}>
            <Form.Control as="select" onChange={handleChange} name="countrycode" value={formData.countrycode} required>
              <option value="+1">+1 (US)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+91">+91 (IN)</option>
              {/* Add more country codes as needed */}
            </Form.Control>
          </Col>

          <Col lg={10}>
            <Form.Control
              type="tel"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              name="phone"
              required
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </Col>
        </Form.Group>
        <Row>
          <Col sm={5}>
            <Form.Label>Country</Form.Label>
            <Form.Control
              as="select"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required>
              <option defaultChecked>Select Country</option>

              <option>India</option>
              <option>USA</option>
              <option>Bangladesh</option>
            </Form.Control>
            {errors.country && <span className="error">{errors.country}</span>}
          </Col>
          <Col>
            <Form.Label>City</Form.Label>
            <Form.Control
              as="select"
              name="city"
              onChange={handleChange}
              value={formData.city}
              required>
              <option defaultChecked>Select City</option>
              <option>Pune</option>
              <option>New York</option>
              <option>Dhaka</option>
            </Form.Control>
            {errors.city && <span className="error">{errors.city}</span>}
          </Col>
        </Row>
        <Row className="mt-3">
          <Col sm={5}>
            <Form.Label>Aadhar Card No.</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter aadhar card number"
              name="aadhar"
              onChange={handleChange}
              required
            />
            {errors.aadhar && <span className="error">{errors.aadhar}</span>}
          </Col>
          <Col>
            <Form.Label>PAN Card No.</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter PAN card number"
              onChange={handleChange}
              name="pan"
              required
            />
            {errors.pan && <span className="error">{errors.pan}</span>}
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Forms;
