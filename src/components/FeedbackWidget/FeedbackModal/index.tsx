import { MdClose } from "react-icons/md"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"

import { sendFeedback } from "./helper"
// import Button from "@/components/Button"
import Modal from "@/components/ui/Modal"
import TextInput from "@/components/ui/TextInput"
import Button from "@/components/ui/Button"

interface Props {
  open: boolean
  onClose: () => void
}
export default function FeedbackModal({ open, onClose }: Props) {
  const { register, handleSubmit, reset, formState } = useForm()
  const { isSubmitting } = formState

  const onSubmit = async (data: any) => {
    try {
      await sendFeedback(data)

      toast("Mensagem enviada!", {
        icon: "🎉",
        position: "top-center",
      })
    } catch (error) {
      toast.error("Ops! Ocorreu um erro ao enviar a mensagem.", {
        position: "top-center",
      })
    } finally {
      reset()
      onClose()
    }
  }
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        className="w-[350px] space-y-4 bg-zinc-50 p-4"
      >
        <header className="flex items-center justify-between">
          <h1 className="text-lg font-medium">Deixe seu Feedback</h1>
          <MdClose onClick={onClose} size={25} />
        </header>
        <form
          onSubmit={handleSubmit(onSubmit)}
          method="post"
          className="flex flex-col space-y-2"
        >
          <TextInput
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
            className="h-32 w-full resize-none rounded-md border border-zinc-800  p-2 text-sm font-medium  text-zinc-700 placeholder:text-zinc-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-zinc-900"
            placeholder="Escreva sua ideia, crítica, sugestão... O que você quiser!"
            maxLength={250}
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting === true ? "Enviando..." : "Enviar"}
          </Button>
        </form>
      </Modal>
    </>
  )
}
