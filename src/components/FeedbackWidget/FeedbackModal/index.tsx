import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import Confetti from "react-confetti";
import { useForm } from "react-hook-form";
import { useWindowSize } from "react-use";
import { toast } from "react-hot-toast";

import { Container, ModalWrap, Header, Content } from "./styles";

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
      await fetch(
        `https://submit-form.com/${process.env.NEXT_PUBLIC_FORMSPARK}`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
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
      <ModalWrap
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container>
          <Header>
            <MdClose onClick={onClose} />
          </Header>
          <Content>
            <form onSubmit={handleSubmit(onSubmit)} method="post">
              <h1>Deixe seu Feedback</h1>
              <textarea
                id="text"
                {...register("message")}
                required
                placeholder="Escreva sua ideia, crítica, sugestão... O que você quiser!"
              />
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>
            </form>
          </Content>
        </Container>
      </ModalWrap>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        {confetti && (
          <Confetti
            width={width}
            height={height}
            numberOfPieces={200}
            recycle={false}
          />
        )}
      </div>
    </>
  );
};

export default FeedbackModal;
