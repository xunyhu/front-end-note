# git 命令

1. 查看 git 用户名：`git config user.name`

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
