import Link from 'next/link'
import React from 'react'
import { navigationLinks } from './NavigationLinks'

const Navigation = () => {
    return (
        <header className="max-w-screen-md m-auto border-b border-gray-300">
            <nav className='dark:text-white flex justify-end gap-5'>
                {navigationLinks.map(({ title, link }) => (
                    <Link href={link} key={link} className='pt-2.5 pb-2.5 dark:hover:text-gray-400 hover:text-gray-500'>{title}</Link>
                ))}
            </nav>
        </header>
    )
}

export default Navigation