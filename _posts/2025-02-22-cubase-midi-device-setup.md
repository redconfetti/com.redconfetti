---
layout: post
published: true
title: Cubase MIDI Devices Explained
date: 2025-02-22 11:14:00 -0500
comments: false
categories:
  - music-production
tags:
  - cubase
  - midi
image: 
  path: https://s3-us-west-1.amazonaws.com/assets.redconfetti.com/images/posts/2025-02-22-cubase-midi-devices/cubase-moog-voyager-panel.png
  width: 808
  height: 467
  alt: Moog Voyager MIDI Device Panel in Cubase
---

## Introduction

This is meant to be a supplemental guide to the [MIDI Devices Manual][] provided
by Steinberg for [Cubase][] Pro v14.

![Cubase]({{site.assets.url_prefix}}/images/shared/cubase-logo.png "Cubase")

[MIDI Devices Manual]: https://www.steinberg.help/v/u/midi_devices_en.pdf
[Cubase]: https://en.wikipedia.org/wiki/Steinberg_Cubase

### Banks and Programs

Many people use VST plugins in Cubase, preferring to work with instruments and
effects "in the box". Some of us may own various pieces of hardware that do not
exist as VST plugins, and thus we must mount them on a keyboard stand or rack,
and integrate them with our DAW via audio and MIDI interfaces.

Cubase has MIDI tracks that we can use to record MIDI messages from our external
instruments, and then of course transmit those same messages back to them.
Included as part of the Routing controls for a MIDI track is the ability to
select the MIDI Device and Channel to receive from and send to. Additionally
we're able to specify a Bank and Program number for the MIDI track.

![Cubase MIDI bank and program selector]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-midi-track-bank-program-selector.png "Cubase MIDI bank and program selector")

Often working with Bank and Program numbers is not enough for a user. If you're
working with a synthesizer that has factory presets or patches that cannot be
changed or overwritten, you'd rather work a list of names for your patches.

The "Patch Bank" configuration provided by the MIDI Device Manager makes it
possible to configure your devices banks and programs, which then show up in a
drop-down menu from the MIDI track inspector.

![Cubase set MIDI device preset]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-midi-device-select-program-preset-patch.png "Cubase set MIDI device preset")

### Device Panels

Device Panels can also be configured with various sliders, knobs, and buttons
that send MIDI messages to your device when they are manipulated. This is very
useful when your devices are mounted on a rack at more than an arms distance
from your desk, and in some cases it's more efficient than menu diving on the
device even if it's sitting on your desktop in front of you.

Here is a screenshot of a panel I setup for an AKAI AX-60 (with
[Tauntek modification][] for MIDI CC support).

![Cubase AKAI AX-60 Panel]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-akai-ax60-panel.png "Cubase Akai AX-60 Panel")

[Tauntek modification]: http://www.tauntek.com/AX60.htm

You can see more elaborate examples of Device Panels in
[Cykong MIDI Device Panels][].

[Cykong MIDI Device Panels]: https://cykong.com/CubaseSX/SXpanels.htm

## Disclaimer

The MIDI Device Manager was introduced with the release of [Cubase SX3][]
in 2004. Unfortunately the functionality of the editor used to create device
configurations hasn't been updated since 2004, and was not developed to be
flexible, convienent, nor intuitive. You have to know how to use the editor
and make the right choices to successfully create a new configuration. If
you make any mistakes, or run into conflicts, you may have to start all over
with a new configuration, thus losing all the data you've previously
entered.

[Cubase SX3]: https://www.soundonsound.com/techniques/creating-cubase-device-panels

### Exporting a Single Device

Unfortunately you cannot simply select a MIDI Device in the MIDI Device Manager
window, click on the "Export Setup" button, and save a single device
configuration to a file. When you perform an export, it is exporting all the
devices you have configured or imported.

If you want to share only a single setup with someone, you'll need to export
all of your configurations first... then remove all MIDI Devices except for the
one you are creating, then click on "Export Setup" again to save only the single
MIDI Device configuration to a file.

#### Importing a Single Device

The good news is that when you click on the "Import Setup" button, and choose a
backup file that contains configurations for several devices, it will allow you
to choose which MIDI Devices to import.

![Cubase Import Single from Multi Export]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-import-single-from-multi-export.png "Cubase Import Single from Multi Export")

