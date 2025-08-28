import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    if (status === "success") clearFields();
    setShowAlert(true);
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (isValidEmail) onValidated({ EMAIL: email });
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to our Newsletter<br></br> & Never miss latest updates
            </h3>
            {status === "sending" && (
              <Alert
                variant="info"
                onClose={() => setShowAlert(false)}
                dismissible
              >
                Sending...
              </Alert>
            )}
            {status === "error" && (
              <Alert
                variant="danger"
                onClose={() => setShowAlert(false)}
                dismissible
              >
                {message}
              </Alert>
            )}
            {status === "success" && (
              <Alert
                variant="success"
                onClose={() => setShowAlert(false)}
                dismissible
              >
                {message}
              </Alert>
            )}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
