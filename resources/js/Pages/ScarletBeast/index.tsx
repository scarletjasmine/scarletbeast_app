import React from 'react';
import { Link } from '@inertiajs/react';
import Chat from './Chat';



interface ChatProps {
  openaiapikey: string;
}

const ScarletBeast = (props: ChatProps) => {
    return (
      <>
        <h1>ScarletBeast</h1>
        <p><Link href={route('login')} >Login lollipop</Link></p>
        <p><Link href={route('logout')} >{openaiapikey}</Link></p>
        {/*<Chat openaiapikey={openaiapikey} />*/}
      </>
    );
};
export const layout = (page: any) => <Layout children={page} title="ScarletBeast" />;
export default ScarletBeast;