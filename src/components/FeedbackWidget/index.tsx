"use client";

import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
const FeedbackModal = dynamic(() => import("./FeedbackModal"));
import Tooltip from "../Tooltip";
import { MessageSquarePlus } from "lucide-react";

const FeedbackWidget: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = openModal ? "hidden" : "unset";
  }, [openModal]);

  return (
    <>
      <Tooltip text="Deixe seu Feedback!" placement="top">
        <button
          onClick={handleModal}
          aria-label="Deixe seu Feedback!"
          className="group absolute bottom-4 right-4 flex h-14 w-14 items-center justify-center rounded-full bg-violet-500 transition-all duration-200 hover:scale-110 hover:bg-violet-600"
        >
          <MessageSquarePlus
            className="text-zinc-50 transition-transform duration-200 group-hover:scale-[0.85]"
            size={26}
          />
        </button>
      </Tooltip>
      {openModal && <FeedbackModal onClose={handleModal} open={openModal} />}
    </>
  );
};

export default FeedbackWidget;
