import * as React from 'react'

export default function useDataCount(end:number) {
    const [data, setData] = React.useState(end)
    const duration = Math.floor(2000 / (1000/100))

    React.useEffect(()=>{
        let num = 0;
        const counts = setInterval(()=>{
            const test2 = easeOutCirc( ++num / duration)
            setData(Math.floor(end*test2))
            
            if(test2 === 1){
                clearInterval(counts);
            }
            
        },1000/100);
    },[])
    
    function easeOutCirc(x: number): number {
        return Math.sqrt(1 - Math.pow(x - 1, 4));
        }
  return data;
}


// import * as React from 'react'

// export default function useDataCount(isRunning:any, end:number, callback = () => {}) {
// //     const [data, setData] = React.useState(end)
// //     const duration = Math.floor(2000 / (1000/50))
// //     console.log(duration)
// // console.log()

// // function easeOutCirc(x: number): number {
// //     return Math.sqrt(1 - Math.pow(x - 1, 2));
// //     }


// 	const reqIdRef:any = React.useRef();
// 	const loop = React.useCallback(() => {
// 		if (isRunning) {
// 			reqIdRef.current = requestAnimationFrame(loop);
//             callback();
// 		}
// 	}, []);

//     React.useEffect(() => {
// 		reqIdRef.current = requestAnimationFrame(loop);
// 		return () => cancelAnimationFrame(reqIdRef.current);
       
// 	}, []);




// //   return data;
// }
