//create: store를 생성해주는 함수
import { create } from "zustand"

const useCountStore = create((set,get)=>({
    count:0,
    increase:() => set((state)=>({
        count:state.count + 1,
    })),
    increaseBy:(number)=>set((state)=>({
        count:state.count + number,
    })),
    decrease:()=>set((state)=>({
        count:state.count -1,
    })),
    decreaseBy: (number) => {
    set((state) => ({
        count: Math.max(state.count - number, 0),
    }));
}
}))

export default useCountStore;
