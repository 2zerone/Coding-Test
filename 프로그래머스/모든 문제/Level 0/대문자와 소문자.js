function solution(my_string) {
    return [...my_string].map((v) =>
                       v.charCodeAt() > 96
                       ? v.toUpperCase()
                       : v.toLowerCase()).join('');
}