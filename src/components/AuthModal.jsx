import { useEffect, useState } from "react";
import { Modal, Tab, Tabs } from "react-bootstrap";
import { useAuth } from "../context/AuthProvider";

export const AuthModal = () => {
  const {
    isModalOpen,
    closeModal,
    switchAuthForm,
    register,
    login,
    isLoading,
    formType,
    formData,
    updateAuthForm,
  } = useAuth();
  const [key, setKey] = useState("login");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formType === "login") {
      login(formData.email, formData.password);
    } else {
      register(formData.email, formData.password);
    }
  };

  useEffect(() => {
    if (key === "login") {
      switchAuthForm();
    } else {
      switchAuthForm();
    }
  }, [key]);

  return (
    <>
      <Modal show={isModalOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h2 className="text-center text-primary">Authenticate Yourself!</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container text-start">
            <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
              <Tab eventKey="login" title="Login">
                <div className="login py-3">
                  <form className="needs-validation" onSubmit={handleSubmit}>
                    <div className="form-group pt-2 pb-1 was-validated text-start">
                      <label className="form-label " htmlFor="email">
                        Email address
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        id="email"
                        onChange={(event) =>
                          updateAuthForm("email", event.target.value)
                        }
                        value={formData.email}
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter your email address
                      </div>
                    </div>
                    <div className="form-group pt-2 pb-1 was-validated text-start">
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                      <input
                        className="form-control"
                        type="password"
                        id="password"
                        onChange={(event) =>
                          updateAuthForm("password", event.target.value)
                        }
                        value={formData.password}
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter your Password
                      </div>
                    </div>
                    <div className="form-group pt-2 pb-1 form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="check"
                      />
                      <label className="form-check-label" htmlFor="check">
                        Remember me!
                      </label>
                    </div>
                    <button
                      className={`${
                        isLoading ? "btn-disabled" : "btn"
                      } btn-success w-100`}
                      type="submit"
                      value="SIGN IN"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </Tab>
              <Tab eventKey="signup" title="Sign Up">
                <div className="signup py-3">
                  <form className="needs-validation" onSubmit={handleSubmit}>
                    <div className="form-group pt-2 pb-1 was-validated text-start">
                      <label className="form-label " htmlFor="signup-email">
                        Email address
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        id="signup-email"
                        onChange={(event) =>
                          updateAuthForm("email", event.target.value)
                        }
                        value={formData.email}
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter your email address
                      </div>
                    </div>
                    <div className="form-group pt-2 pb-1 was-validated text-start">
                      <label className="form-label" htmlFor="signup-password">
                        Password
                      </label>
                      <input
                        className="form-control"
                        type="password"
                        id="signup-password"
                        onChange={(event) =>
                          updateAuthForm("password", event.target.value)
                        }
                        value={formData.password}
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter your Password
                      </div>
                    </div>
                    <div className="form-group pt-2 pb-1 form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="check"
                      />
                      <label className="form-check-label" htmlFor="check">
                        Remember me!
                      </label>
                    </div>
                    <input
                      className={`${
                        isLoading ? "btn-disabled" : "btn"
                      } btn-success w-100`}
                      type="submit"
                      value="SIGN UP"
                    />
                  </form>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
