import * as Dialog from "@radix-ui/react-dialog"
import clsx from "clsx"

interface ModalProps {
  open: boolean
  onClose: () => void
  onConfirm?: () => void
  title?: string
  description?: string
  type?: "danger" | "success"
  primaryButtonText?: string
  secondaryButtonText?: string
  primaryButtonDisabled?: boolean
  secondaryButtonDisabled?: boolean
  className?: string
  children?: React.ReactNode
}

export default function Modal({
  open,
  onClose,
  onConfirm,
  title,
  type = "success",
  description,
  primaryButtonText = "Confirmar",
  primaryButtonDisabled = false,
  secondaryButtonText = "Cancelar",
  secondaryButtonDisabled = false,
  children,
  className,
}: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Trigger className="hidden" />
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-60" />
      <Dialog.Content
        className={clsx(
          "fixed left-1/2 top-1/2 w-[500px] -translate-x-1/2 -translate-y-1/2 transform rounded-lg border border-zinc-500 bg-zinc-950 p-6",
          className,
        )}
      >
        {children !== null ? (
          children
        ) : (
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Dialog.Title className="text-lg font-semibold  text-zinc-100">
                  {title}
                </Dialog.Title>
              </div>
              <Dialog.Description className="text-sm text-zinc-400">
                {description}
              </Dialog.Description>
            </div>
            <div className="flex items-center justify-end space-x-2">
              <Dialog.Close
                className="cursor-pointer text-zinc-400 transition-colors hover:text-zinc-300"
                asChild
              >
                <button
                  disabled={secondaryButtonDisabled}
                  className="rounded-md border border-zinc-500 px-4 py-2 font-semibold text-zinc-100 transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={onClose}
                >
                  {secondaryButtonText}
                </button>
              </Dialog.Close>
              <button
                disabled={primaryButtonDisabled}
                className={clsx(
                  "rounded-md px-4 py-2 font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50",
                  {
                    "bg-red-700 text-zinc-100 hover:bg-red-700/80":
                      type === "danger",
                    "bg-green-700 text-zinc-100 hover:bg-green-700/80":
                      type === "success",
                  },
                )}
                onClick={onConfirm}
              >
                {primaryButtonText}
              </button>
            </div>
          </div>
        )}
      </Dialog.Content>
    </Dialog.Root>
  )
}
