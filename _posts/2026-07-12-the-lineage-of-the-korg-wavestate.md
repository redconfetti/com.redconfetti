---
layout: post
published: true
title: The Korg wavestate Demystified
description: "Exploring the Lineage of Korg's Classic Sampling Workstations"
date: 2026-07-12 16:36:00 -0500
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

To understand the [Korg wavestate][], it's a good idea to understand the
evolution of sample-based synthesizer features in the Korg M1 and Wavestation.

![Korg wavestate mk2]({{site.assets.url_prefix}}/images/posts/2026-07-12-korg-wavestate/Korg-wavestate.jpg)

[Korg wavestate]: https://www.korg.com/us/products/synthesizers/wavestate_mk2/

## Korg M1

In 1988 Korg released the M1 workstation, at a price of $2166, adjusted for
inflation that would be approximately $6,135 today. It was one of the first
"music workstation" keyboards released:  providing a multitimbral synthesizer
engine supporting layering and keyboard splits, combined with an eight-track
sequencer, and onboard digital effects. It also featured drum sounds, allowing
an entire song to be composed within one device.

![Korg M1]({{site.assets.url_prefix}}/images/posts/2026-07-12-korg-wavestate/Korg-M1.jpg)

It featured 61 keys with velocity and aftertouch support, 100 instrument sounds
and 44 drum sounds (4 MB of 16-bit samples). The joystick was used to manipulate
pitch bend (horizontal) and modulation (vertical) at the same time.

It supported 2 multi-part modes:

* Sequencer Mode - Used with internal sequencer or an external MIDI sequencer to
  compose music with eight sequencer tracks, each assigned a Program
* Combination Mode - Designed for playing multiple parts live from the keyboard.
  Also supported 8 tracks / programs, but with support for layering or splitting
  sounds across the keyboard using zones, combined with velocity switching
  (playing one program or another depending on a configured lower/upper velocity
  zone).

![Korg layer / split diagram]({{site.assets.url_prefix}}/images/posts/2026-07-12-korg-wavestate/m1-layer-split-diagram.png)

Each of the 8 "programs" supported in these modes could support one oscillator
(Single), two oscillators (Double), or a set of drum sounds. Each oscillator
includes its own synth engine (filter, amplifier, envelopes, LFO modulation).

8 programs, possibly supporting 2 oscillators each, comes to a total of 16
oscillators, which is the voice limit of the synth. Obviously, if one wanted 3
voice chords for a certain program, they would need to limit the number
of programs being used in Sequencer or Combination mode.

In summary, the M1 was the introduction of a sample based synthesizer
characteristically known for its ability to dynamically layer sounds across a
keyboard, with pitch/filter/amp envelopes and other modulation settings
(including effects) causing multiple independent movements in the timbre at the
same time.

## Korg Wavestation

The Korg Wavestation was released in 1990 at a price of approximately $2,195
($5400 today).

![Korg Wavestation]({{site.assets.url_prefix}}/images/posts/2026-07-12-korg-wavestate/korg-wavestation.jpg)

Instead of using the term "program" for a sound, the Wavestation used the term
"patch" instead. Instead of featuring 1 or 2 oscillators per patch, the
Wavestation featured the ability of having 1, 2, or 4 oscillators configured
within a patch.

The Wavestation was aimed more at sound designers, performing keyboardists and
studios using external MIDI sequencing, so it did not feature a built-in
sequencer. It did still support playback of 8 patches at the same time.

### Synth Engine

The predetermined modulation options of the M1 were expanded with a virtual
modulation matrix in the Wavestation that allowed more flexible modulation
capabilities.

![Korg Wavestation Modulation]({{site.assets.url_prefix}}/images/posts/2026-07-12-korg-wavestate/wavestation-modulation.png)

The M1 synthesizer engine had dedicated envelopes for pitch, filter, and
amplifier. With the Wavestation, the Filter envelope was designated as a general
purpose "Envelope 1" that could be assigned to the Filter, Pitch, Amp, or
LFO1/LFO2 rate and modulation depth.

## Dave Smith's Influence

After [Sequential Circuits][] ceased operations and its assets were acquired by
Yamaha in 1987, several former engineers such as [Dave Smith][], John Bowen,
Scott Peterson, and [Stanley Jungleib][] joined Korg in 1989. The architecture of
the Wavestation grew from the [Prophet VS][]'s vector-synthesis ideas rather
than directly from the M1 workstation design.

That helps explain why it feels less like “M1 Mark II” and more like an advanced
descendant of the Prophet VS that happened to use Korg PCM and effects
technology.

