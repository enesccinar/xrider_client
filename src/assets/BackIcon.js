import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BackIcon(props) {
    return (
        <Svg width={18} height={12} viewBox="0 0 18 12" fill="none" {...props}>
            <Path
                d="M17 5H3.83l2.88-2.88A.996.996 0 105.3.71L.71 5.3a.996.996 0 000 1.41L5.3 11.3a.996.996 0 101.41-1.41L3.83 7H17c.55 0 1-.45 1-1s-.45-1-1-1z"
                fill="#000"
            />
        </Svg>
    )
}

export default BackIcon