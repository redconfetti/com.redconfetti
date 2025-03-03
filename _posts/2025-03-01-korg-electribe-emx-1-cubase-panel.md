---
layout: post
published: true
title: Korg Electribe EMX-1 Cubase Device Panel
date: 2025-03-02 12:10:00 -0500
comments: true
categories:
  - music-production
tags:
  - Cubase
  - Korg
  - Electribe
  - EMX-1
image: 
  path: https://s3-us-west-1.amazonaws.com/assets.redconfetti.com/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/blog-post-photo-medium.png
  width: 800
  height: 478
  alt: Cubase Device Panels for Korg Electribe EMX-1
---

![Cubase Device Panels for Korg Electribe EMX-1]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/blog-post-photo-medium.png "Cubase Device Panels for Korg Electribe EMX-1")

Note: Device Panels are [only supported by Cubase Pro][]

[only supported by Cubase Pro]: https://www.steinberg.help/r/cubase-pro/14.0/en/cubase_nuendo/topics/using_midi_devices/midi_devices_using_panels_in_mixconsole_showing_t.html

## Features

* Channel Panel for Synth Parts (MIDI Channel 1-5)
  * Individual Inspector Panels for Synth Parts
    * Part Common
    * Modulation
    * Oscillator
    * Filter
* Global Panel (MIDI Channel 1)
  * Swing
  * Roll Type
  * Effects 1-3 (Type, Edit 1, Edit 2, Motion Sequence, FX Chain)
  * Synth Accent Level and Motion Sequence Switch
  * Drum Accent Level and Motion Sequence Switch
* Drum Part Mixer and Modulation Matrix (MIDI Channel 10)
* Cubase Drum Map

### Future Updates

* More inspector and strip panels
* Separate Panels for Drums Common/Effects and Drum Modulation Matrix
* Improved preset loading to resolve minor issues when switching between banks
* Multi-Channel Synth Mixer

## Download

[Download v1.0][]

If you appreciate this, feel free to [Buy me a Coffee][].

<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="redconfetti" data-color="#FF5F5F" data-emoji=""  data-font="Arial" data-text="Buy me a coffee, if you want" data-outline-color="#000000" data-font-color="#ffffff" data-coffee-color="#FFDD00" ></script>

[Buy me a Coffee]: https://buymeacoffee.com/redconfetti
[Download v1.0]: https://s3-us-west-1.amazonaws.com/assets.redconfetti.com/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/versions/korg-electribe-emx1-cubase-device-v1.0.zip

## Installation

Go to Studio > More Options > MIDI Device Manager.

![Device Manager]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/install/1-midi-device-manager.png "Cubase MIDI Device Manager")

Click on the "Import Setup" button.

![Import Setup]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/install/2-import-setup.png "Import MIDI Device Setup")

Choose the XML file that was downloaded from this page.

![Choose Device File]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/install/3-choose-file.png "Choose Device File")

The only choice will be the "Korg Electribe EMX-1". Press the OK button.

![Import Device Script]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/install/4-import-script.png "Import Cubase MIDI Device Script")

A window will pop-up allowing you to choose which preset banks to use with the
different MIDI channels for the EMX-1. This is not necessary, as the EMX-1 loads
patterns globally for all parts.

We do need to let Cubase know which MIDI Port to use to communicate with your
Electribe. Click on "Not Connected" to display the MIDI ports that are available
on your machine.

![Open Port list]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/install/5-assign-midi-port.png "Click on Not Connected to view MIDI ports")

Select the appropriate MIDI port that your Electribe EMX-1 is connect to.

![Select MIDI Port]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/install/5-assign-midi-port-2.png "Select the appropriate port")

If you already closed the bank assignment pop-up window, you can also assign
the MIDI port to your device from the MIDI Device Manager window.

![Assign Port Alternative]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/install/5-assign-port-in-device-manager.png "Assign MIDI Port to Device in Device Manager")

## Usage

### Enable Device Panel Section

Right-click over the Inspector for your MIDI track to reveal customization
options, click on "Set up Sections".

![setup sections inspector]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/usage/1-inspector-setup-sections.png "Setup sections in the track inspector")

Near the bottom of the list you'll see a "Device Panel" section. Click on the
checkbox to enable that section.

![enable device panel section]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/usage/2-inspector-enable-device-panel.png "Enable Device Panel section")

If you prefer, feel free to drag the Device Panel section up under the
"Routing" section.

![arrange inspector sections]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/usage/3-inspector-setup-sections-drag-section.png "Cubase re-arrange inspector section order")

### Link MIDI Track to Device

In the Routing section of a MIDI track, click on the Output Routing menu,
shown as "Not Connected" in the image below.

![Inspector Routing 1]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/usage/4-inspector-routing-1.png "Inspector Output Routing")

You will see your the MIDI ports available to your computer in the menu. These
are shown with MIDI port icons on the right. MIDI Devices also show up in this
menu without the MIDI port icon. Click on "Korg Electribe EMX-1" to link
your MIDI track with the Electribe EMX-1.

![Inspector Routing 2]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/usage/4-inspector-routing-2.png "Inspector Routing to Korg Electribe EMX-1")

### Program Selector

