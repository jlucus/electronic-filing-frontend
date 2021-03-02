import React, { useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";


import { GlobalStyle } from "../../styles/globalStyles";
import MainWrapper from "../layout-containers/MainWrapper";
import MainContent from "../layout-containers/MainContent";
import { Nav, NavItem, NavbarToggler, SubNav, SubNavItem, TabNav, TabNavItem } from "../navbar";

import Footer from "./Footer";
import Header from "./Header";


const NavContainer = styled.div`
  overflow-y: auto;

  @media only screen and (max-width: 767px) {
    display: none;
  }

  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    max-width: 768px;
    margin: 0 auto;
  }

  @media only screen and (min-width: 1200px) {
    display: none;
  }
`;
const TabNavContainer = styled.div`
  overflow-y: auto;

  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    margin: 0 auto;
    background-color: white;
  }
`;

const NavbarCollapseWrapper = styled.div`
  background-color: ${(props) => props.theme.titleBgColor};
  padding: 0.25rem;
  position: relative;
  display: block;
  @media only screen and (min-width: 1200px) {
    display: none;
  }
`;

const TabNavbarTitle = styled.h1`
  font-size: 1rem;
  color: ${(props) => props.theme.titleColor};
  text-align: center;
`;

function HomeLayout({
  headerMenu = null,
  footer = null,
  tabMenu = null,
  tabMenuStyles = null,
  children,
}) {
  let headerMenuContent = null;
  let tabMenuContent = null;

  const [navbarOpened, setNavbarOpened] = useState(false);

  const [collapseNavbarMenuKey, setCollapseNavbarMenuKey] = useState(null);

  function onNavbarMenuClicked(event, navbarMenu) {
    event.preventDefault();
    if (collapseNavbarMenuKey === navbarMenu.id) {
      setCollapseNavbarMenuKey(null);
    } else {
      setCollapseNavbarMenuKey(navbarMenu.id);
    }
  }

  if (headerMenu) {
    headerMenuContent = (
      <NavContainer>
        <NavbarCollapseWrapper>
          <TabNavbarTitle>MENU</TabNavbarTitle>
          <NavbarToggler
            isOpen={navbarOpened}
            onClick={() => setNavbarOpened(!navbarOpened)}
          />
        </NavbarCollapseWrapper>
        <Nav aria-label="main menu" role="navigation" show={navbarOpened} >
          {headerMenu.map((eachMenu, idx) => (
            <NavItem
              key={eachMenu.id}
              role="none"
              selected={eachMenu.selected}
            >
              {eachMenu.children ? (
                <a
                  aria-expanded={eachMenu.id === collapseNavbarMenuKey ? "true" : "false"}
                  aria-haspopup={"true"}
                  href="#" role="menuitem"
                  tabIndex={idx}
                  onClick={(event) => onNavbarMenuClicked(event, eachMenu)}
                >
                  {eachMenu.title}
                  {(eachMenu.id === collapseNavbarMenuKey) ?
                    (<i className="icon-chevron-down" />) : (<i className="icon-chevron-up" />)}
                </a>
              ) : (
                <Link href={eachMenu.link}>
                  <a aria-haspopup={"false"} role="menuitem" tabIndex={idx}>
                    {eachMenu.title}
                  </a>
                </Link>
              )}

              {eachMenu.children && (eachMenu.id === collapseNavbarMenuKey) && (
                <SubNav role="menu">
                  {eachMenu.children.map((eachChildMenu) => (
                    <SubNavItem key={eachChildMenu.key} role="none">
                      <Link href={eachChildMenu.link}>
                        <a aria-expanded="false" aria-haspopup="false" role="menuitem" 	tabIndex="-1">
                          {eachChildMenu.title}
                        </a>
                      </Link>
                    </SubNavItem>
                  ))}
                </SubNav>
              )}
            </NavItem>
          ))}
        </Nav>
      </NavContainer>
    );
  }

  if (tabMenu) {
    tabMenuContent = (
      <TabNavContainer>
        <TabNav role="menu" aria-label="tab">
          {tabMenu.map((eachMenu, idx) => (
            <TabNavItem role="none"
              key={eachMenu.id}
              selected={eachMenu.selected}
              {...tabMenuStyles}
            >
              <Link href={eachMenu.link}>
                <a role="menuitem" tabindex="-1" aria-haspopup="false" aria-expanded="false">
                  {eachMenu.title}
                </a>
              </Link>
            </TabNavItem>
          ))}
        </TabNav>
      </TabNavContainer>
    );
  }

  return (
    <div>
      <Head>
        <title>City of San Diego Electronic Filing System</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <GlobalStyle />
      <Header
        headerMenu={headerMenu}
        navbarOpened={navbarOpened}
        setNavbarOpened={setNavbarOpened}
      />
      <MainWrapper>
        <MainContent className="l-padding-mobile-hd">
          {headerMenuContent}
          {tabMenuContent}
          {children}
        </MainContent>
      </MainWrapper>
      {footer ? <Footer /> : null}
    </div>
  );
}

export default HomeLayout;
