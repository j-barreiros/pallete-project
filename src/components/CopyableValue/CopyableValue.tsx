// Style 
import { MouseEvent, useState } from "react";
import StyledCopyableValue from "./StyledCopyableValue";

type CopyableValueProps = {
    mode: 'text' | 'button' | 'stripe';
    value: string;
    children: React.ReactNode;
}

const CopyableValue = ({ children, value, mode }: CopyableValueProps) => {

    const [animate, setAnimate] = useState(false);

    const handleCopy = (event:MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        if(animate == true) return;
        event.stopPropagation();
        setAnimate(true);
        copyAnimation();
        navigator.clipboard.writeText(value);
    }

    const copyAnimation = () => {
        setTimeout(() => setAnimate(false), 700);
    }

    return (
        <StyledCopyableValue className={mode} onClick={event => handleCopy(event)}>
            {children}
            <div className={`copy-alert ${animate ? 'animate' : ''}`} >Copied</div>
        </StyledCopyableValue>
    )
}

export default CopyableValue;