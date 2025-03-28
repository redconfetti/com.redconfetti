---
layout: post
published: true
title: Korg Electribe ESX-1 Cubase Device Panel
description: Use the ESX-1 as a sound module with Cubase Pro, then dump
  the MIDI into patterns for live performance
date: 2025-03-07 11:13:00 -0500
comments: true
categories:
  - music-production
tags:
  - Cubase
  - Korg
  - Electribe
  - ESX-1
image: 
  path: https://s3-us-west-1.amazonaws.com/assets.redconfetti.com/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/blog-post-photo-medium.png
  width: 800
  height: 478
  alt: Cubase Device Panels for Korg Electribe ESX-1
---

![Cubase Device Panels for Korg Electribe EMX-1]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/blog-post-photo-medium.png "Cubase Device Panels for Korg Electribe ESX-1")

Note: This device panel will only work with [Cubase Pro][]. I created this
panel to facilitate using the ESX-1 as a sound module with Cubase. I wanted to
explore a workflow where sequencing and arrangement is primarily done in Cubase,
but then later the patterns are dumped into the ESX-1 via MIDI with MIDI clock
sync.

[Cubase Pro]: https://www.steinberg.help/r/cubase-pro/14.0/en/cubase_nuendo/topics/using_midi_devices/midi_devices_using_panels_in_mixconsole_showing_t.html

## Features

* Channel Panel for Keyboard Parts (MIDI Channel 1-2)
  * Individual Inspector Panels for Keyboard Parts
    * Part Common
    * Modulation
    * Filter
* Global Panel (MIDI Channel 1)
  * Swing
  * Roll Type
  * Effects 1-3 (Type, Edit 1, Edit 2, Motion Sequence, FX Chain)
  * Drum Accent Level and Motion Sequence Switch
* Drum Part Mixer and Modulation Matrix (MIDI Channel 10)
* Cubase Drum Map

## Future Updates

* Fix Drum Strip Panel Sizing to enable Channel Strip Panels for drum parts

### ChangeLog

* v1.0 (03/07/2025)
  * Initial release

## Download

* [Download v1.0][]

If you appreciate this, feel free to [Buy me a Coffee][].

<script
  type="text/javascript"
  src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
  data-name="bmc-button" data-slug="redconfetti" data-color="#FF5F5F"
  data-emoji=""
  data-font="Arial"
  data-text="Buy me a coffee, if you want"
  data-outline-color="#000000"
  data-font-color="#ffffff"
  data-coffee-color="#FFDD00">
</script>

[Buy me a Coffee]: https://buymeacoffee.com/redconfetti
[Download v1.0]: https://s3-us-west-1.amazonaws.com/assets.redconfetti.com/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/versions/korg-electribe-esx1-cubase-device-v1.0.zip

## Installation

Go to Studio > More Options > MIDI Device Manager.

![Device Manager]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/install/1-midi-device-manager.png "Cubase MIDI Device Manager")

Click on the "Import Setup" button.

![Import Setup]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/install/2-import-setup.png "Import MIDI Device Setup")

Choose the XML file that was downloaded from this page.

![Choose Device File]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/install/3-choose-file.png "Choose Device File")

The only choice will be the "Korg Electribe ESX-1". Press the OK button.

![Import Device Script]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/install/4-import-script.png "Import Cubase MIDI Device Script")

A window will pop-up allowing you to choose which preset banks to use with the
different MIDI channels for the ESX-1. This is not necessary, as the ESX-1 loads
patterns globally for all parts.

We do need to let Cubase know which MIDI Port to use to communicate with your
Electribe. Click on "Not Connected" to display the MIDI ports that are available
on your machine.

![Open Port list]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/install/5-assign-midi-port.png "Click on Not Connected to view MIDI ports")

Select the appropriate MIDI port that your Electribe ESX-1 is connect to.

![Select MIDI Port]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/install/5-assign-midi-port-2.png "Select the appropriate port")

