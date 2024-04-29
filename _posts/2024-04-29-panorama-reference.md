---
layout: post
published: true
title: Nektar Panorama Reference
date: 2024-04-29 11:06:00 -0500
comments: true
categories:
  - music-production
tags:
  - nektar
  - panorama
image: 
  path: https://s3-us-west-1.amazonaws.com/assets.redconfetti.com/images/posts/2024-04-29-panorama-reference/nektar-panorama-p6.png
  width: 1500
  height: 534
  alt: Nektar Panorama P6
---

This is a reference page for the [Nektar Panorama Series][] of MIDI controller,
with various notes.

![Nektar Panorama P6]({{site.assets.url_prefix}}/images/posts/2024-04-29-panorama-reference/nektar-panorama-p6.png "Nektar Panorama P6")

[Nektar Panorama Series]: https://nektartech.com/panorama-p4-p6/

## Controls

This section captures the default MIDI CC mapping of the controls.

![Nektar Panorama P4 Diagram]({{site.assets.url_prefix}}/images/posts/2024-04-29-panorama-reference/nektar-panorama-p4.png "Nektar Panorama P4 Diagram")

I refer to the physical controls using letters and numbers. For example, the P
group of 8 rotary encoders will be referred to individually as P1, P2, P3... P8.

## DAW Integration Modes

