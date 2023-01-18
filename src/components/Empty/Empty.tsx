import React from 'react';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';

export const Empty = () => {
  return (
    <div className="error">
      <h2>Список данных пуст...</h2>
      <PlaylistRemoveIcon sx={{ fontSize: 60 }} />
      <h5>Вероятно данные ещё не поступили на сервер. Попробуйте позже.</h5>
    </div>
  );
};
