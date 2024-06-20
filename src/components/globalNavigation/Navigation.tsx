import Link from 'next/link'
import React from 'react'
import { navigationLinks } from './NavigationLinks'

const Navigation = () => {
    return (
        <nav className='dark:text-white flex gap-10'>
            {navigationLinks.map(({ title, link }) => (
                <Link href={link} key={link}>{title}</Link>
            ))}
        </nav>
    )
}

export default Navigation