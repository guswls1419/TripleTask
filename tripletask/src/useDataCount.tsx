import React, { useRef } from 'react'

function useDataCount(end:number) {
    const dom = useRef();

    const { current } = dom;
    
    let num = 0;
    let count = setInterval(()=>{
        ++num

        if(num == end){
            clearInterval(count);
        }
    },2000);

  return {ref:dom};
}

export default useDataCount