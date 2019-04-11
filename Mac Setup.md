## mac打开任意来源安装软件: 
`sudo spctl --master-disable`

## /usr/local 权限: 
`sudo chown -R $(whoami) /usr/local`

## brew: 
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
```
brew install git
brew install wget
```
### brew change to USTC Mirror
```
cd "$(brew --repo)"
git remote set-url origin https://mirrors.ustc.edu.cn/brew.git
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.zshrc
source ~/.zshrc
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git
brew cask
cd "$(brew --repo)"/Library/Taps/homebrew/homebrew-cask
git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-cask.git
```
## oh-my-zsh: 
`sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"`

### zsh-autosuggestions: 
`git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions`

### ~/.zshrc
```
ZSH_THEME="ys"
plugins=(git zsh-autosuggestions)
# User configuration
source ~/.bash_profile
```

### ~/.bash_profile
```
ANDROID_HOME=/Users/ming/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=/Users/ming/Library/Android/sdk/platform-tools/:$PATH
export PATH="~/mongodb-osx-x86_64-enterprise-4.0.5/bin:$PATH"
export PATH="$PATH:/Users/ming/development/flutter/bin"
export PATH=$PATH:/usr/local/go/bin
alias tree="find . -print | sed -e 's;[^/]*/;|____;g;s;____|; |;g'"
```

## node
```
npm install -g n
npm install -g @angular/cli
npm install -g ionic
```

## python
```
brew install python3
sudo easy_install pip
pip3 install virtualenv
```

## Django
```
virtualenv --no-site-packages env
source ./env/bin/activate
pip install django
```

## Nginx 
`brew install nginx`

## Go
```
wget https://dl.google.com/go/go1.12.3.darwin-amd64.pkg
tar -C /usr/local -xzf go1.4.linux-amd64.tar.gz
export PATH=$PATH:/usr/local/go/bin
```
## app package list (suggestion)
```
Chrome
V2RayX
VS Code
Github Desktop @latest
iStat Menus @6.2
Navicat Premium @latest
Sketch @latest
Divvy
Cocos Creator
Android Studio
微信开发者工具
Charles
Postman
App Cleaner
Unity
钉钉
QQ
```

## Appstore (suggestion)
```
Xcode
The Unarchriver
Wechat
Reeder 3
```

## vscode setting
```
{
    FontSize: 18
    FontFamily: Monaco, Consolas , Menlo, 'Courier New', monospace
}
```