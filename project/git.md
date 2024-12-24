# git

1. 查看 git 用户名：

   `git config user.name`

2. 配置 git 用户名

   全局配置：`git config --global user.name "Your Name"`

   当前仓库配置：`git config user.name "Your Name"`

3. 版本回退

   - git reset --hard commit_id
   - git reset --hard HEAD^

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

## 创建两个不同的 SSH 密钥，分别用于 GitHub 和 GitLab，可以按照以下步骤进行：

### 步骤 1: 创建第一个 SSH 密钥（用于 GitHub）

1. 打开终端（Terminal）。
2. 运行以下命令来生成新的 SSH 密钥对。你可以指定密钥的文件名，例如 `github_id_rsa`，以便与 GitLab 的密钥区分开。

   ```bash
   ssh-keygen -t rsa -b 4096 -C "your_email@example.com" -f ~/.ssh/github_id_rsa
   ```

   其中：

   - `-t rsa` 指定使用 RSA 加密算法。
   - `-b 4096` 设置密钥的长度为 4096 位。
   - `-C "your_email@example.com"` 是用来标识密钥的注释（可以使用 GitHub 注册时的邮箱）。
   - `-f ~/.ssh/github_id_rsa` 指定密钥文件的路径和名称（确保文件名不与 GitLab 的密钥冲突）。

3. 接着，它会提示你输入密码（可选），你可以选择设置或跳过。

4. 密钥生成完毕后，你会在 `~/.ssh/` 目录下看到两个文件：
   - `github_id_rsa`：私钥
   - `github_id_rsa.pub`：公钥

### 步骤 2: 创建第二个 SSH 密钥（用于 GitLab）

1. 使用相同的步骤创建另一个 SSH 密钥，但是这次为 GitLab 设置一个不同的文件名，例如 `gitlab_id_rsa`。

   ```bash
   ssh-keygen -t rsa -b 4096 -C "your_email@example.com" -f ~/.ssh/gitlab_id_rsa
   ```

2. 和之前一样，你将得到一对新的密钥文件：
   - `gitlab_id_rsa`：私钥
   - `gitlab_id_rsa.pub`：公钥

### 步骤 3: 将公钥添加到 GitHub 和 GitLab

#### 将 GitHub 公钥添加到 GitHub

1. 使用 `cat` 命令查看 `github_id_rsa.pub` 的内容：

   ```bash
   cat ~/.ssh/github_id_rsa.pub
   ```

2. 复制输出的公钥内容。

3. 登录 GitHub，进入 **Settings** > **SSH and GPG keys** > **New SSH key**。

4. 在标题框中填写名称（例如：GitHub SSH），将复制的公钥粘贴到“Key”框中，然后点击 **Add SSH key**。

#### 将 GitLab 公钥添加到 GitLab

1. 使用 `cat` 命令查看 `gitlab_id_rsa.pub` 的内容：

   ```bash
   cat ~/.ssh/gitlab_id_rsa.pub
   ```

2. 复制输出的公钥内容。

3. 登录 GitLab，进入 **Preferences** > **SSH Keys** > **Add SSH Key**。

4. 在标题框中填写名称（例如：GitLab SSH），将复制的公钥粘贴到“Key”框中，然后点击 **Add key**。

### 步骤 4: 配置 SSH 客户端使用不同的密钥

你需要在 `~/.ssh/config` 文件中为 GitHub 和 GitLab 配置不同的密钥。编辑（或创建） `~/.ssh/config` 文件，并添加以下内容：

```bash
# GitHub configuration
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/github_id_rsa

# GitLab configuration
Host gitlab.com
  HostName gitlab.com
  User git
  IdentityFile ~/.ssh/gitlab_id_rsa
```

这样，当你连接到 GitHub 或 GitLab 时，SSH 客户端会自动选择相应的密钥。

### 步骤 5: 测试连接

1. 测试 GitHub SSH 连接：

   ```bash
   ssh -T git@github.com
   ```

   如果一切正常，你会看到类似以下的输出：

   ```bash
   Hi username! You've successfully authenticated, but GitHub does not provide shell access.
   ```

2. 测试 GitLab SSH 连接：

   ```bash
   ssh -T git@gitlab.com
   ```

   如果一切正常，你会看到类似以下的输出：

   ```bash
   Welcome to GitLab, @username!
   ```

这样，你就成功地为 GitHub 和 GitLab 配置了两个不同的 SSH 密钥。
