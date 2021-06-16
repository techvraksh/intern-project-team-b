import React ,{useState} from "react";
import styled from "styled-components";
 
const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);
    return(
        <Nav>
            <Logo href="">
                TechV<span>raksh</span>
            </Logo>
            <div onClick={() => setIsOpen(isOpen)}>
                <span />
                <span />
                <span />
            </div>
            <Menu isOpen={isOpen}>
                <MenuLink href="">Contact Us</MenuLink>
                <MenuLink href="">About</MenuLink>
                <MenuLink href="">Cart</MenuLink>
                <MenuLink href="">Notifications</MenuLink>
            </Menu>
        </Nav>
    );
};

const div = styled.div`
display: none;
flex-direction: coloumn;
cursor: pointer;

span{
    hieght:2px;
    width:25px;
    backgrund:#7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
}
@media(max-width: 768px){
    display: flex;
}
`;

const MenuLink = styled.div`
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
`;

const Nav = styled.div`
padding : 0 2 rem;
display : flex;
justify-contact: space-between;
align-item: center;
flex-wrap: wrap;
background: white;
position: absolute;
top: 0;
left: 0;
right: 0;
`;

const Logo = styled.a`
padding : 1rem 0;
color: #7b7fda ;
text-decoration: none;
font-weight: 800;
font-size:1.7rem;

span{
    font-weight: 300;
    font-size: 1.3rem;
}
`;

const Menu = styled.div`
display: flex;
justify-content: sapce-between;
align-item: center;
position: relative;

@media(max-width: 768px){
    overflow: hidden ;
    flex-direction: coloumn;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px":"0")};
    transition: max-height 0.3s ease-in;
}
`;

export default Navbar;