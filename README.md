## What is this?

Animate CSS Generator

## Instalation
```bash
npm i animate-css-generator
```

## Usage

```jsx
import React from "react";
import animated from "animate-css-generator/animations/base";
import bounce from "animate-css-generator/animations/bounce";

function App() {
  return (
    <div>
      <div className={`${bounce} animate-infinite`}>Bounce Infinite</div>
      <div className={`${bounce} animate-faster`}>Bounce Faster</div>
      <div className={`${bounce} animate-fast`}>Bounce Fast</div>
      <div className={`${bounce} animate-slow`}>Bounce Slow</div>
      <div className={`${bounce} animate-slower`}>Bounce Slow</div>
    </div>
  );
}
```
