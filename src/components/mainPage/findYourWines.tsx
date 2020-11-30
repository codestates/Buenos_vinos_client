import * as React from 'react';
type childrenTypes = { children: React.ReactNode };
const FindYourWines = ({ children }: childrenTypes) => {
  return (
    <>
      <div>find your wines part</div>
      <div>{children}</div>
    </>
  );
};
export default FindYourWines;
