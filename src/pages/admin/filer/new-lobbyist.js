import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { useAdminLobbyistEntityContext, withAdminLobbyistEntity } from "../../../components/contexts";
import { AdminLobbyistEntityLayout, Col, ProfileRow, Row, Space } from "../../../components/layout-containers";
import { CustomInput, ProfileFieldset } from "../../../components/forms";
import { Button } from "../../../components/buttons";
import { NoteMessage } from "../../../components/typography";



const NewLobbyistEntityPage = () => {
  const router = useRouter();

  const adminLobbyistEntityContext = useAdminLobbyistEntityContext();
  const { filerInfo, lobbyistEntityId } = adminLobbyistEntityContext;

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async(data) => {
    router.push(`/admin/lobbyist/entity/${lobbyistEntityId}`);
  };

  const onClickCancel = () => {
    router.push(`/admin/lobbyist/entity/${lobbyistEntityId}`);
  };

  return (
    <AdminLobbyistEntityLayout>
      <ProfileRow>
        <Col span={8}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ProfileFieldset>
              <legend>Add Filer</legend>
              <Row>
                <Col sm={12} span={4}>
                  <CustomInput
                    id="first_name"
                    innerRef={register({
                      required: "First Name is required.",
                      minLength: {
                        value: 2,
                        message: "First Name must have 2 or more characters.",
                      },
                    })}
                    invalid={!!errors.first_name}
                    label="First Name"
                    name="first_name"
                    required={true}
                  />
                </Col>
                <Col sm={12} span={4}>
                  <CustomInput
                    id="middle_name"
                    innerRef={register}
                    label="Middle Name or Initial"
                    name="middle_name"
                    required={false}
                  />
                </Col>
                <Col sm={12} span={4}>
                  <CustomInput
                    errorMessage={errors?.last_name?.message}
                    id="last_name"
                    innerRef={register({
                      required: "Last Name is required.",
                      minLength: {
                        value: 2,
                        message: "Last Name must have 2 or more characters.",
                      },
                    })}
                    invalid={!!errors.last_name}
                    label="Last Name"
                    name="last_name"
                    required={true}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={12} span={6}>
                  <CustomInput
                    id="email"
                    label="Email"
                    name="email"
                    required={true}
                    type="email"
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={12} span={8}>
                  <NoteMessage color="black">
                    The new filer will automatically be added to the lobbying entity and will receive an invitation
                    email to set up their account.
                  </NoteMessage>
                </Col>
                <Col sm={12} span={4}>
                  <div style={ { width: "100%" } }>
                    <Space align="end">
                      <Button color="darkgray" size="small" onClick={() => onClickCancel()}>Cancel</Button>
                      <Button htmlType="submit" size="small">Save</Button>
                    </Space>
                  </div>
                </Col>
              </Row>
            </ProfileFieldset>
          </form>
        </Col>
      </ProfileRow>
    </AdminLobbyistEntityLayout>
  );
};

export default withAdminLobbyistEntity(NewLobbyistEntityPage);
