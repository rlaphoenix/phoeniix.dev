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

function Projects({ entries }) {
    return <div className="bg-gray-900 text-gray-300 max-w-xs rounded-md space-y-4 p-4">
        <h1 className="text-xl">Project Showcase</h1>
        <div className="flex flex-col space-y-2 text-sm">
            {entries.map(project => <div>
                <a href={project[0]} className="text-light-blue-500">{project[0].split('/').pop()}</a>
                <p className="text-xs">{project[1]}</p>
            </div>)}
            <a href="https://github.com/rlaphoenix?tab=repositories" className="text-emerald-300">
                <small>view more projects</small>
            </a>
        </div>
    </div>
}

export default function Home() {
    return <div className="flex flex-col sm:flex-row gap-6">
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
        <Projects entries={[
            [
                "https://github.com/rlaphoenix/VSGAN",
                "VapourSynth Single Image Super-Resolution Generative Adversarial Network"
            ], [
                "https://github.com/rlaphoenix/pynfogen",
                "Scriptable MediaInfo-fed NFO Generator for Movies and TV"
            ], [
                "https://github.com/rlaphoenix/pvsfunc",
                "PHOENiX's compilation of VapourSynth Script's and Functions"
            ], [
                "https://github.com/rlaphoenix/Slipstream",
                "The most informative Home-media backup solution"
            ], [
                "https://github.com/rlaphoenix/pydvdcss",
                "Python wrapper for VideoLAN's libdvdcss library"
            ], [
                "https://github.com/rlaphoenix/hdlg",
                "Modern cross-platform GUI for hdl-dump"
            ],
        ]}/>
    </div>
}