The following table applies to Mixer, Instrument, and Transport modes. The MIDI
CC used does not change/re-map when you change modes. The DAW integration driver
for Cubase detects when you change the mode using the Mode buttons (K1-K4, MIDI
CC# 99-102), and it interprets the controls differently under each mode.

The MIDI messages are all sent on the non-Internal MIDI interfaces (Panorama P6
Mixer, Panorama P6 Instrument, Panorama P6 ReWire Host), almost identically on
each interface, when the Panorama P1/P4/P6 is not in Internal mode.

### DAW Control Assignments

|     | Description                         | Message Type                | Data            |
| --- | ----------------------------------- | --------------------------- | --------------- |
| C1  | Octave ⏷                            | MIDI CC# 112                | Momentary 0/127 |
| C2  | Octave ⏶                            | MIDI CC# 113                | Momentary 0/127 |
| C3  | Performance Button 1 (PB1)          | MIDI CC# 114                | Momentary 0/127 |
| C4  | Performance Button 2 (PB2)          | MIDI CC# 115                | Momentary 0/127 |
| D   | 100mm Motorized Fader - Moved       | MIDI CC# 15 (7 bit MSB)<br> | 0-127           |
| D   | 100mm Motorized Fader - Moved       | MIDI CC# 47 (3 bit LSB)     | 0-7             |
| D   | 100mm Motorized Fader - Touched     | MIDI CC# 13                 | Momentary 0/127 |
| E1  | Mute Button                         | MIDI CC# 30                 | Momentary 0/127 |
| E2  | Solo Button                         | MIDI CC# 31                 | Momentary 0/127 |
| F1  | Rotary Encoder                      | MIDI CC# 48                 | 127 down, 1 up* |
| F2  | Rotary Encoder                      | MIDI CC# 49                 | 127 down, 1 up* |
| F3  | Rotary Encoder                      | MIDI CC# 50                 | 127 down, 1 up* |
| F4  | Rotary Encoder                      | MIDI CC# 51                 | 127 down, 1 up* |
| F5  | Rotary Encoder                      | MIDI CC# 52                 | 127 down, 1 up* |
| F6  | Rotary Encoder                      | MIDI CC# 53                 | 127 down, 1 up* |
| F7  | Rotary Encoder                      | MIDI CC# 54                 | 127 down, 1 up* |
| F8  | Rotary Encoder                      | MIDI CC# 55                 | 127 down, 1 up* |
| G   | Toggle/View Button                  | MIDI CC# 98                 | Momentary 0/127 |
| H1  | 45mm Fader                          | MIDI CC# 0                  | 0-127           |
| H2  | 45mm Fader                          | MIDI CC# 1                  | 0-127           |
| H3  | 45mm Fader                          | MIDI CC# 2                  | 0-127           |
| H4  | 45mm Fader                          | MIDI CC# 3                  | 0-127           |
| H5  | 45mm Fader                          | MIDI CC# 4                  | 0-127           |
| H6  | 45mm Fader                          | MIDI CC# 5                  | 0-127           |
| H7  | 45mm Fader                          | MIDI CC# 6                  | 0-127           |
| H8  | 45mm Fader                          | MIDI CC# 7                  | 0-127           |
| H9  | 45mm Fader                          | MIDI CC# 14                 | 0-127           |
| I1  | LED Button                          | MIDI CC# 16                 | Momentary 0/127 |
| I2  | LED Button                          | MIDI CC# 17                 | Momentary 0/127 |
| I3  | LED Button                          | MIDI CC# 18                 | Momentary 0/127 |
| I4  | LED Button                          | MIDI CC# 19                 | Momentary 0/127 |
| I5  | LED Button                          | MIDI CC# 20                 | Momentary 0/127 |
| I6  | LED Button                          | MIDI CC# 21                 | Momentary 0/127 |
| I7  | LED Button                          | MIDI CC# 22                 | Momentary 0/127 |
| I8  | LED Button                          | MIDI CC# 23                 | Momentary 0/127 |
| J   | Toggle/Mute Button                  | MIDI CC# 97                 | Momentary 0/127 |
| K1  | Mixer Mode Button                   | MIDI CC# 99                 | Momentary 0/127 |
| K2  | Instrument Mode Button              | MIDI CC# 100                | Momentary 0/127 |
| K3  | Transport Mode Button               | MIDI CC# 101                | Momentary 0/127 |
| K4  | Internal Mode Button                | MIDI CC# 102                | Momentary 0/127 |
| M1  | Graphical Menu Button 1             | MIDI CC# 106                | Momentary 0/127 |
| M2  | Graphical Menu Button 2             | MIDI CC# 107                | Momentary 0/127 |
| M3  | Graphical Menu Button 3             | MIDI CC# 108                | Momentary 0/127 |
| M4  | Graphical Menu Button 4             | MIDI CC# 109                | Momentary 0/127 |
| M5  | Graphical Menu Button 5             | MIDI CC# 110                | Momentary 0/127 |
| N1  | Shift Button                        | MIDI CC# 96                 | Momentary 0/127 |
| N2  | Track- Button                       | MIDI CC# 91                 | Momentary 0/127 |
| N3  | Track+ Button                       | MIDI CC# 92                 | Momentary 0/127 |
| N4  | Patch- Button                       | MIDI CC# 93                 | Momentary 0/127 |
| N5  | Patch+ Button                       | MIDI CC# 94                 | Momentary 0/127 |
| N6  | View Button                         | MIDI CC# 95                 | Momentary 0/127 |
| O   | Data Rotary Encoder                 | MIDI CC# 111                | 1/127 relative* |
| P1  | Rotary Encoder                      | MIDI CC# 64                 | 1/127 relative* |
| P2  | Rotary Encoder                      | MIDI CC# 65                 | 1/127 relative* |
| P3  | Rotary Encoder                      | MIDI CC# 66                 | 1/127 relative* |
| P4  | Rotary Encoder                      | MIDI CC# 67                 | 1/127 relative* |
| P5  | Rotary Encoder                      | MIDI CC# 68                 | 1/127 relative* |
| P6  | Rotary Encoder                      | MIDI CC# 69                 | 1/127 relative* |
| P7  | Rotary Encoder                      | MIDI CC# 70                 | 1/127 relative* |
| P8  | Rotary Encoder                      | MIDI CC# 71                 | 1/127 relative* |
| Q1  | Transport Button (F-Keys)           | MIDI CC# 103                | Momentary 0/127 |
| Q2  | Transport Button (Jump Last Marker) | MIDI CC# 86                 | Momentary 0/127 |
| Q3  | Transport Button (Jump Next Marker) | MIDI CC# 87                 | Momentary 0/127 |
| Q4  | Transport Button (Undo)             | MIDI CC# 88                 | Momentary 0/127 |
| Q5  | Transport Button (Click)            | MIDI CC# 89                 | Momentary 0/127 |
| Q6  | Transport Button (Mode)             | MIDI CC# 90                 | Momentary 0/127 |
| Q7  | Transport Button (Cycle)            | MIDI CC# 80                 | Momentary 0/127 |
| Q8  | Transport Button (Rewind)           | MIDI CC# 81                 | Momentary 0/127 |
| Q9  | Transport Button (Forward)          | MIDI CC# 82                 | Momentary 0/127 |
| Q10 | Transport Button (Stop)             | MIDI CC# 83                 | Momentary 0/127 |
| Q11 | Transport Button (Play)             | MIDI CC# 84                 | Momentary 0/127 |
| Q12 | Transport Button (Record)           | MIDI CC# 85                 | Momentary 0/127 |
| R   | Pad Select Button                   | MIDI CC# 104                | Momentary 0/127 |

\* *MIDI CC Relative - Multiple messages sent with value 127 as encoder is
turned down, value 1 as encoder turned up, making it possible to infinitely
communicate the knob being turned up or down. Available in Internal Mode as
"MIDI CC(rel)"*

The N or Q buttons do not send additional MIDI CC message types when the SHIFT
or F-Key buttons are held like they do in Internal mode.

### Motorized Fader LSB/MSB Table

Here's a table that demonstrates how the two MIDI messages sent with each
adjustment of the 100mm Alps Motorized Fader are interpreted as a 10-bit binary
value (0 - 1023).

| MSB Binary | MSB Dec. | LSB Binary | LSB Dec. | 10-bit Binary | 10-bit Value |
| ---------- | -------- | ---------- | -------- | ------------- | ------------ |
| 0000000    | 0        | 000        | 0        | 0000000000    | 0            |
| 0000000    | 0        | 001        | 1        | 0000000001    | 1            |
| 0000000    | 0        | 010        | 2        | 0000000010    | 2            |
| 0000001    | 1        | 110        | 6        | 0000001110    | 14           |
| 0000001    | 1        | 111        | 7        | 0000001111    | 15           |
| 0000010    | 2        | 000        | 0        | 0000010000    | 16           |
| 0000010    | 2        | 001        | 1        | 0000010001    | 17           |
| 1111110    | 126      | 110        | 6        | 1111110110    | 1014         |
| 1111110    | 126      | 111        | 7        | 1111110111    | 1015         |
| 1111111    | 127      | 110        | 6        | 1111111110    | 1022         |
| 1111111    | 127      | 111        | 7        | 1111111111    | 1023         |

### DAW Integration Responses

Above outlines the MIDI CC messages sent to the DAW on the Integration
interfaces. After a control change message is sent, you can see SysEx and
Control Change messages being sent back to the Panorama P6 from the Cubase
Integration driver.

![Rewire Host MIDI CC and System Exclusive]({{site.assets.url_prefix}}/images/posts/2024-04-29-panorama-reference/midi-monitor-rewire-host.png "Rewire Host MIDI CC and System Exclusive")

Above shows the messages logs after I performed a simple change to one of the
rotary encoders in Mixer mode. When you press on the 'Instrument' mode button
for an instrument track, the response is much larger.

I turned an encoder in Mixer mode, and it sent MIDI CC# 64 with value of '4'. In
the collection of CC messages sent back to the Panorama P6 from the "Rewire
Host" interface, a Control messages with "64 4" was included, along with the
state of many other controls.

It seems like the DAW integration driver is communicating back the state of
things. If I move the Volume fader for a track within Cubase without even
toughing the Panorama P6, I see that the same kinds of control messages are sent
to the Panorama P6.

![Rewire Host Fader MSB/LSB]({{site.assets.url_prefix}}/images/posts/2024-04-29-panorama-reference/midi-monitor-rewire-host-2.png "Rewire Host Fader MSB/LSB")

#### Dumb Client

The DAW Integration driver provided by Nektar is the heart of all the
integration logic, and the Panorama P6 is a passive/dumb client that sends a
fixed set of MIDI CC messages, and relies on responses from the DAW integration
driver to determine the menus and controls shown in the graphical menu display.

Only in Internal Mode are the controller's functions user editable and stored as
presets in the memory of the controller.

This makes a lot of sense, because updating the firmware of the Panorama to
bring about new behavior is a lot more risky and difficult than coming up with a
new driver that sits between the Panorama P6 and the DAW it is integrating with.

## Internal Mode

Most of the controls are transmitted on the "Panorama P6 Internal" MIDI
interface in Internal mode. The "Device" column indicates if the signal is sent
to the Internal (INT) interface, or the DAW integration interfaces (DAW).

Data value of "0 or 127" applies to momentary buttons that send 127 when
pressed, 0 when released.

### Hidden Options

Here are features that require certain button combinations in certain contexts
to access.

| Context                                   | Button Combination            | Purpose                                                                                      |
| ----------------------------------------- | ----------------------------- | -------------------------------------------------------------------------------------------- |
| Power controller on while holding buttons | Toggle/View (G) + Mixer (K1)  | Starts the controller in "Update mode" for the purpose of using the firmware update software |
| Any                                       | Octave ⏷ + Octave ⏶           | Access Global Setup menu                                                                     |
| Any                                       | PB1 + PB2                     | Access Performance Button assign page                                                        |
| Internal Mode                             | Faders (M1) + Encoders (M2)   | View About Page - Firmware and Hardware version, Copyright notices                           |
| Instrument Mode                           | SHIFT (N1) + M5               | Access "Learn Mode" when instrument has already been previously mapped/configured            |
| Transport Mode                            | SHIFT + Jump Last Marker (Q2) | Move Left Locator Position to Song Position Pointer (SPP)                                    |
| Transport Mode                            | SHIFT + Jump Next Marker (Q3) | Move Right Locator Position to Song Position Pointer (SPP)                                   |
| Global                                    | SHIFT + Toggle/View           | Change from one DAW to the other (Cubase to Reason, or vice versa)                           |

### Internal Mode Default Control Assignments

The default control mapping lines up well with the defined purpose of each MIDI
CC number in the [MIDI CC List][].

[MIDI CC List]: https://anotherproducer.com/online-tools-for-musicians/midi-cc-list/

#### MIDI CC Summarized

##### Used

| MIDI CC   | Controls                      | Defined Purpose                      |
| --------- | ----------------------------- | ------------------------------------ |
| 1         | Mod-Wheel (B2)                | Modulation Wheel (MSB)               |
| 3         | Master Fader                  | Undefined (MSB)                      |
| 7         | Motorized Fader (D)           | Volume (MSB)                         |
| 11        | Expression Pedal              | Expression (MSB)                     |
| 12        | Mute button (E1)              | Effect Controller 1 (MSB)            |
| 13        | Solo Button (E2)              | Effect Controller 2 (MSB)            |
| 32 - 39   | Mixer Encoders (F)            | LSB Controller for 0-7               |
| 40 - 47   | Faders (H)                    | LSB Controller for 8-15              |
| 48 - 55   | Context Encoders (P)          | LSB Controller for 16-23             |
| 56 - 63   | LED Buttons (J)               | LSB Controller for 24-31             |
| 64        | Sustain Pedal                 | Damper Pedal on/off                  |
| 85 - 89   | SHIFT + Navigation Button (N) | Undefined / High Res Velocity Prefix |
| 103 - 107 | Navigation Buttons (N)        | Undefined                            |
| 108 - 118 | Transport Buttons (Q)         | Undefined                            |

##### Unused

Here are some undefined MIDI CC that you can use with the F-Keys that don't
overlap with the default map above.

| MIDI CC | Defined Purpose         |
| ------- | ----------------------- |
| 9       | Undefined (MSB)         |
| 14      | Undefined (MSB)         |
| 15      | Undefined (MSB)         |
| 16 - 19 | General Purpose (MSB)   |
| 20 - 31 | Undefined (MSB)         |
| 70 - 79 | Sound Controller 1 - 10 |
| 80 - 83 | General Purpose         |
| 90      | Undefined               |
| 91 - 95 | Effect Depth 1 - 5      |
| 102     | Undefined               |
| 119     | Undefined               |

#### Full Map

|     | Description             | Msg Type    | Data           | Dev | Assignable |
| --- | ----------------------- | ----------- | -------------- | --- | ---------- |
| A   | Keyboard                | Note        | 0 - 127        | INT | No         |
| A   | Aftertouch Sensor       | Aftertouch  | 0 - 127        | INT | Yes        |
| B1  | Pitch Wheel*            | Pitch Wheel | -8192 - 8191   | INT | Yes        |
| B2  | Mod Wheel               | CC# 1       | 0-127          | INT | Yes        |
| X   | Sustain / Foot Switch   | CC# 64      | 0 or 127       | INT | Yes        |
| Y   | Expression Pedal        | CC# 11      | 0-127          | INT | Yes        |
| C1  | Octave ⏷                | CC# 112     | 0 or 127       | DAW | No         |
| C2  | Octave ⏶                | CC# 113     | 0 or 127       | DAW | No         |
| C3  | PB1                     | CC# 114     | 0 or 127       | DAW | Yes**      |
| C4  | PB2                     | CC# 115     | 0 or 127       | DAW | Yes**      |
| D   | Motorized Fader         | CC# 7<br>   | 0 - 127        | INT | Yes        |
| E1  | Mute Button             | CC# 12      | 0 or 127       | INT | Yes        |
| E2  | Solo Button             | CC# 13      | 0 or 127       | INT | Yes        |
| F1  | Rotary Encoder          | CC# 32      | 0 - 127        | INT | Yes        |
| F2  | Rotary Encoder          | CC# 33      | 0 - 127        | INT | Yes        |
| F3  | Rotary Encoder          | CC# 34      | 0 - 127        | INT | Yes        |
| F4  | Rotary Encoder          | CC# 35      | 0 - 127        | INT | Yes        |
| F5  | Rotary Encoder          | CC# 36      | 0 - 127        | INT | Yes        |
| F6  | Rotary Encoder          | CC# 37      | 0 - 127        | INT | Yes        |
| F7  | Rotary Encoder          | CC# 38      | 0 - 127        | INT | Yes        |
| F8  | Rotary Encoder          | CC# 39      | 0 - 127        | INT | Yes        |
| G   | Toggle/View Button      | CC# 98      | 0 or 127       | DAW | No         |
| H1  | 45mm Fader              | CC# 40      | 0 - 127        | INT | Yes        |
| H2  | 45mm Fader              | CC# 41      | 0 - 127        | INT | Yes        |
| H3  | 45mm Fader              | CC# 42      | 0 - 127        | INT | Yes        |
| H4  | 45mm Fader              | CC# 43      | 0 - 127        | INT | Yes        |
| H5  | 45mm Fader              | CC# 44      | 0 - 127        | INT | Yes        |
| H6  | 45mm Fader              | CC# 45      | 0 - 127        | INT | Yes        |
| H7  | 45mm Fader              | CC# 46      | 0 - 127        | INT | Yes        |
| H8  | 45mm Fader              | CC# 47      | 0 - 127        | INT | Yes        |
| H9  | 45mm Fader              | CC# 3       | 0 - 127        | INT | Yes        |
| I1  | LED Button              | CC# 56      | 0 or 127       | INT | Yes        |
| I2  | LED Button              | CC# 57      | 0 or 127       | INT | Yes        |
| I3  | LED Button              | CC# 58      | 0 or 127       | INT | Yes        |
| I4  | LED Button              | CC# 59      | 0 or 127       | INT | Yes        |
| I5  | LED Button              | CC# 60      | 0 or 127       | INT | Yes        |
| I6  | LED Button              | CC# 61      | 0 or 127       | INT | Yes        |
| I7  | LED Button              | CC# 62      | 0 or 127       | INT | Yes        |
| I8  | LED Button              | CC# 63      | 0 or 127       | INT | Yes        |
| J   | Toggle/Mute Button      | CC# 97      | 0 or 127       | DAW | No         |
| K1  | Mixer Mode Button       | CC# 99      | 0 or 127       | DAW | No         |
| K2  | Instrument Mode Button  | CC# 100     | 0 or 127       | DAW | No         |
| K3  | Transport Mode Button   | CC# 101     | 0 or 127       | DAW | No         |
| K4  | Internal Mode Button    | CC# 102     | 0 or 127       | DAW | No         |
| M1  | Graphical Menu Button 1 | CC# 106     | 0 or 127       | DAW | No         |
| M2  | Graphical Menu Button 2 | CC# 107     | 0 or 127       | DAW | No         |
| M3  | Graphical Menu Button 3 | CC# 108     | 0 or 127       | DAW | No         |
| M4  | Graphical Menu Button 4 | CC# 109     | 0 or 127       | DAW | No         |
| M5  | Graphical Menu Button 5 | CC# 110     | 0 or 127       | DAW | No         |
| N1  | Shift Button            | n/a         | n/a            | n/a | No         |
| N2  | Track- Button           | CC# 103     | 0 or 127       | INT | Yes        |
| N3  | Track+ Button           | CC# 104     | 0 or 127       | INT | Yes        |
| N4  | Patch- Button           | CC# 105     | 0 or 127       | INT | Yes        |
| N5  | Patch+ Button           | CC# 106     | 0 or 127       | INT | Yes        |
| N6  | View Button             | CC# 107     | 0 or 127       | INT | Yes        |
| N7  | SHIFT + ◀ Bank          | CC# 85      | 0 or 127       | INT | Yes        |
| N8  | SHIFT + Bank ▶          | CC# 86      | 0 or 127       | INT | Yes        |
| N9  | SHIFT + ◀ Zoom          | CC# 87      | 0 or 127       | INT | Yes        |
| N10 | SHIFT + Zoom ▶          | CC# 88      | 0 or 127       | INT | Yes        |
| N11 | SHIFT + View            | CC# 89      | 0 or 127       | INT | Yes        |
| O   | Data Rotary Encoder     | CC# 111     | 1/127 relative | DAW | No         |
| P1  | Rotary Encoder          | CC# 48      | 0 - 127        | INT | Yes        |
| P2  | Rotary Encoder          | CC# 49      | 0 - 127        | INT | Yes        |
| P3  | Rotary Encoder          | CC# 50      | 0 - 127        | INT | Yes        |
| P4  | Rotary Encoder          | CC# 51      | 0 - 127        | INT | Yes        |
| P5  | Rotary Encoder          | CC# 52      | 0 - 127        | INT | Yes        |
| P6  | Rotary Encoder          | CC# 53      | 0 - 127        | INT | Yes        |
| P7  | Rotary Encoder          | CC# 54      | 0 - 127        | INT | Yes        |
| P8  | Rotary Encoder          | CC# 55      | 0 - 127        | INT | Yes        |
| Q1  | F-Keys                  | CC# 103     | 0 or 127       | DAW | No         |
| Q2  | Jump Last Marker        | CC# 114     | 0 or 127       | INT | Yes        |
| Q3  | Jump Next Marker        | CC# 115     | 0 or 127       | INT | Yes        |
| Q4  | Undo                    | CC# 116     | 0 or 127       | INT | Yes        |
| Q5  | Click                   | CC# 117     | 0 or 127       | INT | Yes        |
| Q6  | Mode                    | CC# 118     | 0 or 127       | INT | Yes        |
| Q7  | Cycle                   | CC# 108     | 0 or 127       | INT | Yes        |
| Q8  | Rewind                  | CC# 109     | 0 or 127       | INT | Yes        |
| Q9  | Forward                 | CC# 110     | 0 or 127       | INT | Yes        |
| Q10 | Stop                    | CC# 111     | 0 or 127       | INT | Yes        |
| Q11 | Play                    | CC# 112     | 0 or 127       | INT | Yes        |
| Q12 | Record                  | CC# 113     | 0 or 127       | INT | Yes        |
| Q13 | F-Keys + F1             | QWERTY      | Macro          | INT | Yes        |
| Q14 | F-Keys + F2             | QWERTY      | Macro          | INT | Yes        |
| Q15 | F-Keys + F3             | QWERTY      | Macro          | INT | Yes        |
| Q16 | F-Keys + F4             | QWERTY      | Macro          | INT | Yes        |
| Q17 | F-Keys + F5             | QWERTY      | Macro          | INT | Yes        |
| Q18 | F-Keys + F6             | QWERTY      | Macro          | INT | Yes        |
| Q19 | F-Keys + F7             | QWERTY      | Macro          | INT | Yes        |
| Q20 | F-Keys + F8             | QWERTY      | Macro          | INT | Yes        |
| Q21 | F-Keys + F9             | QWERTY      | Macro          | INT | Yes        |
| Q22 | F-Keys + F10            | QWERTY      | Macro          | INT | Yes        |
| Q23 | F-Keys + F11            | QWERTY      | Macro          | INT | Yes        |
| R   | Pad Select Button       | CC# 104     | 0 or 127       | DAW | No         |
| S1  | Drum Pad                | Note        | 0 - 127        | INT | Yes***     |
| S2  | Drum Pad                | Note        | 0 - 127        | INT | Yes***     |
| S3  | Drum Pad                | Note        | 0 - 127        | INT | Yes***     |
| S4  | Drum Pad                | Note        | 0 - 127        | INT | Yes***     |
| S5  | Drum Pad                | Note        | 0 - 127        | INT | Yes***     |
| S6  | Drum Pad                | Note        | 0 - 127        | INT | Yes***     |
| S7  | Drum Pad                | Note        | 0 - 127        | INT | Yes***     |
| S8  | Drum Pad                | Note        | 0 - 127        | INT | Yes***     |
| S9  | Drum Pad                | Note        | 0 - 127        | INT | Yes***     |
| S10 | Drum Pad                | Note        | 0 - 127        | INT | Yes***     |
| S11 | Drum Pad                | Note        | 0 - 127        | INT | Yes***     |
| S12 | Drum Pad                | Note        | 0 - 127        | INT | Yes***     |

\* *Pitch wheel uses two 7 bit bytes to obtain a 14-bit signed value range*
\** *PB1 and PB2 can be assigned to Transpose, Program Change, Global Channel
Change, Enc Curve 2, and other MIDI FX functions*
\*** *Drum Pads can send Note data and other messages related to Pressure
Sensor. Note assignment can be turned off to allow only for*

### Notes

* All non-assignable buttons except for the "Shift" button send the same MIDI CC
  messages in Internal mode, from the non-Internal MIDI interfaces, as they do
  in the Mixer, Instrument, and Transport modes.
* The PB1 and PB2 buttons can send Program Change messages on the P6 Internal
  interface, if configured to do so.

### Assignable Controls

Assignable Controls have different options depending on the type of control

* Rotary Encoders
  * MIDI CC
  * MIDI CC(Relative) - Sends Edits parameter relative to current value.
  * Pitch Bend
  * After Touch
  * Non-Registered Parameter Number (NRPN) coarse
  * Non-Registered Parameter Number (NRPN) fine
  * Fixed Velocity
  * Program
  * OFF
* Momentary Buttons / Drum Pads
  * MIDI CC
  * Pitch Bend
  * Fixed Velocity
  * Note - Sends note on when pressed, note-off when released
  * Note (toggle) - Sends note-on when press, note-off when pressed again
  * Program & Bank - Used to jump to a specific patch/program quickly
  * Program (step) - Step through a range of Program Change messages with each press
  * MIDI CC (toggle) - Toggles between two values each time it is pressed
  * MIDI CC (step) - Step through a range of values with each press
  * Load Preset - Load a specific preset (1-20) or step next or previous
  * Load Pad Map - Specify preset number 1-20, "Previous", or "Next"
  * Load Key Map - Specify preset number 1-5, "Previous", or "Next"
  * Load F-Key Map - Specify preset number 1-10, "Previous", or "Next"
  * NRPN Toggle Coarsely (TogCors) - Toggle an NRPN value between 0 and 7-bit value
  * NRPN Toggle Fine (TogFine) - Toggle an NRPN between 0 and 7-bit value
  * NRPN Step Course (StpCors) - Coarse Step between 0 and 7-bit value
  * NRPN Step Fine (StpFine) - Fine Step between 0 and 7-bit value
  * Fixed Velocity
  * QWERTY Macro (Supported with Windows and MacOS 10.10.5 (Yosemite) or earlier)
* Pitch Bend / Mod-Wheel / Aftertouch
  * MIDI CC
  * Pitch Bend
  * Aftertouch (Default)
  * Non-Registered Parameter Number (NRPN) coarse
  * Non-Registered Parameter Number (NRPN) fine
  * Fixed Velocity - When the keyboard is configured to use a fixed velocity
    (instead of dynamically soft or hard) from the Global menu, this setting
    allows you to control the level of that fixed velocity.
  * OFF

More information on Assignable Control options are in [Internal Mode - Control Edit][]

[Internal Mode - Control Edit]: https://nektartech.com/internal-mode-control-edit-panorama-p-series/

### Not Assignable

![Nektar Panorama P4 Diagram]({{site.assets.url_prefix}}/images/posts/2024-04-29-panorama-reference/nektar-panorama-p4.png "Nektar Panorama P4 Diagram")

* "Fader" Button (E3)
* Octave ⏷ Button (C1)
* Octave ⏶ Button (C2)
* PB1 / PB2 Buttons (C3, C4)
  * Can be configured for special purposes (e.g. Program Change, Global MIDI
    Channel, MIDI FX)
* Toggle/Mute (J)
* Toggle/View (G)
* 5 graphical display buttons (M1 - M5)
* "Pads" button (R)

## Knowledge Base Articles

Here are links to all of the Nektar Panorama P1/P4/P6 articles.

* [Internal Mode - Global Settings](https://nektartech.com/internal-mode-global-settings-panorama-p-series/)
  * Velocity curves - Changes velocity behavior for keyboard. Only available on P4/P6.
    * Options: Soft2, Soft1, Standard, Hard1, Hard2, Fixed
    * Claims that Fixed Velocity value can be configured from Control Edit mode,
    * but I'm not sure where.
  * Encoder curve - Changes how fast encoders scroll through values
    * Options: Off, Lin Step, Slow, Standard, Fast
  * Encoder Curve 2: Same options, enabled while PB1 or PB2 button assigned to
    "Enc Curve 2" is held down
  * Global MIDI channel
  * MIDI Jack source - Decide if 5-pin MIDI output sends out other MIDI messages
    received from your DAW on the USB port.
  * Adjusting the display - Change configuration to help with visibility from
    different viewing angles.
  * Panic button
* [Internal Mode - Auto-Fader Group][] - Describes functionality of Fader menu
  when in Internal mode
* [The PB Assign Page][] - Configure Performance Buttons for Functions or MIDI FX
  * Functions -  Transpose, Program Change, Global MIDI Channel, activate
    Encoder Curve 2 (configured in Global Settings)
  * MIDI FX - Changes patterns of MIDI message values for interesting effects
* [Internal Mode - Pads][]
  * How to map pads to different notes quickly
  * Adjust velocity settings
  * Change the map between different scales
* [Internal Mode - Control Edit][] - In depth overview of the options you can
  assign to assignable controls
* [Internal Mode - Presets & Maps][] - In depth guide to the 20 Presets memory
  locations you can use to store:
  * MIDI CC Control Assignments for Buttons / Faders / Encoders
  * The present includes pointers to one of the following types of "Maps".
    * 20 Pad Maps
    * 5 Keyboard Map
    * 10 F-Keys Map
* [QWERTY Macros][] - Guide to configuring QWERTY Macros to buttons. Only
  supported in Windows and MacOS version 10.10.5 (Yosemite, 2014-2017) and
  earlier.

[Internal Mode - Auto-Fader Group]: https://nektartech.com/internal-mode-control-edit-panorama-p-series-2/
[The PB Assign Page]: https://nektartech.com/the-pb-assign-page-panorama-p-series/
[Internal Mode - Pads]: https://nektartech.com/internal-mode-pads-panorama-p-series/
[Internal Mode - Presets & Maps]: https://nektartech.com/internal-mode-presets-and-maps-panorama-p-series/
[QWERTY Macros]: https://nektartech.com/qwerty-macros-panorama-p-series/

## Mapped Instruments

| **Publisher**      | **Title**                   |
| ------------------ | --------------------------- |
| Ample Sound        | AGF                         |
| Ample Sound        | AGG                         |
| Applied Acoustics  | Chromaphone                 |
| Applied Acoustics  | Lounge Lizzard EP-4         |
| Applied Acoustics  | Ultra Analog VA-2           |
| Applied Acoustics  | Strum Acoustic Session      |
| Arturia            | Jupiter-8V2                 |
| Arturia            | Oberheim SEM V              |
| Arturia            | Prophet V                   |
| Arturia            | Wurlitzer V                 |
| Audio Damage       | Axon                        |
| Audio Damage       | Phosphor                    |
| Audio Damage       | Tattoo                      |
| Cableguys          | Curve 2                     |
| Cakewalk           | Square I                    |
| Camel Audio        | Alchemy                     |
| D16 Group          | Drumazon                    |
| D16 Group          | LuSH-101                    |
| D16 Group          | Nithonat                    |
| Fab Filter         | FabFilter One               |
| Fab Filter         | Twin 2                      |
| Fxpansion          | Amber                       |
| Fxpansion          | Cypher                      |
| Fxpansion          | Strobe                      |
| Gforce             | ImpOSCar2                   |
| Gforce             | Minimonsta_VST2MachO        |
| Gforce             | Minimonsta_vstwin           |
| Gforce             | Oddity_VST2MachO            |
| Gforce             | Oddity_VST2win              |
| GSI                | VB3                         |
| Ichiro Toda        | Synth1 VST                  |
| Image-Line         | PoiZone                     |
| IK Multimedia      | SampleTank 3                |
| iZotope            | Iris                        |
| KHs                | One                         |
| Korg               | LegacyCell                  |
| Korg               | MonoPoly                    |
| Korg               | MS-20                       |
| Korg               | Polysix                     |
| KV331              | SynthMaster2                |
| Lennar Digital     | Sylenth1                    |
| LinPlug            | CrX4                        |
| Madrona Labs       | Aalto                       |
| Madrona Labs       | Kaivo                       |
| Native Instruments | Absynth 5                   |
| Native Instruments | FM8                         |
| Native Instruments | Kontakt                     |
| Native Instruments | Machine                     |
| Native Instruments | Massive                     |
| Native Instruments | Monark                      |
| Native Instruments | Reaktor                     |
| Native Instruments | Razor                       |
| Novation           | Bass Station                |
| Novation           | V-Station                   |
| OBXD               | Obxd                        |
| pluginboutique.com | Virtual CZ                  |
| ReFX               | Nexus                       |
| ReFX               | Vanguard                    |
| Rob Papen          | Blue                        |
| Rob Papen          | Predator                    |
| Rob Papen          | Punch                       |
| Rob Papen          | SubBoomBass                 |
| Sonic Charge       | MicroTonic                  |
| Sound Tower        | Evolver PlugSE Editor       |
| Sound Tower        | Mopho Desktop Editor        |
| Sound Tower        | Tetra PlugSE Editor         |
| Steinberg          | Dark Planet                 |
| Steinberg          | Embracer                    |
| Steinberg          | Groove Agent ONE            |
| Steinberg          | Halion 5                    |
| Steinberg          | Halion Sonic SE             |
| Steinberg          | Hypnotic Dance              |
| Steinberg          | LoopMash                    |
| Steinberg          | Monologue                   |
| Steinberg          | Mystic                      |
| Steinberg          | Neo Soul Keys               |
| Steinberg          | Padshop                     |
| Steinberg          | Prologue                    |
| Steinberg          | Retrologue                  |
| Steinberg          | Spector                     |
| Steinberg          | Triebwerk                   |
| Sonic Academy      | A.N.Ax64                    |
| Synapse            | Dune                        |
| Synapse            | Dune 2                      |
| Synapse            | EKS Pro                     |
| Synthescience      | Prodigious Synthesizer V1.2 |
| Togu Audio Line    | U-NO LX V2                  |
| Togu Audio Line    | BassLine 101                |
| Togu Audio Line    | NoiseMaker                  |
| Tone2              | FireBird                    |
| Tone2              | Saurus                      |
| U-He               | Ace                         |
| U-He               | Bazille                     |
| U-He               | Diva 2.0                    |
| U-He               | TyrellN6                    |
| U-He               | Zebra2*                     |
| Waldorf            | Largo                       |
| Waldorf            | PPG Wave 2.V                |
| Waldorf            | PPG Wave v3                 |
| Waves              | Element Stereo              |
| Xfer Records       | Serum                       |
| Xhun Audio         | LittleOne                   |

## Mapped Effects

| **Publisher**   | **Title**                  |
| --------------- | -------------------------- |
| Antares         | Auto-Tune+Time_VST         |
| 2C Audio        | Breeze                     |
| Abbey Road      | TG12412                    |
| Arts Acoustic   | AAR Reverb                 |
| Audio Damage    | Eos                        |
| BrainWorx       | CleanSweep V2              |
| BrainWorx       | Digital V2 Mono            |
| BrainWorx       | Digital V2 Stereo          |
| BrainWorx       | Hybrid 1.0                 |
| BrainWorx       | Hybrid 2.0                 |
| BrainWorx       | Solo                       |
| Elysia          | Mpressor                   |
| Eventide        | 2016 StereoRoom            |
| Eventide        | Blackhole                  |
| Eventide        | Omnipresser                |
| Eventide        | UltraChannel               |
| Eventide        | UltraReverb                |
| Fab Filter      | Micro                      |
| Fab Filter      | Pro-C                      |
| Fab Filter      | Pro-DS                     |
| Fab Filter      | Pro-G                      |
| Fab Filter      | Pro-L                      |
| Fab Filter      | Pro-Q                      |
| Fab Filter      | Simplon                    |
| Fab Filter      | Timeless 2                 |
| Fab Filter      | Volcano 2                  |
| Hitsquad        | BiFilter2                  |
| Hitsquad        | FilterBank3                |
| iZotope         | Ozone 5 Exciter            |
| Korg            | MDE-X                      |
| Korg            | MS-20FX                    |
| Lexicon         | LexChamberVST              |
| Lexicon         | LexConcertHallVST          |
| Lexicon         | LexHallVST                 |
| Lexicon         | LexPlateVST                |
| Lexicon         | LexRandomHallVST           |
| Lexicon         | LexVintagePlateVST         |
| LKJB            | Luftikus                   |
| Slate Digital   | Thrillseeker LA            |
| Slate Digital   | Trigger                    |
| Slate Digital   | VBC FG-Grey                |
| Slate Digital   | VBC FG-MU                  |
| Slate Digital   | VBC FG-Red                 |
| Slate Digital   | VBC Rack                   |
| Softube         | Acoustic Feedback          |
| Softube         | Active Equalizer           |
| Softube         | Bass Amp Room              |
| Softube         | FET Compressor             |
| Softube         | Focusing Equalizer         |
| Softube         | Metal Amp Room             |
| Softube         | Passive Equalizer          |
| Softube         | Spring Reverb              |
| Softube         | Summit Audio EQF-100       |
| Softube         | Summit Audio Grand Channel |
| Softube         | Summit Audio TLA-100A      |
| Softube         | Tonelux Tilt Live          |
| Softube         | Tonelux Tilt               |
| Softube         | Trident A-Range            |
| Softube         | TSAR-1 Reverb              |
| Softube         | TSAR-1R Reverb             |
| Softube         | Tube Delay                 |
| Softube         | Tube-Tech CL 1B            |
| Softube         | Tube-Tech Classic Channel  |
| Softube         | Tube-Tech ME 1B            |
| Softube         | Tube-Tech PE 1C            |
| Softube         | Valley People Dyna-mite    |
| Softube         | Vintage Amp Room           |
| Softube         | WhiteAmpDemo               |
| Sonic Charge    | Bitspeek                   |
| Sonic Charge    | Permut 8                   |
| Sonnox          | Oxford Dynamics Native     |
| Sonnox          | Oxford EQ Native           |
| Sonnox          | Oxford Inflator Native     |
| Sonnox          | Oxford Limiter Native      |
| Sonnox          | Oxford Reverb Native       |
| Sonnox          | Oxford SuprEsser HR        |
| Sonnox          | Oxford SuprEsser LL        |
| Sonnox          | Oxford SuprEsser           |
| Sonnox          | Oxford TransMod Native     |
| Sound Toys      | Crystalizer                |
| Sound Toys      | Decapitator                |
| Sound Toys      | Echo Boy                   |
| Sound Toys      | Filter Freak 1             |
| Sound Toys      | Filter Freak 2             |
| Sound Toys      | Pan Man                    |
| Sound Toys      | PhaseMistress              |
| Sound Toys      | Tremolator                 |
| SPL             | Attacker                   |
| SPL             | De-Esser                   |
| SPL             | De-Verb                    |
| SPL             | DrumXchanger               |
| SSL             | Bus Compressor             |
| SSL             | Channel                    |
| SSL             | Drumstrip                  |
| SSL             | Vocalstrip                 |
| SSL             | X-Comp                     |
| SSL             | X-Eq                       |
| SSL             | X-Phase                    |
| SSL             | X-Saturator                |
| SSL             | X-ValveComp                |
| SSL             | X-Verb                     |
| Steinberg       | ModMachie                  |
| Steinberg       | Mono Delay                 |
| Steinberg       | Ping Pong Delay            |
| Steinberg       | Stereo Delay               |
| Steinberg       | Amp Simulator              |
| Steinberg       | Bit Crusher                |
| Steinberg       | Da Tube                    |
| Steinberg       | Distortion                 |
| Steinberg       | Grungelizer                |
| Steinberg       | Soft Clipper               |
| Steinberg       | VST Amp Rack               |
| Steinberg       | Brickwall Limiter          |
| Steinberg       | Compressor                 |
| Steinberg       | DeEsser                    |
| Steinberg       | Gate                       |
| Steinberg       | Expander                   |
| Steinberg       | Limiter                    |
| Steinberg       | Maximizer                  |
| Steinberg       | Multiband Compressor       |
| Steinberg       | Tube Compressor            |
| Steinberg       | Vintage Compressor         |
| Steinberg       | VST Dynamics               |
| Steinberg       | Curve EQ                   |
| Steinberg       | DJ-EQ                      |
| Steinberg       | GEQ-10                     |
| Steinberg       | GEQ-30                     |
| Steinberg       | Studio EQ                  |
| Steinberg       | Dual Filter                |
| Steinberg       | Morph Filer                |
| Steinberg       | Tone Booster               |
| Steinberg       | Wah Wah                    |
| Steinberg       | Auto Pan                   |
| Steinberg       | Chopper                    |
| Steinberg       | Chorus                     |
| Steinberg       | Cloner                     |
| Steinberg       | Flanger                    |
| Steinberg       | Metalizer                  |
| Steinberg       | Phaser                     |
| Steinberg       | Ring Modulator             |
| Steinberg       | Rotary                     |
| Steinberg       | Studio Chorus              |
| Steinberg       | Tranceformer               |
| Steinberg       | Tremolo                    |
| Steinberg       | Vibrato                    |
| Steinberg       | Octaver                    |
| Steinberg       | Pitch Correct              |
| Steinberg       | RoomWorks SE               |
| Steinberg       | RoomWorks SE               |
| Steinberg       | MonoToStereo               |
| Steinberg       | StereoEnhancer             |
| Steinberg       | Magneto                    |
| Steinberg       | Compressor 260 Mono        |
| Steinberg       | Mix6To2                    |
| Steinberg       | MixConvert V6              |
| Steinberg       | MixerDelay                 |
| Steinberg       | MultiScope                 |
| Steinberg       | SMPTEGenerator             |
| Steinberg       | TestGenerator              |
| Steinberg       | Compressor 260 Mono        |
| Steinberg       | Compressor 276             |
| Steinberg       | Dual Phaser                |
| Steinberg       | Equalizer 601              |
| Steinberg       | Phaser Max100              |
| Steinberg       | RND Portico 5033           |
| Steinberg       | RND Portico 5043           |
| Steinberg       | Vintage Flanger            |
| Steinberg       | Vintage Open Deck          |
| Steinberg       | Vintage Phaser             |
| Steinberg       | Vintage Way                |
| Steinberg       | VST Amp Rack               |
| Steinberg       | REVerence                  |
| Sugar Bytes     | Turnado                    |
| Togu Audio Line | Dub 3                      |
| Togu Audio Line | Reverb 2                   |
| Togu Audio Line | Reverb 3                   |
| Tone2           | Warmverb                   |
| Tokyo Dawn      | TDR Feedback Compressor II |
| U-He            | Presswerk                  |
| U-He            | Runciter                   |
| U-He            | Uhbik-A                    |
| U-He            | Uhbik-D                    |
| U-He            | Uhbik-F                    |
| U-He            | Uhbik-G                    |
| U-He            | Uhbik-P                    |
| U-He            | Uhbik-Q                    |
| U-He            | Uhbik-S                    |
| U-He            | Uhbik-T                    |
| Universal Audio | Cambridge                  |
| Universal Audio | Cooper Time Cube           |
| Universal Audio | CS-1                       |
| Universal Audio | DBX 160                    |
| Universal Audio | EL7 FATSO Jr               |
| Universal Audio | EL7 FATSO Sr               |
| Universal Audio | EX-1                       |
| Universal Audio | Lexicon 224                |
| Universal Audio | Manley Massive Passive     |
| Universal Audio | Pultec EQP-1A Legacy       |
| Universal Audio | Pultec EQP-1A              |
| Universal Audio | Pultec HLF-3C              |
| Universal Audio | Pultec MEQ-5               |
| Universal Audio | Pultec-Pro Legacy          |
| ValhallaDSP     | ValhallaRoom               |
| ValhallaDSP     | ValhallaUberMod            |
| ValhallaDSP     | ValhallaVintageVerb        |
| ValhallaDSP     | ValhallaFreqEchoMkI        |
| ValhallaDSP     | ValhallaShimmer            |
| Voxengo         | OldSkoolVerb               |
| Waldorf         | D-Pole                     |
| Waves           | API-550A                   |
| Waves           | API-550B                   |
| Waves           | API-560                    |
| Waves           | API-2500                   |
| Waves           | CLA Bass                   |
| Waves           | CLA Drums                  |
| Waves           | CLA Effects                |
| Waves           | CLA Guitars                |
| Waves           | CLA Unplugged              |
| Waves           | CLA Vocals                 |
| Waves           | CLA-2A                     |
| Waves           | CLA-3A                     |
| Waves           | CLA-76                     |
| Waves           | C1 Compressor              |
| Waves           | C1 Comp-Gate               |
| Waves           | C1 Gate                    |
| Waves           | C4 Multiband Comp          |
| Waves           | Doppler                    |
| Waves           | Ekramer FX                 |
| Waves           | Ekramer GT                 |
| Waves           | Ekramer VC                 |
| Waves           | Ekramer BA                 |
| Waves           | Ekramer DR                 |
| Waves           | GTR Amp 2Cab               |
| Waves           | GTR Amp                    |
| Waves           | H-Delay                    |
| Waves           | IR-L                       |
| Waves           | JJP-Bass                   |
| Waves           | JJP-Cymb-Perc              |
| Waves           | JJP-Drums                  |
| Waves           | JJP-Guitars                |
| Waves           | JJP-Strings-Keys           |
| Waves           | JJP-Vocals                 |
| Waves           | Maserati ACG               |
| Waves           | Maserati B72               |
| Waves           | Maserati Gti               |
| Waves           | Maserati VX1               |
| Waves           | Maserati HMX               |
| Waves           | Maserati DRM               |
| Waves           | Maserati GRP               |
| Waves           | MetaFlanger                |
| Waves           | OneKnob Brigher            |
| Waves           | OneKnob Driver             |
| Waves           | OneKnob Filter             |
| Waves           | OneKnob Louder             |
| Waves           | OneKnob Phatter            |
| Waves           | OneKnob Phatter            |
| Waves           | OneKnob Pressure           |
| Waves           | OneKnob Wetter             |
| Waves           | PuigChild 660              |
| Waves           | PuigChild 670              |
| Waves           | PuigTec EQP1A              |
| Waves           | PuigTec MEQ5               |
| Waves           | Q3                         |
| Waves           | Q4                         |
| Waves           | Q6                         |
| Waves           | Q8                         |
| Waves           | Renaissance Rbass          |
| Waves           | Renaissance Rchannel       |
| Waves           | Rcompressor                |
| Waves           | Renaissance Rverb          |
| Waves           | Renaissance REQ 2          |
| Waves           | Renaissance REQ 4          |
| Waves           | Renaissance REQ 6          |
| Waves           | Renaissance Rvox           |
| Waves           | Bass Rider                 |
| Waves           | Vocal Rider                |
| Waves           | SSL Comp                   |
| Waves           | SSLEQ                      |
| Waves           | SuperTap 6-Taps            |
| Waves           | TrueVerb                   |
| Waves           | UltraPitch 3 Voices        |
| Waves           | UltraPitch 6 voices        |
| Waves           | UltraPitch Shift           |
| Waves           | VComp                      |
| Waves           | VEQ3                       |
| Waves           | VEQ4                       |
| Waves           | X-Click                    |
| Waves           | X-Crackle                  |
| Waves           | AudioTrack                 |
| Waves           | DeBreath                   |
| Waves           | H-Comp                     |
| Waves           | Ikramer HLS                |
| Waves           | Kramer Tape                |
| Waves           | L2                         |
| Waves           | LinEQ Broadband            |
| Waves           | LinEQ Lowband              |
| Waves           | LinMB                      |
| Waves           | LoAir                      |
| Waves           | MaxxBass                   |
| Waves           | MV2                        |
| Waves           | S1 Imager                  |
| Waves           | S1 Shuffler                |
| Waves           | SoundShifter Pitch         |
| Waves           | The Kings Microphones      |
| Waves           | TransX Multi               |
| Waves           | TransX Wide                |
| Waves           | UltraPitch Shift           |
| Waves           | W43                        |
