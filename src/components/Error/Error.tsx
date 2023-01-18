import React from 'react';
import ErrorIcon from '@mui/icons-material/Error';

export const Error = () => {
  return (
    <div className="error">
      <h2>Произошла ошибка при запросе данных с сервера</h2>
      <ErrorIcon sx={{ color: 'red', fontSize: 60 }} />
      <h5>Перезагрузите страницу, или попробуйте позже.</h5>
    </div>
  );
};
