import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import { MdFeedback } from "react-icons/md";
import FeedbackModal from "./FeedbackModal";

import { Widget } from "./styles";

const FeedbackWidget: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <>
      <Tooltip title="Deixe seu Feedback!" placement="top">
        <Widget onClick={handleOpenModal}>
          <MdFeedback />
        </Widget>
      </Tooltip>
      <FeedbackModal onClose={handleModal} open={openModal} />
    </>
  );
};

export default FeedbackWidget;
