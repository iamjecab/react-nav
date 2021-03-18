import React, { useState } from "react";
import styled from "styled-components";
import { FaEnvira } from "react-icons/fa";

const NavWrapper = styled.div`
    width: 100%;
    min-height: 10rem;
    background-color: pink;
    display: flex;
    position: relative;
    #hidden {
        @media (max-width: 680px) {
            display: flex;
            position: absolute;
            height: 25rem;
            background-color: pink;
            top: 100px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-top: 2px solid black;
            a {
                margin: 1.5rem;
            }
        }
    }
`;

const LogoContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    h1 {
        font-size: 3rem;
        margin-left: 2%;
        cursor: pointer;
        :hover {
            color: white;
        }
    }

    svg {
        color: green;
        cursor: pointer;
        :hover {
            color: white;
        }
    }
`;

const LeftContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: flex-end;
    align-items: center;
`;

const LinkContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    a:nth-child(4) {
        margin-right: 3%;
    }
    @media (max-width: 680px) {
        display: none;
    }
`;

const Link = styled.a`
    font-size: 2.2rem;
    margin: 0 1.5%;
    text-decoration: none;
    color: black;
    border-top: 2.5px solid transparent;
    :hover {
        color: white;
        border-top: 2.5px solid white;
    }
`;

const Button = styled.button`
    transform: translateY(-15rem);
    @media (max-width: 680px) {
        transform: translateX(0);
        margin-right: 2rem;
        padding: 0 2rem;
        height: 3rem;
        outline: 1.5px solid transparent;
        border: none;
        background-color: white;
        font-size: 1.5rem;
        cursor: pointer;
        :hover {
            background-color: black;
            color: white;
        }
    }
`;

const Navbar = () => {
    const [open, useOpen] = useState(false);
    const Toggle = () => {
        useOpen(!open);
    };
    return (
        <>
            <NavWrapper>
                <LogoContainer>
                    <FaEnvira size={40} />
                    <h1>Company Name</h1>
                </LogoContainer>
                <LeftContainer>
                    <LinkContainer id={open ? "hidden" : null}>
                        <Link href="#">Home</Link>

                        <Link href="#">About Us</Link>

                        <Link href="#"> Blog</Link>

                        <Link href="#">Contact</Link>
                    </LinkContainer>
                    <Button onClick={Toggle}>Open</Button>
                </LeftContainer>
            </NavWrapper>
        </>
    );
};

export default Navbar;
