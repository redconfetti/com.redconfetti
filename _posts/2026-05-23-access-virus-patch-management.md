---
layout: post
published: true
title: Access Virus Patch Management
description: Access Virus TI - Single, Sequencer, Multi, and Bank Management Explained
date: 2025-05-23 17:09:00 -0500
comments: true
categories:
  - music-production
tags:
  - Access Music
  - Virus TI mk2
  - Virus TI2
image: 
  path: https://s3-us-west-1.amazonaws.com/assets.redconfetti.com/images/posts/2026-05-23-access-virus-patch-management/Virus-TI2-Desktop.png
  width: 750
  height: 353
  alt: Access Virus TI mk2
---

## Intro

I bought an Access Virus TI2 Desktop in March 2024 after years of associating
the Virus sound with classic trance, industrial, electronic rock, and film
scoring. Once I started using it, I realized that its modes, Multis, banks, and
Virus Control workflow are not immediately obvious—especially if you are coming
to the instrument years after Access discontinued active development.

This article explains the practical differences between Single Mode, Sequencer
Mode, Multi Mode, embedded Multis, reference Multis, and the available
management tools.

## Quick Summary

* **Single Mode** loads and plays one program at a time.
* **Sequencer Mode** provides a 16-part temporary edit buffer intended for DAW
  use with Virus Control.
* **Multi Mode** provides a 16-part setup intended for standalone or live use.
  * **Multi slots 1–16** can store embedded Multis, where full patch data is saved
    inside the Multi.
  * **Multi slots 17–128** are reference Multis, where each part points to an
    existing Bank/Program location and only stores limited part-specific overrides.
* **Virus Control** is useful for DAW integration, patch browsing, and RAM/ROM
  organization, but it has limitations when managing hardware Multis.
* The **AURA Plugin** appears to provide a more complete modern editor/librarian
  workflow for managing Multis from a computer.

## Virus TI Operating Modes

The Access Virus TI supports three primary operating modes:

| Mode      | Purpose                      | Parts | Saved Where?                        | Best Used For                        |
|-----------|-----------------------------:|------:|-------------------------------------|--------------------------------------|
| Single    | One patch at a time          | 1     | RAM/ROM Program banks               | Sound design, browsing patches       |
| Sequencer | DAW-controlled 16-part setup | 16    | DAW project / temporary edit buffer | Studio production with Virus Control |
| Multi     | Hardware performance setup   | 16    | Multi bank                          | Live performance, standalone use     |

## Single Mode

Single Mode loads and plays one program at a time.

This is the simplest mode and is best used for browsing patches, designing
sounds, or playing the Virus as a single synth.

A Single program can be exported through SysEx. On the Virus TI, a Single program
dump is approximately **524 bytes**.

## Sequencer Mode

Sequencer Mode is intended for use with a DAW or external sequencer.

It provides a 16-part temporary edit buffer. Each part can hold a sound, MIDI
channel assignment, volume, pan, output routing, and other part-related settings.

In practice, Sequencer Mode is the mode most closely associated with the Virus
Control plugin. When using Virus Control inside a DAW, the plugin manages the
16-part arrangement and stores that state with the DAW project.

Sequencer Mode is similar to Multi Mode, but with one major difference:

> **Sequencer Mode cannot be saved directly to a hardware Multi memory slot as
> a normal stored Multi while Virus Control is actively engaged.**

Instead, it functions more like a DAW-managed 16-part edit buffer.

Sequencer or Multi arrangements can be exported through SysEx as an Arrangement.
Depending on the contents, these dumps are roughly **1.02 KB to 8.40 KB**.

## Multi Mode

Multi Mode is intended for multitimbral standalone use, especially live
performance.

Like Sequencer Mode, Multi Mode supports 16 parts. Unlike Sequencer Mode, a Multi
can be saved into the Virus hardware’s Multi memory bank.

The Virus TI has **128 Multi locations**:

* **Multi slots 1–16** support embedded Multis.
* **Multi slots 17–128** are reference Multis.

This distinction is one of the most important things to understand about the
Virus TI.

## Embedded Multis vs Reference Multis

### Embedded Multis: Multi Slots 1–16

The first 16 Multi locations can store embedded Multis.

An embedded Multi saves the full patch data for each part inside the Multi
itself. This makes the Multi more self-contained.

This is useful when you want a complete performance setup that does not depend
on the current contents of the RAM banks.

For example, if you build a live setup with several edited sounds, saving it as
an embedded Multi allows those sounds to remain part of the Multi.

### Reference Multis: Multi Slots 17–128

Multi slots 17–128 are reference Multis.

A reference Multi does not store the full patch data for each part. Instead, each
part points to a Bank/Program location, such as RAM A 001 or RAM B 064.

The Multi then stores additional part-specific settings that override or modify
how those referenced programs behave inside the Multi.

This is similar to how Multis worked on classic Virus models before the TI
series.

> **Important:** If you edit a patch while building a reference Multi, those
> patch edits are not saved inside the Multi. You need to save the edited patch
> separately to a RAM location first.

## What Gets Saved in a Reference Multi?

A reference Multi stores the Multi structure and part-level settings, but not
the full edited patch data.

Typical Multi-specific settings include:

* Multi name

Typical part-specific settings include:

