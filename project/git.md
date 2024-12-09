# git

1. 查看 git 用户名：

   `git config user.name`

2. 配置 git 用户名

   全局配置：`git config --global user.name "Your Name"`

   当前仓库配置：`git config user.name "Your Name"`

## 常见报错

1. Failed to connect to github.com port 443 after 21072 ms: Timed out

   > 问题原因：网络问题，无法连接 github.com
   > 解决方法：

   ```git
   git config --global http.proxy 'socks5://127.0.0.1:1080'
   git config --global https.proxy 'socks5://127.0.0.1:1080'
   ```

   > 问题原因：网络问题，无法连接 github.com
   > 解决方法：

   ```git
   git config --global --unset http.proxy
   git config --global --unset https.proxy
   ```

2. fatal: unable to access `'https://github.com/xxx/xxx.git/':` OpenSSL SSL_read: Connection was reset, errno 10054

   > 问题原因：网络问题，无法连接 github.com
   > 解决方法：

   ```git
   git config --global http.sslVerify false
   ```

3. fatal: unable to access `'https://github.com/xxx/xxx.git/'`: SSL certificate problem: unable to get local issuer certificate

   > 问题原因：网络问题，无法连接 github.com
   > 解决方法：

## 配置项目 git 用户名

config 文件

[user]
email = xxx
name = xxx

## 生成 ssh key

1. 生成 ssh

   `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`

2. 测试 SSH 连接

   `ssh -T yourwebsite.com`
