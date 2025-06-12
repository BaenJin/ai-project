import React, { useState } from 'react';
import PhotoUploader from './PhotoUploader';

const templateOptions = [
  { value: 'classic', label: '클래식' },
  { value: 'modern', label: '모던' },
  { value: 'floral', label: '플로럴' },
  { value: 'minimal', label: '미니멀' },
  { value: 'vintage', label: '빈티지' },
];

const InvitationForm: React.FC = () => {
  const [form, setForm] = useState({
    groom: '',
    bride: '',
    date: '',
    time: '',
    venue: '',
    contact: '',
    message: '',
    template: 'classic',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('청첩장 정보가 저장되었습니다!');
  };

  return (
    <form className="form-card invitation-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>신랑 이름</label>
        <input name="groom" value={form.groom} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>신부 이름</label>
        <input name="bride" value={form.bride} onChange={handleChange} required />
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>날짜</label>
          <input type="date" name="date" value={form.date} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>시간</label>
          <input type="time" name="time" value={form.time} onChange={handleChange} required />
        </div>
      </div>
      <div className="form-group">
        <label>장소</label>
        <input name="venue" value={form.venue} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>연락처</label>
        <input name="contact" value={form.contact} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>인사말</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={3} />
      </div>
      <div className="form-group">
        <label>템플릿 선택</label>
        <select name="template" value={form.template} onChange={handleChange}>
          {templateOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <PhotoUploader />
      <button type="submit">청첩장 저장</button>
    </form>
  );
};

export default InvitationForm; 