import Navbar from "./components/Navbar";
import Tasks from "./components/Tasks";
import styled from "styled-components";
import Login from "./Login";
import SignUp from "./SignUp";

const Footer = styled.footer`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <>
      <Navbar />
      <Tasks />
      <Footer className="text-muted">
        {" "}
        © {new Date().getFullYear()} Chizi Victor
      </Footer>
    </>
  );
}

export default App;
