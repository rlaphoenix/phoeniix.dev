import {useRouter} from "next/router"
import Link from "next/link"
import Image from "next/image"
import logo from "../public/logo.png"
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";

export default function NavBar(props) {
    const router = useRouter()

    const entries = Object.entries(props).map(([name, href]) => {
        const active = router.pathname === href
        const colors = active ?
            'bg-gray-900 text-white' :
            'text-gray-300 hover:bg-gray-700 hover:text-white'
        const display = 'px-3 py-2 rounded-md text-sm font-medium'
        return <Link href={href} key={name}>
            <a
                className={[colors, display].join(' ')}
                aria-current={active ? 'page' : undefined}
            >{name}</a>
        </Link>
    })

    return (
        <nav className="bg-gray-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-start sm:items-stretch">
                        <div className="flex flex-shrink-0 items-center">
                            <Link href="/">
                                <a className="flex">
                                    <Image
                                        src={logo}
                                        alt="Logo"
                                        width={32}
                                        height={32}
                                        className="rounded"
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                {entries}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center space-x-2 pr-2 sm:static sm:inset-auto
                        sm:ml-6 sm:pr-0">
                        <Link href="https://github.com/rlaphoenix">
                            <a className="p-1 bg-gray-800 bg-opacity-20 text-gray-400 hover:text-white">
                                <span className="sr-only">GitHub</span>
                                <AiFillGithub className="h-6 w-6" aria-hidden="true"/>
                            </a>
                        </Link>
                        <Link href="https://twitter.com/rlaphoenix">
                            <a className="pl-1 bg-gray-800 bg-opacity-20 text-gray-400 hover:text-white">
                                <span className="sr-only">Twitter</span>
                                <AiFillTwitterCircle className="h-6 w-6" aria-hidden="true"/>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="sm:hidden px-2 pb-3 space-x-2 flex flex-row justify-center">
                {entries}
            </div>
        </nav>
    )
}
