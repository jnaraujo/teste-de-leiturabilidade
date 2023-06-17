"use client"

import Link from "next/link"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { useState } from "react"
import clsx from "clsx"
import Button from "../ui/Button"

const LINKS = [
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/#como-funciona",
    label: "Como funciona?",
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpen() {
    setIsOpen(!isOpen)
  }

  return (
    <header className="container mx-auto flex items-center justify-between py-4 md:py-6">
      <Link href="/" className="text-xl font-bold text-zinc-950">
        Teste de Leitura
      </Link>

      <div
        className={clsx("flex flex-col items-center justify-center space-y-4", {
          "fixed left-0 top-0 z-10 flex h-full w-full bg-white": isOpen,
        })}
      >
        <nav
          className={clsx(
            "hidden flex-col items-center gap-4 md:flex md:flex-row md:gap-8",
            {
              "!flex": isOpen,
            },
          )}
        >
          {LINKS.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-lg text-zinc-950 transition-colors hover:text-zinc-500"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/editor"
            className="rounded-md bg-zinc-950 px-4 py-2 text-lg text-white transition-all duration-200 ease-in-out hover:bg-zinc-700"
          >
            Abrir Editor
          </Link>
        </nav>

        <Button
          aria-label="Fechar menu"
          onClick={handleOpen}
          className={clsx({
            "absolute right-4 top-2": isOpen,
            hidden: !isOpen,
          })}
        >
          <AiOutlineClose size={25} />
        </Button>
      </div>

      <button
        aria-label="Abrir menu"
        onClick={handleOpen}
        className="md:hidden"
      >
        <AiOutlineMenu size={25} />
      </button>
    </header>
  )
}
