import React, { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import Icon from '../icons/Icon';
import {
  InlineContainer,
  Nav,
  NavButton,
  PageInput,
  ToggleSpan,
  TotalPages,
  ZoomDropdown,
} from './PdfViewerComponents';

const PdfViewerNav = forwardRef((props, ref) => {
  const {
    url,
    setFile,
    currentPage,
    totalPages,
    changeScale,
    setCurrentPage,
    scale,
    changeRotation,
    sizeSelect,
    setSizeSelect,
    setScale,
  } = props;
  const [viewText, setViewText] = useState(false);
  const toggleText = viewText ? 'View images' : 'View plain text';

  function handlePlainText() {
    setViewText(!viewText);
    // Temporary until we have plain text from backend
    setFile((prevFile) => {
      if (prevFile === 'sample.pdf') {
        return 'sample2.pdf';
      }
      return 'sample.pdf';
    });
  }

  function setPage(e) {
    const page = e.target.value;
    if (!/^\d+$/.test(page) && page !== '') return;
    setCurrentPage(page);
  }

  function onEnter(e) {
    if (e.key === 'Enter') {
      if (/^\d+$/.test(e.target.value)) {
        const page = Number(e.target.value);
        if (page > 0 && page <= totalPages) {
          setCurrentPage(page);
          ref.current[page - 1].node.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start',
          });
        }
      }
    }
  }

  function handlePageUpDown(action) {
    if (action === 'up') {
      if (currentPage > 1) {
        ref.current[currentPage - 2].node.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
      }
    } else {
      if (currentPage < totalPages) {
        ref.current[currentPage].node.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
      }
    }
  }

  function handleScale(change) {
    if (change > 0 && scale < 1.4) {
      changeScale(change);
    } else if (change < 0 && scale > 0.4) {
      changeScale(change);
    }
  }

  return (
    <InlineContainer margin="20px 0 0 0">
      <Nav backgroundColor="#fafafa">
        <NavButton
          type="button"
          onClick={() => handlePageUpDown('up')}
          margin="0 3px"
        >
          <Icon src="/pdfview/arrow-top.svg" height="22px" width="22px" />
        </NavButton>
        <NavButton
          type="button"
          onClick={() => handlePageUpDown('down')}
          margin="0 3px"
        >
          <Icon src="/pdfview/arrow-bottom.svg" height="22px" width="22px" />
        </NavButton>
        <PageInput
          value={currentPage}
          onChange={(e) => setPage(e)}
          onKeyDown={(e) => onEnter(e)}
          margin="0 3px"
        />
        <TotalPages margin="0 3px 0 0">/{totalPages}</TotalPages>
        <NavButton
          type="button"
          disable
          onClick={() => handleScale(0.1)}
          margin="0 3px"
        >
          <Icon src="/pdfview/zoom-in.svg" height="22px" width="22px" />
        </NavButton>
        <NavButton
          type="button"
          onClick={() => handleScale(-0.1)}
          margin="0 3px"
        >
          <Icon src="/pdfview/zoom-out.svg" height="22px" width="22px" />
        </NavButton>
        <ZoomDropdown
          value={sizeSelect}
          onChange={(e) => {
            setSizeSelect(e.target.value);
            setScale(Number(e.target.value));
          }}
          margin="0 3px"
        >
          <option value="1">Fit Width</option>
          <option value=".4">Fit Height</option>
          <option value="1.5">150%</option>
          <option value="1.25">125%</option>
          <option value=".7">75%</option>
          <option value=".5">50%</option>
          <option value=".3">30%</option>
        </ZoomDropdown>
        <NavButton onClick={() => changeRotation()} margin="0 3px">
          {' '}
          <Icon src="/pdfview/rotate.svg" height="18px" width="18px" />
        </NavButton>
        <NavButton type="button" onClick={() => {}} margin="0 3px">
          <a href={url} target="_blank">
            <Icon src="/pdfview/print.svg" height="18px" width="18px" />
          </a>
        </NavButton>
        {/* <NavButton width="auto" margin="0 0 4px 3px" hover="transparent">
          <ToggleSpan onClick={() => handlePlainText()}>
          <ToggleSpan onClick={() => console.log('no change')}>
            {toggleText}
          </ToggleSpan>
        </NavButton> */}
      </Nav>
    </InlineContainer>
  );
});

PdfViewerNav.propTypes = {
  url: PropTypes.string.isRequired,
  changeScale: PropTypes.func.isRequired,
  setScale: PropTypes.func.isRequired,
  changeRotation: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  setFile: PropTypes.func.isRequired,
  scale: PropTypes.number.isRequired,
  sizeSelect: PropTypes.string.isRequired,
  setSizeSelect: PropTypes.func.isRequired,
};

export default PdfViewerNav;
