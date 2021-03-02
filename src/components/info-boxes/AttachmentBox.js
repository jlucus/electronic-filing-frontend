import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Card, Col, Row } from "../layout-containers";
import {Button} from '../buttons';

const AttachmentCard = styled(Card)`
  margin: 1rem 0;
`;
const AttachmentContentWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
`;
const CreatorInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Description = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5rem 0;
`;

const AttachmentBox = (props) => {
  const { attachment } = props;

  return (
    <AttachmentCard borderRadius={8} bordered={true} noPadding={true} bgColorName="lightgray">
      <AttachmentContentWrapper>
        <CreatorInfo>
          <div>
            <strong>Note</strong> added by {attachment.creator.firstName} {attachment.creator.lastName} ({attachment.creator.type})
          </div>
          <div>
            {attachment.created}
          </div>
        </CreatorInfo>
        <Description>
          <p>{attachment.note}</p>
          <div>
            <Button size="tiny">Edit</Button>
          </div>
        </Description>
      </AttachmentContentWrapper>
    </AttachmentCard>
  );
};

AttachmentBox.propTypes = {
  attachment: PropTypes.any.required,
};

export default AttachmentBox;
