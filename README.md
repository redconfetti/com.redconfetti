# Source for redconfetti.com

This is a static website generated using [Jekyll](https://jekyllrb.com/), hosted by [Neocities](https://neocities.org/),
with assets hosted by [Amazon S3](https://aws.amazon.com/s3/).

# Installation

This repository requires [Git-LFS](https://git-lfs.github.com/) for the storage of large files.

```
brew install git-lfs
```

Also make sure you install and use RVM - [RVM installation](https://rvm.io/rvm/install)
```
cd com.redconfetti
bundle install
```

# Usage

```
# Run Jekyll Server while updating pages
jekyll serve

# Build static website
rm -rf _site
jekyll build

# Publish updates to Neocities
neocities push _site
```
