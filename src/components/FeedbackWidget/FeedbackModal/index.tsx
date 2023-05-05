import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import Confetti from "react-confetti";
import { useForm } from "react-hook-form";
import { useWindowSize } from "react-use";
import { toast } from "react-hot-toast";
import { Modal } from "@mui/material";

import styles from "./styles.module.scss";
import { sendFeedback } from "./helper";
import Input from "@/components/Input";
import Button from "@/components/Button";

type Props = {
  open: boolean;
  onClose(): void;
};
const FeedbackModal: React.FC<Props> = ({ open, onClose }) => {
  const { register, handleSubmit, reset, formState } = useForm();
  const { isSubmitting } = formState;

  const { width, height } = useWindowSize();
  const [confetti, setConfetti] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      await sendFeedback(data);

      toast("Mensagem enviada!", {
        icon: "🎉",
        position: "top-center",
      });

      setConfetti(true);

      setTimeout(() => {
        setConfetti(false);
      }, 5000);
    } catch (error) {
      toast.error("Ops! Ocorreu um erro ao enviar a mensagem.", {
        position: "top-center",
      });
    } finally {
      reset();
      onClose();
    }
  };
  return (
    <>
      <Modal
        className={styles.modal}
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <section className={styles.container}>
          <header className={styles.header}>
            <MdClose onClick={onClose} />
          </header>
          <div className={styles.content}>
            <form onSubmit={handleSubmit(onSubmit)} method="post">
              <h1>Deixe seu Feedback</h1>
              <Input
                id="name"
                {...register("name")}
                type="text"
                required
                placeholder="Seu nome"
              />
              <textarea
                id="text"
                {...register("message")}
                required
                placeholder="Escreva sua ideia, crítica, sugestão... O que você quiser!"
              />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar"}
              </Button>
            </form>
          </div>
        </section>
      </Modal>
      {confetti && (
        <div className={styles.confetti}>
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
