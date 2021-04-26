# redconfetti.com

Source for my personal website powered by [Gatsby](https://www.gatsbyjs.org/),
and hosted by [Render](https://render.com/).

## Development

To run the local Gatsby server, run `gatsby develop`.

### Notes

#### Gatsby

- [Gatsby Tutorial - Part Three](https://www.gatsbyjs.org/tutorial/part-three/)
- [Gatsby Totirial - Part Four](https://www.gatsbyjs.org/tutorial/part-four/)
- [Migrate from Jekyll to Gatsby](https://www.gatsbyjs.org/blog/2017-11-08-migrate-from-jekyll-to-gatsby/)
- [Gatsby Config Docs](https://www.gatsbyjs.org/docs/gatsby-config/)
- [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/)
- [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/)
- [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/)
- [Gatsby Plugin Library](https://www.gatsbyjs.org/plugins/)
- [Gatsby-Plugin-Typography](https://www.npmjs.com/package/gatsby-plugin-typography)
- [How to Make a Terminal Like Portfolio Website for Yourself](https://hackernoon.com/how-to-make-a-terminal-like-portfolio-website-for-yourself-27d7a7030004)
- [Gatsby Starter Blog](https://github.com/gatsbyjs/gatsby-starter-blog/blob/master/README.md)
- [Gatsby - Using SASS in Gatsby](https://www.gatsbyjs.org/docs/sass/)
- [Gatsby - Adding Markdown Pages](https://www.gatsbyjs.org/docs/adding-markdown-pages/)

#### Gatsby Notes

- Head attributes such as META tags and title are controlled via [React Helmet]

[React Helmet]: https://www.gatsbyjs.com/docs/add-page-metadata/

#### React

- [PropTypes - Usage](https://github.com/facebook/prop-types#usage)
- [React-Typography](https://www.npmjs.com/package/react-typography)
- [Typography.js](https://kyleamathews.github.io/typography.js/)
- [Typography Theme: North](https://www.npmjs.com/package/typography-theme-north)
- [Typography Theme: Fairy Gates](https://www.npmjs.com/package/typography-theme-fairy-gates)

#### ES Lint Configuration

ES Lint is configured using [configuration standards for JSX].

[configuration standards for JSX]: https://github.com/standard/eslint-config-standard-jsx

### Setup

Install [NodeJS](https://nodejs.org/en/download/). If you're using a Mac it's
recommended that you install [Homebrew](https://brew.sh/) and simply run:

```shell
brew install node
```

Next install Node Version Manager (NVM) using:

```shell
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

```shell
# display all available NodeJS versions
nvm ls-remote

# install specific version
nvm install v16.0.0
```

Install Gatsby CLI

```shell
npm install -g gatsby-cli
```
