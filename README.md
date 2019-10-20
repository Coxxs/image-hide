## image-hide

Put a secret image into another image using alpha channel magic.

Try to view this image under black background:

![](example.png)

## Usage

```
npm install --save image-hide
```

```javascript
const fs = require('fs')
const hide = require('image-hide')

let imageA = fs.readFileSync('./image-a.png')
let imageB = fs.readFileSync('./image-b.png')

fs.writeFileSync('result.png', Buffer.from(hide(imageA, imageB)))
```