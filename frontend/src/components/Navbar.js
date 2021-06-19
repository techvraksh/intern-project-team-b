import React,{useState} from "react";
import styled from "styled-components";
 
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <Nav>
            <Logo href="">
                TechV<span>raksh</span>
            </Logo>
            <Hamburger onClick= {() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>
            <Menu isOpen={isOpen}>
                <MenuLink href="">Contact Us</MenuLink>
                <MenuLink href="">About</MenuLink>
                <MenuLink href="">Cart(0)</MenuLink>
                <MenuLink href=""><button>Sign Up</button></MenuLink>
            </Menu>
        </Nav>
    );
};

const Hamburger = styled.div`
display: none;
flex-direction: column;
padding: 30px;
cursor: pointer;

span{
    hieght:2px;
    width:20px;
    backgrund:#7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
}
@media(max-width: 768px){
    display: flex;
}
`;

const MenuLink = styled.a`
padding: 1rem 2rem;
curse: pointer;
text-align:center;
text-decoration: none;
color: #67bc98;
transition: all 0.3s ease-in;
font-size:0.9rem;

&:hover{
    color: #7b7fda;
}
button {
    width:65px;
    height: 30px;
    background-color: #67bc98;
    color: white;
    border-radius:5px;
    &:hover {
        background-color:#7b7fda
    }
  }
`;

const Nav = styled.div`
padding : 0 2 rem;
display : flex;
justify-contact: space-between;
align-item: center;
flex-wrap: wrap;
background: white;
`;

const Logo = styled.a`
padding : 1rem 1rem;
color: #7b7fda ;
text-decoration: none;
font-weight: 800;
font-size:1.7rem;

span{
    font-weight: 400;
    font-size: 1.4rem;
}
`;

const Menu = styled.div`
display: flex;
justify-content: sapce-between;
align-item: center;
position: relative;

@media(max-width: 768px){
    overflow: hidden ;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px":"0")};
    transition: max-height 0.3s ease-in;
}
`;

export default Navbar;
