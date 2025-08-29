function initState() {
    return {
        count: 0,
    }
}

// 상태 유효범위와 리셋 시점
// 리셋 시점: 페이지 새로고침, 브라우저 종료시
// 유효 시점: SPA 라우팅 시
export const practice = {
    // 상태초기화
    state: initState,
    // 상태값 변경 메서드
    mutations: {
        incrementCount(state) {
            state.count++;
        }
    },
    // 컴포넌트에서 mutation을 직접 호출하기 보다는 actions를 통해 mutation을 호출
    actions: {
        incrementCount(context){
            // vuex의 action에서 mutation을 호출할 때 commit함수 사용
            // 여러 mutation의 조합을 actions에서 호출할 수 있기 때문에 이와 같은 구조 사용 
            context.commit("incrementCount");
        }
    },
    // 상태값 Getter
    getters: {
        getCount: state => state.count,
    }
}