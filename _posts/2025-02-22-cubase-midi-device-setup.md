---
layout: post
published: true
title: Cubase MIDI Devices
date: 2025-02-22 11:14:00 -0500
comments: false
categories:
  - music-production
tags:
  - cubase
  - midi
image: 
  path: https://s3-us-west-1.amazonaws.com/assets.redconfetti.com/images/posts/2024-07-31-hunt-for-best-groovebox/mc-303-top-view.jpg
  width: 615
  height: 392
  alt: Roland MC-303
---

This is meant to be a supplemental guide to the [MIDI Devices Manual][] provided
by Steinberg for Cubase v14.

![Cubase]({{site.assets.url_prefix}}/images/shared/cubase-logo.png "Cubase")

Many people use VST plugins in Cubase, preferring to work with instruments and
effects "in the box". Some of us may own various pieces of hardware that do not
exist as VST plugins, and thus we must mounted them on a keyboard stand or rack,
and integrate them with our DAW via audio and MIDI cables.

Cubase has MIDI tracks that we can use to record MIDI messages from our external
instruments, and then of course transmit those same messages back to them.
Included as part of the Routing controls for a MIDI track is the ability to
select the MIDI Device and Channel to receive from and send to. Additionally
we're able to specify a Bank and Program number for the MIDI track.

![Cubase MIDI bank and program selector]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-midi-track-bank-program-selector.png "Cubase MIDI bank and program selector")

Often working with Bank and Program numbers is not enough for a user. If you're
working with a synthesizer that has factory presets or patches that cannot be
changed, you'd rather work a drop-down menu that displays the actual names of
the patches you want loaded for a specific MIDI track.

This is what the [MIDI Devices][] feature in Cubase is intended for. You can
configure the names for all the "Programs" that your MIDI device provides,
associated with the appropriate Bank and Program Change messages that need to be
sent to your device to cause it to switch to the sound you're wanting.

![Cubase set MIDI device preset]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-midi-device-select-program-preset-patch.png "Cubase set MIDI device preset")

To access this feature, go to Studio > More Options > MIDI Device Manager.

[MIDI Devices]: https://www.steinberg.help/r/cubase-artist/14.0/en/cubase_nuendo/topics/using_midi_devices/midi_devices_using_program_change_and_bank_select_about_c.html

![Cubase MIDI Device Manager]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-midi-devices-menu.png "Cubase MIDI Device Manager")

From this menu you can click on the "Install Device" button to add a new device.
The options presented include a General MIDI (GM) or Yamaha XG device as a
template for your device, or one of many common MIDI instruments by various
manufafturers such as Roland, Alesis, Yamaha, Korg, Clavia, Waldorf, and Access.

![Cubase MIDI Device Manager Install Device]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-add-midi-device.png "Cubase MIDI Device Manager Install Device")

In my own configuration I've defined a new device called "Moog Voyager RME",
which represents the [Moog Voyager Rack Mount Edition][] synthesizer that
I have connected in my home studio.

[Moog Voyager Rack Mount Edition]: https://www.moogmusic.com/products/minimoog-voyager-rme

When I select to open this device, I'm provided with a Device configuration
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

After you've chosen the MIDI Device, you'll see that the Bank and Program number
select form fields are gone, replaced by a menu that allows you to select
the programs by name.

![Cubase Moog Voyager MIDI Device]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/moog-voyager-midi-device.png "Cubase Moog Voyager MIDI Device")

### Exporting Single MIDI Device Configurations

Unfortunately you cannot simply select a MIDI Device in the MIDI Device Manager
window and then click on the "Export Setup" button, as this will export your
entire setup to a file you save.

If you want to share only a single setup with someone, you'll need to backup
all of your settings first... then remove all MIDI Devices except for the one
you want to share with others, then click on "Export Setup" again to save
only the single MIDI Device configuration.

### Importing Single MIDI Device

When you click on the "Import Setup" button, and choose a full backup that
you've saved for all your devices, it will allow you to choose which MIDI Device
to import.

![Cubase Import Single from Multi Export]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-import-single-from-multi-export.png "Cubase Import Single from Multi Export")

### MIDI Device Configurations

Here are some MIDI Device Configurations I've provided for you to download.

* [Moog Sub-37][]
* [Roland MC-303][]
* [AKAI AX-60][]

[Moog Sub-37]: {{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/moog-sub-37.xml
[Roland MC-303]: {{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/roland-mc-303.xml
[AKAI AX-60]: {{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/akai-ax-60.xml

## Panels

In addition to supporting named patches for your device, it's also possible to
configure a "Panel" of various sliders, knobs, and buttons, that send MIDI CC
messages to your device to configure them remotely.

Here is a screenshot of a panel I setup, which is included with the AKAI AX-60
configuration shared above. AKAI AX-60 synthesizers that have had the Tauntek
modification applied to them can be controlled remotely via MIDI CC, and thus
this panel is designed to manipulate an AKAI AX-60 with that modification
applied.

![Cubase AKAI AX-60 Panel]({{site.assets.url_prefix}}/images/posts/2025-02-22-cubase-midi-devices/cubase-akai-ax60-panel.png "Cubase Akai AX-60 Panel")

See the [MIDI Devices Manual][] for more information on configuring panels.

[MIDI Devices Manual]: https://www.steinberg.help/v/u/midi_devices_en.pdf
