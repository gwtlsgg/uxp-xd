---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
---

# The manifest.json file (v3)

The manifest is where you include metadata about your plugin. Simply put, the manifest is a list of facts about your plugin in the form of a JSON object. No executable code goes into your manifest.

The manifest is located in your plugin's root folder and must be named `manifest.json`.

## Example manifest

```json
{
  "id": "YOUR_ID_HERE",
  "name": "Name of Your Plugin",
  "version": "0.0.1",
  "icons": [
    { "width": 24, "height": 24, "path": "images/icon@1x.png" },
    { "width": 48, "height": 48, "path": "images/icon@2x.png" }
  ],
  "host": {
    "app": "XD",
    "minVersion": "21.0"
  },

  "uiEntryPoints": [
    {
      "type": "menu",
      "label": "Hello World Command",
      "commandId": "helloCommand"
    },
    {
      "type": "panel",
      "label": "Hello World Panel",
      "panelId": "helloPanel"
    }
  ]
}
```

See the sections below to learn more about each key/value field. All fields are required unless otherwise noted below.

## Top-level metadata

The top level of the manifest JSON object contains high-level information about your plugin.

> **Info**
> Here are the definitions of the keywords in the "Required" column:
>
> - Develop - required field for XD to run the plugin. If excluded, XD won't load the plugin
> - Publish - required field for plugins to be submitted in the Adobe Developer Console and published in the Plugin Manager

