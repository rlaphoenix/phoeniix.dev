import Link from "next/link"


function Copyright({begin}) {
    const year = new Date().getFullYear()
    return <div className="mx-auto text-gray-400">
        &copy; {begin !== year ? `${begin}-${year}` : year}{" "}
        <a href="https://github.com/rlaphoenix">PHOENiX</a>. All rights reserved.
    </div>
}

export default function Footer() {
    return <footer className="flex flex-col p-8 gap-4 border-t border-gray-200">
        <div className="flex flex-row flex-wrap justify-center gap-x-16 gap-y-4 text-gray-500">
            <Link href={"/contact"}><a>Contact</a></Link>
            <Link href={"https://media.phoeniix.dev:8443"}><a>Emby</a></Link>
            <Link href={"https://media.phoeniix.dev:2096"}><a>Plex</a></Link>
        </div>
        <Copyright begin={2021} />
    </footer>
}
