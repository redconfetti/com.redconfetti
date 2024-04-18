---
layout: post
published: true
title: Demystifying MIDI in Cubase
date: 2024-04-17 12:35:00 -0500
comments: true
categories:
  - music production
tags:
  - Cubase
  - MIDI
  - SysEx
image: posts/2024-04-18/cubase-midi-remote-placement.png
---

*April 18, 2024 by Jason Miller*

This article is for Cubase users that own a MIDI controller, and that are
struggling to fully control their virtual or external instruments using that
controller to optimize their music creation workflow.

If you feel like you don't understand portions of this article, make sure to
read my other article on [Understanding MIDI][].

[Understanding MIDI]: /music%20production/2024/04/17/understanding-midi.html

## MIDI Controllers

You can purchase a simple MIDI controller, like the [Alesis V49][], and plug it
directly into the USB port of your computer, and you'll be ready to go with
Cubase. This is because most MIDI controllers you purchase are "class compliant
MIDI devices" that are plug-and-play and ready to go.

[Alesis V49]: https://www.alesis.com/products/view/v49

![Alesis V49 MIDI Controller]({{site.assets.url_prefix}}/images/posts/2024-04-18/alesis-v49.png "Alesis V49 MIDI Controller")

The Alesis V49 allows you to assign MIDI CC numbers to the following using the
V49 Editor application on your computer:

* 4 toggle buttons / switches - Support CC Toggle, CC Momentary, and Program
  Change messages
* 4 knobs - Support CC or Aftertouch messages
* 8 drum pads - Support Note, CC Toggle, CC Momentary, and Program Change
  messages
* The Modulation wheel - Minimum and maximum values are configurable
* Sustain pedal - Sends CC Momentary values when pressed or released

I'm using the Alesis V49 here as a common low-cost example of a simple
controller that includes MIDI assignable knobs and buttons.

![Alesis V49 Editor application]({{site.assets.url_prefix}}/images/posts/2024-04-18/alesis-v49-editor.png "Alesis V49 Editor application")

