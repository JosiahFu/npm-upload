# `@tater-archives/upload`

A simple utility to read a file as a string in the browser

## Example Usage

```js
// Get the input
const fileInput = document.getElementById('fileInput');
// Set the listener
fileInput.addEventListener('change', handleFileUpload(content => {
    // ... do stuff with content
}))
```

In React/Preact:

```jsx
<input
    type="file"
    onChange={handleFileUpload(content => {
        /* ... do stuff with content */
    })}
/>
```

You can use it in the browser via [esm.sh](https://esm.sh) or [unpkg](https://unpkg.com).

```js
import { handleFileUpload } from 'https://esm.sh/@tater-archives/upload';
// or
import { handleFileUpload } from 'https://unpkg.com/@tater-archives/upload';
```
