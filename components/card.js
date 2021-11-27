export default function Card({ image, title, sub, paragraph, extra = null }) {
    return <div className="flex items-center gap-6 <md:flex-col">
        <div className="flex flex-shrink-0 md:w-300px rounded-md border border-gray-200">
            {image}
        </div>
        <div>
            <h1 className="text-lg">{title}</h1>
            <small>{sub}</small>
            <p className="my-6">{paragraph}</p>
            {extra ? <small>{extra}</small> : null}
        </div>
    </div>
}