If you already closed the bank assignment pop-up window, you can also assign
the MIDI port to your device from the MIDI Device Manager window.

![Assign Port Alternative]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/install/5-assign-port-in-device-manager.png "Assign MIDI Port to Device in Device Manager")

## Usage

### Enable Device Panel Section

Right-click over the Inspector for your MIDI track to reveal customization
options, click on "Set up Sections".

![setup sections inspector]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/usage/1-inspector-setup-sections.png "Setup sections in the track inspector")

Near the bottom of the list you'll see a "Device Panel" section. Click on the
checkbox to enable that section.

![enable device panel section]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/usage/2-inspector-enable-device-panel.png "Enable Device Panel section")

If you prefer, feel free to drag the Device Panel section up under the
"Routing" section.

![arrange inspector sections]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/usage/3-inspector-setup-sections-drag-section.png "Cubase re-arrange inspector section order")

### Link MIDI Track to Device

In the Routing section of a MIDI track, click on the Output Routing menu,
shown as "Not Connected" in the image below.

![Inspector Routing 1]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/usage/4-inspector-routing-1.png "Inspector Output Routing")

You will see your the MIDI ports available to your computer in the menu. These
are shown with MIDI port icons on the right. MIDI Devices also show up in this
menu without the MIDI port icon. Click on "Korg Electribe ESX-1" to link
your MIDI track with the Electribe ESX-1.

![Inspector Routing 2]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/usage/4-inspector-routing-2.png "Inspector Routing to Korg Electribe ESX-1")

### Program Selector

Below the Output Routing and MIDI Channel menus in the Routing section, there
is usually a numeric Bank and Program number menu available.

![Inspector Routing Presets 1]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/usage/5-inspector-routing-preset-1.png "Banks and Presets selector")

When your MIDI track is associated with a MIDI Device, the Banks and Presets
configured for that device are loaded in this menu, and will send Bank and
Program change messages to your device for the selected MIDI channel.

The ESX-1 only honors Bank and Program Change messages that are received on the
Global MIDI channel configured under the MIDI menu of the device. By default
this is MIDI Channel 1, so you should make sure you select presets from
a MIDI track configured to use MIDI channel 1.

![Inspector Routing Presets 2]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/usage/5-inspector-routing-preset-2.png "Inspector Routing Presets")

### Inspector Device Panels

For your MIDI track, make sure to select MIDI Channel 1, then expand the Device
Panel section.

![Expand Device Panel]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/usage/6-expand-device-panel.png "Expand Device Panel")

Click on "Select Device Panel" to access a list of the panels that are available
for the MIDI channel your MIDI track is assigned to.

![Open panel selector]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/usage/6-open-panel-selector.png "Open Panel selector")

When your track is assigned to a MIDI Channel associated with the keyboard parts
(Channel 1-2), the individual panels can be loaded and used from the track
inspector. Click on the 'Common' panel to view the Part Common controls for
the keyboard part.

![Open Common panel]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/usage/6-open-common.png "Open the Common panel")

You can also choose to display the Modulation, Oscillator, or Filter panels.

![Inspector Keyboard Panels]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/usage/6-inspector-keyboard-panels.png "MIDI Track inspector synth panels")

### Channel Strip Panels

It's also possible to display smaller device panels in the
[MixConsole window][].

[MixConsole window]: https://www.steinberg.help/r/cubase-pro/14.0/en/cubase_nuendo/topics/mixconsole/mixconsole_device_panels_c.html

You can load the global panels that aren't related to an instrument by choosing
"Any" as the MIDI channel for a MIDI track.

![choose Any channel]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/panels/v1/strip-effects-1-three-midi-tracks-any-channel.png "Choose 'Any' channel in MIDI track")

You'll have to right-click in the top section of the MixConsole and choose
"Set up Sections" to enable the "Device Panel" section.

After you've done this, you can click on the "Select Panel" button that
appears when you mouse over the panel header for a track.

