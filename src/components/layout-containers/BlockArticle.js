import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { Button } from '../buttons';

const Block = styled.div`
  background-color: ${(props) => props.theme.blockBgColor};
  padding: 0.625rem;
  margin-top: 0.9375rem;
  margin-bottom: 0.9375rem;
  white-space: pre-wrap;

  & h3 {
    font-weight: bold;
    color: ${(props) => props.theme.secondaryTitleColor};
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
  }

  & p {
    color: ${(props) => props.theme.textColor};
  }

  @media screen and (max-width: 47.99em) {
    text-align: center;
    & h3 {
      text-align: center;
    }
    & p {
      text-align: left;
    }
  }
`;

function BlockArticle({ title, texts, button = null }) {
  const router = useRouter();

  const contentBlocks = [];
  texts.forEach((text, idx) =>
    contentBlocks.push(
      <p key={idx} dangerouslySetInnerHTML={{ __html: text }} />
    )
  );
  if (button) {
    contentBlocks.push(
      <Button
        key={button.link}
        size="large"
        color="secondary"
        onClick={() => router.push(button.link)}
        rightIcon={<i className="icon-chevron-right" />}
      >
        Access
      </Button>
    );
  }
  return (
    <Block>
      <h3>{title}</h3>
      {contentBlocks}
    </Block>
  );
}

export default BlockArticle;
