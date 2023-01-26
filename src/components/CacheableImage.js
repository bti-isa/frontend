import { useEffect, useState } from "react";

const CacheableImage = ({ src }) => {
    const [url, setUrl] = useState(null)

    const fetchImage = async () => {
        if ('caches' in window) {
            const cache = await caches.open('my-image-cache')
            const response = await cache.match(src)
            if (response) {
                const imageBlob = response.blob()
                setUrl(URL.createObjectURL(imageBlob))
                return
            }
        }
        const stdResponse = fetch(src)
        const imageBlob = stdResponse.blob()

        if ('caches' in window) {
            const cache = await caches.open('my-image-cache')
            cache.put(src, new Response(imageBlob))
        }
        setUrl(URL.createObjectURL(imageBlob))
    }

    useEffect(() => {
        fetchImage()
    })

    return (
        <img src={url || src} onError={fetchImage}
            onLoad={() => caches.open('my-image-cache').then((cache) => cache.add(src))} alt="Static" />
    );
}

export default CacheableImage;