---

# GPU Selector

**Multi-GPU Game Launcher for Windows & Linux**

GPU Selector is a game launcher that lets you choose which GPU to use for each game. Built for multi-GPU desktop setups, it provides a single interface for managing games, emulators, and modding tools like ReShade, DXVK, and dgVoodoo2.

## Features

- **Multi-GPU Forcing** - Launch any game on a specific GPU (Intel, NVIDIA, AMD) using multiple force methods
- **Game Library** - Automatically detects games from Steam, GOG, Epic Games, Nexon, and other launchers
- **Emulator Support** - Manage emulators with ROM scanning and per-emulator configuration
- **ReShade Integration** - Install, configure, and manage ReShade with version selection, add-on support, inject mode, proxy DLL mode, and launcher injection mode
- **DXVK / VKD3D-Proton** - Translate DirectX 8-11 to Vulkan for improved performance on modern GPUs
- **dgVoodoo2** - Run legacy DirectX 1-9 and 3dfx Glide games on modern systems
- **WineD3D / Zink** - Additional graphics translation layers for compatibility
- **Custom Games & Apps** - Add any executable as a custom game or application
- **Multi-Launch** - Launch games with multiple executables simultaneously
- **Brightness Controls** - Per-game and desktop brightness with dual-range sliders, IOCTL fallback, and gamma ramp support
- **DPI Fix** - Automatic DPI awareness correction for games and Electron apps at non-100% display scaling
- **Modding Tools** - Drag-and-drop custom mod card system with JSON-based mod definitions
- **Modding Codex** - Browse a curated database of community-driven game preservation and modding projects
- **Linux/Wine Support** - Runs under Wine with automatic detection, adapted UI, and launcher injection as the default ReShade method
- **Auto-Update Checker** - Checks GitHub for new releases on startup with a Discord-style notification icon
- **Easter Egg Themes** - Over 45 hidden themes triggered by searching for iconic game titles

## GPU Force Methods

| Method | API Support | Requirements |
|--------|------------|--------------|
| Windows GPU Preference | DX10+ | None |
| Disable Device | All APIs | Admin |
| Vulkan Hide ICD | Vulkan | None |

## ReShade Modes

| Mode | Description | Use Case |
|------|-------------|----------|
| Inject Mode | Remote DLL injection at runtime | UWP, protected games, multi-game setups |
| Proxy DLL Mode | Deploy ReShade as a proxy DLL next to the game | Maximum compatibility |
| Launcher Injection | Generate a launcher script to run the injector alongside the game | Windows and Wine/Linux (default on Wine) |
| Vulkan Layer Mode | ReShade as an implicit Vulkan layer | Vulkan-only games |

## Mod Cards

GPU Selector includes built-in mod cards for:

- **Windower 4** - FFXI config sync, backup, and add-on management
- **3DConsoleBridge** - Capture card 3D display shader with setup guide and hardware shopping list

Custom mod cards can be created and shared as JSON files.

## System Requirements

- **OS:** Windows 10 or later (x64)
- **Runtime:** WebView2 (pre-installed on Windows 10/11)
- **Hardware:** Any multi-GPU desktop system (integrated + dedicated, or multiple dedicated GPUs)
- **Linux:** Runs under Wine 9.0+ with `winetricks vcrun2022` and WebView2 installed in the Wine prefix

## Installation

### Windows
1. Download `GPUSelectorSetup.exe` from the [Releases](https://github.com/BlueSkyDefender/GPUSelector/releases) page
2. Run the installer and follow the prompts
3. Launch GPU Selector from the Start Menu or Desktop shortcut

### Linux (Wine)
1. Download `GPUSelectorSetup.exe` from the [Releases](https://github.com/BlueSkyDefender/GPUSelector/releases) page
2. Extract with `7z x GPUSelectorSetup.exe` (the exe is also a valid ZIP archive)
3. Install dependencies: `winetricks vcrun2022`
4. Run: `wine install.bat` and follow the prompts
5. Or run directly: `wine GPUSelector.exe`

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

## Building from Source

### Requirements

- **Visual Studio 2022** (v143 toolset)
- **Windows 10 SDK** (10.0 or later)
- **WebView2 NuGet Package** (`Microsoft.Web.WebView2`)
- **Python 3** (for version syncing and HTML regeneration)

### Installation

#### Windows
1. Download `GPUSelectorSetup.exe` from the [Releases](https://github.com/BlueSkyDefender/GPUSelector/releases) page
2. Run the installer and follow the prompts
3. Launch GPU Selector from the Start Menu or Desktop shortcut

#### Linux (Wine)
1. Download `GPUSelectorSetup.exe` from the [Releases](https://github.com/BlueSkyDefender/GPUSelector/releases) page
2. Extract with `7z x GPUSelectorSetup.exe` (the exe is also a valid ZIP archive)
3. Install dependencies: `winetricks vcrun2022`
4. Run: `wine install.bat` and follow the prompts
5. Or run directly: `wine GPUSelector.exe`

## Accessibility

- Dyslexia-friendly mode with OpenDyslexic font support
- High DPI scaling with compact mode for 250%+ displays
- Chameleon mode that syncs with your Windows accent color
- Full keyboard navigation

## License

Free Software - Personal Non-Commercial Use Only. See [LICENSE](LICENSE) for full details.

## Credits

- **Launcher Injection Mode** based on [cmd_inject](https://github.com/Stereo-3D/cmd_inject) by tjandra

## Author

**Jose Negrete** (Depth3D)

- GitHub: [BlueSkyDefender](https://github.com/BlueSkyDefender)

---

*GPU Selector v1.2.9*
