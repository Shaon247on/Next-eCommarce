import { ShoppingCartIcon } from 'lucide-react';
import React from 'react';

const ShoppingCardButton = () => {
    return (
        <div className='relative'>
            <span className='absolute px-1 -right-1 -top-1 bg-green-800 rounded-full text-xs'>6</span>
            <ShoppingCartIcon cursor={"pointer"} size={26}/>
        </div>
    );
};

export default ShoppingCardButton;