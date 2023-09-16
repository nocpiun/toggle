import React from 'react';

interface ToggleProps {
    defaultToggleValue?: boolean;
    onToggle?: (isActive: boolean) => void;
}
declare const Toggle: React.FC<ToggleProps & React.HTMLAttributes<HTMLDivElement>>;

export { Toggle as default };
