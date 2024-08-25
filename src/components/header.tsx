import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { IconNextChat, IconSeparator } from './ui/icons'


export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-white ">
      <Link href="/" rel="nofollow" className="mr-5">
        <IconNextChat className="size-6 dark:hidden" inverted />
        <IconNextChat className="hidden size-6 dark:block" />
      </Link>
      <IconSeparator className='hidden md:flex' />
      <Link
        href="/about"
        className={cn(buttonVariants({ variant: 'link' }), "mr-auto")}
      >
        <span className="hidden md:flex">About</span>
      </Link>
      <Link
        target="_blank"
        href="https://github.com/mattjared/nextjs-ai-lite/"
        rel="noopener noreferrer"
        className={cn(buttonVariants({ variant: 'outline' }), "mr-5 hidden md:flex")}
      >
        <span >GitHub</span>
      </Link>
      <Link
        href="https://vercel.com/new"
        target="_blank"
        className={cn(buttonVariants())}
      >
        <span className="hidden sm:block">Deploy to Vercel</span>
        <span className="sm:hidden">Deploy</span>
      </Link>
    </header>
  )
}
