export default function Dots({ size = 12, ...props}) {
    const svgString = encodeURIComponent(`<svg
        version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'
        x='0px' y='0px' viewBox='0 0 22.9 22.9' style='enable-background:new 0 0 22.9 22.9;' xml:space='preserve'
    >
        <circle fill='#e5e5e5' class='st0' cx='5.7' cy='5.9' r='3'/>
        <circle fill='#e5e5e5' class='st0' cx='17.2' cy='17.2' r='3'/>
    </svg>`)
    const dataUri = `url("data:image/svg+xml,${svgString}")`
    return <div
        {...props}
        style={{
            backgroundImage: dataUri,
            backgroundSize: size
        }}
    ></div>
}
