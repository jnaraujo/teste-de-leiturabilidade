interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="rounded-md bg-zinc-900 p-2 text-zinc-100 transition-all duration-200 ease-in-out hover:bg-zinc-600"
      {...rest}
    >
      {children}
    </button>
  )
}
