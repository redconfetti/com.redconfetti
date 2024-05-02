---
layout: post
published: true
title: Using the Nektar Panorama with Cubase
date: 2024-05-02 08:40:00 -0500
comments: true
categories:
  - music-production
tags:
  - Cubase
  - Nektar
  - Panorama
image: 
  path: https://s3-us-west-1.amazonaws.com/assets.redconfetti.com/images/posts/2024-05-02-panorama-p6-cubase/nektar-panorama-p6.png
  width: 1500
  height: 534
  alt: Nektar Panorama P6
---

Welcome to my guide and review to using the [Nektar Panorama][] series of MIDI
Controllers with Cubase 13.

The Panorama series of MIDI Controllers first was introduced to the market in
2012 with the [Panorama P4][] (49 keys), followed by the [Panorama P1][] (no
keyboard) and Panorama P6 (61-keys) introduced in 2013. Even though it's been
over 10 years, this controller is still totally relevant in 2024.

[Nektar Panorama]:https://nektartech.com/panorama-p4-p6/
[Panorama P4]: https://nektartech.com/panorama-p4-p6/
[Panorama P1]: https://nektartech.com/panorama-p1/

* August 20, 2012 - [Nektar Panorama P4 review][]
* November 30, 2012 - [Nektar announces the Panorama P6 Reason controller][]
* June 2013 - [Music Radar - Nektar Panorama P1][]
* September 3, 2013 - [Nektar Panorama P4, P6 & P1 Review][]
* April 16, 2014 - [AudioTechnology - Review: Nektar Panorama P6][]

[Nektar Panorama P4 review]: https://www.musicradar.com/reviews/tech/nektar-panorama-p4-557050
[Nektar announces the Panorama P6 Reason controller]: https://www.musicradar.com/news/tech/nektar-announces-the-panorama-p6-reason-controller-567817
[Music Radar - Nektar Panorama P1]: https://www.musicradar.com/reviews/tech/nektar-panorama-p1-578984
[Nektar Panorama P4, P6 & P1 Review]: https://community.absolutemusic.co.uk/entries/nektar-panorama-p4-p6-p1-review
[AudioTechnology - Review: Nektar Panorama P6]: https://www.audiotechnology.com/reviews/nektar-panorama-p6

![Nektar Panorama P6 image]

[Nektar Panorama P6 image]: {{site.assets.url_prefix}}/images/posts/2024-05-02-panorama-p6-cubase/nektar-panorama-p6.png "Nektar Panorama P6 image"

The features are practically identical across the series, with the exception of
the Panorama P1, which lacks performance features such as a keyboard, octave
buttons, performance buttons (PB1, PB2), aftertouch, pitch-wheel, and mod-wheel.

I purchased a Panorama P6 expecting it to unlock a plug-and-play experience of
navigating plugins, presets, and parameters all with the knobs, faders, and
buttons. This is possible, however I've encountered various issues and
ambiguities concerning the integration. These were:

* How is it meant to be used with Cubase 13? Should I use features like MIDI
  Remote, or Quick Controls, with the Panorama controller, or will it conflict
  with the DAW integration?
* Why am I not able to step through the Virtual Instrument presets using the
  Patch- and Patch+ buttons consistently?
* Why are the controls not as intuitive for some Virtual Instruments?

I answer these questions, and recap in the Conclusion section at the bottom
of this post.

## Prerequisites

To understand what's possible with the Nektar Panorama MIDI controller, it's
important that you understand some things about MIDI, and what features Cubase
provides for MIDI controllers. I've created two posts to establish this.

* [Understanding MIDI][] - Explains MIDI Continuous Controller (CC) messages,
  which are transmitted when you manipulate the knobs, faders, and buttons on a
  MIDI controller. Also explains what "MSB" and "LSB" mean, and covers System
  Exclusive messages.
* [Demystifying MIDI in Cubase][] - This explains how Cubase features are used
  with a MIDI controller that does not support DAW integration like the Panorama
  series.

[Understanding MIDI]: /music-production/2024/04/17/understanding-midi.html
[Demystifying MIDI in Cubase]: /music-production/2024/04/17/demystifying-midi-in-cubase.html

## Controls

