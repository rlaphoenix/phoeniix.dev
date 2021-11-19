import Image from "next/image"
import { MdLocationPin, MdOutlineEmail } from "react-icons/md"
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai"
import logo from "../public/logo.png"


function AboutMe({avatar, name, bio, location, email, github, twitter, languages}) {
    return <div className="flex flex-1 flex-col space-y-4">
        <div className="space-y-4">
            <Image
                src={avatar}
                alt="Avatar"
                width={125}
                height={125}
                className="rounded-md"
            />
            <h1 className="text-xl">Hi, I'm {name}.</h1>
        </div>
        {bio}
        <div className="flex flex-noshrink flex-wrap gap-4 gap-y-1 text-gray-600">
            <div className="flex space-x-1">
                <MdLocationPin size={"1.5rem"}/>
                <span>{location}</span>
            </div>
            <div className="flex space-x-1">
                <MdOutlineEmail size={"1.5rem"}/>
                <a href={`mailto:${email}`}>{email}</a>
            </div>
            <div className="flex space-x-1">
                <AiFillGithub size={"1.5rem"}/>
                <a href={`https://github.com/${github}`}>{github}</a>
            </div>
            <div className="flex space-x-1">
                <AiOutlineTwitter size={"1.5rem"}/>
                <a href={`https://twitter.com/${twitter}`}>{twitter}</a>
            </div>
        </div>
        <div className="flex flex-wrap gap-2">
            {languages.map(lang => <a
                href={`https://stackoverflow.com/questions/tagged/${lang}`}
                className="bg-light-blue-100 text-gray-600 p-2 py-1 text-sm rounded">
                {lang}
            </a>)}
        </div>
    </div>
}

export default function Home() {
    return <div className="flex flex-row space-x-2">
        <AboutMe
            avatar={logo}
            name="PHOENiX"
            bio={<p>
                I'm currently a hobbyist developer working on <a href="https://homemediadb.org">homemediadb.org</a>&nbsp;
                and various software projects on my <a href="https://github.com/rlaphoenix">GitHub</a>.</p>
            }
            location="Ireland"
            email="rlaphoenix@pm.me"
            github="rlaphoenix"
            twitter="rlaphoenix"
            languages={["git", "python", "c#", "php", "html", "css", "javascript", "nodejs", "reactjs"]}
        />
    </div>
}
