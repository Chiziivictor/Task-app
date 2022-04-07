import { Link, TextField } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;
const Wrapper = styled.div`
  min-width: clamp(18rem, 50vw, 27rem); ;
`;
const Footer = styled.footer`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const textField = {
  width: "100%",
};

const SignUp = () => {
  return (
    <>
      <Container className="text-center">
        <Wrapper className="form-signin">
          <form>
            <h1 className="h2 mb-5 fw-normal">Sign Up</h1>

            <div className="form-floating">
              <TextField
                label="Username"
                type="username"
                autoComplete="off"
                sx={textField}
                className="mb-3"
              />
            </div>
            <div className="form-floating">
              <TextField
                label="Email"
                type="email"
                autoComplete="off"
                sx={textField}
                className="mb-3"
              />
            </div>
            <div className="form-floating">
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="off"
                sx={textField}
              />
            </div>

            <div className="checkbox my-3 d-flex justify-content-between">
              <label>
                <input type="checkbox" value="remember-me" /> I accept the terms
                and conditions
              </label>
            </div>
            <button className="w-50 mt-5 btn btn-lg btn-primary" type="submit">
              Sign up
            </button>
          </form>
        </Wrapper>
      </Container>
      <Footer className="text-muted">
        {" "}
        © {new Date().getFullYear()} Chizi Victor
      </Footer>
    </>
  );
};

export default SignUp;
