---
title: "ABENABAP_DYNPROS_SCREEN"
description: |
  ABENABAP_DYNPROS_SCREEN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_DYNPROS_SCREEN.htm"
abapFile: "ABENABAP_DYNPROS_SCREEN.html"
keywords: ["select", "do", "if", "try", "data", "ABENABAP", "DYNPROS", "SCREEN"]
---

The [screen layout](ABENSCREEN_GLOSRY.html) of a [dynpro](ABENDYNPRO_GLOSRY.html) is created in the [Layout Editor](ABENLAYOUT_EDITOR_GLOSRY.html) in the [Screen Painter](ABENSCREEN_PAINTER_GLOSRY.html). The screen layout of the program `DEMO_DYNPRO` contains all possible screen elements. Above the screen layout, the menu bar, standard toolbar, title bar, and the application toolbar can be seen. The status bar is located at the bottom.

The following table summarizes the screen elements you can use:

All screen elements have a set of attributes, some of which are set automatically, others of which have to be specified in the Screen Painter. They determine things such as the layout of the screen elements on the screen. You can set the attributes of screen elements in the Screen Painter - either for a single element, or using the element list, which lists all of the elements belonging to the current screen. Some of the attributes that you set statically in the Screen Painter can be overwritten dynamically in the ABAP program.

The following subtopics are covered in this section:

[Screen Painter (Help Portal Documentation)](https://help.sap.com/docs/ABAP_PLATFORM_NEW/bd833c8355f34e96a6e83096b38bf192/d1801b50454211d189710000e8322d00)

-   [dynpro - Status Icons](ABENDYNPRO_STATUS_ICONS.html)
-   [dynpro - Context Menus](ABENDYNPRO_CONTEXT_MENUS.html)
-   [dynpro - Subscreens](ABENDYNP_SUBSCREEN.html)
-   [dynpro - Tabstrip Controls](ABENDYNP_TABSTRIP.html)
-   [dynpro - Splitter Controls](ABENDYNP_SPLITTER_CONTROL_SPCL.html)
-   [dynpro - Custom Controls](ABENDYNPRO_CUSTOM_CONTROLS.html)
-   [dynpro - Table Controls](ABENDYNP_TABLE_CONTROLS.html)
-   [dynpro - Examples of Screen Elements](ABENSCREEN_ELEMENTS_ABEXAS.html)

**Screen Element** **Details**\\ Text fields Display elements, which cannot be changed either by the user or by the ABAP program. Input/output fields and templates Used to display data from the ABAP program or for entering data on the screen. Linked to screen fields. Dropdown list boxes Special input/output fields that allow users to choose one entry from a fixed list of possible entries. Checkbox elements Special input/output fields that the user can either select (value *X*) or deselect (value *SPACE*). Checkbox elements can be linked with function codes. Radio button elements Special input/output fields that are combined into groups. Within a radio button group, only a single button can be selected at any one time. When the user selects one button, all of the others are automatically deselected. Radio button elements can be linked with function codes. Pushbuttons Elements on the screen that trigger the PAI event of the screen flow logic when chosen by the user. There is a function code attached to each pushbutton, which is passed to the ABAP program when it is chosen. Group boxes Pure display elements that group together elements on the screen, such as radio button groups. Subscreens Area on the screen in which you can place another screen. Table controls Tabular input/output fields. Tabstrip controls Areas on the screen in which you can switch between various pages. Custom controls Areas on the screen in which you can display controls. Controls are software components of the presentation server. Status icons Display elements, indicating the status of the application program. `ok` field Every screen has a twenty-character `ok_code` field (also known as the function code field) that is not displayed directly on the screen. User actions that trigger the PAI event also place the corresponding function code into this field, from where it is passed to the ABAP program. You can also use the command field in the standard toolbar to enter the `ok` field. To be able to use the `ok` field, you need to assign a name to it. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_elements.html