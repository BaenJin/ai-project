import React, { useRef, useState } from 'react';

const MAX_PHOTOS = 5;

const PhotoUploader: React.FC = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const fileArr = Array.from(files).slice(0, MAX_PHOTOS - photos.length);
    Promise.all(fileArr.map(file => {
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = e => resolve(e.target?.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    })).then(imgs => setPhotos(prev => [...prev, ...imgs]));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleRemove = (idx: number) => {
    setPhotos(photos.filter((_, i) => i !== idx));
  };

  return (
    <div className="form-group">
      <label>사진 업로드 (최대 {MAX_PHOTOS}장)</label>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleChange}
        ref={fileInputRef}
        disabled={photos.length >= MAX_PHOTOS}
      />
      <div className="photo-preview-list">
        {photos.map((src, idx) => (
          <div key={idx} className="photo-preview">
            <img src={src} alt={`preview-${idx}`} />
            <button type="button" onClick={() => handleRemove(idx)}>삭제</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoUploader; 