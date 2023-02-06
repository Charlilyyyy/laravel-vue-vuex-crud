export const getStudents = ({ commit },payload) => {
    let url = `/get-studentsdata`;

    axios.post(url, payload).then( res => {
        commit('setTableData', res.data);
    });
};

export const saveStudent = ({ commit },payload) => {
    let url = `/save-student`;

    axios.post(url, payload).then( res => {
        window.location.href = '/students';
    });
}