[Sequential Circuits]: https://en.wikipedia.org/wiki/Sequential_(company)
[Dave Smith]: https://en.wikipedia.org/wiki/Dave_Smith_(engineer)
[Stanley Jungleib]: https://en.wikipedia.org/wiki/Stanley_Jungleib
[Prophet VS]: https://en.wikipedia.org/wiki/Prophet_VS

### Vector Synthesis

![Korg Wavestation vector mixing]({{site.assets.url_prefix}}/images/posts/2026-07-12-korg-wavestate/wavestation-vector-mixing-2.png)

The joystick was repurposed for the purpose of vector synthesis (VS),
controlling the mix / crossfading between the 4 oscillator parts within a patch
rather than controlling pitch bend and optionally configured modulation
(like a mod-wheel). In fact, it featured the vector joystick in addition to
traditional pitch bend and mod-wheel.

In addition to using the joystick you could program the automation of the
vector joystick movement over time using a "mix envelope", allowing for the
relative balance of all 4 sound sources to travel around a programmable path,
including the ability to loop the movement.

![Korg Wavestation vector mixing]({{site.assets.url_prefix}}/images/posts/2026-07-12-korg-wavestate/wavestation-vector-mixing.png)

The MixEnvMod options additionally allow for modulation of the vector controls
from various sources (aftertouch, mod-wheel, LFO1, LFO2, etc).

A demonstration of the vector synthesis features can be seen in this
[Wavestation plugin tutorial][] by Anthony Chisnall.

[Wavestation plugin tutorial]: https://www.youtube.com/watch?v=09XaHxX-kQw

### Wave Sequencing

Wave Sequencing was the larger conceptual change introduced by the Wavestation.
On the M1 an oscillator had the ability to only play one sample sound for the
life of a note. The Wavestation introduced the ability to configure multiple
steps over time that change the sample sound source (PCM waveform), duration,
pitch, fine-tuning, level, and crossfade time between each step. A wave sequence
could support up to 255 steps.

![Korg Wavestation sequence]({{site.assets.url_prefix}}/images/posts/2026-07-12-korg-wavestate/wavestation-sequence.png)
*A wave sequence consisting of seven steps*

The sequence could loop, play forward and backward, and be synchronized with an
internal or external MIDI clock.

This feature made it possible for smooth timbral evolution over time when used
with crossfade times, sounding like one continuous transforming texture... Or it
could be like an arpeggiator, repeating a transposed rhythmic sequence
consisting of different timbres, pitches, and levels.

Many synths feature a built-in arpeggiator, allowing you to hold a chord and
have it step through the notes in certain patterns and synced to various timing
(1/16th notes, dotted 1/8th notes, etc.), for for MIDI-synchronized live
playback. Others include 8- or 16-step sequencers that let you program the
intervals between the notes and play them back in the same manner, transposed
by the key(s) you press.

The Wave Sequencing feature took that kind of functionality and moved it closer
to being like a time-based programmable PCM oscillator whose identity changed
over time.

This overlaps with one of the central goals of wavetable synthesis—creating
timbres that evolve over time—but achieves it by sequencing discrete PCM
waveforms rather than scanning continuously through a [wavetable][].

[wavetable]: https://en.wikipedia.org/wiki/Wavetable_synthesis

### Layered Architecture

The Wavestation used the term "performance" instead of "combination" to
describe the combination of 8 patches assigned across the keyboard, with
velocity zones, transpose and tuning, level and pan, and shared effects routing
configurations.

![Korg Wavestation key velocity zones]({{site.assets.url_prefix}}/images/posts/2026-07-12-korg-wavestate/wavestation-key-velocity-zones.png)

If you look at the intersection of all the abilities inherited from the M1 and
added by the Wavestation, you have sound design possibilities that exceed what
some are able to cognitively understand easily.

* Performance
  * Up to 8 Parts, each containing a Patch
    * Up to 4 oscillators per Patch
      * Each oscillator can use a PCM waveform or Wave Sequence
      * Each oscillator has its own filter, amplifier, envelopes, and LFOs
    * Vector Mix automation between the oscillators
  * 2 effects processors shared across the Performance
  * Parts assigned across keyboard and velocity zones
  * Limited by a maximum of 32 voices

There are several nested systems that operate simultaneously. It is a lot to
wrap your head around.

## wavestate Engine

![Korg wavestate]({{site.assets.url_prefix}}/images/posts/2026-07-12-korg-wavestate/Korg-wavestate.jpg)

Now that you have an understanding of the M1 and Wavestation features and
design, it's easier to understand the [Korg wavestate mk2][].

[Korg wavestate mk2]: https://www.korg.com/us/products/synthesizers/wavestate_mk2/

The [wavestate][] was introduced in 2020, reviving the dedicated Wavestation
hardware lineage roughly 25 years after the original series was discontinued.
The second version, wavestate mk2, was released in 2023.