As I discuss the Panorama, I'm going to need to refer to the various controls.
I'll be referring to these by description (e.g. "the faders", "Pad button",
etc), but I'll also include the letters from this diagram, such as "Pad button
(R)".

![Nektar Panorama P4 diagram][]
*Diagram taken from P4 Quick Start Guide*

[Nektar Panorama P4 diagram]: {{site.assets.url_prefix}}/images/posts/2024-05-02-panorama-p6-cubase/nektar-panorama-p4.png "Nektar Panorama P4 diagram"

Many MIDI controllers have knobs that are technically called "potentiometers" or
"pots", which are limited in how far you can turn them clockwise or
counter-clockwise. The Panorama does not use these, it instead has "rotary
encoders" that can turn infinitely in either direction. We'll refer to these as
"encoders".

To distinguish between the following controls, which don't have official
names/descriptions in the Panorama manual, I'm going to refer to them using the
following labels:

* F - "Channel encoders"
* P - "Context encoders"
* N - "Navigation buttons"
* Q - "Transport buttons"

Other groups I refer to should be obvious, such as the "LED Buttons" below the
faders, or the "Drum Pads".

## MIDI Interfaces

You might notice that Cubase detects multiple MIDI interfaces from the Panorama,
provided by the USB connection to your computer.

* "Panorama Internal",
* "Panorama Mixer",
* "Panorama Instrument",
* "Panorama ReWire Host"

In the DAW setup instructions you are instructed to configure only the
"Internal" interface as being included in the "All MIDI" set. This is to ensure
that only the MIDI messages sent from the Internal interface are routed to your
tracks and instruments when you select "All MIDI" inputs as the MIDI source for
a track.

The keyboard notes, aftertouch, pitch-bend, and mod-wheel messages are always
sent from the Panorama P4 or P6 to your DAW from the "Internal" interface, no
matter which mode you are using. The knobs, faders, and buttons are also sent to
your DAW from the "Internal" interface, but only when the controller is using
the "Internal" mode.

The setup instructions also instruct you to make only the "Internal" and "ReWire
Host" interfaces visible. This is because the "Mixer" and "Instrument"
interfaces are redundant, and thus not needed for use with Cubase. You cannot
remove the "ReWire Host" interface from being visible however, as this would
disable Cubase from listening to that interface, which is needed for the DAW
integration features supported by the Panorama.

## DAW Integration

The Panorama series support three DAW integration modes that map the controls of
the Panorama to different actions within Cubase.

* **Mixer Mode** - Faders map to to channels/tracks, controlling volume. Buttons
  and knobs control mute, solo, pan, inserts, sends, etc.
* **Instrument** - Controls are mapped to the parameters inside of the Virtual
  Instrument loaded in the currently selected track
* **Transport** - Context encoders (P) are mapped to transport functions in your
  project, such as the tempo, or the song position pointer (SPP).

The DAW integration modes are not available with the Panorama unless you have
powered it on before you start Cubase. During the startup of Cubase, the Cubase
integration driver/software for the Panorama is initialized and establishes
two-way communications with the Panorama on the "ReWire Host" MIDI interface.
MIDI CC messages and System Exclusive messages are exchanged throughout your
session to ensure that the Panorama and your Cubase session states remain in
sync. The Cubase integration driver acts as a kind of server, with the Panorama
acting as a client.

### Consistent Controls

#### Navigation Buttons (N)

The Navigation buttons perform the same functions no matter which DAW
integration mode you are in using. You have to hold the SHIFT button to use
modes labelled above the navigation buttons (e.g. "◀ Bank ", "Bank ▶", etc). The
bank buttons only work if your project includes more than 8 tracks.

| Button | Purpose                                                                                                                                |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| Track- | Switch to previous track                                                                                                               |
| Track+ | Switch to next track                                                                                                                   |
| Patch- | Switch to previous MIDI / instrument preset                                                                                            |
| Patch+ | Switch to next MIDI / instrument preset                                                                                                |
| View   | Toggles Mixer window in "Mixer" mode<br>Toggles Instrument window in "Instrument" mode<br>Toggles transport window in "Transport" mode |
| ◀ Bank | Switches to previous bank of 8 tracks/channels                                                                                         |
| Bank ▶ | Switches to next bank of 8 tracks/channels                                                                                             |

