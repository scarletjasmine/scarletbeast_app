import React from 'react';
import { Link } from '@inertiajs/react';





const ScarletBeast = () => {
    return (
      <>
        <h1>ScarletBeast</h1>
        <p><Link href={route('login')} >Login lollipop</Link></p>
        <p><Link href={route('logout')} >Logout</Link></p>
      </>
    );
};
export const layout = (page: any) => <Layout children={page} title="ScarletBeast" />;
export default ScarletBeast;