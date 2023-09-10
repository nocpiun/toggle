# `@nocp/toggle`

**React Toggle Component**

By NriotHrreion

---

## Installation

```cmd
npm i @nocp/toggle
```

## Usage

Import the component

```tsx
import Toggle from "@nocp/toggle";
```

Use the component

```tsx
<Toggle />
```

## Props

|Name|Type|Required|Description|
|:---:|:---:|:---:|---|
|`defaultToggleValue`|`boolean`|No|The default value of the toggle|
|`onToggle`|`(isActive: boolean) => void`|No|Toggling event of the toggle|

Also, the component supports [HTML attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes).

## Styling

The color style of the component can be changed by overriding the following CSS variables.

```css
:root {
    --nocp-toggle-bar-bg: #9e9e9e;
    --nocp-toggle-knob-bg: #dbdbdb;
}
```

## LICENSE

[MIT](./LICENSE)
