import React from "react";
import "./style/style.less";
interface ToggleProps {
    defaultToggleValue?: boolean;
    onToggle?: (isActive: boolean) => void;
}
declare const Toggle: React.FC<ToggleProps & React.HTMLAttributes<HTMLDivElement>>;
export default Toggle;