#### Transport Buttons (Q)

The Transport buttons perform the same functions no matter which DAW integration
mode you are using. The Nektar manual refers to the project cursor position as
the "Song Position Pointer" (SPP).

| Button  | Purpose                                        |
| ------- | ---------------------------------------------- |
| F-Keys  | Held to use F1-F11 functions                   |
| ⏮      | Move project cursor to Left Locator Position   |
| ⏭      | Move project cursor to Right Locator Position  |
| Undo    | Undo last action                               |
| Click   | Toggles metronome                              |
| Mode    | Toggles MIDI Record Quantize                   |
| Cycle   | Toggles Cycle                                  |
| ⏪️      | Rewind                                         |
| ⏩      | Forward                                        |
| ▶       | Play                                           |
| ●       | Record                                         |

#### F-Keys

The F-Keys (11 total) are the only controls that you can configure and use
within the DAW integration modes. You have to configure and load their
configuration from within Internal mode. The F-Keys always send configured MIDI
messages from the "Internal" MIDI interface.

If there is a feature or toggle that the DAW integration modes do not provide,
these buttons could offer a solution. More on that below under my coverage of
Internal mode.

If you want to assign MIDI CC to the F-Keys, I recommend that you use MIDI CC
20 - 31, as these are undefined and not used by default by any of the other
Internal mode controls. QWERTY macros are not supported on newer MacOS systems,
so this is a more practical use of the F-Keys should the DAW integration fall
short of your workflows needs.

### Mixer Mode

When you select Mixer mode, certain controls are mapped to Cubase mixer features
by the DAW integration driver.

#### Transport Buttons

If you press the 'View' button it hides or shows the Mixer window.

If you hold SHIFT and press the 'View' button, it hides or shows the Channel
Editor window.

#### Faders (D & H)

The 8 faders are assigned to the 8 tracks in the current "bank" context in Mixer
mode. The 9th fader (furthest to the right) is mapped to the Master audio output
(Stereo Out).

The motorized fader (D), along with the Mute and Solo buttons, are assigned to
the current track. You can press the "Fader" button to access the graphical menu
for configuring the channel, which includes toggling:

* Read mode
* Write mode
* Bypass Inserts
* Bypass EQs
* Bypass FX Sends

I'm surprised that they left out the ability to toggle the 'Monitor' button.

From the main 'Mixer' mode menu you can use the "Channel" menu button (M4) to
access this same menu for the current track/channel.

#### LED Buttons (I)

The "Toggle/Mute" button (J) changes the "Select Mode" for the LED buttons (I)
below the faders, switching between:

* Select - Jumps focus to a different track in the bank of 8 tracks/channels
* Mute - Toggles mute for channel
* Solo - Toggles solo for channel
* Record/Arm - Toggles record mode for channel

#### Channel Encoders (F)

The encoders above the faders are used to change the panning by default. You can
press the "Toggle/View" button (G) to change the Encoder Mode (ENC MODE) that is
indicated at the top of the graphical display. The encoders can be re-assigned
to control one of the Send groups (1-8).

This is great if you're trying to focus on balancing the sends across all tracks
for a specific effect such as Reverb. If you want to manage the sends 1-8
independently for the current track, see Graphical Menu (L & K below).

#### Graphical Menu (L & K)

If you're wanting to focus on a specific track, you can go into the "FX Sends"
menu for the current track by pressing M3, then adjust the levels of each send
using the Context Encoders (P).

The graphical interface with menu buttons makes it easy to jump into modes to
manipulate the EQ settings in an easy to understand way. The menu buttons at the
bottom of the graphical display can be used to switch EQ 1-4 off or on. The top
row of 4 encoders to the right of the graphical display are assigned to the gain
for the 4 EQ settings, and the bottom row of 4 encoders either control the
Frequency knobs, or the Q knobs, depending on which modes you select from the
graphical menu. This is all perfect and intuitive.

#### Context Encoders (P)

The context encoders are mapped to different controls depending on the context
you're in.

