import { useState } from 'react';

export default function useNavabar(){

    const [isOpened, setIsOpened]=useState(false);

    const handleOpenMenu=()=>{
        setIsOpened(!isOpened);
    }

    return {isOpened, handleOpenMenu};
}