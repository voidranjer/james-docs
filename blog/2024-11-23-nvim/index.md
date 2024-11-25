---
slug: astro-nvim
title: AstroNvim for the Power User
description: Various resources for learning and configuring Neovim
authors: [jamesyap]
tags: []
---

Some indespensible resources that I used to learn and configure my Neovim instance.

<!--truncate-->

---

## [Project Rooter](https://docs.astronvim.com/recipes/rooter/)

- `autochdir = true`: Automatically `cd` into the detected root directory.
- `notify = true`: Notify on `cd`.

## [toggleterm.nvim](https://github.com/akinsho/toggleterm.nvim)

If you plan on using the Fish shell (or any other shell different from the login shell), configure it here.
It is generally recommended to keep the login shell to the default (trusty Bash) because some programs expect a POSIX-compliant login shell.

```lua
-- Change the default shell. Can be a string or a function returning a string
shell = vim.o.shell,
```

## [copilot.lua](https://github.com/zbirenbaum/copilot.lua)

- Enable GitHub Copilot
- `{ import = "astrocommunity.completion.copilot-lua" }`

## Learning

### Beginners Guide to Neovim

- [Neovim With AstroNvim | Your New Advanced Development Editor](https://www.youtube.com/watch?v=GEHPiZ10gOk)
- [0 to LSP : Neovim RC From Scratch](https://www.youtube.com/watch?v=w7i4amO_zaE)

### Lua and Configurations

- [Learn Lua in Y Minutes](https://learnxinyminutes.com/docs/lua/)
- [The Only Video You Need to Get Started with Neovim](https://www.youtube.com/watch?v=m8C0Cq9Uv9o)
- [The Official Lua in Nvim Guide](https://neovim.io/doc/user/lua-guide.html)
- [ThePrimeagen's `init.lua`](https://github.com/ThePrimeagen/init.lua)


## Misc

### Formatting JSON

- Run this command: `:%!jq '.'`

### Remapping Caps Lock:Esc

- https://superuser.com/questions/566871/how-to-map-the-caps-lock-key-to-escape-key-in-arch-linux
- `setxkbmap -option caps:escape`

### Version Issues

- At times, when facing weird, non-standard issues, it could be because some plugins are either missing, or **do not support the Neovim version** that you are running. During these trying times, `:checkhealth` is your biggest friend.
- Ymmv, but the [Snap (stable)](https://github.com/neovim/neovim/blob/master/INSTALL.md#snap) version of Neovim has worked best for me.

