---
layout: post
published: true
title: Configuring Roland MC-303 Presets in Cubase
date: 2024-06-15 16:44:00 -0500
comments: true
categories:
  - music-production
tags:
  - Cubase
  - MIDI
  - Roland MC-303
  - Patch Banks
  - Presets
image: 
  path: https://s3-us-west-1.amazonaws.com/assets.redconfetti.com/images/posts/2024-06-15-configure-roland-mc-303-cubase/roland-mc-303.png
  width: 808
  height: 505
  alt: Roland MC-303
---

Recently I purchased a [Roland MC-303 Groovebox][] on [Reverb][]. It's the
successor to the [MC-202][] released in 1983.

[Roland MC-303 Groovebox]: https://en.wikipedia.org/wiki/Roland_MC-303
[MC-202]: https://en.wikipedia.org/wiki/Roland_MC-202
[Reverb]: https://reverb.com/

![Roland MC-303]

I was in the market to purchase a drum machine, but also looking at MIDI
sequencers, and I stumbled upon the MC-303 and got the impression that it would
act as both a sequencer and a drum machine, and more. I read that it provides
8 tracks of sequencing, which is still useful enough to play around with
DAWless jamming, and provides sample-based TR606, TR808, and TR909 sounds, as
well as many other popular tones from 1996.

Even though I knew it only supported up to 8 channels of MIDI as a sequencer,
I didn't know that it does not record nor transmit mod-wheel, pitch bend, or
other MIDI CC messages to external instruments. So it's not truly a sequencer,
unless you're using it with the internal instruments.

It can however be used as a sound module.

## Cubase Configuration

I'm fairly new to configuring external MIDI devices for use with Cubase, but
I've done it before with other synths. Under Studio > More Options > MIDI
Device Manager, I'm able to create a new MIDI Device configuration that
allows me to [configure presets and device panels][] to help me interact with
the device.

### Changing to Sound Module Mode

The first goal was to be able to make the MC-303 activate the Sound Module mode.

You have to hold down the PLAY MODE button while turning it on to go into this
mode, or you can alternatively send it SYSEX messages that will force it
to switch to NORMAL or SOUND MODULE modes. Thank you [Sweetwater][].

```text
# 'Sound Module’ mode
F0 41 10 00 03 12 00 40 00 7F 00 3F F7

# 'Normal' mode
F0 41 10 00 03 12 00 40 00 7F 7F 3E F7
```

[Sweetwater]: https://www.sweetwater.com/sweetcare/articles/roland-mc-303-switching-between-normal-sound-module-mode/

Setting up these parameters was difficult because I couldn't simply paste the
above Hex representations into the Cubase Panel Parameters window. It seemed at
times like what I would create wouldn't save either.

After much trial and error I was able to create SysEx parameters that I assigned
to two different "switches" (buttons) that could be displayed in the
"Device Panel" section of a MIDI track assigned to the MC-303.

To accomplish this I had to figure out the Decimal representations of the Hex
values above. I had to start by clicking on the 'Create SysEx' button and
specifying that my SysEx messages are 13 bytes long.

```text
# 'Sound Module’ mode
65 16 0 3 18 0 64 0 127 0 63

# 'Normal' mode
65 16 0 3 18 0 64 0 127 127 62
```

![Cubase Panel Parameters]

I believe the last part that was needed was to use the 'Assign Parameter' button
to assign the SysEx parameters to the buttons.

The experience was certainly not intuitive, but once I got it working it felt
like a win. Now I can remotely change the mode for the MC-303.

### Changing Tones

Using the "Tone List" documentation from Page 85 of the [Owners Manual][], I
started to configure and experiment with configuring the different Bank Select
and Program Change messages that I could send it in Sound Module mode.

![Cubase Patch Bank Configuration]

After setting up a couple banks of presets I tested them, however the tones
didn't seem to match what I labelled them, and in some cases there was no
tone at all when I pressed the keys on my MIDI controller keyboard.

I had thought that my MC-303 was defective somehow.

I found the outcome of tone changes to be best if I included the Bank Select LSB
(CC#32) after the Bank Select MSB (CC#0) messages, followed by the Program
Change message. This still didn't resolve the issue however.

I even went as far as creating my own spreadsheet in Google Sheets for each
Bank (e.g. 64, 65, 66, 67, etc.) just to know how they grouped these together
into MIDI Banks, instead of the banks they define in the documentation. I
suspected that perhaps the MC-303 isn't perceiving the Bank Select messages
properly in some cases. When I started to map out the sounds in Bank 70 and
71 I noticed that many programs do not have sounds, and that gave me hope that
perhaps my device is not broken. I even referenced the [service manual][] and
learned how to perform a full diagnostic test on my MC-303. I learned that the
Cutoff potentiometer needs to be pushed up when I turn it, or it doesn't
register the change. I certainly plan on replacing it soon with parts from
[Syntaur][].

Finally I realized my mistake. The decimal representations of the values I was
configuring, specifically for the Program Change, specified "1" for the first
bank... however the first bank is actually 0.

For example, the "Frog Wave" is documented as PC# 4, CC#0 65. You don't get that
tone however if you send:

```text
CC#0 65
CC#32 0
PC 4
```

PC 0 is actually Program Change 1, PC 1 is Program Change 2, etc.
This becomes evident if you try to configure a Program Change value of '128',
because Cubase forces it to be 127. A Program Change value of '0' is valid
however.

After adjusting all the program change values to reflect the proper decimal
value, all tests changing between the tones is consistent and the sounds I
get line up with the label as expected.

[Cubase Patch Bank Configuration]: {{site.assets.url_prefix}}/images/posts/2024-06-15-configure-roland-mc-303-cubase/cubase-patch-bank-configuration.png "Cubase Patch Bank Configuration"
[Roland MC-303]: {{site.assets.url_prefix}}/images/posts/2024-06-15-configure-roland-mc-303-cubase/roland-mc-303.png "Roland MC-303"
[Cubase Panel Parameters]: {{site.assets.url_prefix}}/images/posts/2024-06-15-configure-roland-mc-303-cubase/cubase-panel-sysex-decimal.png "Cubase Panel Parameters Sysex Decimal to Hex"
[configure presets and device panels]: /music-production/2024/04/17/demystifying-midi-in-cubase.html#h-external--hardware-instruments
[owners manual]: https://www.roland.com/global/support/by_product/mc-303/owners_manuals/
[service manual]: https://archive.org/details/RolandMc-303GrooveboxServiceNotes
[Syntaur]: https://syntaur.com/keyboard.php?keyboard=Roland_MC-303
