import { useRouter } from 'next/router';
import { HomeLayout } from '../../../components/page-layouts';
import { Row, Col, ContentWrapper, Card } from '../../../components/layout-containers';
import { PageTitle, Subheading } from '../../../components/typography';
import { Button } from '../../../components/buttons';



const adminLoginSamlFail = () => {

  const router = useRouter();

  return (
    <HomeLayout>
      <ContentWrapper className="l-padding-hd l-padding-desktop-td l-padding-desktop-bm">

        <Row>
          <Col span={12}>
            <PageTitle title='Okta Login failed: Not authorized.' icon={<i className="icon-lock" />} />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Subheading fontWeight="bold">
              It looks like you are either not registered as an admin user or there
              was a malfunction in the City's Okta Single-Sign On service.
            </Subheading>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Subheading>
              If this problem recurs, please contact the City Clerk's Office
              for help at cityclerk@sandiego.gov.
            </Subheading>
          </Col>
        </Row>
        <Row padding="1rem 0">
          <Col span={3} sm={3}>
            <Button size="large" onClick={() => router.push('/')}>Home</Button>
          </Col>
        </Row>
      </ContentWrapper>
    </HomeLayout>
  );

};

export default adminLoginSamlFail;
