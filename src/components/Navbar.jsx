import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.nav`
  height: 80px;
  padding: 0 10%;
`;
const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const Navbar = () => {
  const [image, setImage] = useState("");

  useEffect(() => {
    const random = Math.floor(Math.random() * 1000);

    const getImageUrl = async () => {
      const response = await fetch(`https://picsum.photos/id/${random}/info`);
      setImage(await response.json());

      console.log(image);
    };
    getImageUrl();
  }, []);

  return (
    <Container className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#"
          style={{ color: "white", fontWeight: "bold" }}
        >
          Task App
        </a>
        <div>
          <Image src={image.download_url} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
