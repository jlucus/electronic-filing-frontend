import React, { useContext, useState, useRef } from 'react';
import Router from 'next/router';

import { Row, Col, Wrapper } from '../../../components/layout-containers';
import { HomeLayout } from '../../../components/page-layouts';
import { Button } from '../../../components/buttons';
import { PageTitle, Subheading } from '../../../components/typography';
import { ClassicLink } from '../../../components/links';
import { LobbyistRegistrationForm } from '../../../components/forms';

function RegisterLobbyistPage() {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  let content = (
    <>
      <Row padding="0 0 1.5rem 0">
        <Col span={12}>
          <PageTitle
            title="Lobbyist Registration"
            icon={<i className="icon-clipboard-user" />}
          />
        </Col>
        <Col span={9}>
          <Subheading fontWeight="bold">
            To establish your electronic filing account, please complete the
            following information and select &quot;Submit&quot;:
          </Subheading>
          <Subheading>
            Once the Clerk has received and processed this information, your
            electronic filing account will be initiated. The individual named
            above will hear from the Clerk shortly. Questions? Please contact
            (619) 533-4000 or email{' '}
            <ClassicLink href="mailto:cityclerk@sandiego.gov" fontSize="1rem">
              cityclerk@sandiego.gov
            </ClassicLink>{' '}
          </Subheading>
        </Col>
      </Row>
      <Row>
        <Col span={9}>
          <LobbyistRegistrationForm setSubmitSuccess={setSubmitSuccess} />
        </Col>
      </Row>
    </>
  );

  if (submitSuccess) {
    content = (
      <>
        <Row padding="0 0 1.5rem 0">
          <Col span={12}>
            <PageTitle
              title="Lobbyist Registration"
              icon={<i className="icon-clipboard-user" />}
            />
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Subheading fontWeight="bold">
              Thank you for Registering!
            </Subheading>
          </Col>
        </Row>
        <Row padding="1rem 0">
          <Col span={6}>
            <Subheading fontWeight="bold">
              We have sent you an email to confirm your email address. Please
              click on the confirmation link within the next 24 hours to
              complete your registration.
            </Subheading>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Subheading>
              City Clerk Staff will be reviewing your submission and will be in
              touch. If you have any questions, please contact the City Clerk
              Office at 619-533-4000 or via e-mail to cityclerk@sandiego.gov.
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
      </>
    );
  }

  return (
    <HomeLayout>
      <Wrapper height="auto">{content}</Wrapper>
    </HomeLayout>
  );
}

export default RegisterLobbyistPage;
