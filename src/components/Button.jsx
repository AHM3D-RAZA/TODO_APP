export const Button = ({text="Simple Button", fn}) => {
    return (
        <button onClick={fn} className="font-bold m-3 text-amber-100 text-center w-25 bg-blue-300 rounded cursor-pointer hover:bg-blue-500 p-2">
            {text}
        </button>
    )
}