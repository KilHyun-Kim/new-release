import { combineReducers } from "redux";
import counter from "./counter";

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;

/* ※ js 와 동일하지만, RootState라는 타입을 만들어서 내보내줘야함
    이 타입은 추후 우리가 컨테이너 컴포넌트를 만들게 될 때 
    스토어에서 관리하고 있는 상태를 조회하기 위해서 useSelector를 사용 할 때 필요로 합니다. */
export type RootState = ReturnType<typeof rootReducer>;
