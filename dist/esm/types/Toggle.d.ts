import React from "react";
interface ToggleProps {
    tooltip?: string;
    defaultToggleValue?: boolean;
    onToggle?: (isActive: boolean) => void;
}
declare const Toggle: React.FC<ToggleProps & React.HTMLAttributes<HTMLDivElement>>;
export default Toggle;
