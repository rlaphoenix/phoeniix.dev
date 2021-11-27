import {useRouter} from "next/router"
import Link from "next/link"
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
        <nav className="flex bg-gray-800 justify-center">
            <div className="flex flex-row flex-grow max-w-5xl py-2 px-4 sm:px-6 lg:px-8 space-x-6 items-center">
                <div className="flex flex-row space-x-4 flex-1">
                    {entries}
                </div>
                <div className="flex flex-row space-x-4">
                    <Link href="https://github.com/rlaphoenix">
                        <a className="flex bg-gray-800 bg-opacity-20 text-gray-400 hover:text-white">
                            <span className="sr-only">GitHub</span>
                            <AiFillGithub size={"1.5rem"} aria-hidden="true"/>
                        </a>
                    </Link>
                    <Link href="https://twitter.com/rlaphoenix">
                        <a className="flex bg-gray-800 bg-opacity-20 text-gray-400 hover:text-white">
                            <span className="sr-only">Twitter</span>
                            <AiFillTwitterCircle size={"1.5rem"} aria-hidden="true"/>
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
