import React, { useContext, useEffect, useState } from 'react';
import Router from 'next/router';
import { useAuthContext } from '../../../components/contexts';
import {
  Row,
  Col,
  FormWrapper,
  Wrapper,
} from '../../../components/layout-containers';
import {
  Heading1,
  Subheading,
  PageTitle,
} from '../../../components/typography';
import { HomeLayout } from '../../../components/page-layouts';
import { Button } from '../../../components/buttons';
import { endpoints } from '../../../constants/endpoints';

function RegisterConfirmEmailPage({ token }) {
  // contexts
  const authData = useAuthContext();
  const [emailConfirmMessage, setEmailConfirmMessage] = useState(null);
  const [checked, setChecked] = useState(null);

  const handleCheckCode = async () => {
    console.log(token);
    if (!token) {
      setEmailConfirmMessage('There was a problem confirming your email.');
      return;
    }
    setChecked(true);
    const url = endpoints.filer.lobbyist.registerConfirmEmail;
    const response = await authData.noAuthFetch(url, 'post', { token });
    console.log(response);
    if (response.success) {
      setEmailConfirmMessage('Thank you for confirming your email address!');
    } else {
      setEmailConfirmMessage('There was a problem confirming your email.');
    }
  };

  useEffect(() => {
    handleCheckCode();
  }, []);

  if (!emailConfirmMessage) return null;

  return (
    <HomeLayout>
      <Wrapper>
        <Row>
          <Col span={12}>
            <PageTitle
              title="Lobbyist Registration"
              icon={<i className="icon-clipboard-user" />}
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Row>
              <Col span={6}>
                <Subheading fontWeight="bold">{emailConfirmMessage}</Subheading>
              </Col>
            </Row>
            <Row padding="2rem 0">
              <Col span={6}>
                <Subheading>
                  City Clerk Staff will be reviewing your submission and will be
                  in touch. If you have any questions, please contact the City
                  Clerk Office at 619-533-4000 or via e-mail to
                  cityclerk@sandiego.gov.
                </Subheading>
              </Col>
            </Row>
            <Row padding="1rem 0">
              <Col span={12}>
                <Button size="large" onClick={() => Router.push('/')}>
                  Home
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Wrapper>
    </HomeLayout>
  );
}
RegisterConfirmEmailPage.getInitialProps = ({ query: { token } }) => ({
  token,
});

export default RegisterConfirmEmailPage;
