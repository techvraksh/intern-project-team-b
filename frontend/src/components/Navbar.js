import React,{useState} from "react";
import styled from "styled-components";
import { CartIcon } from "../icons";

const Navbar = (props) => {
    
    const [isOpen, setIsOpen] = useState(false);

    return(
        <Nav>
            <Logo href="/">
                <img src="/image/TechVraksh.jpg" alt=""></img> TechV<span>raksh</span>
            </Logo>
            <Hamburger onClick= {() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>
            <Menu isOpen={isOpen}>
                <MenuLink href="/"><button>Home</button></MenuLink>
                <MenuLink href="/about"><button>About</button></MenuLink>
                <MenuLink href="/signin"><button>SignUp</button></MenuLink>
                <MenuLink href="/cart"><button><CartIcon></CartIcon>Cart({props.totalQuantity})</button></MenuLink>
            </Menu>
        </Nav>
    );
      };
    
const Hamburger = styled.div`
display: none;
flex-direction: column;
padding: 2rem 1.8rem;
cursor: pointer;

span{
    height: 2px;
    width: 20px;
    background:#7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
}

@media (max-width: 768px)
{
   display: flex;
}
`;

const MenuLink = styled.a`
 padding: 0rem 0rem;
 cursor: pointer;
 text-align: center;
 diaplay: inline-block:
 text-decoration: none;
 color: black;
 transition: all 0.3s ease-in;
 font-size: 1.4rem;

 button {
    width: 100px;
    height: 40px;
    background-color: rgb(92,233,233);
    color: black; 
    border-color: rgb(92,233,233);
    &:hover {
        background-color: white;
        border-color: rgb(72,72,72)
    }
  }
  svg{
      width: 20px;
      margin-right:5px;
      display: align-left;

  }
`;

const Nav = styled.div`
padding : 0 rem;
display: flex;
height: 5rem;
justify-content: space-between;
align-item:center;
flex-wrap: wrap ;
background: rgb(92,233,233);
`;

const Logo = styled.a`
padding: 1.01rem 1rem;
color: black;
text-decoration:none;
font-weight: 800;
font-size: 2.5rem;
img{
width:20px;
}
span{
font-weight:600;
font-size: 2rem;
}
`;
const Menu = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: relative;

@media (max-width: 768px)
{
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px":"0")};
    transition: max-height 0.3s ease-in;
}
`;
export default Navbar;

