import React from 'react';
import '../pages/Home.css';
const Footer = () => {
    return (
        <footer className='min-h-20 w-full space-y-4 py-2 mx-auto '>
            <ul className='flex justify-center items-center gap-12  '>
                <li className=' font-bold text-zinc-400'><a href="#">
                    <span>
                        <img width={25} height={15} src="/mosque_6684648.png" alt="vv" />
                    </span>
                    Nearby</a></li>
                <li className='font-bold text-zinc-400'><a href="#">
                    <span>
                        <img width={25} height={15} src="/mosque_6684648.png" alt="vv" />
                    </span>
                    Around Me</a></li>
                <li className='font-bold text-zinc-400'><a href="#">
                    <span>
                        <img width={25} height={15} src="/wallet_3258446.png" alt="vv" />
                    </span>
                    Wallet</a></li>
            </ul>
        </footer>
    );
};

export default Footer;
