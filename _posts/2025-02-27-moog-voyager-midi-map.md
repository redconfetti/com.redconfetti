---
layout: post
published: true
title: Moog Voyager MIDI Map
date: 2025-02-27 23:45:00 -0500
comments: true
categories:
  - music-production
tags:
  - Minimoog
  - Moog
  - Voyager
image: 
  path: https://s3-us-west-1.amazonaws.com/assets.redconfetti.com/images/posts/2025-02-27-moog-voyager-midi-map/moog-minimoog-voyager.jpg
  width: 513
  height: 299
  alt: Moog Voyager RME
---

I had to map out the Continuous Control messages that map to the controls for
the [Minimoog Voyager][].

![Moog Voyager]({{site.assets.url_prefix}}/images/posts/2025-02-27-moog-voyager-midi-map/moog-minimoog-voyager.jpg "Moog Voyager")

[Minimoog Voyager]: https://www.moogmusic.com/synthesizers?type=73

Note, the knobs that include 2 numbers are high resolution, and thus are
transmitted with MSB and LSB values.

| Section                    | MIDI CC | Description                       | Value Notes                      |
| -------------------------- | ------- | --------------------------------- | -------------------------------- |
| Common                     | 5, 37   | Glide Rate                        |                                  |
| Common                     |         | Fine Tune                         | n/a                              |
| Common                     | 7, 39   | Master Volume                     |                                  |
| Common                     | SysEx   | Headphone Volume                  |                                  |
| Low Freq Osc               | 3, 35   | LFO Rate                          |                                  |
| Low Freq Osc               | 67      | LFO Sync                          | 0, 32, 64, 96                    |
| Modulation Bus - Mod Wheel | 68      | Source                            | 0, 16, 32, 48, 64, 80            |
| Modulation Bus - Mod Wheel | 69      | Destination                       | 0, 16, 32, 48, 64, 80            |
| Modulation Bus - Mod Wheel | 70      | Shaping                           | 0, 32, 64, 96                    |
| Modulation Bus - Mod Wheel | 6, 38   | Amount                            |                                  |
| Modulation Bus - Pedal/On  | 71      | Source                            | 0, 16, 32, 48, 64, 80            |
| Modulation Bus - Pedal/On  | 72      | Destination                       | 0, 16, 32, 48, 64, 80            |
| Modulation Bus - Pedal/On  | 73      | Shaping                           | 0, 32, 64, 96                    |
| Modulation Bus - Pedal/On  | 8, 40   | Amount                            |                                  |
| Oscillators                | 74      | Oscillator 1 Octave               | 0, 16, 32, 48, 64, 80            |
| Oscillators                | 9, 41   | Oscillator 1 Wave                 |                                  |
| Oscillators                | 10, 42  | Oscillator 2 Frequency            |                                  |
| Oscillators                | 75      | Oscillator 2 Octave               | 0, 16, 32, 48, 64, 80            |
| Oscillators                | 11, 43  | Oscillator 2 Wave                 |                                  |
| Oscillators                | 12, 44  | Oscillator 3 Frequency            |                                  |
| Oscillators                | 76      | Oscillator 3 Octave               | 0, 16, 32, 48, 64, 80            |
| Oscillators                | 13, 45  | Oscillator 3 Wave                 |                                  |
| Oscillators                | 77      | Osc 2 to Osc 1 Sync               | 0, 127                           |
| Oscillators                | 78      | Osc 3 to Osc 1 FM                 | 0, 127                           |
| Oscillators                | 79      | Oscillator 3 Keyboard Control     | 0, 127                           |
| Oscillators                | 80      | Oscillator 3 Frequency Range      | 0, 127                           |
| Mixer                      | 14, 46  | External Input Gain               |                                  |
| Mixer                      | 81      | External Input On/Off             | 0, 127                           |
| Mixer                      | 15, 47  | Oscillator 1 Gain                 |                                  |
| Mixer                      | 82      | Oscillator 1 On/Off               | 0, 127                           |
| Mixer                      | 16, 48  | Oscillator 2 Gain                 |                                  |
| Mixer                      | 83      | Oscillator 2 On/Off               | 0, 127                           |
| Mixer                      | 17, 49  | Oscillator 3 Gain                 |                                  |
| Mixer                      | 84      | Oscillator 3 On/Off               | 0, 127                           |
| Mixer                      | 18, 50  | Noise Gain                        |                                  |
| Mixer                      | 85      | Noise On/Off                      | 0, 127                           |
| Filters                    | 19, 51  | Filter Cutoff                     |                                  |
| Filters                    | 20, 52  | Filter Spacing                    |                                  |
| Filters                    | 21, 53  | Filer Resonance                   |                                  |
| Filters                    | 22, 54  | Filter Keyboard Control Amount    |                                  |
| Filters                    | 86      | Filter Mode                       | 0, 127                           |
| Filter Envelope            | 23, 55  | Filter Env Attack                 |                                  |
| Filter Envelope            | 24, 56  | Filter Env Decay                  |                                  |
| Filter Envelope            | 25, 57  | Filter Env Sustain                |                                  |
| Filter Envelope            | 26, 58  | Filter Env Release                |                                  |
| Filter Envelope            | 27, 59  | Filter Env Amount to Filter       |                                  |
| Amp Envelope               | 28, 60  | Amp Env Attack                    |                                  |
| Amp Envelope               | 29, 61  | Amp Env Decay                     |                                  |
| Amp Envelope               | 30, 62  | Amp Env Sustain                   |                                  |
| Amp Envelope               | 31, 63  | Amp Env Release                   |                                  |
| Amp Envelope               | 87      | Amp Env Gate                      | 0, 127                           |
