// 获取当前时间，并格式化为HH:mm:ss
export function getNowTime() {
    let date = new Date();
    let hour = String(date.getHours()).padStart(2, '0');
    let minute = String(date.getMinutes()).padStart(2, '0');
    let second = String(date.getSeconds()).padStart(2, '0');
    return `${hour}:${minute}:${second}`;
}

// 获取当前日期，并格式化为YYYY年MM月DD日
export function getNowDate() {
    let date = new Date();
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDate()).padStart(2, '0');
    return `${year}年${month}月${day}日`;
}