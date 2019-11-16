# Install Node with NVM

## Using the zsh-nvm

> https://github.com/lukechilds/zsh-nvm

1. Clone the above repo
```bash
git clone https://github.com/lukechilds/zsh-nvm.git ~/.zsh-nvm
```

2. Then source it in your .zshrc (or .bashrc)
```bash
source ~/.zsh-nvm/zsh-nvm.plugin.zsh
```

3. Verify the NVM
```bash
command -v nvm
```

4. List the version of node
```bash
nvm -ls-server
```

5. Install 
```bash
nvm install v12.13.0 
```

6. Verify Node & NPM version
```bash
npm -v && node -v
```
