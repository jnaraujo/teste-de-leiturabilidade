import dynamic from "next/dynamic";
import React, { useState } from "react";
import { MdFeedback } from "react-icons/md";
const FeedbackModal = dynamic(() => import("./FeedbackModal"));
const Tooltip = dynamic(() => import("@mui/material/Tooltip"));

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
