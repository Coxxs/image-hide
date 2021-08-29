import decode from 'image-decode'
import encode from 'image-encode'

export default function hide(foreground, background) {
    let image_a = decode(foreground)
    let image_b = decode(background)
    if (image_a.height != image_b.height || image_a.width !== image_b.width) {
        throw new Error(`Size of images should be same. ${image_a.width}x${image_a.height} !== ${image_b.width}x${image_b.height}`)
    }
    let h = image_a.height
    let w = image_a.width
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            let n = (w * i + j) * 4
            let [ r, g, b, a ] = [ n, n + 1, n + 2, n + 3 ]
    
            let avg_a = getPixelAvg(image_a.data[r], image_a.data[g], image_a.data[b], image_a.data[a], 255)
            let avg_b = getPixelAvg(image_b.data[r], image_b.data[g], image_b.data[b], image_b.data[a])
            avg_a = (avg_a / 255) * 0.5
            avg_b = (avg_b / 255) * 0.5
            let new_avg = Math.round(avg_b / (0.5 - avg_a + avg_b) * 255)
            let new_alpha = Math.round((0.5 - avg_a + avg_b) * 255)
            image_a.data[r] = image_a.data[g] = image_a.data[b] = new_avg
            image_a.data[a] = new_alpha
        }
    }
    return encode(image_a.data, [w, h], 'png')
}

function getPixelAvg(r, g, b, a, bg = 0) {
    return (r + g + b) / 3 * (a / 255) + bg * (1 - a / 255)
}
