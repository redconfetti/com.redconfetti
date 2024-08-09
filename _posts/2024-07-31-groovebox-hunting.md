---
layout: post
published: true
title: Hunting for the Best Groovebox
date: 2024-07-31 23:18:00 -0500
comments: false
categories:
  - music-production
tags:
  - groovebox
  - dawless
image: 
  path: https://s3-us-west-1.amazonaws.com/assets.redconfetti.com/images/posts/2024-07-31-hunt-for-best-groovebox/mc-303-top-view.jpg
  width: 615
  height: 392
  alt: Roland MC-303
---

## How It Started

My obsession with [Grooveboxes][] started with the purchase of a
[Roland MC-303][]. I was looking for a hardware drum machine, and it was
available for a lower price than a Behringer [clone of the Roland TR-909][].
It included a a built-in sequencer, classic Roland drum sounds (TR-606, TR-808,
TR-909), and Roland rompler PCM sounds. This was an exciting combination of
features for me.

![Roland MC-303 Groovebox]({{site.assets.url_prefix}}/images/posts/2024-07-31-hunt-for-best-groovebox/mc-303-top-view.jpg "Roland MC-303 Groovebox")
*Roland MC-303 Groovebox*

I wanted a hardware sequencer at the time also so that I can get a feel for the
workflow used in the 80's, and also see how it can be leveraged in a live
performance setup.

Unfortunately the MC-303 sequencer only records and transmits note on/off
messages to external MIDI devices. It can fully sequence notes and automation
for its own internal sounds, however Program/Bank Change, MIDI CC, Pitch Bend,
Mod Wheel, and SysEx messages are not possible when sequencing external devices.
You can use an external MIDI keyboard with it to record parts, but it doesn't
pass the MIDI through to external devices during real-time recording. You
have to record a part using internal sounds, then reconfigure a part to send
MIDI to an external device.

[Grooveboxes]: https://en.wikipedia.org/wiki/Groovebox
[Roland MC-303]: https://en.wikipedia.org/wiki/Roland_MC-303
[clone of the Roland TR-909]: https://www.sweetwater.com/store/detail/RD9--behringer-rd-9-analog-drum-machine

## My Goals

Since purchasing the MC-303, I've become focused on identifying a groovebox
that accomplishes the following goals.

### Classic Sequencing

My interest in a hardware sequencer, and the workflow that is required by it,
is partially just to get a feel and appreciation for what was required in the
80's and 90's to make MIDI programmed music.

### Live Performance

I'm also interested in finding out how a sequencer can be used for live
performances. I want something akin to Ableton Live, but without the
laptop. I want to be able to que patterns, mute parts, manipulate tempo, and
accompany my own pre-recorded MIDI sequences, on the fly.

I recently purchased an [Alesis MMT-8][] knowing that it doesn't
have a limit on the MIDI messages it can record and transmit. It claims to be
pattern based, but I've found the timing on short pattern loops to be off, so
it seems like it's only useful for long recordings.

[Alesis MMT-8]: https://www.vintagesynth.com/alesis/mmt-8

![Alesis MMT-8 Multi Track MIDI Recorder]({{site.assets.url_prefix}}/images/posts/2024-04-17/alesis-mmt-8-sequencer.png "Alesis MMT-8 Multi Track MIDI Recorder")
*Alesis MMT-8 Multi Track MIDI Recorder*

### Backups

I want to prepare patterns, parts, songs, etc. specific to my groovebox of
choice, and be able to backup everything to SysEx dumps. If anything goes wrong
with the groovebox, I want to be able to factory reset it and restore everything
with just a couple minutes of playback of previously saved SysEx dumps.

### Focused Workflow

I've heard it said that using Digital Audio Workstation (DAW) software on
a computer can be distracting for some people. It is true that having unlimited
possibilities can create a kind of paralysis of indecision on what path to
take creatively.

The most productive periods of my life were when I sat down with my acoustic
guitar and experimented until I'd come up with new riffs that eventually got
assembled into songs. The same applies to sitting down with a basic keyboard
and just seeing what you can come up with.

This video of Björk from 1994 in her home studio, shows that her songwriting
process doesn't involve a large setup of recording gear and synthesizers.

![Björk's 1994 Home Studio](//www.youtube.com/watch?v=MICdN3-vKh8)

She doesn't even have a chair and a table, it's just her sitting on the ground
with a [Yamaha QY20][] tone generator, [Casio SA-11][] keyboard (no MIDI),
an effects box, dynamic microphone, [Tascam Portastudio 424][] 4-track recorder,
and a pair of monitors/speakers.

Translated by @MemphiStig:

> "I make all my music in an empty flat with only a casio and a 4-track and an
> effects box, and it's still better than 99% of everything that comes out of
> the big studios.

[Yamaha QY20]: https://synthpedia.net/yamaha/qy20/
[Tascam Portastudio 424]: https://en.wikipedia.org/wiki/Portastudio
[Casio SA-11]: https://en.wikipedia.org/wiki/List_of_Casio_keyboards#S_Series_(sampler_keyboards)

I'm hoping that using a minimal hardware setup with a Groovebox as the
central percussion instrument, and sequencer, is more fun. I can dump what I
create into my computer later to apply post-production polish.
