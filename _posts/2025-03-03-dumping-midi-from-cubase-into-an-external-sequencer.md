---
layout: post
published: true
title: Dumping MIDI from Cubase into an External Sequencer
date: 2025-03-03 09:27:00 -0500
comments: true
categories:
  - music-production
tags:
  - Cubase
  - MIDI
image: 
  path: https://s3-us-west-1.amazonaws.com/assets.redconfetti.com/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/blog-post-photo-medium.png
  width: 800
  height: 478
  alt: Cubase Device Panels for Korg Electribe EMX-1
---

A workflow I'm currently pursuing is using the Korg Electribe EMX-1 and ESX-1
as sound modules, with all sequencing being performed in Cubase.

I tried to learn Ableton Live in the past, being attracted to the idea of
recording my arrangements at home, but then being able to remix those
arrangements on the fly. With the Korg Electribe, I can do that.

Recently I configured Cubase to send MIDI Clock messages to the Electribe. I
configured the Electribe to sync with an external MIDI clock, and I pressed
the record button so that when Cubase would start playing, the Electribe
would record the MIDI stream.

I pressed Play in Cubase, and it did this. I hit stop when the 4 bar loop had
finished, then I played back the pattern from the Electribe. It was missing
the first kick drum, and the first bass note.

The solution to this problem is not a timing issue, where you need to configure
a delay or something. You simply need to send the same number of bars as
the pattern itself to your device without any MIDI, and then have the MIDI
begin after that period of silence. This gives the device time to properly sync,
and then it is ready for the first notes of the pattern when they come in on
the second loop.

Also, if you have any sort of MIDI CC automation, you'll need to enable the
"MOTION SEQ" setting to "Smooth" for your parts in the Electribe EMX/ESX.
