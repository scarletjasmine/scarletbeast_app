import React from 'react';
import { Link } from '@inertiajs/react';





const ScarletBeast = () => {
  auth()->check() {
    return (
      <>
        <h1>ScarletBeast</h1>
        <p><Link href={route('logout')} >Login</Link></p>

      </>
      );
  }
  else {
    return (
      <>
        <h1>ScarletBeast</h1>
        <p><Link href={route('login')} >Login</Link></p>

      </>
      );
  }
};
export const layout = (page: any) => <Layout children={page} title="ScarletBeast" />;
export default ScarletBeast;