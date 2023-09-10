import React from "react";
import Toggle from "../dist";

const TestComponent: React.FC = () => {
    return <Toggle defaultToggleValue={true} onToggle={(e) => console.log(e)}/>;
}

export default TestComponent;
