import React from 'react';
import { Link } from '@inertiajs/react';


const ScarletBeast = () => {
  return (
    <>
      <h1>ScarletBeast</h1>
      <p><Link href={route('login')} >Login</Link></p>
  
    </>
    );
};
export default ScarletBeast;