# image-hide

Put a secret image into another image using alpha channel magic.

Try to view this image under black background:

<img src="https://i.imgur.com/kZ0rj2m.png" width="150" height="150">

Inspired by [Hackergame 2019](https://github.com/ustclug/hackergame2019-writeups/blob/master/official/%E7%99%BD%E4%B8%8E%E5%A4%9C/README.md)

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