---
layout: post
published: true
title: Understanding MIDI
date: 2024-04-17 14:02:00 -0500
comments: true
categories:
  - music-production
tags:
  - Cubase
  - MIDI
  - SysEx
  - Alesis V49
image: 
  path: https://s3-us-west-1.amazonaws.com/assets.redconfetti.com/images/posts/2024-04-17/minimal-midi-chain.png
  width: 450
  height: 207
  alt: Example MIDI Diagram
---

[MIDI][] was originally created as a standard to enable musical devices, such as
[synthesizers][], [samplers][], [sequencers][], or [drum machines][], to
integrate with each other for the purpose of facilitating playing, editing,
and recording music.

[MIDI]: https://en.wikipedia.org/wiki/MIDI
[synthesizers]: https://en.wikipedia.org/wiki/Synthesizer
[samplers]: https://en.wikipedia.org/wiki/Sampler_(musical_instrument)
[sequencers]: https://en.wikipedia.org/wiki/Music_sequencer
[drum machines]: https://en.wikipedia.org/wiki/Drum_machine

## Basics

MIDI does not transmit analog audio signals generated by musical devices. It
transmits digital packets of data called "messages" that specify events such as:

* Note-On Message
  * Sent when a key is pressed on the keyboard
  * Can include a "velocity" value indicating how hard the a key was pressed
* Note-Off Message
  * Sent when a pressed key has been released
* Pitch-bend
  * Communicates how far the user has positively or negatively bend the pitch
    wheel, and thus how far the notes being played should bend

Many keyboards and synthesizers are able to send out MIDI note data in response
to notes being played on their keyboard, and they can also generate an audio
signal in response to MIDI note messages that they receive. This is because those
devices include both a keyboard and a sound module with MIDI support.

![Arturia MiniFreak synthesizer]({{site.assets.url_prefix}}/images/posts/2024-04-17/arturia-mini-freak.png "Arturia MiniFreak synthesizer")
*Arturia MiniFreak synthesizer*

There are some keyboards known as "MIDI Controller" keyboards that do not
include a sound module that generate sounds, and there are also sound modules
that exist that do not include a keyboard.

![MIDIPlus Controller keyboard]({{site.assets.url_prefix}}/images/posts/2024-04-17/midiplus-controller-keyboard.png "MIDIPlus Controller keyboard")
*MIDIPlus Controller keyboard*

![Roland JD-990 sound module]({{site.assets.url_prefix}}/images/posts/2024-04-17/roland-jd-990-sound-module.png "Roland JD-990 sound module")
*Roland JD-990 sound module*

A common configuration in the late 80's and early 90's was to use a MIDI
controller keyboard with a music sequencer to control multiple sound modules.

![Alesis MMT-8 Multi Track MIDI Recorder]({{site.assets.url_prefix}}/images/posts/2024-04-17/alesis-mmt-8-sequencer.png "Alesis MMT-8 Multi Track MIDI Recorder")
*Alesis MMT-8 Multi Track MIDI Recorder*

A sequencer is a device that records and plays back a "sequence" of MIDI
messages. The MIDI standard allows for up to 16 different channels of MIDI
messages, and a MIDI controller can be configured to send note messages on one
of those 16 MIDI channels. Some controllers even support the ability to "split"
the keyboard into different "zones" that can send note messages to different
MIDI channels.

MIDI devices can be networked together, in a daisy chain configuration, using
the "MIDI THRU" port of one device to connect to the next device. For MIDI
devices that do not support this, a [MIDI hub][] is a solution.

[MIDI hub]: https://amzn.to/4kntoNZ

