import Articles from '../models/Article.model.js';
import path from 'path'
import createError from 'http-errors'
import fs from 'fs'

const __dirname = path.resolve()

export const uploadFile = async (req, res, next) => {
  try {

    if (!req.file) throw createError(400, 'No file uploaded')

    const { title, description } = req.body;

    const fileUrl = `/uploads/${req.file.filename}`;

    const newArticle = new Articles({
      title,
      description,
      fileUrl,
    });

    await newArticle.save();

    res.status(201).json({
      message: 'File uploaded successfully',
      file: newArticle,
    });
  } catch (error) {
    console.error('File upload error:', error);
    // res.status(500).json({ message: 'Server error', error });
    next(error)
  }
};

export const getFiles = async (req, res) => {
  try {
    const files = await Articles.find().sort({ createdAt: -1 });

    if (files.length < 1) {
      res.status(200).json({ message: 'No articles or news items published, yet.' })
    }

    res.status(200).json(files);
  } catch (error) {
    // res.status(500).json({ message: 'Server error', error });
    next(error)
  }
};

export const deleteArticle = async (req, res, next) => {
  try {
    const { id } = req.params

    const article = await Articles.findById(id)
    if (!article) throw createError(404, 'File not found')

    // ✅ Construct the absolute path to the uploaded file
    const filePath = path.join(__dirname, 'public', article.fileUrl)

    // ✅ Delete the file from disk (if it exists)
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (!err) {
        fs.unlink(filePath, (unlinkErr) => {
          if (unlinkErr) console.error('Error deleting file:', unlinkErr)
        })
      }
    })

    // ✅ Delete from MongoDB
    await Articles.findByIdAndDelete(id)

    res.status(200).json({ message: 'File deleted successfully' })
  } catch (error) {
    console.error('Delete file error:', error)
    next(error)
  }
}
