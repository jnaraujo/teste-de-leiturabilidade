import { forwardRef, type InputHTMLAttributes } from "react"

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ ...rest }, ref) => {
    return (
      <input
        type="text"
        className="rounded-md border border-zinc-800 bg-zinc-50 p-2 text-sm font-medium text-zinc-700 placeholder:text-zinc-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-zinc-900"
        ref={ref}
        {...rest}
      />
    )
  },
)

TextInput.displayName = "Input"

export default TextInput
