type Props = {
    label: string
    logo: string
}
const TechCard = ({label,logo}:Props) => {
    return (
        <>
            <div className="w-80 h-60 border-2 text-2xl rounded-md border-grey shadow-xl px-4 py-4 flex justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                <img src={logo} alt={label} className="w-[40%]"/>
                <h1>{label}</h1>
                </div>
            </div>
        </>
    );
}

export default TechCard;