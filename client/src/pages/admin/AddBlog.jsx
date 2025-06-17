import React, { useEffect, useRef, useState } from 'react';
import { assets, blogCategories } from '../../assets/assets';
import Quill from 'quill';

const AddBlog = () => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [image, setImage] = useState(false);
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [category, setCategory] = useState('');
  const [isPublished, setIsPublished] = useState(false);

  const generateContent = async () => {
    // AI generation logic
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // Submit logic
  };

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: 'snow' });
    }
  }, []);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="w-full min-h-screen bg-blue-50/50 text-gray-700 flex justify-center px-4 py-10 overflow-y-auto"
    >
      <div className="w-full max-w-xl bg-white p-6 rounded-xl shadow-md">

        {/* Upload Section */}
        <label htmlFor="image" className="block mb-6">
          <p className="font-medium mb-2">Upload Thumbnail</p>
          <div className="h-28 w-40 border border-dashed border-gray-300 flex justify-center items-center rounded-md bg-gray-50 cursor-pointer hover:bg-gray-100 transition">
            <img
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              alt="Upload"
              className="h-16 object-contain"
            />
          </div>
          <input
            type="file"
            id="image"
            hidden
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </label>

        {/* Blog Title */}
        <div className="mb-4">
          <label className="font-medium block mb-1">Blog Title</label>
          <input
            type="text"
            placeholder="Type here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
          />
        </div>

        {/* Sub Title */}
        <div className="mb-4">
          <label className="font-medium block mb-1">Sub Title</label>
          <input
            type="text"
            placeholder="Type here"
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
          />
        </div>

        {/* Blog Description */}
        <div className="mb-4 relative">
          <label className="font-medium block mb-1">Blog Description</label>
          <div
            ref={editorRef}
            className="h-48 border border-gray-300 rounded p-2 overflow-y-auto"
          />
          <button
            type="button"
            onClick={generateContent}
            className="absolute bottom-2 right-2 bg-gray-700 text-white px-3 py-1 text-sm rounded hover:opacity-90"
          >
            Generate with AI
          </button>
        </div>

        {/* Blog Category */}
        <div className="mb-4">
          <label className="font-medium block mb-1">Blog Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            required
          >
            <option value="">Select category</option>
            {blogCategories.map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
        </div>

        {/* Publish Now */}
        <div className="flex items-center gap-2 mb-6">
          <label className="font-medium">Publish Now</label>
          <input
            type="checkbox"
            checked={isPublished}
            onChange={(e) => setIsPublished(e.target.checked)}
            className="scale-110"
          />
        </div>

        {/* Submit Button */}
        <div className="-mt-6">
            <button
                type="submit"
                className="px-6 py-2 bg-[#5b36f2] text-white rounded hover:opacity-90 transition"
            >
                Add Blog
            </button>
        </div>


      </div>
    </form>
  );
};

export default AddBlog;

