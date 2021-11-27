import Link from "next/link"


function Copyright({begin}) {
    const year = new Date().getFullYear()
    return <div className="mx-auto text-gray-400">
        &copy; {begin !== year ? `${begin}-${year}` : year}{" "}
        <a href="https://github.com/rlaphoenix">PHOENiX</a>. All rights reserved.
    </div>
}

export default function Footer(props) {
    const entries = Object.entries(props).map(([name, href]) => {
        return <Link href={href} key={name}>
            <a className="text-center min-w-5rem">{name}</a>
        </Link>
    })

    return <footer className="flex flex-col p-8 gap-4 border-t border-gray-200">
        <div className="flex flex-wrap justify-center gap-x-14 gap-y-4 text-gray-500">
            {entries}
        </div>
        <Copyright begin={2021} />
    </footer>
}
