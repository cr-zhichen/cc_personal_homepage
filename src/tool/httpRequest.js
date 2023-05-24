//axios
import axios from 'axios';

const config =
    {
        "aWord": "https://v1.hitokoto.cn/"
    }

//Get调用一言接口
export async function GetAWord(ok, err) {
    try {
        const response = await axios.get(config.aWord);

        if (response.status !== 200) {
            err && err(response.statusText);
        }

        ok(response.data);
    } catch (error) {
        err && err(error.message);
    }
}

//Get请求
export async function GetHelp(url, ok, err, token = '') {
    const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    try {
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });

        if (response.status !== 200) {
            err && err(response.statusText);
        }

        ok(response.data);
    } catch (error) {
        err && err(error.message);
    }
    loading.close();
}

//Post请求
export async function PostHelp(url, data, ok, err, token = '') {
    const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    })

    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });

        if (response.status !== 200) {
            err && err(response.statusText);
        }
        ok(response.data);
    } catch (error) {
        err && err(error.message);
    }

    loading.close();
}