![Select Panel]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/panels/v1/strip-effects-2-select-panel.png "Select Panel")

![Choose Strip Panel]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/panels/v1/strip-effects-3.png "Choose Strip Panel")

Under Channel 1 > Global, you can load the panels that do not apply Globally,
instead to any specific instrument track.

![global panels]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/panels/v1/strip-effects-4.png "Global Strip Panels")

There are also channel strips related to the keyboard parts that you can load
on MIDI tracks for channel 1 and 2.

![Channel Strip Panels]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/usage/channel-strips.png "Channel Strip Panels")

Here we have the channel strips for Part Common, Modulation, Filter, and
Sample.

![Channel Strip Panels]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/panels/v1/channel-strips-2.png "Channel Strip Panels")

### General Panels

#### Drum Panel

Assign a MIDI channel to Channel 10.

![Assign Channel 10]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/usage/8-assign-channel-10.png "Assign MIDI Channel 10 to the MIDI track")

Under the Device Panel section, click on the gear icon to the right of the
panel selector.

![Device Panel Gear icon]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/usage/7-device-panel-gear.png "Click on the Gear icon for the Device Panel")

Expand the "Channel 10" menu in the tree, and click on "Drums".

![Open Drums Panel]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/panels/v1/general-drum-channel-1.png "Open Drums Panel")

The Drums Panel offers a Mixer style panel on the left for general mixing
and shaping the drum parts, and the panel on the right gives you all the options
for applying modulations to the drum parts.

![Drums Panel]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/panels/v1/general-drum-channel-2.png "Drums Panel")

#### Keyboard Part Panels

From a MIDI Track assigned to a Keyboard part, click on the gear icon in the
Device Panel section to access the "Channel" panel that combines all the
sections into a single window.

![Other Panels]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/usage/9-open-other-panels.png "Other Other Panels")

You can do this from each MIDI track that is assigned to MIDI channels 1-2 to
open both keyboard part panels at once.

![Channel Panels]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/panels/v1/channel-panels.png "Channel Panels")

#### Global Panels

Most global settings are controlled by the ESX-1 on MIDI Channel 1. Click
on the gear icon under the Device Panel section, then expand
"Korg Electribe ESX-1", then click on "Global" to access the panel that provides
you with controls for the two keyboard parts, as well as Global controls
such as the Effects section, Accent Parts, Swing, and Roll.

![Choose Global Panel]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/usage/9-open-global-panel-without-drums.png "Global Panel without drum controls")

![Global Panel]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/panels/v1/global-panel-no-drums.png "Global Panel without drums")

This panel, and the drum panel, are very powerful in helping you to shape the
the sound of whatever MIDI tracks you're throwing at the Electribe.

## Drum Map

I've included a Cubase Drum Map for the Electribe ESX-1.

Under the Routing section, click on "No Drum Map" to access the drum map menu.

![Open Drum Maps]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/usage/10-open-drum-maps.png "Cubase Open Drum Maps")

Click on "Drum Map Setup" to access the Drum Maps window.

![Setup Drum Map]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/usage/10-drum-maps-setup.png "Drum Map Setup")

Click on the "Load Drum Map" button.

![Load Drum Map]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/usage/10-load-drum-map.png "Load Drum Map")

Choose the "Korg-Electribe-ESX1-Map.drm" file that was included in the ZIP file,
click on the "Open" button.

![Choose Drum Map File]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/usage/10-choose-drum-map-file.png "Choose Drum Map file")

From the Routing section for your Channel 10 MIDI track, you should see the
option to choose the map.

![Drum Map menu]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/usage/10-assign-drum-map.png "Assign Drum Map drop down menu")

After selecting the drum map, you'll the drum sequencing editor for the MIDI
parts, with the proper drum notes ordered at the top of the editor.

![Sequence]({{site.assets.url_prefix}}/images/posts/2025-03-07-korg-electribe-esx-1-cubase-panel/usage/10-sequence-with-drum-map.png "Sequence with Drum Map")