### Export Your Preset Often

In many situations you are not able to reconfigure or undo a previous action
you've taken, thus making your configuration invalid and requiring that you
start over.

I highly recommend that you work with only a single MIDI Device configuration at
a time, and that you export that configuration to new files named using version
numbers or dates/times, as you build it out. This will make it possible for you
to remove all devices, and re-import a previous configuration that was saved
before a mistake was made.

There are certain things you cannot undo with the MIDI Device Manager.

* You cannot undo an action you accidentally perform, such as deleting an
  entire MIDI channel
* You cannot delete a subnode that you've added to the first MIDI Channel (#1)
* If you delete the "Off" preset that exists in a bank, you will not be able
  to rename the other presets you've added.
* If you don't create Panels under the certain nodes, or certain sub-nodes,
  they will not be accessible to open in the Track Inspector, or even in a new
  window.

There are likely other issues I have yet to note here, so heed my warning and
backup your configuration with each step.

## MIDI Device Manager

The [MIDI Device Manager][] allows you to configure your presets, patches, or
programs in different banks that can be easily loaded from your MIDI Track
in Cubase, as well as Panels that can be used to manipulate your MIDI device
settings remotely.

To access this feature, go to Studio > More Options > MIDI Device Manager.

![Cubase MIDI Device Manager]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-midi-devices-menu.png "Cubase MIDI Device Manager")

[MIDI Device Manager]: https://www.steinberg.help/r/cubase-artist/14.0/en/cubase_nuendo/topics/using_midi_devices/midi_devices_using_c.html

### Patch Scripts

Note: I don't recommend this feature, but I wanted to cover it because it wasn't
covered in the documentation so well. Patch Scripts import into a new device
configuration with all MIDI channels configured as individual, which can limit
your panel configurations later.

From the MIDI Device Manager window, you can click on the "Install Device"
button to add a new device.

![Cubase MIDI Device Manager Install Device]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-add-midi-device.png "Cubase MIDI Device Manager Install Device")

In addition to the "Define New" option, you'll see many other common MIDI device
entries that you can use as a template for your device. These pre-configured
devices are made available from the a Patch Scripts collection that comes with
Cubase.

Cubase maintains a set of text files that use a certain syntax for communicating
the patches/presets/programs, and also MIDI drum maps for drum machines.

You can create your own patch scripts using the Script Maker software for
Windows in the Steinberg FTP Site (ftp.steinberg.net),
under `PC_Stuff/Patchname_Script_Maker`. I've confirmed that it runs on
Windows 10. You can also configure these scripts by hand instead using a text
editor.

![Steinberg ScriptMaker]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/steinberg-scriptmaker.png "Steinberg ScriptMaker")

If you look at the manual for Cubase you'll find a
"Where are the Settings Stored?" section that lets you know the path to where
Cubase stores configuration files.

* Cubase 14
  * Windows - `\Users\<user name>\AppData\Roaming\Steinberg\Cubase 14\.`
  * MacOS - `~/Library/Preferences/Cubase 14/`

The Patch scripts are located under `Scripts\Patchnames\inactive` inside of
the configuration folder.

I created a new folder named "moog", and placed the "moog_little_phatty.txt"
file I obtained from the [RivetedStudios] patch scripts collection inside of
that folder. I clicked on the "Install Device" button inside of the MIDI Device
Manager, and there the new patch script showed up.

![Cubase Patch Scripts Moog Little Phatty]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-patch-scripts-moog-little-phatty.png "Cubase Patch Scripts Moog Little Phatty")

[RivetedStudios]: https://rivetedstudios.com/downloadpage/

The patches did show up when I opened the device and went to the Patch Banks
section of the MIDI Device configuration.

![Cubase Patch Scripts Moog Little Phatty Patch Bank]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-patch-scripts-moog-little-phatty-patch-banks.png "Cubase Patch Scripts Moog Little Phatty Patch Banks")

This is a great feature for those wanting to be able to switch between programs
remotely for their external MIDI devices.

### Creating a New MIDI Device

From the MIDI Device Manager window, click on "Install Device" and choose the
"Define New" option, then press the OK button.

Keep in mind that whatever you configure on this step cannot be modified later.
You'll have to start all over again if you choose the wrong configuration for a
newly created device.

