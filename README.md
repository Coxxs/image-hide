# image-hide

Put a secret image into another image using alpha channel magic.

Try to view this image under black background:

<img src="https://i.imgur.com/kZ0rj2m.png" width="150" height="150">

## Usage

```bash
npm install --save image-hide
```

```javascript
const fs = require('fs')
const hide = require('image-hide')

// Size (width & height) of these images should be same.
let imageA = fs.readFileSync('a.png')
let imageB = fs.readFileSync('b.png')

fs.writeFileSync('result.png', Buffer.from(hide(imageA, imageB)))
```