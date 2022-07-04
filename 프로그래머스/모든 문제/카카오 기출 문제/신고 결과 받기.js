function solution(id_list, report, k) {
    const arr = new Array(id_list.length).fill(0);
    const report_list = {};
    
    id_list.map(x => {
        report_list[x] = [];
    })
    
    report.map(x => {
        const [id, report_id] = x.split(' ');
        if(!report_list[report_id].includes(id)) report_list[report_id].push(id);
    })
    
    for(let i in report_list) {
        if(report_list[i].length >= k) {
            report_list[i].map(x => arr[id_list.indexOf(x)] += 1)
        }
    }
    
    return arr;
}

// 시간 효율성이 그리 좋지 않은 풀이법, 새로운 풀이로 풀어볼 것!!