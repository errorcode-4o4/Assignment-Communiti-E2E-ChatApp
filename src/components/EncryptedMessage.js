import React, { useEffect, useState } from "react"
import { MessageSimple } from "stream-chat-react"
import decrypt from "../lib/decrypt";


export default props => {
    const [message, setMessage] = useState(props.message);

    useEffect(() => {
        const work = async () => {
            setMessage({
                ...message,
                text: await decrypt(props.message.text, props.derivedKey)
            })
        }
        
        work()
    }, [props])

    return (
        <MessageSimple { ...{...props, message }} />
    )
}