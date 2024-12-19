export function Service({ title, video, descriptionHeader, descriptionBody, reverse = false }) {
    return (
        <div className="flex flex-col gap-y-3 p-5">
            <h2 className="text-2xl font-bold">{title}</h2>
            <div className={`flex md:flex-row ${reverse ? 'md:flex-row-reverse' : 'md:flex-row' } flex-col-reverse items-center md:gap-x-10 gap-y-5`}>
                <video
                    width="450"
                    height="450"
                    loop
                    autoPlay
                    playsInline
                    muted
                    src={video}
                />
                <div className="flex flex-col gap-y-4">
                    <p className="text-xl font-semibold">{descriptionHeader}</p>
                    <p className="text-base">{descriptionBody}</p>
                </div>
            </div>
        </div>
    )
}