Below the Output Routing and MIDI Channel menus in the Routing section, there
is usually a numeric Bank and Program number menu available.

![Inspector Routing Presets 1]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/usage/5-inspector-routing-preset-1.png "Banks and Presets selector")

When your MIDI track is associated with a MIDI Device, the Banks and Presets
configured for that device are loaded in this menu, and will send Bank and
Program change messages to your device for the selected MIDI channel.

The EMX-1 only honors Bank and Program Change messages that are received on the
Global MIDI channel configured under the MIDI menu of the device. By default
this is MIDI Channel 1, so you should make sure you select presets from
a MIDI track configured to use MIDI channel 1.

![Inspector Routing Presets 2]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/usage/5-inspector-routing-preset-2.png "Inspector Routing Presets")

### Inspector Device Panels

For your MIDI track, make sure to select MIDI Channel 1, then expand the Device
Panel section.

![Expand Device Panel]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/usage/6-expand-device-panel.png "Expand Device Panel")

Click on "Select Device Panel" to access a list of the panels that are available
for the MIDI channel your MIDI track is assigned to.

![Open panel selector]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/usage/6-open-panel-selector.png "Open Panel selector")

When your track is assigned to a MIDI Channel associated with the synth parts
(Channel 1-5), the individual panels can be loaded and used from the track
inspector. Click on the 'Common' panel to view the Part Common controls for
the synth part.

![Open Common panel]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/usage/6-open-common.png "Open the Common panel")

You can also choose to display the Modulation, Oscillator, or Filter panels.

![Inspector Synth Panels]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/usage/6-inspector-synth-panels.png "MIDI Track inspector synth panels")

### General Panels

#### Drum Panel

Assign a MIDI channel to Channel 10.

![Assign Channel 10]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/usage/8-assign-channel-10.png "Assign MIDI Channel 10 to the MIDI track")

Under the Device Panel section, click on the gear icon to the right of the
panel selector.

![Device Panel Gear icon]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/usage/7-device-panel-gear.png "Click on the Gear icon for the Device Panel")

Expand the "Channel 10" menu in the tree, and click on "Drums".

![Open Drums Panel]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/usage/8-open-drums-panel.png "Open Drums Panel")

The Drums Panel offers a Mixer style pannel on the left for general mixing
and shaping the drum parts, and the panel on the right gives you all the options
for applying modulations to the drum parts.

![Drums Panel]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/panels/v1/drum-panel.png "Drums Panel")

#### Synth Panels

From a MIDI Trak assigned to a Synth part, click on the gear icon in the Device
Panel section to access the "Channel" panel that combines all the sections
into a single window.

![Other Panels]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/usage/9-open-other-panels.png "Other Other Panels")

You can do this from each MIDI track that is assigned to MIDI channels 1-5 to
open all the synth part panels at once.

![Channel Panels]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/panels/v1/channel-panels.png "Channel Panels")

#### Global Panels

Most global settings are controlled by the EMX-1 on MIDI Channel 1. Click
on the gear icon under the Device Panel section, then expand Channel 1,
and the Global folder, to access the "Global" panel that provides you with
controls for the Effects section, Accent Parts, Swing, and Roll.

![Choose Global Panel]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/usage/9-open-global-panel-without-drums.png "Global Panel without drum controls")

![Global Panel]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/panels/v1/global-panel-no-drums.png "Global Panel without drums")

If you change to the "Any" channel, you can access panels that are an aggregate
of other channel specific panels.

![Any MIDI Channel]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/usage/9-change-midi-channel-any.png "Select the 'Any' MIDI Channel")

Choose the "Global" panel under Korg Electribe EMX-1.

![Open Global Panel]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/usage/9-open-global-panel.png "Open Global Panel")

This will reveal a panel that combines the Drums and Global panels into a single
window.

![Global Panel with Drums]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/panels/v1/global-drum-panel.png "Global Panel with Drum mixer")

## Drum Map

I've included a Cubase Drum Map for the Electribe EMX-1.

Under the Routing section, click on "No Drum Map" to access the drum map menu.

![Open Drum Maps]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/usage/10-open-drum-maps.png "Cubase Open Drum Maps")

Click on "Drum Map Setup" to access the Drum Maps window.

![Setup Drum Map]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/usage/10-drum-maps-setup.png "Drum Map Setup")

Click on the "Load Drum Map" button.

![Load Drum Map]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/usage/10-load-drum-map.png "Load Drum Map")

Choose the "Korg Electribe MX Map.drm" file that was included in the ZIP file,
click on the "Open" button.

![Choose Drum Map File]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/usage/10-choose-drum-map-file.png "Choose Drum Map file")

From the Routing section for your Channel 10 MIDI track, you should see the
option to choose the map.

![Drum Map menu]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/usage/10-assign-drum-map.png "Assign Drum Map drop down menu")

After selecting the drum map, you'll the drum sequencing editor for the MIDI
parts, with the proper drum notes ordered at the top of the editor.

![Sequence]({{site.assets.url_prefix}}/images/posts/2025-03-01-korg-electribe-emx-1-cubase-panel/usage/10-sequence-with-drum-map.png "Sequence with Drum Map")
