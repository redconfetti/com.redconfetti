# redconfetti.com

Source for my personal website powered by [Gatsby](https://www.gatsbyjs.org/),
and hosted by [Render](https://render.com/).

## Development

### Setup

Install [NodeJS](https://nodejs.org/en/download/). If you're using a Mac it's
recommended that you install [Homebrew](https://brew.sh/) and simply run:

```bash
brew install node
```

Next install Node Version Manager (NVM) using:

```bash
brew install nvm
mkdir ~/.nvm
```

Add the following to ~/.bash_profile or your desired shell configuration file:

```
export NVM_DIR="$HOME/.nvm"
[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"
[ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"bash_completion
```

Install the latest NodeJS

```bash
# display all available NodeJS versions
nvm ls-remote

# install specific version
nvm install v12.16.0
```

Install Gatsby CLI

```bash
npm install -g gatsby-cli
```