![Cubase New MIDI Device]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-new-midi-device-window.png "Cubase New MIDI Device")

In this example, I'm creating a new configuration for a device that supports
synthesizer parts on MIDI Channels 1-5, and multiple drum parts on Channel 10.
The Synth parts use respond to identical MIDI CC messages, interpretted as
indended for each synth part based on the MIDI channel used.

The Drum Parts on Channel 10 use a different configuration of controls, with
NRPN messages used to change the controls.

To accomodate this, we leave MIDI Channels 1-5 set as "Identical", and isolate
Channel 10 as individual.

#### Channel Settings

The "Channel Settings" section allows you to select common parameters that are
supported for most devices. I have selected "Channel Parameters" to enable the
configuration of Channel Parameters, which is needed if you plan on configuring
MIDI CC controls for each channel. I've also selected "CC07: Volume" and
"CC10: Pan" because this device does support those MIDI CC messages per
each channel.

#### Channel Preset Type

For the "Channel Preset Type" section, you can choose between "Preset Reference"
or "Snapshot". You want to chose "Preset Reference" if your device can switch
between programs using MIDI Bank and Program Change messages.

If the device doesn't support Program Changes, and only supports MIDI CC
messages to manipulate individual controls, you may want to choose the Snapshot
option. See the [MIDI Devices Manual][] on Page 21 for more information on that
feature.

### Patch Banks

When I select to open the new device, I'm provided with a Device configuration
window first. You have to use the drop-down menu at the top of the window and
select "Patch Banks" to access the section where we can configure the names
for the patches, and the Bank and Program Numbers that those patches correspond
to.

![Cubase Edit Device - Patch Banks]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-edit-device-patch-banks.png "Cubase Edit Device - Patch Banks")

In this example here you can see I have a patch select named
"005 Squeaky Bells". Included with this Patch configuration are 2 MIDI messages.

* Program Change - Value: 5
* Bank Select 14 bit - Value: 0

MIDI can send up to 128 different values, usually ranging from 0 to 127. A value
of 0 in this case is specifying that the first "Bank" of patches or presets
should be loaded in your MIDI device. The "Program Change" selects which patch
inside of that bank to load.

If your MIDI device supports multiple banks, you'll want to include the Bank
Select message with an appropriate value for each patch you're configuring, to
avoid loading a program from a different bank.

![Cubase Edit Device - Patch Banks]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-edit-device-patch-banks-2.png "Cubase Edit Device - Patch Banks")

After you've configured a couple patches, close the MIDI Device window and go
to your MIDI track. For the Output Routing, instead of choosing the MIDI port
to route the output of your MIDI track to, choose the MIDI Device that you've
configured. In the MIDI Device Manager window you should have already associated
your MIDI Device with a certain MIDI Port, and this MIDI port name should be
shown associated with the Device when you choose it.

![Cubase Moog Voyager MIDI Device]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/moog-voyager-midi-device.png "Cubase Moog Voyager MIDI Device")

After you've chosen the MIDI Device, you'll see that the Bank and Program number
select form fields are gone, replaced by a menu that allows you to select
the programs by name.

![Cubase set MIDI device preset]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-midi-device-select-program-preset-patch.png "Cubase set MIDI device preset")

### Bank Assignments

By default there is a single bank configured automatically when you open the
"Patch Banks" section.

If your device supports a different set of programs on one MIDI Channel than
the ones supported on another set of MIDI channels, then you'll want to create
multiple banks that can be assigned to each MIDI channel appropriately.

After you've created multiple banks under the "Patch Banks" section, close the
window and then re-open it.

![Cubase Create Bank]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-midi-device-manager-create-bank.png "Cubase Create Bank")

![Cubase Multiple Preset Banks]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-midi-device-manager-multiple-banks.png "Cubase Multiple Preset Banks")

A new option from the drop-down menu labelled "Bank Assignment" will become
available, offering the ability to assign different banks to different channels.

![Cubase Patch Bank Assignment]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-patch-bank-assignment.png "Cubase Patch Bank Assignment")

If this doesn't apply to your device, I recommend using only a single bank named
after the device, with multiple folders inside of that Bank created to represent
the groups of presets you want to make available to choose from within Cubase.