|                     | mk1  | mk2  |
| ------------------- | ---- | ---- |
| Released            | 2020 | 2023 |
| Voices of Polyphony | 64   | 96   |

Both versions support integration with wavestate Editor/Librarian software, as
well as the wavestate Native plugin you can run in your DAW (Ableton Live,
Cubase, etc.)

[wavestate]: https://www.soundonsound.com/reviews/korg-wavestate

### Programs

The wavestate has ditched the term "Patch" and adopted "Program" again. Each
Program contains an oscillator based on either a multi-sample or Wave Sequence,
followed by a Filter, Amplifier, Effects.

Where the Wavestation only had a non-resonant digital low-pass filter, the
wavestate offers multiple types of filters (2 pole and 4 pole low-pass,
high-pass, band-pass, band-reject, MS-20 low and high-pass, Polysix low-pass,
and a multimode blendable Multi filter).

The wavestate features 3 LFOs, 2 modulation processors, and expands on the
modulation abilities to make most parameters of the synth engine available as
modulation destinations.

### Layers

The wavestate still features a "Performance" with keyboard and velocity zones,
however instead of 8 programs it is now reduced to 4 "Layers".

![Korg wavestate structure]({{site.assets.url_prefix}}/images/posts/2026-07-12-korg-wavestate/wavestate-structure.png)

Additionally each layer only runs 1 oscillator/program, not 4. Each layer
however does also include a traditional Arpeggiator feature.

|                                  | Wavestation       | wavestate          |
| -------------------------------- | ----------------- | ------------------ |
| Parts/Layers per Performance     | Up to 8 Parts     | Up to 4 Layers     |
| Sound assigned to each Part      | 1 Patch           | 1 Program          |
| Oscillators per Patch or Program | Up to 4           | 1                  |

This may seem like an odd trade-off, with the wavestate synths supporting 2-3
times (64-96 voices) the number of voices as the Wavestation (32 voices), but
featuring fewer layers in a performance and only one program/oscillator per
layer.

In the most demanding configurations, a Wavestation Performance could appear
highly layered but leave very little practical polyphony. Eight active Parts
using four-oscillator Patches could consume all 32 voices with a single played
note.

At moments when all four Layers are active and each Wave Sequence is crossfading
between two samples, a single played note may temporarily require eight voices.
Long releases, sustained notes, and independent arpeggiators can increase voice
use further.

This new design makes for a better balance with the available polyphonic voices
supported.

### Effects

The Wavestation relied on 2 effects shared across all 8 Patches/Programs. The
wavestate introduces 3 effects assigned to each layer (Pre FX, Modulation FX,
and Delay) in addition to Master Reverb and EQ effects that apply to the entire
performance.

### Vector Mixing

The original Wavestation mixed the 4 oscillators inside of one Patch. For the
wavestate, the joystick and Vector envelope mix at a higher level - affecting
the 4 Layers at the Performance, rather than 4 oscillators within each
program/patch. The vector system can also be used as a modulation source rather
than being limited only to crossfading.

### Wave Sequencing 2.0

The biggest difference in design from the Wavestation in the wavestate is a
newer Wave Sequencing 2.0 engine.

The original Wave Sequencing supported by the Wavestation bundled together the
following across up to 255 steps:

* Sample
* Duration
* Pitch
* Level
* Crossfade

Wave Sequencing 2.0 separates these into independent lanes.

* Timing
* Sample
* Pitch
* Shape
* Gate
* Step Sequence A
* Step Sequence B
* Step Sequence C
* Step Sequence D

Each lane can have its own number of steps, start and end position, loop start
and end, and playback behavior.

The wavestate can produce a much longer evolving composite pattern from several
short asynchronous lanes.

The wavestate also adds:

* step probability
* randomized step order
* modulatable lane start, end and loop points
* per-note lane variation
* independent lane lengths
* modulation of individual step parameters

A step can have a 40% chance of playing, for example. The Sample Lane might
randomize while the Pitch Lane remains ordered. Because Wave Sequences run
independently for each voice, different notes in a chord can follow different
lane positions and probability outcomes.

This moves the wavestate toward:

* generative sequencing
* polymetric and asynchronous sequencing
* modular-style modulation
* probability-based composition

The Wavestation was an evolving sample sequencer. The wavestate can behave more
like an **algorithmic sound-generation system**.

![Wave Sequencing 2.0 Example]({{site.assets.url_prefix}}/images/posts/2026-07-12-korg-wavestate/wave-sequencing-2-example.png)

For a practical presentation of this, see [Mastering Wave Sequencing 2.0][]
by Ian Dixon.

[Mastering Wave Sequencing 2.0]: https://www.youtube.com/watch?v=0sagFVBO6bU&t=233s