* Bank/Program reference
* MIDI channel
* Enabled/disabled state
* Volume
* Pan
* Output assignment
* Transpose
* Detune/fine tune
* Key range low/high
* Velocity range low/high
* Aux/effect send routing
* MIDI volume/expression behavior
* Note priority
* Arpeggiator on/off

This allows a reference Multi to behave like a performance setup built from
existing programs.

The tradeoff is that the referenced programs need to remain in the expected RAM
or ROM locations. If you overwrite a referenced patch, the Multi will now point
to the new sound in that location.

## Program and Bank Structure

The Virus TI mk2 has:

* **4 RAM banks**
  * RAM A
  * RAM B
  * RAM C
  * RAM D
* **26 ROM banks**
  * ROM A through ROM Z
* **128 Multi locations**

Each RAM and ROM bank contains 128 programs.

The RAM banks can be written from the hardware or managed with software. The ROM
banks can only be overwritten/flashed using the Virus Control software provided
by Access Music.

Virus Control still runs on Windows 11, which makes it possible to manage and
flash ROM banks even though the Virus TI platform is no longer actively
developed.

## Working with Virus Control

The Virus Control plugin provided by Access Music allows you to manage programs,
browse patches, organize RAM banks, and use the Virus as a multitimbral synth
inside a DAW.

One of its most useful features is that you can drag programs into the Sequencer
Mode edit buffer on the left side of the plugin. This makes it possible to build
a 16-part arrangement that loads with the DAW project.

This is ideal for studio production because the DAW session can recall the Virus
parts automatically.

## Saving a Sequencer Setup as a Multi

Virus Control also provides a way to transfer the 16 Sequencer parts into the
Multi edit buffer.

From the Virus Control tutorial:

> If you wish to transfer the patches of all 16 parts to the multi buffers:
> press STORE on the TI, select Destination = ‘Multi Edit Buffer’ with the
> Value 1 knob, and then press Store again. When you have disengaged the
> Virus Control, switch the TI to Multi mode, and Store to the desired Multi
> location.

In practical terms, this means:

1. Build the 16-part setup in Sequencer Mode using Virus Control.
2. Use the hardware STORE function.
3. Select **Destination = Multi Edit Buffer**.
4. Store the setup to the Multi edit buffer.
5. Disengage Virus Control by closing the DAW or disconnecting USB.
6. Switch the Virus to Multi Mode.
7. Store the Multi to a hardware Multi location.

However, there is an important limitation:

> If you try to save this kind of transferred setup to a reference Multi slot
> from 17–128, it will not save as a full embedded Multi. For embedded storage,
> use Multi slots 1–16.

## Manually Building Multis on the Hardware

You can also build a Multi manually from the Virus hardware.

If you enter Multi Mode, assign parts, select programs, configure MIDI channels,
set volumes, adjust panning, and then save to Multi slots 17–128, the Multi will
save as a reference Multi.

That means the part structure and part-specific settings will be saved, but
edited patch data will not be embedded.

If you modify a sound while building the Multi, save that modified sound to a RAM
program location first. Then reference that saved program from the Multi.

## Using the AURA Plugin as a Modern Editor/Librarian

The [Access Virus AURA Plugin][] appears to provide a more complete modern
editor/librarian workflow than Virus Control for some tasks.

With the AURA Plugin, you can do more than manage the Sequencer Mode edit
buffer. You can configure the editor to work in Multi or Sequencer Mode by
default, load parts for a Multi, save a Multi bank to your computer in MID
format, sync Multis from the hardware, and write Multi banks back to the
hardware.

This makes AURA especially useful if you want to manage Virus Multis from a
modern computer-based workflow rather than relying entirely on the hardware
menus or the older Virus Control plugin.

[Access Virus AURA Plugin]: https://auraplugins.com/product/access-virus-editor/

## Practical Recommendations

### Use Single Mode for sound design

Single Mode is the easiest place to browse, edit, and understand individual
programs.

Use it when you are focused on one sound at a time.

### Use Sequencer Mode for DAW production

Sequencer Mode is best when working with a DAW and Virus Control.

The 16-part edit buffer can be saved with the DAW project, which makes it
convenient for studio production.

### Use embedded Multis for self-contained live setups

If you want a live setup that does not depend on external RAM patch locations,
use Multi slots 1–16.

These embedded Multis can store the full patch data for each part.

### Use reference Multis for stable hardware setups

Reference Multis are useful when you have a stable set of RAM or ROM patches
and want to create multiple performance setups that point to those sounds.

They are more lightweight, but they depend on the referenced programs remaining
in place.

### Save edited patches before relying on reference Multis

If you are building a reference Multi and edit a sound, save that sound to RAM
before saving the Multi.

Otherwise, the Multi will only remember which Bank/Program location it points
to, not the unsaved edits you made.

## Conclusion

The Virus TI becomes much easier to understand once the distinction between
Single Mode, Sequencer Mode, embedded Multis, and reference Multis is clear.

Single Mode is for one sound. Sequencer Mode is a DAW-managed 16-part edit
buffer. Multi Mode is for standalone 16-part setups. The first 16 Multi slots can
store full embedded Multis, while slots 17–128 store reference Multis that point
to existing programs.

Once that mental model is clear, the Virus feels less mysterious. The confusing
parts are mostly about what gets saved, where it gets saved, and whether a Multi
contains full patch data or only references to existing programs.