In Mixer mode, they are mapped to controls that correspond to the menu you are
viewing in the Graphical Menu (L). The "EQ" context is selected by default in
Mixer mode, however you can choose to manipulate aspects of the currently
selected track, such as EQ, Inserts, FX Sends, Channel settings (same as "Fader"
menu), or Quick Controls.

### Instrument Mode

If you go into Instrument mode, with an Instrument track selected, the Context
Encoders (P) are assigned to the Instrument parameters that are displayed on the
'Home' page that is displayed by default. You can press the M5 menu button to
access a navigation menu that allows you to switch to other pages that control
additional parameters, using the Data Encoder (O) to choose a different page
before pressing the "Enter" button (M5) to switch to that page.

#### Mapped Instruments

In February of 2020, Nektar's website had a published list of
[309 VST effects][], and [103 VST instruments][] that the Panorama has been
custom mapped to integrate with.

[103 VST instruments]: https://web.archive.org/web/20200202012406/http://support.nektartech.com/s.nl/ctype.KB/it.I/id.1801/KB.1129/.f
[309 VST effects]: https://web.archive.org/web/20200223202125/http://support.nektartech.com/s.nl/ctype.KB/it.I/id.1800/KB.1129/.f

I tested the Instrument mode with the [Native Instruments Massive][] plugin, and
the experience was very impressive.

[Native Instruments Massive]: https://www.native-instruments.com/en/products/komplete/synths/massive/

The 8 encoders were mapped to useful parameters like "Add Osc", "Anger",
"Acid Type", "Acid", "Noise", "Bass", "Future", and "Past".

![massive-macro-menu.jpg]

[massive-macro-menu.jpg]: {{site.assets.url_prefix}}/images/posts/2024-05-02-panorama-p6-cubase/massive-macro-menu.jpg "Massive instrument Panorama graphical display"

These 8 parameters mapped to the "Macro Control" section of the plugin.

![massive-vst-macros.png]

[massive-vst-macros.png]: {{site.assets.url_prefix}}/images/posts/2024-05-02-panorama-p6-cubase/massive-vst-macros.png "Native Instruments Massive  macro control"

The menus are labelled well and easy to understand and navigate through. When
I'm on the "Oscillators" page, the 3 available menu buttons (M1 - M3) can be
used to quickly jump between sub-pages for each Oscillator (1, 2, and 3). When I
jump to a different page, the Context Encoders (P) are automatically mapped to
what I'm viewing.

![massive-menus.jpg]

![massive-osc-2.jpg]

[massive-menus.jpg]: {{site.assets.url_prefix}}/images/posts/2024-05-02-panorama-p6-cubase/massive-menus.jpg "Panorama graphical menus for Native Instruments Massive"
[massive-osc-2.jpg]: {{site.assets.url_prefix}}/images/posts/2024-05-02-panorama-p6-cubase/massive-osc-2.jpg "Panorama graphical parameters for Oscillator 2 for Native Instruments Massive"

The menus and labels for the parameters are all very clear and easy to navigate
through.

* Macro - 8 macro controls configured in plugin
* Global - Glide, Vibrato Rate, Vibrato Depth, Bypass Gain, Unison Pitch, Unison
  Wave, Unison Pan, Pan
* Oscillators - 5 controls for OSC1, menu buttons to switch to controls for OSC2
  and OSC3
* Noise / F.Back - Noise Color, Noise Amp, Noise Fit Route, FB Amp, FB Fit Route
* Filters - Controls for filter, with buttons to switch between Filter 1 and
  Filter 2
* Inserts - 4 controls for 2 insert effects
* Envelopes - Options to switch between Env1 - Env4 with faders mapped to
  parameters
* Modulation 5-8 - Menu button to step through Modulation 5 - 8, menu buttons to
  toggle Restart, Position, and Sync features
* Master FX - 4 controls for assigned FX
* EQ - Lo Shelf, Boost, Frequency, Hi Shelf

#### Unmapped Instruments

