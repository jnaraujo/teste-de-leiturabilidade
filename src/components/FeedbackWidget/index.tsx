"use client";
import React from "react";
import { MessageSquarePlus } from "lucide-react";
import FeedbackModal from "./FeedbackModal";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const FeedbackWidget: React.FC = () => {
  return (
    <>
      <Tooltip>
        <FeedbackModal>
          <TooltipTrigger asChild>
            <button
              aria-label="Deixe seu Feedback!"
              className="group fixed bottom-4 right-4 flex h-14 w-14 items-center justify-center rounded-full bg-violet-500 transition-all duration-200 hover:scale-110 hover:bg-violet-600"
            >
              <MessageSquarePlus
                className="text-zinc-50 transition-transform duration-200 group-hover:scale-[0.85]"
                size={26}
              />
            </button>
          </TooltipTrigger>
        </FeedbackModal>
        <TooltipContent>Deixe seu Feedback!</TooltipContent>
      </Tooltip>
    </>
  );
};

export default FeedbackWidget;
