const router = require("express").Router()

const uploaderMiddleware = require("../middleware/uploader.middleware")

router.post('/image', uploaderMiddleware.single('imageData'), (req, res) => {

    if (!req.file) {
        res.status(500).json({ errorMessage: 'Error caragndo el archivo' })
        return
    }

    res.json({ cloudinary_url: req.file.path })
})

router.post('/images', uploaderMiddleware.array('imagesData'), (req, res) => {

    if (!req.files) {
        res.status(500).json({ errorMessage: 'Error caragndo los archivos' })
        return
    }

    const images = req.files.map(elm => elm.path)

    res.json({ cloudinary_urls: images })
})

module.exports = router