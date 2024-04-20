---
layout: post
published: true
title: Downloading from YouTube in MacOS
date: 2024-04-20 16:05:00 -0500
comments: true
categories:
  - personal
tags:
  - youtube
  - macos
image: 
  path: https://s3-us-west-1.amazonaws.com/assets.redconfetti.com/images/posts/2024-04-20/youtube-logo.jpg
  width: 650
  height: 365
  alt: YouTube Logo
---

If you want to download videos or music from YouTube, you can use a utility
known as [yt-dlp].

[yt-dlp]: https://github.com/yt-dlp/yt-dlp

## Installation

You can install this tool using [Homebrew] by running the follwing commands.

[HomeBrew]: https://brew.sh/

```bash
brew install yt-dlp ffpmeg fprobe
```

## Download

### Single Video

```bash
# Download Music Only
yt-dlp --extract-audio --audio-format mp3 --audio-quality 6 https://www.youtube.com/watch?v=24a4eZZOTxU

# Download Best Video/Audio
yt-dlp -f "bv*+ba/b" https://www.youtube.com/watch?v=24a4eZZOTxU
```

### Playlists

I wanted to download the audio for a currently unpublished collection of work,
the soundtrack for [The Flight of the Navigator][].

[The Flight of the Navigator]: https://www.youtube.com/playlist?list=PLq6QtwrGW1_9HF_LyRS1DNvCl8slXcYNO

Here's the command I used to download the audio for all videos in the playlist.

```bash
yt-dlp --yes-playlist -x --audio-format mp3 --audio-quality 6 https://www.youtube.com/playlist?list=PLq6QtwrGW1_9HF_LyRS1DNvCl8slXcYNO
```
