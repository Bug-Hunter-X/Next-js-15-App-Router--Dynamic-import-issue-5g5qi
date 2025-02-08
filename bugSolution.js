```javascript
// pages/index.js
import { Suspense } from 'react';

const MyComponent = React.lazy(() => import('./MyComponent'));

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MyComponent/>
    </Suspense>
  );
}

// pages/MyComponent.js

function MyComponent() {
  return (
    <div>Component Loaded Dynamically!</div>
  );
}
```