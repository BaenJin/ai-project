import React, { useState } from 'react';

const GuestbookForm: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('축하 메시지가 등록되었습니다!');
  };

  return (
    <form className="form-card invitation-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>이름</label>
        <input name="name" value={form.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>메시지</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={3} required />
      </div>
      <button type="submit">메시지 등록</button>
    </form>
  );
};

export default GuestbookForm; 