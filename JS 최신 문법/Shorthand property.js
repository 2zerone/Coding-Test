// 이전
const CreateUser = ({ id, name }) => {
    return {
        id: id,
        name: name,
    }
};


// 생략 가능
const CreateUser = ({ id, name }) => {
    return {
        id,
        name,
    }
};
