import React from 'react';
import { useNavigate } from 'react-router-dom';

function FormSelection() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/form/A')}>Form A</button>
      <button onClick={() => navigate('/form/B')}>Form B</button>
    </div>
  );
}

export default FormSelection;
