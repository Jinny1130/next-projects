/* xs size dot */

interface OwnProps {
    sideText: string,
    textSize: string,
}

const DotWithText:React.FC<OwnProps> = ( { sideText, textSize } ) => {
    return (
        <div className={`dot-width-text w-full py-2`}>
            <p className="flex items-start justify-between">
                <i className={`block w-1 h-1 rounded-full bg-sky-400 my-[10px] mr-[10px] ml-[4px]`}/>
                <span className="w-[calc(100%-20px)]" dangerouslySetInnerHTML={{ __html: sideText }}></span>
            </p>
        </div>
    )
}

export default DotWithText