![Minimal MIDI Chain]({{site.assets.url_prefix}}/images/posts/2024-04-17/minimal-midi-chain.png "Minimal MIDI Chain by L. Rayón-Rumayor")
*Image taken from [Figure 1 - uploaded by L. Rayón-Rumayor](https://www.researchgate.net/profile/L-Rayon-Rumayor?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6Il9kaXJlY3QiLCJwYWdlIjoiX2RpcmVjdCJ9fQ)*

While a musician plays notes on a specific channel, the sequencer is able to
records those messages, while also allowing them to pass through to the device
that is configured to listen to that same MIDI channel. The sequencer is also
able to replay the messages previously recorded for other MIDI channels.

Each MIDI device has its audio output routed into an audio mixer, with the
resulting rough mix playing out of speakers that the musician can hear. After all
the MIDI parts are finished being recorded to the sequencer, the entire "sequence"
of all instrument parts on all the MIDI channels are played back, so a final mix
can be recorded to tape.

When I was a teenager in the 90s, I had no clue that this was how electronic music
like Electro, Techno, or House was made. I once saw a single sample based
"synthesizer" workstation, likely a [Korg M1][], in elementary school and thought
music was all created in one machine. Today we use DAW software such as Cubase as
a sequencer, however sequencers devices have long existed since 1983.

[Korg M1]: https://en.wikipedia.org/wiki/Korg_M1

Today MIDI can be transmitted over USB, with your MIDI devices networked via a
USB hub instead of a MIDI hub. MIDI can be routed internally inside your computer
to software synthesizers and other instruments, or it can be routed to external
MIDI devices with their audio captured by your computers audio interface.

### MIDI Controls

In addition to the typical note messages outlined above, MIDI can also send
messages that change the controls for your instruments that are manipulated via
knobs, switches, buttons, etc. These messages can be used by hardware MIDI
devices, or even software instruments running from within your DAW.

#### Control Change (MIDI CC)

MIDI supports 128 different "Control Change" messages that are identified by a
Control Number parameter (CC#). You can see a full chart of these different
messages in [MIDI CC List][].

[MIDI CC List]: https://anotherproducer.com/online-tools-for-musicians/midi-cc-list/

Each control change message includes a value that represents the state of the
control that has been manipulated. These values are expressed in a range from
0 to 127.

Many Control Changes messages are defined for certain purposes, so you should
avoid them when you can, and instead try to use CC#'s that are not defined.
These are:

* 3
* 9
* 14-15
* 20-31
* 85-90
* 102-119

It is possible that defined CCs are ignored by your DAW, software plugins, and
external devices, and that you can use them for your own purposes.

Potentiometers, also known as "pots", are a type of knob that can only turn
within a certain range, typically 300 degrees. When they are turned, their
position is translated to a value between 0 and 127. When the knob is turned all
the way to the left, a "0" is sent. When the knob is turned to the center, "64"
is sent. When the knob is turned to the max position, all the way right, "127"
is sent. Faders also simply send a value between 0 and 127 to indicate their
updated position.

When buttons on a MIDI controller are configured, they can operate as "switches"
that toggle between an "on" and "off" state. Typically a value above 64 indicates
that a toggle has been set to "on", and a value below "64" indicates an "off"
state for a switch. A button can also be configured to send "momentary" messages
that send a value when the button is pressed, and another value when the button
is released.

#### MSB and LSB

If you reviewed the MIDI CC List messages provided in the link above, you may
have noticed that some control numbers listed mention 'MSB' and 'LSB'.

For example, you'll see that MIDI CC 7 is defined for use as "Volume (MSB)" -
"Controls the volume of the channel", and MIDI CC 32 – 63 are defined as "LSB
Controller for 0-31".

This means that MIDI CC #39 is the "LSB Controller" for CC #7.

| MIDI CC | Purpose                 | LSB Controller # |
| ------- | ----------------------- | ---------------- |
| 0       | Bank Select (MSB)       | 32               |
| 1       | Modulation Wheel (MSB)  | 33               |
| 2       | Breath Controller (MSB) | 34               |
| 3       | Undefined (MSB)         | 35               |
| 4       | Foot Pedal (MSB)        | 36               |
| 5       | Portamento Time (MSB)   | 37               |
| 6       | Data Entry (MSB)        | 38               |
| 7       | Volume (MSB)            | 39               |
| ...     | ...                     | ...              |
| 31      | Undefined (MSB)         | 63               |

When [MIDI was first defined in 1983][], the values that can be transmitted for
any given message (whether notes, control changes, or other types) were limited
between 0 and 127. It wasn't foreseen that more than 128 values would be needed
in the future.

[MIDI was first defined in 1983]: https://midi.org/midi-1-0-detailed-specification

A MIDI message consists of a number of bytes, with the first byte always
communicating the "status" of the message (e.g. which type of message it is),
and the bytes that follow the status byte provide the data for the message. The
first bit of each byte is used to communicate if the byte is a status byte, or
a data byte. This design leaves each byte with only 7 bits to carry a value.

| Binary   | Hex | Description                   |
| -------- | --- | ----------------------------- |
| 10010000 | 90  | Status Byte - Note On Message |
| 00111100 | 3C  | Data Byte - Note C#3          |
| 01101010 | 6A  | Data Byte - Velocity 106      |

Some devices outgrew this limitation of 128 values, however they needed to come
up with a scheme to transcend this limitation without threatening compatibility
with older MIDI devices.

The solution was to send two different types of messages, and have the newer
devices that were aware of this scheme combine the two 7-bit data values into a
single 14-bit value, with a range of 0 through 16383.

Because one of these 7-bit values has the ability to affect the resulting 14-bit
value more than the other, they started to label it as the Most Significant Byte
(MSB), with the other value being labelled as the Least Significant Byte (LSB).

Here's some examples of values being combined to form a 14-bit value. Notice
that each binary value begins with 0 because we're limited to only 7-bit bytes.

| MSB Binary | MSB Value | LSB Binary | LSB Value | 14-bit Value |
| ---------- | --------- | ---------- | --------- | ------------ |
| 00000000   | 0         | 0000000    | 0         | 0            |
| 00000000   | 0         | 00000001   | 1         | 1            |
| 00000000   | 0         | 01111110   | 126       | 126          |
| 00000000   | 0         | 01111111   | 127       | 127          |
| 00000001   | 1         | 01111111   | 127       | 128          |
| 00000010   | 2         | 01111111   | 127       | 129          |
| 01111110   | 126       | 01111111   | 127       | 16382        |
| 01111111   | 127       | 01111111   | 127       | 16383        |

#### Program Changes (PG)

Program Change messages can be sent to a channel to specify that a MIDI device
should switch from the current program/patch to a different one, specified by a
number between 0 and 127 (128 total).

When devices exceeded this limit of 128 different patches or "programs" to choose
from, the MSB/LSB option became relevant.

Some synthesizers also make use of Banks, requiring not only a Program Change,
but a bank change as well.

* Control Change Message 0 (CC#0) - Most Significant Byte (MSB) Bank select message
* Control Change Message 32 (CC#32) - Least Significant Byte (LSB) Bank Select message

Many synthesizers only need to combine a Bank Select message (CC#0) with a
Program Change message to select a patch, not using the LSB messages at all,
but it's nice knowing that the limit is now 16384 banks containing up to 128
Programs each - for a total of 2,080,768 possible programs. Hopefully that's
enough.

### General MIDI

When MIDI was first developed it defined that note data can be send on 16
separate channels, but there was no standard for what instruments should load
under which Program Change number specified.

To allow MIDI data to be captured in one environment, and used in another
environment, with a similar outcome, the [General MIDI][] standard was specified.
General MIDI defined a list of 128 standard instruments that should load for
specific program numbers that are part of the standard. For instance, Program #1
is an Acoustic Grand Piano / Piano 1, and Program #81 is always "Synth Lead 1"
with a chorused Square Wave sound.

[General MIDI]: https://en.wikipedia.org/wiki/General_MIDI

Although the sound bank of one device might differ from the sound bank of another
device, the music played back using General MIDI sounds close enough. It also
made it possible for MIDI data to be shared in MIDI files. In the late 90s it
was common for webpages to automatically play MIDI files in the background. For
a taste of what this sounded like, check out [this example][] of a popular
1980's pop song.

[this example]: https://bitmidi.com/never-gonna-give-you-up-3-mid

Even General MIDI seemed limited to Yamaha and the Roland Corporation, so they
defined their own extensions of General MIDI to allow for a more comprehensive
library of sounds than the 128 programs defined by General MIDI.

#### Registered and Non-Registered Parameters

Although the MIDI standard has defined several Control Change parameters that
are reserved for specific uses, the General MIDI standard has also defined
several [Registered Parameters Numbers][] (RPN) that are addressed in a different
way to retain backwards compatibility with older MIDI devices, while allowing
for more controls, and with a higher resolution of data values.

[Registered Parameters Numbers]: https://en.wikipedia.org/wiki/General_MIDI#RPN

RPN messages are defined for:

* Pitch bend range
* Fine tuning
* Coarse tuning
* Tuning program change
* Tuning bank select
* Modulation depth range

For an RPN, 2 control change messages are sent with data that specifies which
parameter is being changed via CC# 100 and 101. These messages are then followed
by any number of "Data Entry" messages using CC#6 (MSB) and CC#38 (LSB), and
then the communication is finished with an "End of RPN" message using CC#100
with a value of 127.

The Course Tuning RPN is specified using parameter #2, specified by parameter
values 0 and 2. If you wanted to change the tuning to A440, you'd use the value
of 64 like so:

| Description            | MIDI CC # | Value |
| ---------------------- | --------- | ----- |
| RPN (LSB)              | 101       | 0     |
| RPN (MSB)              | 100       | 2     |
| Data Entry (MSB)       | 6         | 64    |
| Data Entry (LSB)       | 38        | 0     |
| RPN (MSB) - End of RPN | 100       | 127   |

Additionally, General MIDI also defines [Non-Registered Parameter Numbers][]
(NRPM) which allow manufacturer-specific or instrument-specific MIDI control
changes that are not part of the basic MIDI standard. NRPN changes use CC #99
and 98 to specify changes.

[Non-Registered Parameter Numbers]: https://en.wikipedia.org/wiki/NRPN

As an example, the Roland GS standard defines a [parameter called "vibrato rate"][].
This is the speed at which a sustained note will "waver". The parameter value is
(**1**,**8**) and has a value range of **0** through **127**. Here are the MIDI
CC messages that would be sent to change that parameter to 127 (full vibrato):

[parameter called "vibrato rate"]: https://www.2writers.com/eddie/TutNrpn.htm

| Description            | MIDI CC # | Value |
| ---------------------- | --------- | ----- |
| NRPN (LSB)             | 98        | 8     |
| NRPN (MSB)             | 99        | 1     |
| Data Entry (MSB)       | 6         | 127   |
| Data Entry (LSB)       | 38        | 0     |
| RPN (MSB) - End of RPN | 98        | 127   |

In the examples I posted above, we include an End of RPN or NRPN message at the
end. It turns out that [not all MIDI devices][] send an ending message, but it
wouldn't hurt to do it yourself to avoid [unexpected side effects](https://musescore.org/en/node/35291).

[not all MIDI devices]: https://web.archive.org/web/20230128063838/https://midi.org/forum/52-nrpn,-rpn-questions

### Other Messages

Most of the MIDI messages mentioned above were "Channel Voice" messages. There
are also other categories of messages I'm not covering extensively here, as they
are less relevant to sequencing with a DAW. Here are a few notes on which ones
might be relevant.

* Channel Mode - Instructs a synth on a channel to operate in a different "mode".
  * "All Notes OFF" message, also known as "Panic", used when a device misses a
    note-off message and won't stop playing a note.
  * Can tell a synth to switch to mono or poly mode
* [System Common][]
  * Can tell a sequencer to load a specific song
  * Can tell a sequencer to jump to a specific position within a song
* [System Real-Time][]
  * MIDI Clock messages to help a synthesizer sync with the clock source. You'll
    want to configure your synth to do this, and your DAW to send the MIDI Clock
    messages to your synth, so that it can sync arpeggios and LFO patterns with
    the BPM of your song.
  * Transport messages such as Start, Stop, Continue

[System Common]: https://www.recordingblogs.com/wiki/midi-system-common-messages
[System Real-Time]: https://www.recordingblogs.com/wiki/midi-system-realtime-messages

#### System Exclusive Messages (SysEx)

System Exclusive Messages are really helpful. These make it possible to configure
MIDI devices in ways that MIDI CC messages cannot.

The most common use is for devices to provide SysEx dumps of data that can be
used to restore the device to a previous configuration. Many MIDI Controllers
will send a SysEx message that can be recorded/captured in your DAW or via other
SysEx "librarian" programs such as the Mac program [SysEx Librarian][].

[SysEx Librarian]: https://www.snoize.com/SysExLibrarian/

![Cubase MIDI Filtering settings]({{site.assets.url_prefix}}/images/posts/2024-04-17/cubase-midi-filtering.png "Cubase MIDI Filtering settings")

By default, Cubase will not record SysEx messages that it receives. To enable
recording SysEx messages, go into the Settings > MIDI > MIDI Filter, and uncheck
"SysEx" under the Record section.

If you play the SysEx message that was recorded back to your MIDI device, it
will restore to the state that was included in the SysEx dump.

Synthesizers are able to provide a dump of their entire preset library, or even
individual presets. Websites like [PresetPatch](https://www.presetpatch.com/)
make it possible for you to download SysEx files for individual presets that you
can load directly into your synth via their website. Most synths load presets
into an "Edit Buffer" space in memory that is not automatically saved to a
bank/preset space until the user chooses to save it to a save, so this activity
is not destructive to your existing presets configurations.

Some synthesizers even support full manipulation of all the patch/program
parameters via SysEx. This support might be used by software provided by the
synth manufacturer now, but will also prove useful in the future when official
support is no longer provided and a 3rd party company creates software to manage
the synth. As an example, the [Alesis Quadrasynth series][] manufactured from
1993 - 1999 can still be managed today via [MIDI Quest software][].

[Alesis Quadrasynth series]: https://gist.github.com/redconfetti/6c76cd079cd724fb77484e87147ff4dd
[MIDI Quest software]: https://squest.com/Products/MidiQuest13/Instruments.html

##### SysEx Example

SysEx doesn't try to leverage MIDI CC, but instead involves communications that
always start with a byte that translates to hex `0xF0`, and ends with a byte
that translates as `0xF7`.

```text
F0 00 00 0E 00 42 62 00 5D F7
```

Bytes transmitted over MIDI can be converted to hexadecimal representation,
which make it easy to understand. This SysEx message is a request for the
current settings of an Alesis V49 MIDI controller keyboard.

Here's a breakdown of what the message above likely represents.

* F0 - System Exclusive Status byte
* 00 00 0E - [Alesis manufacturer id](https://midi.org/sysexidtable)
* 00 42 - Family/series or device ID
* 62 - Opcode
* 00 5D - Data
* F7 - End of System Exclusive transmission

As you can see the message starts off by identifying the manufacturer and type
of device that the SysEx message is intended for. This is necessary so that
devices can ignore SysEx messages they aren't designed to use.

I'm assuming that the data that follows is an Opcode byte, and a couple data
bytes specifying the kind of configuration dump. For sure `62 00 5D` requests
that the Alesis V49 provide a dump of its configuration. In response to this
SysEx message, it returns a similarly formatted SysEx message that is over 100
bytes in size.

![SysEx Dump Alesis V49]({{site.assets.url_prefix}}/images/posts/2024-04-17/sysex-dump-v49.png "SysEx Dump Alesis V49")
