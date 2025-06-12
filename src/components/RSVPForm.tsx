import React, { useState } from 'react';

const RSVPForm: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    attendance: '참석',
    headcount: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === 'headcount' ? Number(value) : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('RSVP가 제출되었습니다!');
  };

  return (
    <form className="form-card invitation-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>이름</label>
        <input name="name" value={form.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>연락처</label>
        <input name="contact" value={form.contact} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>참석 여부</label>
        <select name="attendance" value={form.attendance} onChange={handleChange}>
          <option value="참석">참석</option>
          <option value="불참">불참</option>
          <option value="미정">미정</option>
        </select>
      </div>
      <div className="form-group">
        <label>인원 수</label>
        <input type="number" name="headcount" min={1} max={10} value={form.headcount} onChange={handleChange} required />
      </div>
      <button type="submit">RSVP 제출</button>
    </form>
  );
};

export default RSVPForm; 