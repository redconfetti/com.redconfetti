# Source for redconfetti.com

This is a static website generated using [Jekyll](https://jekyllrb.com/),
with assets hosted by [Amazon S3](https://aws.amazon.com/s3/).

## Docs

* [Setup](/docs/setup.md)
* [Jekyll](/docs/jekyll.md)
* [Assets](/docs/assets.md)
* [Notes](/docs/notes.md)

## Usage

```shell
# Run Jekyll Server while updating pages
bundle exec jekyll serve

# Build static website
rm -rf _site
bundle exec jekyll build
```

## Markdown

Use the [Rewrap][] extension for VS-Code by highlighting paragraphs that
overflow the 80 character width and press OPTION+Q (on Mac), ALT+Q on PC, to
reformat.

[Rewrap]: https://marketplace.cursorapi.com/items/?itemName=stkb.rewrap
