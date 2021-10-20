## What is this?

Animate CSS Generator

## Instalation
```bash
npm i animate-css-generator
```

## Usage

```jsx
import React from "react";
import animated from "animate-css-generator/animations/animated";
import animatedInfinite from "animate-css-generator/animations/animatedInfinite";
import bounce from "animate-css-generator/animations/bounce";

function App() {
  return (
    <div>
      <div className={`${animated} ${bounce}`}>Bounce</div>
      <div className={`${animated} ${bounce} ${animatedInfinite}`}>Bounce Infinite</div>
    </div>
  );
}
```
