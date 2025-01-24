var express = require('express')
var cors = require('cors')

var app = express();
app.use(cors());  // 允许所有来源访问，或者配置特定的来源

var todoItems = [
    {
        id: 0,
        value: "React",
        done: false,
        delete: false,
    }
]

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/items', function (req, res) {
    res.send(todoItems);
});

app.listen(8000, function () {
    console.log('Server runnning at http://127.0.0.1:8000/')
});

/**
 * 查看端口占用  lsof -i :8000
 * 终止端口  kill -9 <PID>   -9 强制删除   pid 端口号对应id
 */