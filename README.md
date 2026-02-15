# GPU Selector

**Multi-GPU Game Launcher for Windows**

GPU Selector is a game launcher that lets you choose which GPU to use for each game. Built for multi-GPU desktop setups, it provides a single interface for managing games, emulators, and modding tools like ReShade, DXVK, and dgVoodoo2.

## Features

- **Multi-GPU Forcing** - Launch any game on a specific GPU (Intel, NVIDIA, AMD) using multiple force methods
- **Game Library** - Automatically detects games from Steam, GOG, Epic Games, and other launchers
- **Emulator Support** - Manage emulators with ROM scanning and per-emulator configuration
- **ReShade Integration** - Install, configure, and manage ReShade with version selection and add-on support
- **DXVK / VKD3D-Proton** - Translate DirectX 8-11 to Vulkan for improved performance on modern GPUs
- **dgVoodoo2** - Run legacy DirectX 1-9 and 3dfx Glide games on modern systems
- **WineD3D / Zink** - Additional graphics translation layers for compatibility
- **Custom Games & Apps** - Add any executable as a custom game or application
- **Multi-Launch** - Launch games with multiple executables simultaneously
- **Modding Codex** - Browse a curated database of community-driven game preservation and modding projects
- **Easter Egg Themes** - Over 45 hidden themes triggered by searching for iconic game titles

## GPU Force Methods

| Method | API Support | Requirements |
|--------|------------|--------------|
| Windows GPU Preference | DX10+ | None |
| Disable Device | All APIs | Admin |
| Vulkan vkconfig | Vulkan | Vulkan SDK |
| Vulkan Hide ICD | Vulkan | None |
| Monitor Switch | DX9 / OpenGL | Multi-monitor |

## System Requirements

- **OS:** Windows 10 or later (x64)
- **Runtime:** WebView2 (pre-installed on Windows 10/11)
- **Hardware:** Any multi-GPU desktop system (integrated + dedicated, or multiple dedicated GPUs)

## Installation

1. Download `GPUSelectorSetup.exe` from the [Releases](https://github.com/BlueSkyDefender/GPUSelector/releases) page
2. Run the installer and follow the prompts
3. Launch GPU Selector from the Start Menu or Desktop shortcut

## Getting Started

1. GPU Selector will automatically scan for installed games on first launch
2. Select a game from the library
3. Choose your preferred GPU from the dropdown
4. Click Launch

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `/` or `F` | Focus search bar |
| `Escape` | Clear search / Close dialogs |
| `1-6` | Switch tabs (GPUs, Games, Emu, Apps, Mods, Settings) |

## Screenshots

*Coming soon*

## Accessibility

- Dyslexia-friendly mode with OpenDyslexic font support
- High DPI scaling with compact mode for 250%+ displays
- Chameleon mode that syncs with your Windows accent color
- Full keyboard navigation

## License

Free Software - Personal Non-Commercial Use Only. See [LICENSE](LICENSE) for full details.

## Author

**Jose Negrete** (Depth3D)

- GitHub: [BlueSkyDefender](https://github.com/BlueSkyDefender)

---

*GPU Selector v1.0.0*
