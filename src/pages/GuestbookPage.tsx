import React from 'react';
import GuestbookForm from '../components/GuestbookForm';

const GuestbookIllustration = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display:'block',margin:'0 auto 12px auto'}}>
    {/* 노트 */}
    <rect x="18" y="24" width="44" height="32" rx="6" fill="#fff6e9" stroke="#bfa382" strokeWidth="2"/>
    <line x1="24" y1="32" x2="56" y2="32" stroke="#e5d7b8" strokeWidth="1.5"/>
    <line x1="24" y1="40" x2="56" y2="40" stroke="#e5d7b8" strokeWidth="1.5"/>
    <line x1="24" y1="48" x2="56" y2="48" stroke="#e5d7b8" strokeWidth="1.5"/>
    {/* 연필 */}
    <rect x="54" y="54" width="10" height="4" rx="2" fill="#bfa382"/>
    <polygon points="64,54 68,56 64,58" fill="#a68b6d"/>
  </svg>
);

const GuestbookPage: React.FC = () => {
  return (
    <div className="invitation-bg">
      <div className="invitation-card">
        <div className="invitation-header wedding-header-bg">
          <GuestbookIllustration />
          <div className="wedding-names" style={{fontSize:'1.5rem',marginBottom:8}}>방명록</div>
          <div className="wedding-date" style={{fontSize:'1.02rem',color:'#a68b6d'}}>축하 메시지를 남겨주세요</div>
        </div>
        <div className="invitation-section">
          <GuestbookForm />
        </div>
      </div>
    </div>
  );
};

export default GuestbookPage; 