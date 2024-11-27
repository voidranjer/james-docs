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

**Useful notes:**

- Quit toggleterm window by entering `<C-d>` into the terminal.
- Use `q` to quit Lazygit (`<leader>tl`)

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

### Vim

- Reset file changes: `:e!`
- Separate System and Vim Registers: `<C-r>+`
- Navigate between jumps: `<C-i>` and `<C-o>`
- Scrolling without cursor: `<C-e>` and `<C-y>`
- Folding: `za`
- Format JSON file: `:%!jq '.'`
- Print full path of file: `:echo expand('%:p')`
- Save without formatting: `:noautocmd w` or `:noa w`
- Scrolloff setting: `vim.opt.scrolloff = 8`


### neo-tree

- Folding: `C`
- Navigate to a different directory: `:Neotree dir=..`

### lazygit

- Compare items (branches, commits, etc): `<C-e>`


### manimgl

```lua
vim.api.nvim_create_user_command(
  "ManimCheckpointPaste", -- Command name
  function()
    -- Ensure ToggleTerm is loaded
    local ok, toggleterm = pcall(require, "toggleterm")
    if not ok then
      print "ToggleTerm not installed!"
      return
    end

    -- Get the start and end positions from the visual selection
    local start_line = vim.fn.line "'<" - 1 -- Start line of the visual selection (0-based)
    local end_line = vim.fn.line "'>" - 1 -- End line of the visual selection (0-based)

    -- Get the lines in the specified range
    local lines = vim.api.nvim_buf_get_text(0, start_line, 0, end_line, -1, {})

    -- Concatenate lines to create the selected text
    local selected_text = table.concat(lines, "\n")

    -- Copy the selected text to the system clipboard
    vim.fn.setreg("+", selected_text) -- Set the text to the `+` register (system clipboard)
    vim.fn.setreg("*", selected_text) -- Set the text to the `*` register (primary clipboard on some systems)

    -- Store the current window ID
    local current_win = vim.api.nvim_get_current_win()

    -- Send the text to ToggleTerm
    local term = require("toggleterm.terminal").get(1) -- Get the first terminal, or replace with desired ID
    if term then
      -- Sending the copied text to the terminal
      term:send "checkpoint_paste()"
    else
      print "No ToggleTerm terminal found!"
    end

    -- Restore focus to the original window
    vim.api.nvim_set_current_win(current_win)

    -- Ensure the editor is in normal mode
    vim.api.nvim_feedkeys(vim.api.nvim_replace_termcodes("<Esc>", true, false, true), "n", false)
  end,
  {
    -- range = true, -- Enable range support
    desc = "Copy highlighted text to clipboard and run `checkpoint_paste()` in ToggleTerm",
  }
)

-- Map the function to a key in visual mode
vim.api.nvim_set_keymap("v", "<leader>s", ":<C-U>ManimCheckpointPaste<CR>", { noremap = true, silent = true })
```


## Misc

### AstroNvim

- [AstroNvim mappings](https://docs.astronvim.com/mappings)
- Python Language Support: `{ import = "astrocommunity.pack.python" }` (in `community.lua`). This adds many quality of life features like [venv-selector.nvim](https://github.com/linux-cultist/venv-selector.nvim)

### Remapping Caps Lock:Esc

- https://superuser.com/questions/566871/how-to-map-the-caps-lock-key-to-escape-key-in-arch-linux
- `setxkbmap -option caps:escape`

### Version Issues

- At times, when facing weird, non-standard issues, it could be because some plugins are either missing, or **do not support the Neovim version** that you are running. During these trying times, `:checkhealth` is your biggest friend.
- Ymmv, but the [Snap (stable)](https://github.com/neovim/neovim/blob/master/INSTALL.md#snap) version of Neovim has worked best for me.

