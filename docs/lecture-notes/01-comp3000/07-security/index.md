---
title: Security
description: Security considerations in the context of operating systems.
sidebar_label: Lec 20, 21, 22 - Security
---

## Authentication

To prove that you are whom you claim tobe.

## The 3 authentication factors

### What you know

- **Knowledge**: passwords, passphrases, PINs, etc.
- Weakness: Low entropy (human-chosen passwords are weak)
- Passwords that are easy to remember are also easy to guess.

### What you have

- **Possession**: hardware tokens like smart card, SecurID, SIM cards, etc.
- Physical tokens are time-synced and store an agreed-upon secret key (seed for random number generator), and the server knows the same key.

### What you are

- **Inherence**: biometrics like fingerprints, retina scans, voice, etc.
- Cannot be refreshed.

:::tip Multi-factor vs. secondary factors
- Multi-factor: 2 or more factors are required.
- Secondary factors: 2 or more factors are used, but only one is required. (strength of weakest factor is the strength of the authentication)
:::