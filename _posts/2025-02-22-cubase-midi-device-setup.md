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
