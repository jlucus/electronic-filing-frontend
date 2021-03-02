import React from 'react';
import styled from 'styled-components';
import Container from '../layout-containers/Container';
import Row from '../layout-containers/Row';
import Col from '../layout-containers/Col';

const CopyRightCol = styled(Col)`
  background: ${(props) => props.theme.primaryFooterBgColor};
`;

const MyFooter = styled.footer`
  background-color: ${(props) => props.theme.secondaryFooterBgColor};
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: #6e8393;
  }
`;

const FooterUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  @media screen and (min-width: 48em) {
    font-size: 11px;
    font-size:  0.6875rem;
  }
  & a {
    color: ${(props) => props.theme.secondaryFooterTextColor};
    text-decoration: none;
    &:hover {
      color: #6e8393;
    }
  }
`;

const P = styled.p`
  margin: 0 0 .5em;
  color: ${(props) => props.theme.primaryFooterTextColor};
  @media screen and (min-width: 48em) {
    font-size: 13px;
    font-size:  0.8125rem;
  }
`;
const PCopyRight = styled(P)`
  margin: 2.5em 0 0;
  @media screen and (min-width: 48em) {
    font-size: 11px;
    font-size:  0.6875rem;
  }
`;

const FooterWrapper = styled(Container)`
  background-color: ${(props) => props.theme.mainBgColor};
`;

const PrivacyWrapper = styled.div`
  background-color: ${(props) => props.theme.primaryBgColor};

  @media print {
    display: none;
  }

  & li {
    margin: 0 .25em;
    display: inline-block;
    color: ${(props) => props.theme.privacyTextColor};
  }

  & li:after {
    content: '|';
    margin-left: .65em;
  }
  & li:last-child::after {
    content: '';
  }
  & a {
    text-decoration: underline;
    color: ${(props) => props.theme.privacyTextColor};
    font-size: 13px;
    font-size:  0.8125rem;
  }
  & a:hover {
    color: ${(props) => props.theme.privacyTextHoverColor};
  }
`;

const SocialGroup = styled.ul`

  margin: 0;
  padding: 0;
  list-style: none;

  & li {
    margin: 0 .1em;
    display: inline-block;
    vertical-align: bottom;
  }

  & li:first-child {
    margin-left: 0;
  }

  & li:last-child {
    margin-right: 0;
  }

  & a {
    color: #37424a;
    display: block;
    width: 1.5em;
    height: 1.5em;
    line-height: 1.5em;
    text-align: center;
    border-radius: 2px;
    font-size: 16px;
    font-size:  1rem;

    text-decoration: none;
    background: ${(props) => props.theme.blockBgColor};
    opacity: 0.8;

    &:hover {
      color: #010101;
      opacity: 1;
    }
  }

  & a i {
    height: 1.5em;
    line-height: 1.5em;
    display: block;
    vertical-align: middle;
  }

  @media screen and (min-width: 48em) {
    margin: 0 .5em;
    display: inline-block;
    vertical-align: bottom;
  }

  & li {
    margin: .5em .25em 0;
  }

