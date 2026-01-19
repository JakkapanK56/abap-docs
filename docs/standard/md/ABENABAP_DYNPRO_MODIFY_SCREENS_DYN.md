---
title: "ABENABAP_DYNPRO_MODIFY_SCREENS_DYN"
description: |
  ABENABAP_DYNPRO_MODIFY_SCREENS_DYN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_DYNPRO_MODIFY_SCREENS_DYN.htm"
abapFile: "ABENABAP_DYNPRO_MODIFY_SCREENS_DYN.html"
keywords: ["select", "delete", "loop", "do", "while", "if", "case", "try", "data", "ABENABAP", "DYNPRO", "MODIFY", "SCREENS", "DYN"]
---

The attributes of dynpro elements are set statically in the Screen Painter when you define them. However, it is possible to override some of these attributes in ABAP programs using a special predefined structure.

The SAP system contains a function called field selection, which allows you to change the attributes of dynpros dynamically.

It is also possible to set the cursor on a dynpro to a particular position dynamically from your program.

**Setting Attributes Dynamically**

During runtime of the ABAP program, a part of the attributes of every screen field can be read to a predefined structure *screen* using specific statements. These attributes can then modify the dynpro fields.

You do not have to declare this structure in your program. You can access *screen* during dynpro processing in dialog modules.

Components of the structure:

The final column contains the corresponding attributes of the dynpro fields in the Screen Painter.

You can modify the structure `screen` in your ABAP program during the PBO event of a dynpro so as to modify dynpro elements in the ABAP program. The modified elements override the static attributes of the dynpro fields for exactly a single dynpro call. The only allowed statements that you can use with `screen` are:

LOOP AT SCREEN. ... \\n... \\n\\ \\nMODIFY SCREEN. \\n\\ \\n... \\n\\ \\nENDLOOP.

The component `name` contains the name of the dynpro field. The components `group1` to `group4` can contain any three-character code. These codes allow you to include dynpro fields in up to four modification groups. A dynpro field can belong to different modification groups. Modification groups are like an extra key field for the structure `screen` that allow you to change the attributes of all of the elements in a group simultaneously. You assign elements to modification groups statically in the Screen Painter, although you can overwrite them dynamically in a program.

The remaining components are for reading and activating or deactivating the display attributes of dynpro fields. The setting of `length = 0` for components indicates that they are inactive, while `length = 1` signifies that they are active.

There are certain hierarchy rules between the components `active`, `input`, `output`, and `invisible`. They also have different effects depending on their respective static settings.

The `active` component has no equivalent in the element attributes. Instead, it changes the components `input`, `output`, and `invisible`.

At the beginning of the PBO, `active` is always set to 1, regardless of the static attribute settings. Setting `active` to 0 automatically sets `input` to 0, `output` to 0, and `invisible` to 1. Any other changes to the settings of `input`, `output`, and `invisible` to the current screen element are ignored. Conversely, setting `input` to 0, `output` to 0, and `invisible` to 1 automatically sets `active` to 0, and any further assignment to `active` for the current screen element will be ignored. The setting `active` to 1 has no other effect on the attributes. The only purpose of the `active` component is to allow you to make a screen field inactive through a single assignment. You should particularly note that a module call linked to a `FIELD` statement in the screen flow logic is always executed, even when `screen-active` is 0 for the field in question. If you want to prevent a module from being processed for an inactive field, you must specify the `FIELD` and `MODULE` statements separately.

The following combinations of `active`, `input`, `output`, and `invisible` are possible and have a particular effect on screen fields:

If a field is statically defined as `output only`, setting `input` to 1 has no effect. `input` is always 0 for these fields. Masking user input by asterisks (`*`) can be used for entering user passwords.

If a whole line becomes invisible when you make fields invisible, the screen size is automatically reduced. You can, however, switch off this attribute in the static screen attributes by selecting *Switch off runtime compression*.

Further options:

**The Field Selection Function**

A special function *field selection* supports you in changing screen field attributes dynamically.

The function *field selection* allows you to change the attributes of screen fields dynamically at runtime. However, you should only use this option if you often need to assign different field attributes to the same screen for technical reasons. In this case, the same rules apply to all fields, so any field modification is clear.

The following basic rules apply:

With field selection, you can activate or deactivate the following attributes at runtime:

You can also determine the conditions and the type of changes involved. During the event `PROCESS BEFORE OUTPUT`, you call a function module which checks the conditions and, if necessary, changes the attributes.

Field selection distinguishes between modifying fields and modified fields. Modified fields must, of course, be screen fields. All fields should relate to the ABAP Dictionary. You can do this by creating corresponding interface work areas in the ABAP program using `TABLES`. At runtime, a function module analyzes the field content of the modifying fields and then sets the attributes of the modified fields accordingly.

Rather than maintaining field selection separately for each screen of a program, you can combine logically associated screens together in a screen group. This reduces the amount of maintenance required. To assign a screen to a screen group, enter the group in the field `screen group` on the attributes screen in the Screen Painter.

To call *field selection*, choose *Tools -> ABAP Workbench -> Development -> Other Tools -> Field Selection*. The maintenance can be done by program and screen group.

**Setting the Cursor Position**

When a screen is displayed, the system automatically places the cursor in the first field that is ready for input. However, you can also define on which screen element the cursor should appear in your program. The screen element does not have to be an input field. Positioning the cursor can make applications more user-friendly.

You can set the cursor position either statically in the Screen Painter or dynamically in your ABAP program.

**Holding Data Dynamically**

