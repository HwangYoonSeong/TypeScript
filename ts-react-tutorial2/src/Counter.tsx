import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const onIncrease = () => setCount(count + 1);
    const onDecrease = () => setCount(count - 1);

    // //바로, 상태가 null일 수도 있고 아닐수도 있을때 
    // //Generics 를 활용하시면 좋습니다.
    // type Information = { name: string; description: string };
    // const [info, setInformation] = useState<Information | null>(null);

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    );
}

export default Counter;