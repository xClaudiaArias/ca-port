"use client";

import DevicesIcon from '@mui/icons-material/Devices';
import Face3Icon from '@mui/icons-material/Face3';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    { name: 'PROJECTS', href: '/projects', icon: DevicesIcon },
    {
        name: 'ABOUT',
        href: '/about',
        icon: Face3Icon,
    },
    { name: 'CONTACT', href: '/contact', icon: AlternateEmailIcon },
];

export default function NavLinks() {
    const pathname = usePathname();
    
    return (
        <>
        {links.map((link) => {
            const LinkIcon = link.icon;
            return (
            <Link
                key={link.name}
                href={link.href}
                className={clsx(
                "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                {
                    'bg-sky-100 text-blue-600': pathname === link.href,
                },
                )}
            >
                <LinkIcon className="w-6" />
                <p className="hidden md:block">{link.name}</p>
            </Link>
            );
        })}
        </>
    );
}
