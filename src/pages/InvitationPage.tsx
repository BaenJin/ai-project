import React from 'react';
import InvitationForm from '../components/InvitationForm';

const message = '저희 두 사람이 사랑으로 하나 되는 자리에 소중한 분을 초대합니다. 오셔서 축복해 주세요.';

// 간단한 하트 일러스트
const SimpleHeartSVG = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display:'block',margin:'0 auto 12px auto'}}>
    <path d="M30 50 Q10 35 15 22 Q20 10 30 18 Q40 10 45 22 Q50 35 30 50" fill="#bfa382" stroke="#e5d7b8" strokeWidth="2"/>
  </svg>
);

const InvitationPage: React.FC = () => {
  return (
    <div className="invitation-bg">
      <div className="invitation-card">
        <div className="invitation-header wedding-header-bg">
          <SimpleHeartSVG />
        </div>
        <div className="invitation-section">
          <div className="invitation-message">{message}</div>
        </div>
        <div className="invitation-section">
          <InvitationForm />
        </div>
      </div>
    </div>
  );
};

export default InvitationPage; 