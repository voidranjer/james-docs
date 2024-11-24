---
title: Kernel Modules
description: Understanding the basics of kernel modules, device drivers, and eBPF in the context of operating systems.
sidebar_label: Lec 14, 15 – Kernel Modules
---

Lecture 14, Lecture 15

## Kernel Image, Module, and Drivers

- Kernel code can exist in the form of **kernel images** or **kernel modules**.

- **Device drivers** can be implemented in the **kernel image**, or as a **kernel module**.

## kmod signing

1. kmods are signed using the original developer's private key.
2. The public key is then bundled in the kernel image (in the kernel _keyring_).
3. On boot, the kernel will load the module and verify its authenticity using the public key.
4. **Unsigned** or proprietary kmods will result in **"tainted kernel"** warnings.
5. Extra: In a **Secure Boot** configuration, the public key's are stored in the firmware's key database (which is stored on the hardware - NVRAM).

## kmod commands

- kernel modules are packaged into `.ko` files
- `lsmod`: list currently loaded kmods
- `modinfo`: show info for a specific kmod
- `insmod/rmmod` to insert/remove kmods **(requires `sudo`)**
- `modprobe`: intelligently insert/remove kmods **(requires `sudo`)**

## skeleton kmod

- The barebones requirements for a kmod is to implement 2 macros: `module_init()` and `module_exit()`.

## kernel space

- `printk()` instead of `printf()`, outputs to kernel log _(view with `dmesg`, or check `/var/log/syslog.*`)_
- `kmalloc()`/`kfree()`: Proper memory management is imperative on the kernel level. Unlike user processes (whose address spaces are automatically reclaimed by the OS), memory leaks in the kernel level are **true memory leaks** and could be a big problem if found in a long-running system.

## dependencies

- kmods are built with `linux-headers` that correspond to the **specific kernel version** intended to be used with the currently being built kmod in question
- kmods are **specific** to kernel versions. Attempting to load with a different kernel version will result in _"tainted kernel"_ warnings.
- Adding to kernel source tree: **in-tree**.
- kmods/drivers built separate from the linux kernel tree: **out-of-tree** (no GPL license requirements, suitable for proprietary software).
- Dynamic Kernel Module Support (dkms): automatically builds out-of-tree kmods. (e.g. `virtualbox-dkms`)

## eBPF

- Motivation: `ptrace` is invasive and may interfere with the target process.
- The nature of eBPF: allows you to run code in the **kernel space** (to monitor other processes. remember processes are meant to be contained and isolated from each other).
- The catch is, eBPF introduces **confined kernel-mode execution**. (keyword: confined). Meaning, eBPF code runs in the **kernel space**, but is **strictly verified for safety**.
- Kernel protection: eBPF is **not Turing-complete**, and has many protective constraints: (no unbounded loops, memory access bounds checking, access to kernel functions have to be explicitly allowed, max number of instructions)
- eBPF can hook on to kernel events, like `kprobes` (kernel), `uprobes` (user), and `tracepoints` (predefined trace points in the Linux kernel, no need to insert probes).
- `bpftrace` and `bcc` are frontend languages for eBPF (usually requires `sudo`). They translate c-like language into eBPF **byte-code** (portable across CPUs).

## rust

- strict enforcement of memory safety, type safety
- exposes low-level system operations to the programmer
- Other langs like Java has also type safety. So why Rust? Because rust is a **systems programming language** and has low-level APIs.
