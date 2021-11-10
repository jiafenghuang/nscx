# 常规
`git init` 初始化为git项目

`git add <filename>` 添加到暂存区，单独文件则输入文件名

`git status` 暂存区的状态

`git commit -m 'remark'` 提交到github

`git remote add origin git <github_address>`和远程github库

`git push -u origin master` 将提交的文件推送到远程github库的master分支

`git clone <gitlink>` 克隆一份代码到本地，适合刚开始项目
---
# 选择版本
`git log --pretty=oneline` 查询提交的log，后面的参数可以优化log

`git reset --hard HEAD^`,回退到上个版本，HEAD是头指针,HEAD^^上2个版本，再多则使用`HEAD~100`

`git reset --hard 1094a`回到原来的版本，或者指定版本，输入commitId的前几位

`git reflog`记录每次命令

`git diff HEAD -- readme.txt` 区分当前的readme文件和版本库里HEAD指向最新的文件的区别

`git checkout -- readme.txt` 丢弃工作区的修改

`git reset HEAD <file>`撤销掉暂存区的修改，先更新到最新版本(应该是会显示有修改)，使用上个命令清除掉

---
# 分支管理
查看分支：`git branch`

创建分支：`git branch <name>`

切换分支：`git checkout <name>`或者`git switch <name>`

创建+切换分支：`git checkout -b <name>`或者`git switch -c <name>`

合并某分支到当前分支：`git merge <name>`

删除分支：`git branch -d <name>`

## 具体实例
`git checkout -b dev`创建dev分支

`Switched to a new branch 'dev'`指向dev

`git branch`列出分支，`*`表示当前分支

`git checkout master` 切回原分支

`git merge dev`合并dev分支到当前分支

`git branch -d dev`删除dev分支

---
# 冲突
`git merge <name>`合并分支

`git log --graph --pretty=oneline --abbrev-commit`合并的图示化

## 合并
`git merge --no-ff -m "merge with no-ff" dev`，默认是使用fastForward的方式来合并， 会失去分支的历史信息，通过`--no-ff`的方式来保留历史版本信息

---
# bug分支
> 当目前有code没提交，又需要暂时开辟一个新空间来建立分支的时候
`git stash` 保存当前工作空间，之后再恢复，将文件存到暂存区

`git checkout <name>`转到master的分支

`git checkout -b <new branch name>`从需要修bug的分支创建新分支

`git commit -m 'fixed the bug'`完成修复

`git switch master` 转回master分支

`git merge --no-ff -m "merged bug fix 101" <new branch name>`用完不需要再使用时可以删除

`git switch dev`转回dev分支

> 恢复原来的工作空间
`git stash list`查看存储的记录

`git stash apply`,恢复但不删除记录

`git stash drop`，只删除记录

`git stash pop`，恢复并删除记录

`git stash apply stash@{0}`恢复指定的某个环境

---
# 将修好的bug同步到别的分支上
> master上出现的bug，在dev上也有，在master上修改完，将修改bug的部分提交到dev上
`git cherry-pick <需要提交的CommitId>`



----
# Feature分支
> 新增一个功能就添加一个分支
`git switch -c <新分支名>`新建和switch到新分支.

---
# 多人协作
> 在github上面，同一个分支修改同一个文件时，会有冲突
`git pull` 将github上的代码拉到本地
`git branch --set-upstream-to=origin/dev dev`如果本地的分支和github上的分支没有链接

---
# rebase
> 将未push到github的commit整合在一起


---
# 标签
`git tag <tag name>`打上标签

`git tag` 显示当前有多少个标签

`git tag -d <tan name>` 删除标签

`git tag -a <tag name> -m <description> <commitId>`

`git tag <tag name> <提交Id>` 指定某次提交

`git push origin <tagname>`将标签推送到github上

`git push origin :refs/tags/<tagname>`可以删除一个远程标签

---
# 参与开源项目
## fork
> 在别人的项目中添加一个fork，自己在做完提交之后，可以通过pull request的方式请求别人接受自己做的代码提交
> fork是拥有对该仓库的读写，但最终的结果还是需要creator来确认


----
# 配置git

`git config --global color.ui true` 输出highlight


## `.gitignore`
> https://github.com/github/gitignore 可以参考

## 修改命令名
`git config --global alias.<new name> <source name>`

`git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"`

当前仓库的配置存储位置=>`.git/config`

当前用户=>`.gitconfig`


---
# SourceTree git GUI
