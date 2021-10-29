### git如何添加和删除submodule

### 这是咱第一次接触submodule，还是之前的项目不复杂 ，只能这么理解
### 当项目复杂，并且希望有子代码独立版本控制，可以使用 git submodule功能。
### 使用git submodule 功能时，主项目只是配置子模块及版本信息，而不会有子模块文件

### 添加submodule 命令
### git submodule add :git-url dep
### 删除submodule 命令  （没有实际操作过 就留个印象题）
### vim .gitmodules 找到该模块位置，删除
### vim .git/config 找到该模块位置，删除
### rm -rf .git/module/dep
### git rm --cached dep