| Key path          | Type                                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                        | Required          |
| ----------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| `id`              | `string`                                              | Unique identifier for your plugin. You can get your unique ID on the [Adobe Developer Console](https://console.adobe.io/projects).                                                                                                                                                                                                                                                                                 | Develop / Publish |
| `name`            | `string`                                              | The name should be 3 - 45 characters. <br/> **Note:** We recommend your plugin name matches the _project name_ you created when getting your plugin ID from the Adobe Developer Console.                                                                                                                                                                                                                           | Develop / Publish |
| `version`         | `string`                                              | Version number of your plugin in `x.y.z` format. <br/>Version must be three segments and each version component must be between `0` and `99`.                                                                                                                                                                                                                                                                      | Develop / Publish |
| `icons`           | `array<object>`                                       | Icons displayed in XD's plugins panel. <br/> PNG, JPG/JPEG formats are supported and the max file size for each icon is 1MB. <br/> Two sizes are required - `[24, 48]`. <br/> **Note:** Icons for XD's Plugin Manager are uploaded directly via the Adobe Developer Console, not included within your plugin itself. See our ["Publishing your plugin" guide](/distribution/packaging-your-plugin/) to learn more. | Publish           |
| `host.app`        | `string`                                              | Indicates that this is a plugin for Adobe XD (currently, the only valid value here is `"XD"`).                                                                                                                                                                                                                                                                                                                     | Develop / Publish |
| `host.minVersion` | `string`                                              | Minimum required version of the host app (in `x.y` format) that can run this plugin. The lowest valid version for headless and modal plugins is `13.0`. The lowest valid version for panel plugins is `21.0`. <br/> **Note:** The version number must be two segments. Typically, you'll leave the minor segment set to `0`, e.g. `16.0`.                                                                          | Develop / Publish |
| `host.maxVersion` | `string`                                              | Maximum version of host app that can run this plugin. Same formatting as `host.minVersion`.                                                                                                                                                                                                                                                                                                                        | Optional          |
| `uiEntryPoints`   | `array<[MenuItemDefinition](#MenuItemDefinition)&gt;` | Describes the entries your plugin adds to the _Plugins_ menu & "plugin launchpad" sidebar in XD. See the next section for details.                                                                                                                                                                                                                                                                                 | Develop / Publish |

## UI entry points

The `uiEntryPoints` field is an _array_ of objects matching the MenuItemDefinition format specified below. These entries appear both in the _Plugins_ menu in the native menubar, and the "plugin launchpad" sidebar panel. See [Plugin menu structure](/develop/plugin-development/plugin-structure/menu-structure/) for details on how these entries are displayed.

Each entry point specifies either `commandId` _or_ `panelId`, to create either a direct-action command or a panel show/hide command.

### MenuItemDefinition

| Key         | Type                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`      | `string`                                       | Entry point type: either `"menu"` or `"panel"`.                                                                                                                                                                                                                                                                                                                                                                            |
| `label`     | `?string` or `[LocaleMap](#menu-localization)` | _Required_ if multiple `MenuItemDefinition` objects defined; _ignored_ if only one defined.<br/><br/> Label for this menu item that the user will select to run your plugin. May be a single string _or_ a dictionary of localized strings.<br/><br/>Note: _If you only have 1 `commandId` or `panelId`_, the `label` value **must match** the manifest's `name` value. Additionally, the "Public plugin name" you submit via the Adobe Developer Console must match the manifest's `name` and `label` values.                                                                                                                                                                                |
| `commandId` | `string`                                       | Specify `commandId` to create a menu item that runs plugin code directly -- either a headless command, or a command with modal dialog UI. This identifier links the menu item to a [_handler function_](/develop/plugin-development/plugin-structure/handlers/#command) in your plugin's JavaScript code. This identifier needs to be unique within your plugin.<br/><br/>Note: Don't specify `commandId` and `panelId` at the same time. |
| `panelId`   | `string`                                       | Specify `panelId` to create a menu item that opens panel UI for your plugin. This identifier links the menu item to a [_panel definition object_](/develop/plugin-development/plugin-structure/handlers/#panel) in your plugin's JavaScript code. This identifier needs to be unique within your plugin.<br/><br/>Note: Don't specify `commandId` and `panelId` at the same time.                                                         |
| `shortcut`  | `Object`                                       | _Optional._ Object defining Mac and Windows keyboard shortcuts for this menu item. See "Keyboard shortcuts" below for details.                                                                                                                                                                                                                                                                                             |

### Keyboard shortcuts

**Example:** `"shortcut": { "mac": "Cmd+Shift+P", "win": "Ctrl+Shift+P" }`

Keyboard shortcuts are defined separately for each platform. Each definition is a string that follows this syntax:

- One or more modifier keys, in any order, each one followed by `"+"`

  - _Mac:_ modifiers may be `Cmd`, `Ctrl`, `Opt` / `Alt`, or `Shift`. Shortcut _must_ contain at least one of `Cmd` or `Ctrl`.
  - _Win:_ modifiers may be `Ctrl`, `Alt`, or `Shift`. Shortcut _must_ contain `Ctrl`.

- A letter or number key.
  - Letters are case-insensitive (e.g. `"Cmd+P"` and `"Cmd+p"` mean the same thing and neither requires pressing Shift).
  - Other keys (including punctuation, arrow keys, or F1-F12) are currently _not supported_.

> **Info**
> If your shortcut collides with a built-in XD command _or_ another plugin's shortcut, your shortcut will be ignored and you'll see a warning printed to the [developer console](/develop/tutorials/debugging/#1-look-for-errors-in-the-developer-console).

## Menu Localization

Plugin menu item labels or panel labels can be localized to match XD's current UI language setting. Other manifest fields such as `name` _cannot be localized yet._

Localized labels are represented as an object containing multiple translations, instead of a single string value:

```json
"label": {
    "default": "Menu Label",
    "fr": "Etiquette de Menu",
    "de": "Menübezeichnung"
}
```

A default string is always required. The language must be a two-letter code from [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes), _not_ a hyphenated code such as `en-US`. To avoid inconsistency with the rest of XD's built-in menu items, languages that aren't supported by XD are ignored.

> **Info**
> You can also localize strings that appear in your plugin's own dialog UI, by choosing which strings to use in your UI based on the value of [application.appLanguage](/develop/reference/application/#module_application-appLanguage).