In the attributes of a screen, you can enable the following standard menu entries by setting the `Hold Data` attribute:

-   `required`: When you set `required` to 1, a field that is ready for input is made mandatory. Users can only leave the screen when all mandatory fields contain an entry. An exception to this is function codes of type `E` and modules with the `AT EXIT-COMMAND` addition.
-   `display_3d`: When you set `display_3d` to 0, the three-dimensional frame for input or output fields is removed. You cannot use `display_3d` set to 1 to create a three-dimensional effect for text fields or screen fields with the `output only` attribute.
-   `value_help`: Setting `value_help` to 0 or 1 switches the input help button off and on respectively.
-   `intensified`: If you set `intensified` to 1, the field content of input fields are changed from black to red. The content of output fields are changed from black to blue.
-   `length`: You can set the `length` component to a value shorter than the statically defined output length (`vislength`) for input or output fields and `output only` fields. This allows you to shorten their output length. You cannot shorten other screen elements, or lengthen any screen elements.
-   `request`: Setting `request` to 1 for a field that is ready for input has the same effect in the PAI event as if the user had changed the field content. This means that a conditional module call using `ON REQUEST` or `ON CHAIN-REQUEST` would be executed regardless of whether the user really changed the field. `request` is automatically reset to 0.

-   All fields involved in the field selection process are grouped together in field selection tables and maintained using the *field selection* function.
-   You can maintain fields for an ABAP program or screen group.
-   On screens belonging to the screen group "blank", there is no dynamic field selection.
-   Central field selection uses the modification group `screen-group1`, which therefore cannot be used for anything else.
-   If you use fixed special rules in the field selection which are the same as changing the program, you should make the changes directly in the program, not in the maintenance transaction.

-   `input`
-   `output`
-   `required entry field`
-   `active`
-   `highlighted`
-   `invisible`

-   Static cursor position: To define the cursor position statically, enter the name of the required dynpro element in the cursor position `screen attribute` in the Screen Painter.
-   Dynamic cursor position: To set the cursor position dynamically, use the following statement in an ABAP dialog module in the PBO event: `SET CURSOR FIELD f [OFFSET off].`
-   `f` can be a literal or a variable containing the name of a screen element. You can use the `OFFSET` addition to place the cursor at a particular point within an input or output field.

-   *System -> User Profile -> Hold Data*
-   *Hold data* allows users to retain values that they have entered on a screen so that they appear the next time they start the same transaction. Only values actually entered by the user are retained. These values are again set as default values in the corresponding input fields every time the screen is reprocessed. In this process, the values transported from the ABAP program at PBO are overwritten.
-   *System -> User Profile -> Set Data*
-   The *Set Data* menu option has the same effect as *Hold data*. Additionally, when the held data is placed in the screen fields, these fields are no longer ready for input.
-   *System -> User Profile -> Delete Data*
-   The *Delete Data* menu option deletes the held data and makes the relevant fields on the screen ready for input again. If *Hold Data* is not activated in the screen attributes, the above menu entries have no effect. In the PBO event of a screen, you can overwrite the *Hold Data* attribute dynamically using the statement `SET HOLD DATA ON|OFF.` The `ON` addition activates the attribute and `OFF` deactivates it.

**Component** **Length** **Type** **Meaning** **Attribute**\\ `name` 132 C Name of the dynpro field `Name`\\ `group1` 3 C Modification group 1 `Group1`\\ `group2` 3 C Modification group 2 `Group2`\\ `group3` 3 C Modification group 3 `Group3`\\ `group4` 3 C Modification group 4 `Group4`\\ `required` 1 C Field input is mandatory `Mandatory field`\\ `input` 1 C Field is ready for input `Input`\\ `output` 1 C Field is for display only `Output`\\ `intensified` 1 C Field is highlighted `Highlighted`\\ `invisible` 1 C Field is suppressed `Invisible`\\ `length` 1 X Field length `VisLg`\\ `active` 1 C Field is active `Input/Output/Invisible`\\ `display_3d` 1 C Three-dimensional box `Two-dimensional`\\ `value_help` 1 C Input help button display `Input help`\\ `request` 1 C Input exists - `active` `input` `output` `invisible` **Effect**\\ 1 1 1 0 Screen field is displayed, even if `invisible` is set statically. \\
Field content is displayed. \\
Ready for input, even if `input` is not set statically. However, not ready for input if `output only` is set statically. 1 1 0 0 Screen field is displayed, even if `invisible` is set statically, except when `output only` is set statically. \\
Field content is not displayed. \\
Ready for input, even if `input` is not set statically. 1 0 1 0 Screen field is displayed, even if `invisible` is set statically. \\
Field content is displayed. \\
Not ready for input, even if `input` is set statically. 1 0 0 0 Screen field is displayed, even if `invisible` is set statically, except when `output only` is set statically. \\
Field content is not displayed. \\
Not ready for input, even if `input` is set statically. 1 1 1 1 Screen field is displayed, even if `invisible` is set statically, except when `output only` is set statically. \\
Field content is not displayed. \\
Ready for input, even if `input` is not set statically. User input is masked by asterisks (`*`). 1 1 0 1 Screen field is displayed, even if `invisible` is set statically, except when `output only` is set statically. \\
Output is masked by asterisks (`*`). \\
Ready for input, even if `input` is not set statically. User input is masked by asterisks (`*`). 1 0 1 1 Screen field inactive. \\
Screen field is not displayed, regardless of the static attributes. 0 0 0 1 Screen field inactive. \\
Screen field is not displayed, regardless of the static attributes. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_processing\_screens.html