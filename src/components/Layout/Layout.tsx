import React from 'react';
import Sidebar from '../Sidebar';
import UserHeader from '../UserHeader';
import MobileNav from '../MobileNav';

import { StyledContent } from './styles';

const Layout: React.FC<{ user: any, children: any }> = (props) => {
  return (
    <>
      <MobileNav />
      <Sidebar />
      <StyledContent>
        <UserHeader user={props.user} />
        <div>{props.children}</div>
      </StyledContent>
    </>
  );
};

export default Layout;


