"use client"

import dynamic from "next/dynamic"
import React, { useState, useEffect } from "react"
import { MdFeedback } from "react-icons/md"
import Tooltip from "../ui/Tooltip"
const FeedbackModal = dynamic(async () => await import("./FeedbackModal"))

const FeedbackWidget: React.FC = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleModal = () => {
    setOpenModal((prev) => !prev)
  }

  useEffect(() => {
    document.body.style.overflow = openModal ? "hidden" : "unset"
  }, [openModal])

  return (
    <>
      <Tooltip text="Deixe seu Feedback!" placement="left" delay={100}>
        <button
          onClick={handleModal}
          className="absolute bottom-4 right-4 z-10 rounded-full bg-violet-500 p-4 text-white transition-all duration-200 ease-in-out hover:scale-105 hover:bg-violet-600 hover:text-sm"
        >
          <MdFeedback size={24} />
        </button>
      </Tooltip>
      <FeedbackModal onClose={handleModal} open={openModal} />
    </>
  )
}

export default FeedbackWidget
