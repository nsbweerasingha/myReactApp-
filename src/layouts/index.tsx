import * as React from 'react';
import Image from 'next/image';
import TopMenu from './components/ResponsiveAppBar';

// Props
// import { HeaderProps } from '../interface/layouts/headerProps';

// const UserLayout = ({ hidden }: HeaderProps) => {

// });

export default function Layouts() {
  return (
    <header>
        <TopMenu/>
    </header>
  )
}
