import React, { useState } from "react";
import { useRouter } from "next/router";

import { useAuthContext } from "../../../components/contexts";
import { Input, Label } from "../../../components/forms";
import { ErrorMessage, PageTitle } from "../../../components/typography";
import { HomeLayout } from "../../../components/page-layouts";
import { Button } from "../../../components/buttons";
import { HelpBox, HelpParagraph } from "../../../components/info-boxes";
import {
  Row,
  Col,
  Wrapper,
  FormWrapper,
  LoginCol,
} from "../../../components/layout-containers";
import { ClassicLink } from "../../../components/links";
import { endpoints } from "../../../constants/endpoints";


const AdminLogin = ({ redirect }) => {
  // contexts
  const authData = useAuthContext();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const handleLogin = async() => {
    setErrorMsg(null);
    const res = await authData.login(
      username,
      password,
      endpoints.auth.loginFiler,
    );

    if (res.success === true) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/filer/profile");
      }
    } else if (res.errType === "user/pass") {
      setErrorMsg("This username/password combination did not work.");
    } else if (res.errType === "server") {
      setErrorMsg(
        "A server error occurred. Please try again later "
            + "and contact efilesd-support@pasaconsult.com if the error persists.",
      );
    } else if (res.errType === "network") {
      setErrorMsg(
        "A network error occurred. Please try again later "
            + "and contact efilesd-support@pasaconsult.com if the error persists.",
      );
    } else {
      setErrorMsg(
        "An unknown error occurred. Please try again later "
            + "and contact efilesd-support@pasaconsult.com if the error persists.",
      );
    }
  };

  return (
    <HomeLayout>
      <Wrapper>
        <Row>
          <Col span={12}>
            <PageTitle icon={<i className="icon-lock" />} title="Filer Login" />
          </Col>
        </Row>
        <Row>
          <Col span={9}>
            <FormWrapper>
              <Row>
                <Col span={8}>
                  <Row>
                    <Col span={12}>
                      <Label>Username</Label>
                      <Input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <Label>Password</Label>
                      <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <ErrorMessage>{errorMsg}</ErrorMessage>
                      <ClassicLink href="#">Forgot Password?</ClassicLink>
                    </Col>
                  </Row>
                  <Row>
                    <LoginCol span={12}>
                      <Button size="large" onClick={handleLogin}>Login</Button>
                    </LoginCol>
                  </Row>
                </Col>
                <Col span={4}>
                  <HelpBox title="Need Help">
                    <HelpParagraph>
                      <strong>Contact the City Clerk&apos;s Office:</strong>
                    </HelpParagraph>
                    <HelpParagraph>
                      <strong>Email</strong>
                      {" "}
                      cityclerk@sandiego.gov
                    </HelpParagraph>
                    <HelpParagraph>
                      <strong>Call</strong>
                      {" "}
                      (619) 533-4000 (voice) or
                    </HelpParagraph>
                    <HelpParagraph>
                      (619) 236-7012(TT) for assistance
                    </HelpParagraph>
                  </HelpBox>
                </Col>
              </Row>
            </FormWrapper>
          </Col>
        </Row>
      </Wrapper>
    </HomeLayout>
  );
};

export const getServerSideProps = async(context) => {
  return { props: { redirect: context.query.redirect || "" } };
};

export default AdminLogin;