If you create multiple banks for a device configured with identical MIDI
channels, you'll find that you cannot assign different banks to those channels,
as they all change when any one assignment is changed.

![Identical Channel Bank Assignment]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-identical-channel-bank-assignment.gif "Cubase Identical Channel Bank Assignment")

## Configuring Panels

This section of this article is still a work in progress as of 02/27/2025.
Check back for updates as I make further progress.

When you add a new panel, you are provided with the option of choosing
"General Size", "Inspector Size" or "Channel Strip Size". I created a
"General Size" panel and resized it to fit in the Inspector or the Channel
Strip, and still it was not available to load in those contexts.
So you can only expect a panel created for a specific context to be loadable
in the context that it was made for.

### Nested Panels

In the MIDI Devices manual for Cubase 14, on page 19, the section titled
"Creating subpanels" advises you to create a device with all 16 MIDI channels
configured as identical. It then has you create a simple volume fader control
in a panel in MIDI Channel 1, named "Channel".

You want to add a panel under the "Channel 1" sub-node so that it is also owned
by all the other channels (2-16), and thus that panel sends MIDI CC messages
from the pannel on the channel that the panel is assigned to. The "channel"
variable for each MIDI channel sub-node changes for each sub-node by convention.

The manual lets you know that you can drag-and-drop panels from sub-nodes into
a parent node, to create an aggregate panel. In this example, the root/parent
node that is above all the MIDI Channel sub-nodes has a panel named
"MotifMixer", which contains a "Channel" panel from each individual MIDI channel.
This is a good example of a multi-channel mixer panel, which would be perfect
for a mixer.

Honestly any multi-timbral device could have a General mixer that is very large
in side that features a controls in a "Channel Strip" configuration.

It would be very useful to have not only Volume and Pan controls for each
instrument in a device, but also common controls like "Filter Cutoff" and
"Filter Resonance".

#### Multi Channel Mixer Bug

I have tried to create multiple "Inspector" panels inside of a MIDI channel
sub-node for different sections such as "Part Common", "Oscillator", "Filter",
and "Modulation"... along with a "General" size panel that combines them all
for the channel. This doesn't work.

You must create a sub-node for each sub-panel (e.g. "Oscillators", "Filter",
etc.) under the MIDI Channel node, then create a panel inside of each of those
nodes.

In fact, this seems like it's desired because when you create the first panel
inside of a sub-node, the panel uses the same name as the node.

I tried to do this like the example in the manual, with panels under the channel
nodes, and then combining them into a multi-channel panel under the root node.

![Cubase MIDI Device Add Panel]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-midi-devices-add-panel.png "Cubase MIDI Device Add Panel")

Every time I tried to drag a panel from a channel into a global mixer panel,
a Parameter Assignment window would popup. It wouldn't matter if I pressed
Cancel or Added a New Parameter and assigned it, then pressed "OK", the program
crashes every time.

![Multi-channel mixer device panel crash]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-multi-channel-mixer-test-crash.gif "Multi-channel mixer device panel crash")

I even started with a new file just to see if I could reproduce this bug.
I create 2 sub-nodes under "Channel 1", named "Common" and "Oscillator".
I build a narrow mixer channel style panel for each using the "Inspector Size",
with a fader at the bottom, and knobs above it. Strange enough, the "Common"
panel can load in the track inspector "Device Panel", but the "Oscillator" panel
doesn't show up to load. Very buggy and inconsistent.

I create a new sub-node called "Filter" and configure and Inspector Size panel
with "Cutoff" and "Resonance" knobs. This is available to show up under the
Inspector. I create a new sub-node called "Osc" and configure a new panel within
it. I try to delete the "Oscillator" sub-node that isn't showing up, but that's
not possible. I remove the panel from within it, but even then I still cannot
delete the parameters inside of it, nor the "Oscillator" sub-node itself.

I check to see if my "Osc" panel is available to load in the inspector, and
luckily it is. But now I have a dormant "Oscillator" sub-node that I cannot get
rid of.

I create a panel in the root node named "Mixer". I try to drag the "Common"
strip from Channel 1 into the root Mixer panel, again I get a mysterious
Parameter Assignment window, then it crashes immediately after I press either
"Cancel" or "OK" in that window.

