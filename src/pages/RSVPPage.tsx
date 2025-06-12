import React from 'react';
import RSVPForm from '../components/RSVPForm';

const RSVPIllustration = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display:'block',margin:'0 auto 12px auto'}}>
    {/* 편지봉투 */}
    <rect x="16" y="28" width="48" height="32" rx="6" fill="#fff6e9" stroke="#bfa382" strokeWidth="2"/>
    <polyline points="16,28 40,52 64,28" fill="none" stroke="#bfa382" strokeWidth="2"/>
    {/* 하트 */}
    <path d="M40 38 Q42 34 46 36 Q50 38 40 48 Q30 38 34 36 Q38 34 40 38" fill="#bfa382"/>
  </svg>
);

const RSVPPage: React.FC = () => {
  return (
    <div className="invitation-bg">
      <div className="invitation-card">
        <div className="invitation-header wedding-header-bg">
          <RSVPIllustration />
          <div className="wedding-names" style={{fontSize:'1.5rem',marginBottom:8}}>참석 회신</div>
          <div className="wedding-date" style={{fontSize:'1.02rem',color:'#a68b6d'}}>참석 여부를 알려주세요</div>
        </div>
        <div className="invitation-section">
          <RSVPForm />
        </div>
      </div>
    </div>
  );
};

export default RSVPPage; 