import React, { useState } from "react";

// Style
import "./style/style.less";

interface ToggleProps {
    defaultToggleValue?: boolean
    onToggle?: (isActive: boolean) => void
}

const Toggle: React.FC<ToggleProps & React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const [active, setActive] = useState(props.defaultToggleValue ?? false);

    const handleToggle = () => {
        if(props.onToggle) props.onToggle(!active);
        setActive(!active);
    };

    return (
        <div
            className="toggle"
            onClick={() => handleToggle()}
            data-active={active}
            {...props}>
            <span className="toggle-bar"></span>
            <span className="toggle-knob" style={{ transform: active ? "translateX(18px)" : "none" }}></span>
        </div>
    );
}

export default Toggle;