![Multi-channel mixer device panel - second attempt crash]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-multi-channel-mixer-test-crash-2.gif "Multi-channel mixer device panel - second attempt crash")

I try it again after re-opening the software, removing the older Device
configurations, and re-importing the last backup of the configuration I made.
I try to drag the "Common" panel from Channel 2 instead, again the same behavior.

This causes me to conclude that the master mixer panel, named "MotifMixer" on
Page 19 of the manual, is not possible with Cubase 14 due to a bug.

#### Composite Channel Panel

The question that remains now is, will it be possible to use sub-nodes for
separate modules, such as "Common", "Oscillator", "Filter", "Modulation", each
being an Inspector Size panel that can be loaded in the inspector individually,
yet then combine these into a "General Size" panel under "Channel 1" named
"Channel", that mixes them all into a composite panel for the channel itself.

This too causes the mystery Parameter Assignment window to show, followed
by a crash. I decide to run Cubase 13 for MacOS to see if I get the same
behavior. Turns out I can't open project files with Cubase 13 for some reason,
my CPR files are greyed out and can't be opened. I run Cubase 12, which appears
to be running in Rosetta mode.

I have the same trouble opening a CPR file from the File > Open menu, but
the software shows a list of "Recent" projects from 2023 that I can open.

I create a fresh Device configuration file. I notice that the form behaves
differently in Cubase 12. The "Identical" MIDI Channels are not all selected by
default. The Backgrounds editor doesn't feature the rectangles with the
rounded corners that you can apply names to.

I configure sub-nodes for "Common" and "Oscillator" just like before.

I create a new MIDI channel and assign it to my test device. I notice that just
like the Cubase SX manual showed an "Open Device Panel" button in the track
inspector, Cubase 12 still retained that button.

![Cubase 12 inspector - open device panel]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-12-inspector-open-device-panel.png "Cubase 12 inspector - open device panel")

Under the root node I create a new "General Size" panel named "Mixer".
I drag the "Common" panel from Channel 1 into the "Mixer" panel. I get the
Parameter Assignment window popup for the "Volume" fader, but the software
doesn't crash when I press the "Cancel" button. I inspect the controls from
each sub-panel and they are respectively assigned to Channel 1 and Channel 2.

It looks like I'm going to need to create my panels in Cubase 12, then
import them in Cubase 14.

I notice that I cannot reveal the "Mixer" panel from the Device Panel section of
the Inspector. Only the Inspector size panels in the sub-nodes are available
in Cubase 12. I use the "Open Device Panel" button from the primary section
of the track inspector, and the editor opens, not the "Mixer" panel from
the root node. Only if I go to Studio > More Options > MIDI Device Manager,
then open my "Test" configuration does it open with the Mixer panel available
for use, instead of the editor. I tested the Mixer panel with my MIDI Monitor
application and it does properly send the MIDI CC messages on each individual
channel as expected.

I created a "Channel" panel under the Channel 1 sub-node, and I dragged the
"Common" and "Oscillator" panels into it from the sub-nodes under the channel.
This worked without crashing the application.

![Cubase 12 composite panel]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-12-channel-composite-panel.png "Cubase 12 composite panel")

When I tried to access it from the Device Panel drop-down, it didn't appears
as available.

![Cubase 12 composite panel not available]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-12-channel-panel.png "Cubase 12 composite panel not available")

I created another panel in the root node named "Composite" with the "Common"
and "Oscillator" panels dragged within it. I dragged a label into this panel
with the text "Composite" so that I could distinguish it from the
"Channel 1/Channel" panel that has the same configuration.

Neither was available from the Device Panel section of the inspector, still.
I did use the "Open Device Panels" button from the Inspector and the "Channel"
panel was available from there. Success! I tested the composite panel and
it did send messages to the MIDI Channel assigned to the MIDI track.
I changed the MIDI channel from 1 to 2 and tested again, and it sent to the
messages to Channel 2 instead. Success!

So if I use Cubase 12, I can configure a master "Mixer" panel for a device,
while also still creating a channel specific composite of the sub-panels.

This is great because it means that a configuration can offer small sub-panels
that are compatible with the "Device Panel" section of the track inspector,
while still offering a master panel for each channel that combines them all,
and if we need a big global panel that with multi-channel support we can
also do this.

