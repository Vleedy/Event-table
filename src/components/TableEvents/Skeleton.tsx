import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={'98%'}
      height={860}
      viewBox="0 0 100% 760"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="25" y="39" rx="0" ry="0" width="100%" height="45" />
      <rect x="25" y="88" rx="0" ry="0" width="100%" height="36" />
      <rect x="25" y="128" rx="0" ry="0" width="100%" height="36" />
      <rect x="25" y="168" rx="0" ry="0" width="100%" height="36" />
      <rect x="25" y="208" rx="0" ry="0" width="100%" height="36" />
      <rect x="25" y="248" rx="0" ry="0" width="100%" height="36" />
      <rect x="25" y="288" rx="0" ry="0" width="100%" height="45" />
    </ContentLoader>
  );
};

export default Skeleton;
