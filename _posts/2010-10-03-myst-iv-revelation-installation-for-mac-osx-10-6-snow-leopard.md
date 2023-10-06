---
layout: post
published: true
title: Myst IV (Revelation) Installation for Mac OSX 10.6 (Snow Leopard)
author: maxwell keyes
date: '2010-10-03 20:34:47 -0700'
date_gmt: '2010-10-04 00:34:47 -0700'
categories:
- computing tips
tags: []
comments:
- id: 1561
  author: AdiumX
  author_email: adiumx@gmx.de
  author_url: ''
  date: '2011-02-09 10:31:32 -0800'
  date_gmt: '2011-02-09 14:31:32 -0800'
  content: TXS for the solution, but Myst don't start after finishing your Guidance.
    :-(
- id: 1997
  author: Rick Auger
  author_email: dogbyke@yahoo.ca
  author_url: ''
  date: '2011-09-23 23:42:59 -0700'
  date_gmt: '2011-09-24 03:42:59 -0700'
  content: "Hi and thanks so much for making this installation available for Snow
    Leopard. It's been working great except for today I linked to Spire and on the
    fourth set of stairs down from arriving at the linking chamber it crashes every
    time. Hopefully there's a simple work around as I'm really enjoying this game
    and appreciate this great installation.\r\nThanks,\r\nRick"
- id: 2001
  author: admin
  author_email: jason@redconfetti.com
  author_url: ''
  date: '2011-09-24 23:42:50 -0700'
  date_gmt: '2011-09-25 03:42:50 -0700'
  content: Yeah. I really wish they would port the games to new platforms. They made
    Myst and Riven for iOS.
- id: 2655
  author: Gemma Sigglekow
  author_email: eponadowns@gmail.com
  author_url: ''
  date: '2013-01-31 04:39:11 -0800'
  date_gmt: '2013-01-31 08:39:11 -0800'
  content: "went through all the stages only it didn;t run once installed, it was
    good to work through and get it to function so frustrating not to be able to run
    the game. the patch you have in drop box for myst V is working so far. hope to
    get the installer to work now to. \r\nmyst is still alive and kicking for all
    us enthusiasts"
---

I just did this on my Intel Mac which originally had Leopard, but I recently upgraded it to Snow Leopard.

This was taken from [GoodUser.info](http://www.gooduser.info/entry/install-myst-4-revelation-os-10-6-closed)

1. Create a folder on your desktop called myst4
1. Inside this folder make two more folders, one called Myst4_1 and one called Myst4_2
1. Insert disk 1 and open the terminal
1. Run `cd /Volumes/Myst4_1`
1. Run `cp -Rv * ~/Desktop/myst4/Myst4_1` - this will take a while
1. Run `cd /`
1. Eject disk 1 and insert disk 2
1. Run `cd /Volumes/Myst4_2`
1. Run `cp -Rv * ~/Desktop/myst4/Myst4_2` - this will take a while
1. Run `cd ~/Desktop/myst4/Myst4_1`
1. Run `unzip Macinstaller.jar`
1. Run `java run` - The installer will load
1. Accept all the defaults, keep clicking next
1. When prompted for disk 2, navigate to Desktop/myst4/Myst4_2 and click open
1. The application is now installed.
1. In the terminal type `cd /Ubisoft/MystIV`, press enter, then run `chmod -R 777 myst4.app`
1. Run the game by opening Myst4 under the Macintosh HD/Ubisoft/MystIV directory.

The installation instructions above worked like a charm, however running the
program is the new issue now. Everytime I try to execute it, it crashes. It
appears that there [isn't any
fix](http://forums.ubi.com/eve/forums/a/tpc/f/580100736/m/2311057787/p/3) other
than to install using the installer from
[here](http://dl.dropbox.com/u/522679/Myst/index.html), which uses the PC
version with Cider....which has worked perfectly fine so far.