Unfortunately Nektar can't map all plugins that come to exist in perpetuity.
[Steinberg's Retrologue 2][] is an example of an instrument VST that has not
been mapped by Nektar. Keep in mind that the Panorama was previous mapped for
Retrologue, but not for the latest version, Retrologue 2.

[Steinberg's Retrologue 2]: https://www.steinberg.net/vst-instruments/retrologue/

It appears that whatever the list of parameters are that an instrument provides
to Cubase, the Panorama assigns those parameters to the controls across multiple
pages, in the order they were specified. There might be some algorithm that
Nektar has implemented to try to map them automatically in the most useful way
possible, but obviously this probably depends on how specific that parameter
data is in providing what the algorithm is looking for.

In the bottom of the screen there can be 3 buttons mapped to parameters that are
represented as a true/false toggle (boolean) instead of a value range of 0-127
like the knobs do.

The first 4 pages (Home, Page A, Page B, Page C) are assign ranged controls to
the eight Context Encoders (P), and three button based / toggle controls at the
bottom of the screen (activated by M1 - M3). That's 11 parameters per a page,
for 44 controls total.

![unmapped-instrument.png]

[unmapped-instrument.png]: {{site.assets.url_prefix}}/images/posts/2024-05-02-panorama-p6-cubase/unmapped-instrument.png "Nektar Panorama graphical menus for an unmapped instrument"

You can press the "Menu" button (M5) and a menu selector pops up. You can use
the Data Encoder to select a different page, and then press "Esc" (M4) to escape
the selection menu, or press "Enter (M5) to switch to the selected page.

The "Fader Home" page shows another 16 parameters that are mapped to the Faders
(H) and the Fader Encoders (F).

So you can control a total of 60 parameters for unmapped instruments, which are
at first assigned in the order they are provided. You can't add pages, nor can
you rename the current pages.

#### VST Learn

You can however remap these controls to the ones you prefer, and save the
configuration you've created once you're done.

If you are not satisfied with the default mapping, you can press the "Learn"
button if shown on the menu. If you do not see the "Learn" button, hold SHIFT
and press M5 to go into Learn mode. In the Learn mode, you are able to
manipulate a control in the VST instrument window, and then manipulate the
control on the Panorama that you want to map to that parameter.

Once you're done re-mapping the controls for the instrument in the configuration
you prefer, make sure to save your changes. The custom mapping configurations
you make are stored by the Cubase integration driver under in your Documents
folder. Unfortunately these Nektar Panorama Map (NPM) files cannot be modified,
as they are in a binary format.

![nektar-vst-mapping-files.png]

[nektar-vst-mapping-files.png]: {{site.assets.url_prefix}}/images/posts/2024-05-02-panorama-p6-cubase/nektar-vst-mapping-files.png "Nektar Panorama mapping file list"

### Transport Mode

The transport buttons work in all three DAW integration modes, however the
Transport mode provides some features that go above and beyond the standard
transport.

The faders (H), LED buttons (I), or encoders (F) don't have any functionality
mapped in Transport mode. I'm surprised they didn't allow these to continue
controlling the current bank of tracks/channel like Mixer mode.

Everything is focused on the Graphical Menu (L), menu buttons (M), and Context
Encoders (P). The Context Encoders (P) are mapped for the following:

* P1 - Change Tempo
* P2 - Change Metronome/Click level
* P3 - Changes the pre-roll length
* P4 - Changes the post-roll length
* P5 - Changes the Record mode
* P6 - Changes the cycle record mode setting
* P7 - Moves the Song Position Pointer (SPP)
* P8 - Moves the Left and Right locator loop forward or backward in position

You can hold SHIFT and press the F1 button to set the Left Locator Position
where the SPP is. You can hold SHIFT and press F2 to set the Right Locator
Position where the SPP is.

You can toggle Auto Punch-In using the M1 menu button, and toggle Metronome
Click Pre-count using the M2 menu button.

#### Cycle Markers

The combination of controls to move the project cursor using P7 one bar at a
time, move the loop, and reset the left (Shift + ⏮) and right (Shift + ⏭)
markers for the loop, are very powerful controls when combined with the standard
transport functions.

The transport menu also features the Cycle Marker ("Cyc Mrk") and Markers menus.
You can use these menus to place cycle markers, or normal markers, which will
work in your session even though you don't see them. To better understand how
these work it's a good idea to add a Marker track to your session in the Cubase
project window. I've done this here with the track name "Sections".

![cubase-marker-track-cycles.png]

[cubase-marker-track-cycles.png]: {{site.assets.url_prefix}}/images/posts/2024-05-02-panorama-p6-cubase/cubase-marker-track-cycles.png "Cubase Marker track with markers and cycles"

From these cycle menus you can use the drum pads to jump to a specific cycle
marker or marker in your session. Very useful.

### Additional Notes

When using the Panorama with Cubase 13 on a Mac, the "Patch-" and "Patch+"
buttons do not work with the current DAW integration driver (as of 05/02/2024).
Nothing happens when I press these buttons for a track. To make up for this, I
was able to configure a MIDI Remote script that listens on the "Instrument" MIDI
interface for the MIDI CC messages sent for these two buttons. I have mapped
them to the "Previous Preset" and "Next Preset" actions within Cubase.

Doing this for other DAW integration features can cause unwanted side effects,
where use of the button causes the mapped DAW integration action to occur at the
same time as the action you've mapped. You cannot change the MIDI CC
configuration of the controls used in the DAW Integration modes. They must be
fixed so that the DAW integration driver is able to understand how to interpret
them.

Using MIDI Remote on the "ReWire Host" interface may interfere with DAW
integration support in Windows. In such a case, it's better to just map a set of
F-Keys on the "Internal" interface to switch between patches.

I have created a table for reference of the MIDI CC messages sent for controls
in DAW Integration modes, see [Panorama Reference - DAW Integration Modes][].

[Panorama Reference - DAW Integration Modes]: /music-production/2024/04/29/panorama-reference.html#h-daw-integration-modes

## Internal Mode

Internal mode is the only mode that works when you're not working with a DAW,
and is also the mode where most of the MIDI controls are assignable and send
message from the "Internal" interface.

The "Internal" mode has a default configuration for all of the controls you can
configure (16 rotary encoders, 9 faders, 8 LED buttons, 10 function buttons, 22
Transport/F-Key buttons). These are called "assignable" controls. These can all
be mapped to functions inside of Cubase (via MIDI Remote), or inside of your VST
instruments (using Quick Controls or a "MIDI Learn" feature that might be
supported by the instrument).

![Nektar Panorama P4 diagram]

All of the controls are assignable when you're in Internal mode, with the
exception of:

* "Octave ⏷" and "Octave ⏶" buttons
* Performance Buttons (PB1 & PB2)
* The "Fader" button (E3)
* The "Toggle/View" button (G)
* The "Toggle/Mute" button (J)
* The Mode buttons (K - above graphical display)
* The Menu buttons (M1-M5, below the graphical display)
* The "Data" rotary encoder (O, to the right of the graphical display)
* The "Shift" button (N1, used to access assignable Bank and Zoom virtual
  "buttons" that are assignable)
* The "F-Keys" button (Q1, used to access assignable F1 - F11 virtual "buttons")
* The "Pads" button (R)

See [Internal Mode - Control Edit][] for instructions on editing the
configuration for your controls in Internal node, or
[Panorama P6 Reference - Internal Mode][] for a full reference of all the
defaults for controls in Internal mode.

[Internal Mode - Control Edit]: https://nektartech.com/internal-mode-control-edit-panorama-p-series/
[Panorama P6 Reference - Internal Mode]: /music-production/2024/04/29/panorama-reference.html#h-internal-mode

You do not necessarily need to change the configuration to configure a MIDI
Remote "script" for the Panorama in Cubase. The default map for "Internal" mode
is perfectly fine. You might only need to convert the F-Keys from keyboard
macros to MIDI CC (see below).

You can also have up to 20 different "presets" to store different configurations
that you can switch between (see [Presets & Maps][]).

[Presets & Maps]: https://nektartech.com/internal-mode-presets-and-maps-panorama-p-series/

### Function Keys

In Internal mode you can use the [Control Edit][] menu to configure the Function
/ F-Keys. As I mentioned earlier in this post, I recommend that you assign these
to MIDI CC 20 - 31 so that you can use them in Cubase with the MIDI Remote
feature to map them to actions you desire.

[Control Edit]: https://nektartech.com/internal-mode-control-edit-panorama-p-series/

![midi-remote-panorama-internal.png]

[midi-remote-panorama-internal.png]: {{site.assets.url_prefix}}/images/posts/2024-05-02-panorama-p6-cubase/midi-remote-panorama-internal.png "MIDI Remote configuration for Panorama Internal"

![midi-remote-fkeys.png]

[midi-remote-fkeys.png]: {{site.assets.url_prefix}}/images/posts/2024-05-02-panorama-p6-cubase/midi-remote-fkeys.png "MIDI Remote F-Keys mapping"

Here are some of the actions I decided to map the F-Keys to:

* Mapping Page Actions > Previous Mapping Page
* Mapping Page Actions > Next Mapping Page
* Selected Track > Instrument > Parameters > Actions > Previous Plug-in
  Parameter Bank
* Selected Track > Instrument > Parameters > Actions > Next Plug-in Parameter
  Bank
* Selected Track > Monitor
* Selected Track > Record Enable

### Presets

The Panorama supports up to [20 presets][], with each containing a selection of
3 kinds of sub-presets called "maps".

[20 presets]: https://nektartech.com/internal-mode-presets-and-maps-panorama-p-series/

* 5 Keyboard maps - Support split configurations with MIDI send on different
  channels, with octave and transpose settings. See [Defaults][Key Map Defaults]
  * Standard - Common configuration
  * AT OFF
  * 5ths - Full range with transpose used to layer 7 steps above, and octave
    above and below.
  * Triads - Full range with transpose used to layer 7 steps above, 5 steps
    above, and 5 steps below
  * C2 Split
* 20 Drum Pad maps - Mapping different note configurations. See
  [Defaults][Pad Map Defaults]
  * C1-B1 - Standard note messages
  * [GM Drums][]
  * [GM Percussion][]
  * [I-MAP][] 1 - Mapping scheme created by [Sonic Reality][]
  * I-MAP 2 - Mapping scheme created by Sonic Reality
  * IMAPROLL
  * IMPULSE
  * PROTOOLS
  * TRNS DRM
  * TRNS PTN
  * TRANSTRG
  * BLOFELD - [Waldorf Blofeld] drum sounds
  * IMPOSCAR
  * CUB MARK - Cubase marker keyboard macros
  * PRO MARK - ProTools marker keyboard macros
  * CC MAP - Send MIDI Aftertouch and CC data on channels 1-4
  * C1-B1 L - Notes with NRPN Toggle Coarse 3 messages
  * NUMERIC - Numeric QWERTY macros
  * KEYLEARN - QWERTY macros
  * BLANK - No notes, NRPN Toggle Coarse 3 messages
* 10 F-Key Maps - Different QWERTY keyboard maps for the common DAWs
  * 1-REASON
  * 2-CUBASE
  * 3-LOGIC
  * 4-STUDIO1
  * 5-FLSTUDIO
  * 6-ABLETON
  * 7-REAPER
  * 8-PROTOOLS
  * 9-SONAR
  * 10-KEYPAD

[Waldorf Blofeld]: https://www.youtube.com/watch?v=_75oHr9A8jI
[Pad Map Defaults]: /music-production/2024/04/29/panorama-reference.html#h-drum-pad-maps
[Key Map Defaults]: /music-production/2024/04/29/panorama-reference.html#h-keyboard-maps
[I-MAP]: https://sonicreality.com/imap.php
[GM Percussion]: https://en.wikipedia.org/wiki/General_MIDI#Percussion
[GM Drums]: https://ask.audio/articles/everything-producers-need-to-know-about-drum-maps
[Sonic Reality]: https://en.wikipedia.org/wiki/Sonic_Reality

### MIDI Assignable

A reference table indicating the controls that are assignable in Internal Mode,
along with their default Control Change (CC) configuration, is available in
[Panorama Reference][Internal Mode Default Control Assignments].

[Internal Mode Default Control Assignments]: /music-production/2024/04/29/panorama-reference.html#h-internal-mode-default-control-assignments

### Pads

At first it can seems like the pads are not able to be used as buttons, but if
you are in Control Edit mode you can turn the encoder clockwise for the "Note"
setting until you reach "OFF".

### Fixed Velocity

From the Global menu you can configure the Velocity Curve to be "Fixed". To
control the velocity level that is specified with note messages in this mode for
the keyboard or the pads, you can configure an encoders to control the velocity
value.

### Rotary Encoders

In Internal mode your rotary encoders are configured to act similar to
Potentiometers, sending a value of 0 - 127.

In some situation you might actually want to use the ability for your encoders
to turn in one direction or another infinitely.

You can configure encoders to use "Message Type: MIDI CC(Rel)". This will cause
the encoder to send values indicating the direction and speed that you are
turning the encoder.

It's possible to configure this in Cubase using the following configuration:

* Resolution: Standard
* Value Mode: Relative Twos Complement
* Value Min: 1
* Value Max: 127

The Mapping Assistant is not able to map two separate actions, such as "Nudge -1
Bar" and "Nudge +1 Bar" to the same encoder control. This requires more advanced
scripting. If you right-click on the MIDI Remote toolbar, you can enable the
'Scripting Tools' section that gives you options to access controls related
to custom scripting, including reading the [MIDI Remote Programmers Guide][].

![midi-remote-scripting-tools.png]

[midi-remote-scripting-tools.png]: {{site.assets.url_prefix}}/images/posts/2024-05-02-panorama-p6-cubase/midi-remote-scripting-tools.png "Cubase MIDI Remote Scripting Tools"

[MIDI Remote Programmers Guide]: https://steinbergmedia.github.io/midiremote_api_doc/

## Conclusion

The Panorama offers a very useful set of integration features with
Cubase, and has many options for configuring and using it as a standard MIDI
controller.

The [MIDI Remote][] feature in Cubase was designed for MIDI compliant USB
controller devices that do not offer DAW integration features.

The Panorama is able to act as a standard MIDI compliant USB controller, with
a wide range of configuration options for the knobs, faders, and buttons, when
used in its "Internal" mode. All MIDI messages sent to your DAW in "Internal"
mode for the controls (knobs, faders, buttons) are transmitted from the
"Internal" MIDI interface, and all DAW integration communication occurs via the
"ReWire Host" MIDI interface.

This means that you can configure a MIDI Remote "script" for the Panorama in
Cubase that maps the MIDI CC messages to all the features supported in the
Cubase Mapping Assistant, as long as you configure it with the "Internal" MIDI
interface only. Where the Mapping Assistant falls short, you can even venture
into learning some JavaScript and consulting the
[MIDI Remote Programmers Guide][] to customize the scripting of those controls
even further.

There is no problem switching between the DAW integration modes (Mixer,
Instrument, Transport) and Internal mode while you are using Cubase. This means
that you can fully rest upon the DAW integration features offered by the
Panorama, which I outline above, and also use the Internal mode with your own
custom mapping configuration that leverages all of the assignable controls
that the Panorama offers.

Even in the DAW integration modes, you can use the functions you've configured
with the F-Keys through the MIDI Remote Mapping Assistant. This means that most
issues that may arise due to shortcomings of the DAW integration can be
overcome with your own custom configuration.

The [Mapping Pages][] feature allows you to configure as many custom "pages"
as you wish that re-map all of the assignable controls provided by the Panorama
in "Internal" mode to the controllable features you desire within Cubase.

The Instrument mode does fall short with unmapped VST instruments and
effects that have more than 60 controls, but this limitation can be
overcome by using
[Instrument Parameters and Instrument Preset Banks][Map Instrument Parameters].
It possible to use all of the assignable controls your Panorama offers in
Internal mode, from a specific Mapping Page, to map them all in the Remote
Control Editor for your VST plug-ins, thus controlling each and every possible
parameter that your VST instruments allow Cubase to control.

Even if the Panorama didn't offer DAW integration for Cubase, it could be used
with Internal mode and still have as much power to facilitate your workflow
in Cubase as if didn't, with each Mapping Page you configure acting like the
DAW integration modes in Cubase.

[Map Instrument Parameters]: /music-production/2024/04/17/demystifying-midi-in-cubase.html#h-map-instrument-parameters
[MIDI Remote]: /music-production/2024/04/17/demystifying-midi-in-cubase.html#h-cubase-midi-remote
[Mapping Pages]: https://steinberg.help/cubase_artist/v13/en/cubase_nuendo/topics/midi_remote/midi_remote_mapping_pages_c.html
