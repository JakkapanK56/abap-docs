---
title: "ABENDYNPRO_STATUS_ICONS"
description: |
  ABENDYNPRO_STATUS_ICONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNPRO_STATUS_ICONS.htm"
abapFile: "ABENDYNPRO_STATUS_ICONS.html"
keywords: ["insert", "if", "ABENDYNPRO", "STATUS", "ICONS"]
---

Status icons are [screen elements](ABENSCREEN_ELEMENT_GLOSRY.html) that you can use to represent the state of a program graphically. In principle, you can use any of the icons available in the [SAP GUI](ABENSAP_GUI_GLOSRY.html). However, the choice should be limited to those icons specifically for this purpose.

You can only create status icons in the graphical [Screen Painter](ABENSCREEN_PAINTER_GLOSRY.html). When you create one, you assign a name and a screen field to it. This screen field is known as a status field. The visible length of the screen field determines the amount of space that the icon can use on the screen. Apart from the icon itself, you can also insert text in the field. The actual length (`defLg`) of the status field must be long enough for the internal representation of the icon, plus any text and tooltip text that you specify. When you create the status icon in the Screen Painter, a placeholder appears on the screen. You must specify the icon itself, its text and tooltip text in the [PBO](ABENPBO_GLOSRY.html) event of your ABAP program.

To define the icon in your ABAP program, you must create a field with the same name as the status field on the screen and the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) type `ICON_TEXT` (alternatively, you can use `ICONS-TEXT`, i. e. the `TEXT` component of the DDIC structure `ICONS`). You can then fill this field with the required technical information in the PBO event. When the screen is displayed, the information is transferred to the status field and the icon appears.

To fill the field in your ABAP program, use the function module `ICON_CREATE`. It has the following import parameters:

The function module converts these parameters into a single string, which is returned in the export parameter `RESULT`. When you assign the result parameter to the status field, it contains all the information required to display the status icon.

[dynpro - Status Icons](ABENDYNPRO_STATUS_ICONS_ABEXA.html)

-   `NAME`
-   The name of the required icon. These are listed in the include program `<ICON>`, or the corresponding input help in the Screen Painter or Menu Painter.
-   `TEXT`
-   This parameter allows you to enter a text that will appear after the icon on the screen.
-   `INFO`
-   In this parameter, you can specify an info text, which appears as tooltip on the screen.
-   `ADD_STDINF`
-   This flag switches the tooltip display on or off.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_elements.html abenabap\_dynpros\_screen.html