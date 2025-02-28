---
layout: post
published: true
title: Using Apple Silicon for Music Production
date: 2025-02-28 08:54:00 -0500
comments: true
categories:
  - music-production
tags:
  - Apple
  - Mac
  - Cubase
  - Reaper
image: 
  path: https://s3-us-west-1.amazonaws.com/assets.redconfetti.com/images/posts/2025-02-27-moog-voyager-midi-map/moog-minimoog-voyager.jpg
  width: 513
  height: 299
  alt: Moog Voyager RME
---

## Background

In October of 2023 I purchased a [2023 Mac Studio][] as the heart of my hobbyist
home recording studio with the following specs:

* Apple M2 Max with 12‑core CPU, 30‑core GPU, 16‑core Neural Engine
* 64GB unified memory

I made this purchase based on YouTube videos by [James Zhan][], which helped to
inform me of the performance I could expect from Cubase running on newer Apple
Silicon processors.

[James Zhan]: https://www.youtube.com/@JamesZhan

I know that choosing the Apple M2 Max was overkill, however it made sense at
the time because the [2023 Mac Mini] was only available with up to 32 GB of RAM.

The Mac mini M2 Pro (16GB/512GB) was $1,299 in 2023. The upgrade to a 1 TB hard
drive was $200, and and upgrade to 32 GB of RAM would have been another $400,
for a total of $1899.

By the way, I've learned that you don't need an large internal SSD for music
production. One terrabyte is more than enough space for the software,
configurations, and support files that can't be placed on an external drive.
I used a Seagate external drive with a proprietary connector that would lose
the connection often, causing an error to occur and risking damage to the
drive itself. I upgraded to a [LaCie Rugged 5TB USB-C External Hard Drive][]
that hasn't given me any trouble since.

[LaCie Rugged 5TB USB-C External Hard Drive]: https://amzn.to/4iiKiM1

At the time I figured I would pay $500 extra for the Mac Studio, have twice as
much RAM, and a processor that would certainly support video editing or even
gaming if I choose to go that route.

![2023 Mac Mini rear configurations]({{site.assets.url_prefix}}/images/posts/2025-02-28-using-apple-silicon-for-music-production/apple-mac-mini-2023.jpg "2023 Mac Mini rear configurations")

I also had the impression that the Mac Mini doesn't include as many USB-C /
Thunderbolt 4 ports as the Mac Studio, but it turns out that the M2 Pro Mac Mini
did include 4 ports, along with 2 USB-A ports.

![2023 Mac Studio rear configurations]({{site.assets.url_prefix}}/images/posts/2025-02-28-using-apple-silicon-for-music-production/2023-mac-studio-rear.png "2023 Mac Studio rear configurations")

[2023 Mac Mini]: https://support.apple.com/en-us/111837
[2023 Mac Studio]: https://support.apple.com/en-us/111835

## Research

Back in 2023, I didn't have to do much research to decide upon which Mac I would
get, because this series of videos by [James Zhan][] that covered how well
Apple Silicon chips perform in various digital audio workstations, including
Reaper and Cubase. I was pleased to find out that they performed much better
than even Logic Pro.

Here is the list of videos on that subject, along with the months they were
posted. As you can tell, he did a comparison of performance as new Apple Silicon
chips were released.

### April 2022 - M1 vs M1 Pro vs M1 Max vs M1 Ultra

The Ultimate M1 Mac Buying Guide for Music Production

{% youtube BCZplL8ov0k %}

### August 2023 - M2 vs M2 Pro vs M2 Max vs M2 Ultra

This was the video I watched that helped me decide.

The Ultimate M1/M2 Mac Buying Guide for Music Production

{% youtube VFpCbT3Rx4Y %}

It was this graphic specifically that sums up what you need to know about the
differences in performance.

![Apple M1 vs M2 comparison in DAWs]({{site.assets.url_prefix}}/images/posts/2025-02-28-using-apple-silicon-for-music-production/m1-m2-performance-comparison.png "Apple M1 vs M2 comparison in DAWs")

### November 2023 - M3 Pro vs M2 Pro vs M1 Pro

The Problem with M3 Pro MacBook Pro for Music Production

{% youtube FSqX4bt9to4 %}

The conclusion I drew from this video was that the M3 Pro did provide a
performance enhancement for Cubase and Reaper, but not so much for the other
DAWs that did not utilize the efficiency cores.

### November 2024 - M4 Pro vs M3 Pro vs M2 Pro vs M1 Pro

M4 Pro MacBook Pro: HUGE Leap for Music Production

{% youtube hccy19Hm6M8 %}

The M4 processors included more performance cores than previous processors, so
the performance was greatly enhanced.

### November 2024 - M4 Pro MacBook DAW Testing

The WHY - Dropout Protection, Process Buffer, ASIO-Guard

Addresses some criticisms of the methods used in the previous video

{% youtube HSGmveHv0mY %}

### December 2024 - Compares M4 vs M4 Pro vs M3 Pro vs M1 Pro

M4 Mac Mini: Insane Value for Music Production, But...

{% youtube sUcIO18W3oE %}

The M4 chip is comparable to the M2 Pro, and only slightly below the performance
of the M3 Pro.

## Planning Ahead

Now I'm trying to plan ahead for when I might discontinue my Mac Studio. I
certainly have some time, and I don't necessarily need to replace it with
another Mac Studio. I'm considering either a base Mac Mini, or M5 or M6 Pro
(which ever chip exists when I am ready to buy again).

To overcome the USB-C limitation, I'll probably purchase a Thunderbolt
hub like the [CalDigit Thunderbolt 4 Element Hub][], and likely one of the hubs
that provides an SSD drive and USB-A ports on the front, such as the
[Satechi M4 Mac Mini Hub][].

[Satechi M4 Mac Mini Hub]: https://satechi.net/landing/new-stand-and-hub-m4-mac-mini

[CalDigit Thunderbolt 4 Element Hub]: https://us.caldigit.com/products/thunderbolt-4-element-hub

### How much Memory?

I've heard that VST plugins can be very RAM intensive. I was thinking that this
is especially the case when you're loading very large sample libraries,
such as premium piano plugins.

The common opinion is that 32 GB of RAM is the sweet spot, with 64 GB needed
for those that are working with extremely huge projects.

I'm not producing symphonies or film scores, so perhaps the Mac Studio was
overkill. I might just need a simple Mac Mini next time.

Currently an M4 Pro Mac Mini with 48 GB of RAM and 1 TB of storage is
$1999. That's a good target.

With a Thunderbolt hub being around $200-$300, an SSD enclosure being
around $100, and 4 TB of SSD storage being around $300, I can expect a
replacement system to be about $2700, and by then the prices on these things
may come down, or even the Mac Mini M5 or M6 will be just enough power to
handle music production in say... January of 2028.
