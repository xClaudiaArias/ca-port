import Link from 'next/link';
import NavLinks from './nav-links';

export default function SideNav() {
    return (
        <div>

        <Link href="/">
            <div>
            Claudia Arias
            </div>
        </Link>

        <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
            <NavLinks />
            <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        </div>
        </div>
    );
}