Usually a change to the configuration is needed with a MIDI controller to match
the MIDI Control Change numbers (CC#) used by a hardware synthesizer that you
are trying to control remotely. A MIDI controller is usually configured by
default to use non-reserved control change messages, so reconfiguring it should
be necessary. See [MIDI CC List][] to determine if this is the case for your
controller.

[MIDI CC List]: https://anotherproducer.com/online-tools-for-musicians/midi-cc-list/

The ultimate goal here it so map changes to those knobs and switches to certain
controls within Cubase and other VST instruments and effects.

It's a good idea to think about the actions you perform most in Cubase, and
whether or not its worth assigning those same actions to the controls on your
keyboard. It might be more valuable to you to use the drum pads for controls,
rather than for triggering drum sounds.

Some controllers may have a limited set of controls, but include a feature that
allows you to switch between "presets" that change which MIDI CC the controls
are using. Make sure to consult your MIDI controllers manual to know what
features it offers, it may open up even more possibilities for your workflow.

## Cubase MIDI Remote

Recent versions of Cubase have added advanced capabilities to configure a
graphical layout of your own MIDI controller, and then map those controls to the
various functions. This feature is known as [MIDI Remote][].

[MIDI Remote]: https://steinberg.help/cubase_pro/v13/en/cubase_nuendo/topics/midi_remote/midi_remote_c.html

Unless you have a common Akai, Novation Launchkey, or Arturia Keylab controller,
you'll need to confiture your own "script" for MIDI Remote. This is actually
very easy once you know how it's meant to be used.

First click on the [Add MIDI Controller Surface][] button to start mapping our
your own device. You'll need to provide the vendor and model names for your
device, and choose the MIDI input and outputs to use to communicate with your
device.

[Add MIDI Controller Surface]: https://steinberg.help/cubase_pro/v13/en/cubase_nuendo/topics/midi_remote/midi_remote_midi_controller_surfaces_adding_t.html

You can [watch this video][] I created to see the process in action, or continue
to read below for similar instructions.

[watch this video]: https://www.youtube.com/watch?v=pf4C1bQiFwc

### Placement Mode

Click on "Create MIDI Controller Surface" and you'll then be taken into the
"Placement mode". You might think this is where you'll start to click on control
types, and place them in the graphical area. This is possible, if you want to
manually map the CC # your controls manually, but I recommend that you instead
allow the software to auto-detect the CC # of each of your controls.

Start by choosing the type of control you want to add from the menu on the left
(Knob, Fader, Button, Trigger Pad). Next click inside of the graphical area to
chose where you want the control placed, which will result in a red box
selecting an area. Feel free to resize or move the box to match the size of the
control on your device.

Once you're done, go ahead and manipulate the actual control on your MIDI
Controller so that it sends Cubase a MIDI CC message. Cubase will detect this,
and will map that MIDI CC # to the MIDI Remote control. You'll notice that a new
control will show up that is not surrounded by a red box, and now the red box
has moved adjacent to the control you just mapped. Repeat this process for each
of your controls until you've added all of your MIDI assignable controls.

Even though you can place your controls graphically to match your device, I'm
placing the pads to the right to make the display of the controls bigger on the
screen.

![Cubase MIDI Remote Placement]({{site.assets.url_prefix}}/images/posts/2024-04-18/cubase-midi-remote-placement.png "Cubase MIDI Remote Placement")

Once you're finished creating the graphical representation of your MIDI
controller, with MIDI CC numbers mapped to your controls, click on "Open" under
Mapping Assistant, or the "Go to Mapping Assistant" button on the right.

### Mapping Assistant

The [Mapping Assistant][] is where you connect the controls on your MIDI
Controller to supported actions within Cubase. If you don't see the Functions
Browser on the left side, click on the Show/Hide Functions Browser button in the
top-right corner of the window.

[Mapping Assistant]: https://steinberg.help/cubase_pro/v13/en/cubase_nuendo/topics/midi_remote/mapping_midi_device_parameters_to_parameters_t.html

The Functions Browser reveals the hundreds of controls that you can manipulate
in Cubase, to make your MIDI Controller act as a control surface.

Here's a list of what I think are the most useful controls you can use in Cubase
with a limited controller:

* Focus Quick Controls (Explained below)
  * QC1
  * QC2
  * QC3
  * QC4
* Selected Track
  * Mute
  * Solo
* Transport
  * Activate Cycle (Toggle)
  * Activate Metronome Click (Toggle)
  * Forward
  * Record
  * Rewind
  * Start
  * Stop
* Key Commands
  * Devices
    * Mixer (Toggle Display)
  * File
    * Save
    * Save New Version
  * Edit
    * Undo
  * Media
    * Open Media Bay
    * Search Media Bay
    * Loop Browser
    * Sound Browser
  * Preset
    * Next
    * Previous
    * Open/Close Browser
  * Transport
    * Go to Left Locator
    * Go to Right Locator
    * Nudge -1 bar
    * Nudge +1 bar
    * Return to Start Position
    * Set Left Locator to Project Cursor Position
    * Set Right Locator to Project Cursor Position
  * Zoom
    * Zoom 4 Tracks
    * Zoom 8 Tracks
    * Zoom Full
    * Zoom In
    * Zoom In Vertically
    * Zoom Out
    * Zoom Out Vertically

For this example, I'm going to map the controls as follows:

* Knobs 1-4: Focus Quick Controls > QC1 - QC4
* Button 1: Preset > Previous
* Button 2: Preset > Next
* Button 3: Transport > Activate Cycle
* Button 4: Key Commands > Devices > Mixer
* Pad 1: Key Commands > Edit > Undo
* Pad 2: Transport > Stop
* Pad 3: Transport > Start
* Pad 4: Transport > Record
* Pad 5: Key Commands > Transport > Nudge -1 bar
* Pad 6: Key Commands > Transport > Nudge +1 bar
* Pad 7: Key Commands > Transport > Set Left Locator to Project Cursor Position
* Pad 8: Key Commands > Transport > Set Right Locator to Project Cursor Position

![Image]({{site.assets.url_prefix}}/images/posts/2024-04-18/cubase-midi-remote-mapping-assistant.png "Image")

Here is why:

* Knobs
  * I cover Quick Controls in the next section
* Pads
  * 3 buttons are the basic transport controls (Stop, Play, Record), and one is
    to undo the last recording. I record a loop, stop, and undo, quite often.
  * Instead of using "Forward" and "Rewind", I'm using "Nudge -1 Bar" and "Nudge
    +1 Bar" to move the cursor to a fixed position forward or back
  * After moving the cursor to a specific bar, I'm able to set the Left and
    Right Locators for the Cycle.
* Buttons
  * Navigating through instrument presets is really important to my workflow
  * I decided to group the Undo button with the other 3 transport controls, and
    place the "Activate Cycle" button here, as it's used less often to toggle
    the cycle mode.
  * Devoting a button to toggle the Mixer console window is certainly a must for
    those with a single monitor.

<br />
<video width="640" controls>
  <source src="{{site.assets.url_prefix}}/images/posts/2024-04-18/cubase-midi-remote-test.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Focus Quick Controls

I recommend that you reserve your knobs that are available to the [Focus Quick
Controls] (QC 1 - QC 8).

[Focus Quick Controls]: https://steinberg.help/cubase_pro/v13/en/cubase_nuendo/topics/midi_remote/midi_remote_focused_quick_controls_c.html

The Quick Controls can manipulate controls that are [associated with a track][],
or ones that are associated with a [VST instrument][]. Cubase determines which
context your controls apply to based on which window is currently selected or
"focused" on. When you are in the project window with the track selected, those
controls apply to that track. When you've opened a VST instrument, those
controls will apply to that instrument instead.

[associated with a track]: https://steinberg.help/cubase_pro/v13/en/cubase_nuendo/topics/track_quick_controls/track_quick_controls_c.html?hl=track%2Cquick%2Ccontrols
[VST instrument]: https://steinberg.help/cubase_pro/v13/en/cubase_nuendo/topics/vst_instruments/vst_instrument_control_panel_r.html

### Controlling Track Parameters

There are many sections that can show up in the Inspector when a track is
selected. One of these is known as "QC" (short for Quick Control). If you don't
see it, right-click inside of the Inspect and select "Set up Sections..." to
access a window that will let you add the section.

![Track Section Setup]({{site.assets.url_prefix}}/images/posts/2024-04-18/track-section-setup.png "Track Section Setup")

From the QC section of the track inspector, you can use the Learn button (L) to
assign the Quick Controls to parameters related to that track, including effects
and VST plugins.

<video width="640" controls>
  <source src="{{site.assets.url_prefix}}/images/posts/2024-04-18/cubase-track-qc.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

As you can see, the MIDI Remote window replaces the "QC" labels for the Quick
Controls with the names that currently apply to those Quick Controls. When I
switch from the Ping Pong Delay plugin, back to the Instrument Track, the
controls are re-assigned.

### Controlling Instrument Parameters

Inside of a VST instrument, you can click on the 'QC' button to reveal the Quick
Controls. By default, the VST instrument suggests a common map. You can click on
the Learn (L) button, click on a Quick Control, and then adjust a parameter in
to map it to that Quick Control.

<video width="640" controls>
  <source src="{{site.assets.url_prefix}}/images/posts/2024-04-18/cubase-instrument-quick-control-mapping.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

You can also clear out the Quick Control mapping, and restore it to the mapping
suggested by the VST instrument.

<video width="640" controls>
  <source src="{{site.assets.url_prefix}}/images/posts/2024-04-18/cubase-instrument-clear-restore-qc.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

In this example I've setup, you can notice that the Quick Controls assigned in
the MIDI Remote window swap as I switch between the Project window (Track) and
the VST Instrument window. If you want to avoid this, click on the Lock icon
next to the 'QC' button in the VST instrument window, and the Quick Controls
will be locked to that context.

<video width="640" controls>
  <source src="{{site.assets.url_prefix}}/images/posts/2024-04-18/cubase-quick-control-focus-lock.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

#### Beyond Quick Controls

If you have a MIDI Controller with far more than 8 knobs, you'll want to make
assignments that are not associated with the Quick Controls.

For many VST instruments, mapping the Control Change Numbers used by your MIDI
controller to the controls in the instrument is as simple as right-clicking on a
control inside of the instrument, selecting a "Learn" option, and then
manipulating the control on your MIDI controller. The software should
immediately detect the MIDI CC messages being sent and automatically map that
control to the VST instrument.

![Korg Polysix MIDI Learn]({{site.assets.url_prefix}}/images/posts/2024-04-18/korg-polysix-midi-learn.gif "Korg Polysix MIDI Learn")

Make sure you consult your VST instruments manual on how it handles this
functionality, and if you need to save the mapping that is "learned" once you're
done so that your changes aren't lost between sessions.

## Controlling Presets

Above I mapped 2 buttons to the "Presets > Previous" and "Presets > Next"
actions. When I'm trying to find a preset in an instrument that best matches a
song I'm working on, being able to flip through the presets by the push of a
button is very helpful.

### Cubase Presets

Cubase Presets are managed by Cubase, and are navigable using the "Next" and
"Previous" buttons mapped in the MIDI Remote Mapping Assistant. Cubase Presets
can also be tagged and categorized in the [Media Bay][], and used to quickly add
a new instrument track to a project.

[Media Bay]: https://steinberg.help/cubase_pro/v13/en/cubase_nuendo/topics/mediabay/mediabay_r.html?hl=media

![Cubase Preset Save]({{site.assets.url_prefix}}/images/posts/2024-04-18/cubase-preset-save.png "Cubase Preset Save")

The [Virtual Studio Technology (VST)][] standard that plugins must mostly abide
by specifies that the VST host (i.e. Cubase) must be able to request [the
current VST plugin state][] from the plugin for all of its parameters/settings,
so that it may snapshot these as a Cubase Preset.

[Virtual Studio Technology (VST)]: https://en.wikipedia.org/wiki/Virtual_Studio_Technology
[the current VST plugin state]: https://steinbergmedia.github.io/vst3_dev_portal/pages/Technical+Documentation/Presets+Program+Lists/Index.html#simple-plug-ins

In my experience, VST plugins all follow this convention very well.

### Custom Internal Presets

Although it is not required, many VST instrument developers create their own
internal system to manage presets. Here is an example of the internal preset
menu from the [Arturia Mini V][] plugin.

[Arturia Mini V]: https://www.arturia.com/products/software-instruments/mini-v/overview

![Arturia Mini-V Presets]({{site.assets.url_prefix}}/images/posts/2024-04-18/arturia-mini-v-presets.png "Arturia Mini-V Presets")

#### VST Program Lists

The VST3 specification states under [Program Lists][]:

[Program Lists]: https://steinbergmedia.github.io/vst3_dev_portal/pages/Technical+Documentation/Presets+Program+Lists/Index.html#program-lists

> The plug-in can provide GUI for the selection of programs, but it must enable
> the host to display the list and the selected program as well. The index of
> the selected program in the list must be exported as program selection
> parameter.
>
> The plug-in can allow the host to read and write the program data of a list
> item. To support this, the plug-in must implement the
> Steinberg::Vst::IProgramListData interface as an extension of the component
> part.
>
> All programs are always transmitted as a flat list to the host. But the
> plug-in can assign a number of attributes to each program of the list. This
> enables the host to organize and filter them in a very flexible way.

Steinberg plugins like [Retrologue][] and [Halion Sonic][] support this
functionality. The moment you open the Cubase preset drop-down menu, the list
populates with the names of the presets. If you open the MediaBay and search for
the name of a preset you manually saved, you'll see that it shows up with a File
Path that points to your hard drive.

[Retrologue]: https://www.steinberg.net/vst-instruments/retrologue/
[Halion Sonic]: https://www.steinberg.net/vst-instruments/halion/sonic/

When I search for a preset in the Media Bay that was automatically populated for
Halion Sonic, such as the General MIDI 001 Acoustic Grand Piano, the path is for
the preset noted is different, prefixed with `vstsound://` as if it's a URL.

When VST plugins do communicate their Program List to Cubase, the presets do not
necessarily become available in the Media Bay.

It also appears that when your focus is either the Track in the Project window,
or the VST instrument window, the presets available to can be navigate through
in Cubase change. If you focus on the Track, you can navigate through the
Program List presets provided to Cubase by the VST instrument. If you focus on
the VST instrument window, then only the Cubase presets you have saved are
navigable.

Unfortunately, VST instruments do not consistently use Program Lists. For the
ones that do not, the Next and Previous Preset button actions do nothing. There
are however work-arounds that may be possible if you refer to your plugins
manual. Here are some examples.

#### MIDI Learn

Some plugins provide options to configure specific MIDI CC to change between
their presets. Arturia plugins support an easy MIDI Learn option to click on
controls and map them to your controls.

![Arturia MIDI Learn to Change Presets]({{site.assets.url_prefix}}/images/posts/2024-04-18/arturia-midi-learn-presets.png "Arturia MIDI Learn to Change Presets")

#### Program Change Collection

Other plugins require that you configure a set of presets as a "Program Change"
collection.

##### Korg MS-20

In the Preset browser for [Korg MS-20 v2][], you have to Right-click, or hold
CTRL + left-click, on a preset to access a menu that will let you add that
preset to the "Program Change" set.

[Korg MS-20 v2]: https://www.korg.com/us/products/software/kc_ms_20/

![Korg MS-20 Preset Browser]({{site.assets.url_prefix}}/images/posts/2024-04-18/korg-ms20-preset-browser.png "Korg MS-20 Preset Browser")

Once your Program Change set is assembled, the plugin makes these presets
available to Cubase as a Program List, thus enabling you to use the
Previous/Next Preset buttons to navigate through the presets when the Project
Track is focused on (instead of the VST Instrument window).

This almost seems to negate the point of using a Program List however, because
you have to manually assemble the list of presets you can scroll through. You
would be better off simply loading every internal preset, and saving it as a
Cubase preset. At least you'd then be able to manage them in the Media Bay.

##### Native Instruments Massive

Another example of this is Native Instruments Massive. You have to go into the
Browser section, and then click on the 'Programs' button to access a Program
List that you can configure by drag-and-drop of sounds into the list. You do
have to press the "On/Off" button to the right of the "Programs" button to
activate this feature.

![Native Instruments Massive Program Change set]({{site.assets.url_prefix}}/images/posts/2024-04-18/native-instruments-massive.png "Native Instruments Massive Program Change set")

You might notice that the moment you turn
this feature on for Massive, the Preset name in the Instrument Track will
actually update with the presets under the "Routing" section of the Inspector.

![Cubase Track Programs]({{site.assets.url_prefix}}/images/posts/2024-04-18/cubase-track-programs.gif "Cubase Track Programs")

Additionally, if you configure your MIDI Controller to send MIDI Program Change
(PC) messages to Massive, it will respect those as well.

Overall my conclusion is that it's nice when you can configure the plugin to use
your MIDI CC to traverse its preset collection, but at the end of the day you're
going to have to save the presets you like the most as Cubase presets so that
you can navigate through them, as well as categorize and tag them in the Media
Bay.

## External / Hardware Instruments

If you own a hardware instrument, you'll need to make sure it's made available
to Cubase to send and receive MIDI from. If it's an older synth that doesn't
support USB, you can buy a MIDI-to-USB adapter device such as the
[M-Audio Midisport Uno][] for under $35.

[M-Audio Midisport Uno]: https://www.amazon.com/M-Audio-UNO/dp/B00007JRBM/ref=sr_1_1?crid=1ULSOQMWHLXVW

### Audio Input

Once you've established a MIDI connection to your device, you'll need to
establish an audio-in port on your audio interface to capture the audio coming
out of your instrument in the [Audio Connections window][].

[Audio Connections window]: https://steinberg.help/cubase_pro/v13/en/cubase_nuendo/topics/vst_connections/vst_connections_window_r.html

If you have an audio interface that has run out of available 1/4" inputs, and
only has available XLR mic inputs, you can order a set of
[patch adapter cables][] to free up additional inputs.

[patch adapter cables]: https://www.amazon.com/WJSTN-Adapter-Quarter-inch-interconnect-Cable%EF%BC%886in%EF%BC%892/dp/B091NNYSFW/ref=sr_1_12

### External Instrument

If you own Cubase Pro, you can use the [External
Instruments](https://steinberg.help/cubase_pro/v13/en/cubase_nuendo/topics/vst_connections/vst_connections_external_instruments_setting_up_t.html)
feature which allows you to use an Instrument track with your external hardware
instrument, similar to how you use software instruments.

Do keep in mind that even if your instrument track has no MIDI events present,
Cubase will force you to wait for the audio to be captured and rendered within a
Mixdown that is being exported, in real-time.

![Cubase External Instrument mixdown]({{site.assets.url_prefix}}/images/posts/2024-04-18/cubase-external-plugin-mixdown.png "Cubase External Instrument mixdown")

If you Disable, [Freeze][], or [Render][] the entire track (not just a single
MIDI event), you will not be forced to wait the duration of the entire song to
mixdown.

[Freeze]: https://steinberg.help/cubase_pro/v13/en/cubase_nuendo/topics/tracks_about/tracks_about_track_controls_r.html?hl=freeze
[Render]: https://steinberg.help/cubase_pro/v13/en/cubase_nuendo/topics/rendering_to_audio/rendering_to_audio_rendering_tracks_t.html?hl=render

### Classic Setup

Another method of working with an external instrument is to simply create an
audio track to capture the audio, as well as a number of MIDI tracks to record
and send MIDI messages to the channels supported by your instrument.

Make sure you activate the 'monitor' button for your audio track so that you can
hear your instrument when playing from the selected MIDI track.

![Standard Audio / MIDI Setup in Cubase]({{site.assets.url_prefix}}/images/posts/2024-04-18/classic-audio-midi-channels-setup.png "Standard Audio / MIDI Setup in Cubase")

#### Bank and Program Select

You might notice that when you create a MIDI track and point it at your MIDI
instruments interface, it allows you to specify a Bank number, and Program
number. When a value is changed for either of these, a
[Bank Select message and Program Change message][] is sent to your device.

[Bank Select message and Program Change message]: https://steinberg.help/cubase_pro/v13/en/cubase_nuendo/topics/using_midi_devices/midi_devices_using_program_change_and_bank_select_about_c.html

![Cubase MIDI Routing with Bank and Program Change]({{site.assets.url_prefix}}/images/posts/2024-04-18/cubase-midi-routing.png "Cubase MIDI Routing with Bank and Program Change")

```text
To Moog Sub 37    Control 1 Bank Select 0
To Moog Sub 37    Program 1 8
```

#### MIDI Device Manager

Changing your instruments presets remotely by the Bank and Program number might
be useful, but it would be nicer if you could see the names of the presets that
correspond to each Bank/Program Number combo. This is made possible by the
[MIDI Device Manager][].

[MIDI Device Manager]: https://steinberg.help/cubase_pro/v13/en/cubase_nuendo/topics/using_midi_devices/midi_devices_using_midi_device_manager_opening_r.html

![Cubase MIDI Device presets]({{site.assets.url_prefix}}/images/posts/2024-04-18/midi-device-presets.png "Cubase MIDI Device presets")

The external synthesizer that I'm wanting to configure with a MIDI Device
profile is the Moog Subsequent 37. As you can see from this graphical
representation of its controls, it has a 'Bank' button that is pressed, followed
by a number button, to select the bank. After this, one presses a number button
to select which preset within that bank to load.

![Sub 37 Bank Presets]({{site.assets.url_prefix}}/images/posts/2024-04-18/sub-37-bank-presets.png "Sub 37 Bank Presets")

This means that it has 16 banks, with 16 presets per each bank, which gives us
256 presets to choose from. The first 9-10 banks are loaded with factory presets
that come with the synth.

In the MIDI Device profile, under the "Patch Banks" section, it's possible to
configure names for every preset, and the MIDI messages that need to be sent to
select those presets.

I originally referenced the configuration for another synth to discover that
Program Change messages were all that was needed, and it worked for this synth,
until I got to presets above 127.

![Sub 37 Bank Patches - Bank 0]({{site.assets.url_prefix}}/images/posts/2024-04-18/sub-37-bank-patch-1.png "Sub 37 Bank Patches - Bank 0")

It turns out that the Moog Sub 37 requires a Bank Select of "0" combined with
Program Change value of 0 - 127 for the first 128 presets, but then needs Bank
Select value "1" combined with Program Change 0 - 127 for presets 129-256.

![Sub 37 Bank Patches - Bank 1]({{site.assets.url_prefix}}/images/posts/2024-04-18/sub-37-bank-patch-2.png "Sub 37 Bank Patches - Bank 1")

It doesn't matter if you send "Bank Select (MSB)" with value of 0 or 1, or "Bank
Select 14 bit" with the same value, it still identifies which bank to use. As
you can tell, the "Bank Select 14 bit" option reports that it has a "Valid
Range" of 0 - 16383, which is of course combining the MSB and LSB messages into
a single message type for simplification. The Moog Sub 37 obviously doesn't need
to specify a bank value above "127", but other synthesizers might.

I had to go back to the first 128 presets and make them all send a Bank Select
value of 0 to ensure that it would properly pick the correct present in Bank 0
instead of Bank 1.

##### Device Panels

Another interesting feature of Cubase is the ability to create [Device Panels][]
for your MIDI devices.

[Device Panels]: https://steinberg.help/cubase_pro/v13/en/cubase_nuendo/topics/using_midi_devices/midi_devices_using_device_panels_about_c.html

![Cubase Device panel setup]({{site.assets.url_prefix}}/images/posts/2024-04-18/device-panel-setup.png "Cubase Device panel setup")

If you to try make your own panel, and you want it to show under the "Device
Panel" section of the Inspector, make sure that you choose to make it "Inspector
Size" in the "Add Panel" menu.

![Device Panel with Inspector size]({{site.assets.url_prefix}}/images/posts/2024-04-18/device-panel-inspector-size.png "Device Panel with Inspector size")

Also make sure that you choose "Any" for the MIDI input for your device, or else
the Device Panel will not make your non-channel specific panel available to
display in the Inspector.

![Device Panel needs Any MIDI input]({{site.assets.url_prefix}}/images/posts/2024-04-18/device-panel-any-input.png "Device Panel needs Any MIDI input")

I'm not sure to what extent, but it appears that this even supports SysEx for
some of the "parameters" you can tie to the device panel. I get the impression
that it a device panel can be used with VST instruments and effects as well.

Review the [MIDI Devices PDF][] for more information.

[MIDI Devices PDF]: https://download.steinberg.net/downloads_software/documentation/MIDI_Devices_english.pdf
