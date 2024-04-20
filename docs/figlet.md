# Figlet

We're using [FIGlet] (Frank, Ian and Glen’s letters) fonts with TOIlet
(see below).

[Figlet]: https://en.wikipedia.org/wiki/FIGlet

Usage:

```bash
$ figlet -f small "Hello World"
 _  _     _ _      __      __       _    _
| || |___| | |___  \ \    / /__ _ _| |__| |
| __ / -_) | / _ \  \ \/\/ / _ \ '_| / _` |
|_||_\___|_|_\___/   \_/\_/\___/_| |_\__,_|
```

Fonts for Figlet are stored in `/usr/share/figlet` with the `.flf` file
extension.

You can download FLF files to an alternative directory, and test the fonts
using the following:

```bash
$ cd ~
$ wget ftp://ftp.figlet.org/pub/figlet/fonts/contributed.tar.gz
$ tar -zxvf contributed.tar.gz
$ figlet -d ~/contributed -f smisome1 "maxwell"
    ___       ___       ___       ___       ___       ___       ___
   /\__\     /\  \     /\__\     /\__\     /\  \     /\__\     /\__\
  /::L_L_   /::\  \   |::L__L   /:/\__\   /::\  \   /:/  /    /:/  /
 /:/L:\__\ /::\:\__\ /::::\__\ /:/:/\__\ /::\:\__\ /:/__/    /:/__/
 \/_/:/  / \/\::/  / \;::;/__/ \::/:/  / \:\:\/  / \:\  \    \:\  \
   /:/  /    /:/  /   |::|__|   \::/  /   \:\/  /   \:\__\    \:\__\
   \/__/     \/__/     \/__/     \/__/     \/__/     \/__/     \/__/
```

## TOIlet

We're using [TOIlet] (The Other Implementation’s letters) for the output
of the letters used in the header of the site.

```bash
toilet -d docs/figlet -f slant --filter metal redconfetti
```

[TOIlet]: https://caca.zoy.org/wiki/toilet
