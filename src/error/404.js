import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const Navigate = useNavigate();
  return (
    <div>
      <div>未找到相关页面</div>
      <div
        onClick={() => {
          Navigate('/');
        }}
      >
        back to IndexPage
      </div>
    </div>
  );
}