I exported this test configuration to an XML file, then opened Cubase 14.
Again the Device Panel drop-down menu did not make the "Channel" panel
available, but when I clicked on the Gear icon, which must be the new equivalent
of the "Open Device Panel" button that was in the main track inspector button
set, I was able to expand "Channel 1" and access the "Channel" panel.

![Cubase 14 Device Panel full tree]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-14-device-panel-gear-icon.png "Cubase 14 Device Panel full tree")

![Cubase 14 Device Panel channel]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-14-device-panel-channel-panel.png "Cubase 14 Device Panel channel")

To access the "Mixer" panel in Cubase 14, I still have to open Studio >
More Options > MIDI Device Manager, then click on "Open Device". It opens
in the Mixer panel, rather than the editor by default. It must pick the first
panel that exists in the root node to open in this case.

### Cubase 13 Test

I decided to test the editor in Cubase 13, which is native to Apple Silicon.
I load in the "Test" device configuration that was created in Cubase 12.
This works the same as it did in Cubase 14.

I create a brand new configuration, with the Common and Oscillator sub-nodes
that each contain a panel of the same name. I assign Volume and Pan to the
Common panel, and I add "Type" and "Wave" knobs to the Oscillator.

I create a "Channel" panel under "Channel 1" node, then I try to drag the Common
and Oscillator panels into it. The program crashes.

So my conclusion is that Cubase 13/14 crash when trying to create composite
panels, however Cubase 12 does not.

### Panel Disappearing from Inspector

I had a panel disappear from the list that you can load under the Device Panel
section in the Track Inspector. It turns out that if you resize an
"Inspector Size" panel to be too long vertically, that can invalidate it from
showing up.

### Unable to Remove a Sub-Node

If you're working with multiple "identical" MIDI channel nodes, and you create
a sub-node under one, it will show up under them all. If you don't want that
sub-node any longer, you'll have to remove it from the other nodes that it
copied to before you can remove the originating sub-node.

You have to do this from the 'Device' mode, not the 'Edit Panel' mode.

### Multiple Command Messages

I was having trouble configuring NRPN messages, or messages that include an MSB
and LSB value. It turns out that you just have to collapse the "Control Change"
folder inside of the drop-down menu to reveal the "Multiple Command Messages"
options.

![Cubase MIDI Device Panel Multiple Command Messages]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-midi-device-panel-multiple-command-message.png "Cubase MIDI Device Panel Multiple Command Messages")

After choosing the "Control Change 14 Bit" option, I was able to configure the
MSB and LSB values that should be used.

![Cubase Control Parameter Assignment MSB and LSB]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-control-parameter-assignment-msb-lsb.png "Cubase Control Parameter Assignment MSB and LSB")

I also needed to configure the "Max"
value in the range to 16383 to ensure the proper MSB+LSB values.

Much thanks to this Steinberg forum thread:

[Building a Device Panel but MSB, LSB are not working as expected SOLVED][]

[Building a Device Panel but MSB, LSB are not working as expected SOLVED]: https://forums.steinberg.net/t/building-a-device-panel-but-msb-lsb-are-not-working-as-expected-solved/842874

![Cubase Moog Voyager MIDI Device Panel]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-moog-voyager-panel.png "Cubase Moog Voyager MIDI Device Panel")

## Maximum Sizes

You can make panels larger than the default size they show up as. If you exceed
these sizes, the panel will not appear in the menu for the context you're trying
to load it for.

* Strip Panels
  * 320 Pixel Height
  * 86 Pixel Width
* Inspector Panels
  * 370 Pixel Height
  * 155 Pixel Width

## Other Resources

It was helpful to get some tips from [Cykong Panel Tips][].

[Cykong Panel Tips]: https://cykong.com/CubaseSX/SXpanels-Tips.htm

Here are some MIDI Device Configurations I've provided for you to download.

I created these without proper support for identical MIDI channels and Panels,
so I'll be updating these at some point in the future.

* [Moog Sub-37][]
* [Roland MC-303][]
* [AKAI AX-60][]

[Moog Sub-37]: {{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/moog-sub-37.xml
[Roland MC-303]: {{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/roland-mc-303.xml
[AKAI AX-60]: {{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/akai-ax-60.xml