`;

const linkCouncilDistrictList = [
  {
    title: 'Councilmember Joe LaCava (District 1)',
    link: 'https://www.sandiego.gov/citycouncil/cd1',
  },
  {
    title: 'Council President Jennifer Campbell (District 2)',
    link: 'https://www.sandiego.gov/citycouncil/cd2',
  },
  {
    title: 'Council President Pro Tem Stephen Whitburn (District 3)',
    link: 'https://www.sandiego.gov/citycouncil/cd3',
  },
  {
    title: 'Councilmember Monica Montgomery (District 4)',
    link: 'https://www.sandiego.gov/citycouncil/cd4',
  },
  {
    title: 'Councilmember Marni von Wilpert (District 5)',
    link: 'https://www.sandiego.gov/citycouncil/cd5',
  },
  {
    title: 'Councilmember Chris Cate (District 6)',
    link: 'https://www.sandiego.gov/citycouncil/cd6',
  },
  {
    title: 'Councilmember Raul Campillo (District 7)',
    link: 'https://www.sandiego.gov/citycouncil/cd7',
  },
  {
    title: 'Councilmember Vivian Moreno (District 8)',
    link: 'https://www.sandiego.gov/citycouncil/cd8',
  },
  {
    title: 'Councilmember Sean Elo-Rivera (District 9)',
    link: 'https://www.sandiego.gov/citycouncil/cd9',
  },
];

const linkOfficesList = [
  {
    title: 'Office of Mayor Todd Gloria',
    link: 'https://www.sandiego.gov/mayor',
  },
  {
    title: 'City Attorney Mara W. Elliott',
    link: 'https://www.sandiego.gov/cityattorney',
  },
  {
    title: 'Ethics Commission',
    link: 'https://www.sandiego.gov/ethics',
  },
  {
    title: 'Office of the City Auditor',
    link: 'https://www.sandiego.gov/auditor',
  },
  {
    title: 'Office of the City Clerk',
    link: 'https://www.sandiego.gov/city-clerk',
  },
  {
    title: 'Office of the City Treasurer',
    link: 'https://www.sandiego.gov/treasurer',
  },
  {
    title: 'Office of the Independent Budget Analyst',
    link: 'https://www.sandiego.gov/iba',
  },
  {
    title: 'Personnel Department',
    link: 'https://www.sandiego.gov/empopp',
  },
  {
    title: 'San Diego City Employees\' Retirement System',
    link: 'https://www.sdcers.org/',
  },
];

function Footer() {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <FooterWrapper className="text-center--mobile">
      <MyFooter>
        <Row>
          <CopyRightCol span={3} className="l-padding-ad l-padding-vm">
            <div className="row l-padding-desktop-ld">
              <div className="twelve columns no-gutters">
                <img
                  src="/img/logo--white--sm.png"
                  alt="The City of San Diego - logo"
                  width="49"
                  height="39"
                />
                <SocialGroup>
                  <li><a href=""><i className="icon-facebook" /></a></li>
                  <li><a href=""><i className="icon-youtube" /></a></li>
                  <li><a href=""><i className="icon-twitter" /></a></li>
                  <li><a href=""><i className="icon-nextdoor" /></a></li>
                  <li><a href=""><i className="icon-linkedin" /></a></li>
                  <li><a href=""><i className="icon-instagram" /></a></li>
                </SocialGroup>
                <PCopyRight>
                  Copyrighted 2002-
                  {getCurrentYear()}
                  {' '}
                  <br />
                  City of San Diego. All rights reserved.
                </PCopyRight>
              </div>
            </div>
          </CopyRightCol>
          <Col span={9} noGutter>
            <Row className="l-padding-am">
              <Col span={4}>
                <P className=""><strong>Council Districts</strong></P>
                <FooterUl>
                  {linkCouncilDistrictList.map((eachLink, idx) => (
                    <li key={idx}>
                      <a href={eachLink.link}>{eachLink.title}</a>
                    </li>
                  ))}
                </FooterUl>
              </Col>
              <Col span={4}>
                <P className=""><strong>City Officials &amp; Independent Offices</strong></P>
                <FooterUl>
                  {linkOfficesList.map((eachLink, idx) => (
                    <li key={idx}>
                      <a href={eachLink.link}>
                        {eachLink.title}
                      </a>
                    </li>
                  ))}
                </FooterUl>
              </Col>
              <Col span={4}>
                <P className=""><strong>Government Agencies</strong></P>
                <FooterUl>
                  <li><a href="http://www.sandiegocounty.gov/">County of San Diego</a></li>
                  <li><a href="http://www.ca.gov/">State of California</a></li>
                  <li><a href="https://www.usa.gov/">Federal Government</a></li>
                </FooterUl>
              </Col>
            </Row>
          </Col>
        </Row>
      </MyFooter>
      <Col className="hide-on-desktop">
        <Row className="l-margin-td text-center">
          <Col sm={4} className="l-margin-bs">
            <a
              href="https://www.govtech.com/cdg/government-experience/Government-Experience-Awards-2020-Winners-Announced.html"
            >
              <img
                src="/img/gea-2020.png"
                style={{ height: 73, width: 178 }}
              />
            </a>
          </Col>
          <Col sm={4} className="l-margin-bs">
            <a
              href="https://whatworkscities.bloomberg.org/certification/"
            >
              <img
                src="/img/what-works-2020-footer-logo.png"
                style={{ height: 73, width: 195 }}
              />
            </a>
          </Col>
          <Col sm={4} className="l-margin-bs">
            <a
              href="https://www.govtech.com/dc/digital-cities/Digital-Cities-Survey-2020-Winners-Announced.html"
            >
              <img
                src="/img/digital-cities-2020.jpg"
                style={{ height: 73, width: 154 }}
              />
            </a>
          </Col>
        </Row>
      </Col>
      <PrivacyWrapper>
        <Container className="text-center l-padding-vd">
          <ul>
            <li><a href="https://www.sandiego.gov/disclaimers">Disclaimers</a></li>
            <li><a href="https://www.sandiego.gov/privacy-policy">Privacy Policy</a></li>
            <li><a href="https://www.sandiego.gov/accessibility">Accessibility</a></li>
            <li><a href="https://www.sandiego.gov/translation">Language Translation</a></li>
            <li><a href="https://www.sandiego.gov/contact">Contact the City</a></li>
          </ul>
        </Container>
      </PrivacyWrapper>
    </FooterWrapper>
  );
}

export default Footer;
