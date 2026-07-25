---
layout: post
published: true
title: Korg Wavestate Insights
description: "My Exploration Notes on the Korg wavestate"
date: 2026-07-25 09:50:00 -0500
comments: true
categories:
  - music-production
tags:
  - Korg wavestate
  - Wave Sequencing
  - Vector Synthesis
image: 
  path: https://s3-us-west-1.amazonaws.com/assets.redconfetti.com/images/posts/2026-07-12-korg-wavestate/Korg-wavestate.jpg
  width: 1400
  height: 960
  alt: Korg wavestate mk2
---

I'm exploring the capabilities of the Korg wavestate mkII, so that I can explain
to a friend how to use it. These are some of my notes that might help fill
in the gaps for others, or at least make them more aware of its nature if
they're thinking of buying one.

## Forms

There are several forms of wavestate you can choose from.

|                           | Release  | Voices | Keys | Velocity | Aftertouch | Description                                |
| ------------------------- | -------- | ------ | ---- | -------- | ---------- | ------------------------------------------ |
| [wavestate mkI][]         | 2020     | 64     | 37   | Yes      | No         |                                            |
| [wavestate native][]      | 2022     | n/a    | n/a  | n/a      | n/a        | plugin (VST, AAX, standalone)              |
| [wavestate mkII][]        | 2023     | 96     | 37   | Yes      | No         |                                            |
| [wavestate SE][]          | 2023     | 120    | 61   | Yes      | Yes        |                                            |
| [wavestate SE Platinum][] | 2023     | 120    | 61   | Yes      | Yes        | Limited edition; Metal top and side panels |
| [wavestate module][]      | 2024     | 120    | n/a  | n/a      | n/a        | Desktop / Rack module                      |

[wavestate mkI]: https://www.korg.com/us/products/synthesizers/wavestate/
[wavestate mkII]: https://www.korg.com/us/products/synthesizers/wavestate_mk2/
[wavestate module]: https://www.korg.com/us/products/synthesizers/modwave_module/
[wavestate SE]: https://www.korg.com/us/products/synthesizers/wavestate_se/
[wavestate SE Platinum]: https://www.korg.com/us/products/synthesizers/wavestate_se_platinum/
[wavestate native]: https://www.korg.com/us/products/software/wavestate_native/

## Hidden Parameters

Not all the parameters are accessible from the hardware. The Effects section
has many more parameters available from the [Editor/Librarian][] software.

For example, the "L/C/R Delay" effect that can be enabled for each Program
loaded into the 4 layers of a Performance has additional parameters for the
Note timing (1/4th, 1/4th dotted, 1/8th, 1/16th), Repeat times, and Levels of
each delayed note (L, C, and R).

![Korg wavestate delay parameters]({{site.assets.url_prefix}}/images/posts/2026-07-25-korg-wavestate-insights/delay-parameters.gif)

[Editor/Librarian]: https://www.korg.com/us/support/download/software/0/919/4808/

## User Samples

I was surprised to find out that you can't upload multiple separate sample
libraries using the Sample Builder app provided by Korg. You can only upload
one user sample library, so you have to maintain that library on your PC or Mac
computer, and merge new sample sets into it before you re-upload an updated
version of that library. This must be the result of some limitation in the
design of the flash memory of the mkI hardware.

![Korg wavestate Sample Builder]({{site.assets.url_prefix}}/images/posts/2026-07-25-korg-wavestate-insights/korg-sample-builder.png)

The good news is that every multi-sample has it's own unique ID assigned to it
by the software, and the Programs reference those IDs, so you don't have to
worry about the Performances, Wave Sequence, or Programs loosing those
references even though they're managed separately.

When you purchase sound libraries from Korg or other 3rd parties, you will
have to import the samples into your own user library and push that library up
to the wavestate from the Sample Builder software, and then separately use
the Editor Librarian software to import and push the Performance, Programs,
and/or Wave Sequence presets that came with the library. Once you're done the
sounds should work just fine when you load them from the Collection the
library was named after.
