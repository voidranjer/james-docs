---
title: Keywords List
slug: keywords
description: A list of keywords and topics to review for the COMP3000 final exam.
---

## Final Exam

<video style={{ width: "100%" }} src="https://cfvod.kaltura.com/pd/p/2011531/sp/201153100/serveFlavor/entryId/1_fn0hdo8n/v/1/ev/3/flavorId/1_n72xcqrx/name/a.mp4/seg-264-v1-a1.ts?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZnZvZC5rYWx0dXJhLmNvbS9zY2YvaGxzL3AvMjAxMTUzMS9zcC8yMDExNTMxMDAvc2VydmVGbGF2b3IvZW50cnlJZC8xX2ZuMGhkbzhuL3YvMS9ldi8zL2ZsYXZvcklkLzFfbjcyeGNxcngvbmFtZS9hLm1wNC8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzEzNzU5NzI2fX19XX0_&Signature=ZjvPdzuPoMUYTK2UxO-6oHqOswqRDbnmS5DmL4eq3MswFgemZUqWKFl6F-RDmOg8xuQUSZ02ylWt2w3xmipIY-~o~t7IdNriviyQOFUqwc7GQYPQjduLbjAYH8AVjY6Q8Pvo1CAXwC7Wi4GizjuK2Tk~BfoIEq1pZy8n7HUjbrL-1lTd8bHH~nAMlLRwXGCunTmI1YeNpGlj9d6ygSRCvI~SNKRkLYkTkxSp6CGEIx4IFir1wDeGyl-2~u3mCR7GyCS~07a1Rz-OmtioXf7Ie2O5DCV8kuthzmCd7TY05EeP8ds0AEdQy-s4EiEJu-1AqFoqMCBCE23q01MRXWCC2w__&Key-Pair-Id=APKAJT6QIWSKVYK3V34A" controls />

```plaintext title="keywords.txt" {1,5,20,26,40,45,67,72,86,93,105}
==Tut5==
understanding space allocation and layout of a file system
permissions vs. dentries vs. inodes vs. superblocks vs. etc.

==Lec11, Lec13 - Concurrency==
**refer to the review slides at the end of the "Security Considerations" topic
communication/interaction between multiple processes? => IPC mechanisms
messaging vs. shared memory (****pros and cons****)
pipes: unnamed (created with syscall pipe) vs. named, aka FIFOs (created with mknod/mkfifo) - differences
**overhead of message passing: two factors
**mmap() - three ways of using it
now concurrency issues for shard mem, why?
multiple points of exec, interaction allowing updates, lack of atomicity
concepts: race condition (determined by timing), critical section
**sync/coordination mechanisms: mutex (lock), condition variable, semaphore 
the principle for setting the init value for semaphores
two types of consequences: corruption or deadlock
***4 conditions for a deadlock to occur

==Tut6==
**differences between:
message passing - 3000pc-fifo
shared mem - 3000pc-rendezvous


==Lec14, Lec15 - Kernel Modules==
Comparison of ways to introduce changes to the OS: 
kernel code change vs. ebpf vs. moving to userspace
**relationship: kernel image, kernel module, device driver
risks of kernel code change
***kernel module signing
commands for dealing with kernel modules
what makes a skeleton kernel module
file operations for a device driver
why put/get_user()/copy_from/to... are needed
*kernel modules are very version specific
**eBPF: nature + restrictions
High-level understanding: Rust

==Tut7==
understand the two aspects of accessing a file/device
understand the workflow of a device driver


==Lec16, Lec17 - Memory Management==
Refer to the review at the end of the "Security Considerations" topic
in-process vs. global/kernel mem management
malloc(): already allocated vs. requesting more (brk/sbrk/mmap)
allocation granularity: mem (pages), storage (blocks)
mapping from "fragmented" to continuous/virtual
MMU (HW) does the virt-phys translation, why
**multi-level paging: understand the design choices and their consequences/implications**

CR3 (pointing to the root/top-level table)
**what's in a PTE?
TLB: real cache (storing PTEs)
page cache: regular memory (caching content loaded from files/devices)
**understand the page table walk (translation workflow) on page 21
canonical addresses
swapping/paging: to move pages to disk storage
page fault to signal page absence
*page fault handler -> kernel code (not HW)
**clock algorithm - LRU
OOM killer vs. low-memory killer
thrashing: oversubscribed

==Tut8==
to better understand page cache
to better understand the page table walk


==Lec18, Lec19 - Containers==
VMs vs. containers (overhead: load time, space, etc. vs. security/isolation)
***functional building blocks: cgroups, namespaces and capabilities
*additional building blocks: security enhancement
capabilities: more fine-grained
***file capabilities vs. setuid
namespaces: different views - isolation through visibility
cgroups: metering or quota control
LSMs are not kernel modules
building blocks + execution drivers = containers
management tools: nice to have for usability
Docker positioning: single app, reuse
k8s: orchestration

==Tut9==
layered FS
flavors of Docker configurations
namespaces
related to: static linking vs. dynamic linking


==Lec20, Lec21, Lec22 - Security==
**threat model, TCB
CIA goals
**good understanding of cryptography vs access control (logic), be able to 
tell which is involved in a given mechanism
symmetric vs. public key crypto
design flaws vs. implementation errors
vuls <- TCB size <- LOC (code size)
***three authentication factors
Multi-factor vs. secondary factors
rootkit vs. ransomware vs. backdoors vs. keyloggers (how they are related to each other)

==Lec23 - Boot==
PC firmware: BIOS/UEFI
bootloader: GRUB
**the boot process (order)
```