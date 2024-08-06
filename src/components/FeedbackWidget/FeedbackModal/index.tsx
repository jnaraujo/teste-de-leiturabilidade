import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useWindowSize } from "react-use";
import { toast } from "react-hot-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { sendFeedback } from "./helper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import dynamic from "next/dynamic";

const Confetti = dynamic(() => import("react-confetti"));

type Props = {
  children: React.ReactNode;
};
const FeedbackModal: React.FC<Props> = ({ children }) => {
  const { register, handleSubmit, reset, formState } = useForm();
  const { isSubmitting } = formState;
  const { width, height } = useWindowSize();
  const [confetti, setConfetti] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  const onSubmit = async (data: any) => {
    try {
      await sendFeedback(data);

      toast("Mensagem enviada!", {
        icon: "🎉",
        position: "top-center",
      });

      setOpen(false);
      reset();

      setConfetti(true);
      setTimeout(() => {
        setConfetti(false);
      }, 5000);
    } catch (error) {
      toast.error("Ops! Ocorreu um erro ao enviar a mensagem.", {
        position: "top-center",
      });
    }
  };
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="w-full max-w-96">
          <DialogHeader>
            <DialogTitle>Deixe seu Feedback</DialogTitle>
            <DialogDescription>
              Envie sua dúvida, ideia, crítica ou sugestão.
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="post"
            className="space-y-3"
          >
            <Input
              id="name"
              {...register("name")}
              type="text"
              required
              placeholder="Seu nome"
            />
            <Textarea
              id="text"
              {...register("message")}
              required
              className="h-24"
              placeholder="Ex: o menu lateral do site no meu IPhone 13 não está aparecendo quando eu clico no botão de menu. Há três dias atrás funcionava."
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      {confetti && (
        <div className="pointer-events-none fixed left-0 top-0 z-50 h-full w-full">
          <Confetti
            width={width}
            height={height}
            numberOfPieces={200}
            recycle={false}
          />
        </div>
      )}
    </>
  );
};

export default FeedbackModal;
