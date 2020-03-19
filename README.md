# redconfetti.com

Source for my personal website powered by [Gatsby](https://www.gatsbyjs.org/),
and hosted by [Render](https://render.com/).

## Development

To run the local Gatsby server, run `gatsby develop`.

### Notes

- [Gatsby Tutorial - Part Three](https://www.gatsbyjs.org/tutorial/part-three/)
- [Gatsby Config Docs](https://www.gatsbyjs.org/docs/gatsby-config/)
- [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/)
- [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/)
- [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/)
- [Gatsby Plugin Library](https://www.gatsbyjs.org/plugins/)

- [How to Make a Terminal Like Portfolio Website for Yourself](https://hackernoon.com/how-to-make-a-terminal-like-portfolio-website-for-yourself-27d7a7030004)
- [Gatsby Starter Blog](https://github.com/gatsbyjs/gatsby-starter-blog/blob/master/README.md)

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

```shell
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
