import '../css/logo.scss'


function Logo() {
    return (
        <svg width="100%" height="auto" viewBox="0 0 666 539" fill="none">
            <line className="line-first-h" x1="0" y1="144.5" x2="500" y2="144.5" stroke="black" />
            <line className="line-first-v" x1="434.5" y1="539" x2="434.5" y2="145" stroke="black" />
            <line className="line-second-v" x1="240.5" y1="0" x2="240.5" y2="394" stroke="black" />
            <line className="line-second-h" x1="666" y1="393.5" x2="166" y2="393.5" stroke="black" />
        </svg>
    )
}

export default Logo