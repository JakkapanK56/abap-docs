---
title: "ABENABAP_DYNPRO_USER_ACTIONS"
description: |
  ABENABAP_DYNPRO_USER_ACTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_DYNPRO_USER_ACTIONS.htm"
abapFile: "ABENABAP_DYNPRO_USER_ACTIONS.html"
keywords: ["select", "update", "do", "while", "if", "case", "try", "data", "types", "internal-table", "ABENABAP", "DYNPRO", "USER", "ACTIONS"]
---

There are various ways in which users can interact with dynpros:

If the `ok_code` field in the element list has a name (and is therefore assigned to the corresponding dynpro field), it is filled with the corresponding function code when the user chooses the function. If there is a field in the ABAP program with the same name, you can find out the function that the user chose by querying its content in a PAI module. If the `ok_code` field does not have a name, the PAI event is still triggered, but there is no dynpro field into which the function code can be passed. Note also that the `ok_code` field is filled with the content of the identically named field in the ABAP program in the PBO event.

The PAI event is always triggered when the user resizes a dynpro containing elements for which the Resizing attribute is active. This applies to table controls, subscreens, and custom controls.

**Processing Input/Output Fields**

Input/output fields are either conventional fields in which the user can enter values using the keyboard or by selecting from a value list, or checkboxes or radio buttons, for which the mouse is required. All input/output fields have a name that associates them with a dynpro field. The data type of the dynpro field determines the input format. For example, letters cannot be entered in an input field with a numeric type. The dynpro detects invalid values automatically. Radio buttons and checkboxes always have the data type `char` and length 1. A selected radio button or checkbox both fill the associated dynpro field with the value *X*, if not selected with space.

The ABAP program must contain identically named data objects that match the dynpro fields exactly, otherwise data may be lost. The ABAP fields for checkboxes and radio buttons must have the type `c` and length one.

After the PBO event is processed, the dynpro fields are filled with the values from the ABAP fields. Before or during the PAI event, the values from the dynpro fields are written to the ABAP fields. Only one radio button within a group can be selected at a time. If more than one of the associated fields contains the value *X*, the program terminates.

The following procedure ensures that dynpro fields and ABAP fields always match:

**Pushbuttons on the Dynpro**

Pushbuttons were originally the only elements of dynpros that trigger the PAI event when the user chooses them. As of release 4.6, you can also assign checkboxes, radio buttons, and dropdown boxes to function codes. In the attributes of a pushbutton, you can specify a function code up to 20 characters long.

Pushbuttons have a label - the text that you specify statically in the attributes - and can also have icons. If you set the output field attribute for a pushbutton, you can also set its text dynamically in the ABAP program. To do this, you must create a field in the ABAP program with the same name as the pushbutton. You must then assign the required text to the field before the dynpro is displayed. You can also assign icons to dynamic texts on pushbuttons by including the icon code in the text. The icon codes are all contained in the include program `ICON`. For example, the `ICON_CANCEL` icon has the code `@0W@`.

In each PAI event, the function code, as long as it is not empty, is placed in the system field `syst-ucomm` (`sy-ucomm`) and assigned to the `ok_code` field. Empty function codes are placed in neither the `sy-ucomm` field nor the `ok_code` field. The function code of a pushbutton is empty if you have not entered it in the corresponding attribute in the Screen Painter. Before you can work with the `ok_code` field, you must assign a name to it in the Screen Painter.

The main way of allowing users to choose functions that trigger the PAI event and send function codes to the program is through the GUI status. The main reason is one of space - the GUI status can contain many more functions than you would be able to place on the dynpro as pushbuttons.

However, you should use pushbuttons in the following cases:

When you define pushbuttons, you must ensure that your function code is either the same as a corresponding function in the GUI status, or does not accidentally coincide with the function code of an entirely different function. Although the consistency of function codes in GUI statuses is checked in the Menu Painter, this is not possible for pushbuttons, since the GUI status of a dynpro is not known until runtime.

**Checkboxes and Radio Buttons with Function Codes**

In the Screen Painter, you can assign a function code (up to 20 characters long) to checkboxes and radio buttons.

Checkboxes and radio buttons without a function code behave like regular input/output fields. Clicking the object changes the content of the field, but does not trigger the PAI event. Clicking a pushbutton, on the other hand, always triggers the PAI event, even if it has an empty function code.

When a function code is assigned to a checkbox or radio button, clicking it not only changes the field content, but also triggers the PAI event and places the function code in the `ok_code` field.

While it is possible to assign an individual function code to each checkbox, you can only assign one function code to all of the radio buttons in a group. When you assign a function code to a radio button in the Screen Painter, the system automatically applies the same function code to all of the other radio buttons in the group.

You can use checkboxes and radio buttons with function codes as follows:

When you create pushbuttons, you should ensure when you assign function codes to checkboxes and radio buttons that they do not coincide with function codes from the GUI status.

**Using GUI Statuses**

A GUI status is a standalone component of an ABAP program. GUI statuses are created and edited in Menu Painter in ABAP Workbench. There are three different types of GUI status:

The relevant documentation provides comprehensive information about creating GUI statuses and their elements. The most important properties are summarized below.

*GUI Status*

The function of a GUI status is to provide the user with a range of functions on a dynpro. Each function has an associated function code of up to 20 characters, and when the user chooses a function, the PAI event is triggered. In each PAI event, the function code, as long as it is not empty, is passed to the system field `syst-ucomm` (`sy-ucomm`) and assigned to the `ok_code` field. Empty function codes are not passed to the `sy-ucomm` field or to the `ok_code` field. Before the `ok_code` field can be used, it must be given a name (and hence declared) in Screen Painter.

All function codes in an ABAP program, apart from those only assigned to pushbuttons on dynpros, are defined and administered in Menu Painter.

The GUI status type defines how the function codes are displayed:

Dialog statuses are the most general form of user interface for dynpros and the following handles these statuses only. With the above restrictions, the same applies to statuses for dialog boxes as applies to dialog statuses. Both are mostly created statically for ABAP programs. Context menus have a somewhat different role and are handled in a special way.

**Dialog Status**

A dialog status consists of a menu bar, a standard toolbar, an application toolbar, and a function key setting. When a dialog status is defined in Menu Painter, every function code is assigned to a menu entry in a menu bar and/or to a freely assignable function key on the keyboard. Function codes that are assigned to a function key can also be assigned to an icon in the standard toolbar or a pushbutton in the application toolbar. For each function code, there is a static or dynamic function text. Dynamic function texts allow context-sensitive texts to be used in ABAP programs.

The user interface is a visualization of all possible functions, and makes applications programs easier to use. From a technical point of view, it is enough to just enter the function code in the command field and trigger the PAI event by choosing ENTER. However, a dialog status should contain all possible function codes as menu entries. The most important functions should also be assigned to function keys, and the most important of these should also be assigned to icons in the standard toolbar or the application toolbar.

In Menu Painter, the functions assigned to the icons in the standard toolbar must also be assigned to specific function keys. These keys cannot be chosen. Instead, the system automatically assigns them to the corresponding function key when the function code is assigned to an icon. At least one of the icons F3, Shift+F3, or F12 should be activated, so that the user can always leave the dynpro in a regular fashion. The assignment of function keys to pushbuttons in the application toolbar is not fixed.

As well as the function codes for regular application functions, which trigger the PAI event, function codes can also be created in Menu Painter with other functions, for example, to call another transaction or trigger a system function. Function codes like this can also be assigned to pushbuttons, checkboxes, or radio buttons on dynpros. To enable this, however, a different function type must be assigned to the function code in either Menu Painter or Screen Painter.

**Area Menus**

Menu Painter can also be used to create area menus. An area menu is a user interface that is not part of an ABAP program and hence cannot trigger any PAI events. It can only contain function codes that call transactions or system functions. Examples of area menus are the initial screen of the SAP system (`S000`) and the initial dynpro of Workbench (`S001`).

**Special Function Keys and Function Codes**

Some keys and function codes have special functions. This section deals with the special functions on dynpros. There are also special functions that apply to dialog statuses for lists.

*Reserved Function Keys*

The following function keys do not trigger the PAI event, but are reserved for other functions:

*Function Keys for the Standard Toolbar*

The following function keys have fixed assignments to icons in the standard toolbar. The function code assigned and the corresponding ABAP code in the program should reflect the sense of the icon.

ENTER key:

F2 key

**Setting a Dialog Status**

Dialog statuses are assigned to dynpros using the following ABAP statement:

SET PF-STATUS stat \[OF PROGRAM prog\]\\ \\n                   \[EXCLUDING f|itab\].

This statement defines the user interface for all subsequent dynpros in a dynpro sequence until another dialog status is set using a new `SET PF-STATUS` statement. The dialog status `stat` must be a component of the current ABAP program, unless the addition `OF PROGRAM` is used to set a dialog status of another program `prog`.

The addition `EXCLUDING` can be used to modify the appearance and function of a dialog status dynamically. This is useful if the individual user interfaces for a range of dynpros are very similar. A single global status can be defined and those functions not needed can be deactivated using `EXCLUDING`. `f` can be specified to deactivate the function code stored in field `f`. `itab` can be specified to deactivate all function codes stored in the internal table `itab`. The field `f` and the rows of table `itab` should have the type `c` with the length 20.

The dialog status for a dynpro should be set at PBO time. If a dialog status is not specified for a dynpro, it is displayed with the user interface of the previous dynpro. If a dialog status is not specified for the first dynpro of a program, it does not have a user interface, and the user may not be exit to leave the dynpro.

**Setting a GUI Title**

As well as the dialog status, a user interface also contains a GUI title, also created using Menu Painter. GUI titles are assigned to dynpros using the following ABAP statement:

SET TITLEBAR tit \[OF PROGRAM prog\]\\ \\n                 \[WITH g1 ... g9\].

This statement defines the title of the user interface for all subsequent dynpros in a dynpro sequence until another GUI title is set using a new `SET TITLEBAR` statement. The GUI title must be a component of the current ABAP program, unless the addition `OF PROGRAM` is used to set a GUI status of another program `prog`.

A GUI title can contain up to nine different placeholders `&1 ... &9`. They can be replaced by the addition option `WITH` with the content of the corresponding fields `g1 ... g9`. Any individual `&` placeholders are also replaced in order by the content of the corresponding `g` parameter. The `&` character is displayed by repeating it in the title: `&&`.

The GUI title for a dynpro should be set at PBO time.

**Reading Function Codes**

In each PAI event that a user triggers by choosing either a pushbutton on the dynpro or an element in a GUI status, the corresponding function code is placed into the system field `syst-ucomm` or `sy-ucomm` and placed in the `ok_code` field (as long as the function code is not empty). Empty function codes are placed in neither the `sy-ucomm` field nor the `ok_code` field.

In your ABAP programs, you should work with the `ok_code` field instead of `sy-ucomm`. There are two reasons for this: Firstly, the ABAP program has full control over fields declared within it, and secondly, you should never change the value of an ABAP system field. However, you should also always initialize the `ok_code` field in an ABAP program for the following reason:

In the same way that the `ok_code` field in the ABAP program and the system field `sy-ucomm` receive the content of the corresponding dynpro fields in the PAI event, their content are also assigned to the `ok_code` dynpro field and system field `syst-ucomm` in the PBO event. Therefore, you must clear the `ok_code` field in the ABAP program to ensure that the function code of a dynpro is not already filled in the PBO event with an unwanted value. This is particularly important when the next PAI event can be triggered with an empty function code (for example, using ENTER). An empty function code does not affect the fields and the old content is transferred.

In your application programs, the first step in PAI processing should be to save the function code in an auxiliary variable and then initialize the `ok_code` field. You can then read the function code from the auxiliary variable (for example, using a `CASE` structure), and control the program flow from there.

The `ok_code` field can have a different name on each dynpro. However, common practice is to use the same name for the field on each dynpro of an ABAP program. You then only need one field in the ABAP program, with the same name, into which the function code is placed, and from which you can read it.

Global data declarations:

DATA: ok\_code LIKE sy-ucomm, \\n     save\_ok LIKE sy-ucomm.

Your ABAP program must contain a field with the same name as the `ok_code` field on the dynpro. To specify the type, you should refer to the system field `sy-ucomm`, since this always corresponds to the type of the `ok_code` field on the dynpro. At the same time, you should declare an appropriate auxiliary variable.

PAI module:

MODULE user\_command\_100 INPUT. \\n\\ \\nsave\_ok = ok\_code. \\n\\ \\nCLEAR ok\_code. \\n\\ \\nCASE save\_ok. \\n\\ \\nWHEN... \\n\\ \\n... \\nENDCASE. \\n\\ \\nENDMODULE.

In the first PAI module, you should assign the content of the `ok_code` field to the auxiliary variable and then clear the `ok_code` field and carry on working with the auxiliary variable.

**Finding Out the Cursor Position**

After user interaction with the dynpro, you may need to know the position of the cursor when the action occurred. This is particularly important if the user chooses the choose function (F2 or a double click).

To find out the cursor position, use the following statement:

GET CURSOR FIELD f \[OFFSET off\]\\ \\n  \[LINE lin\]\\ \\n  \[VALUE val\]\\ \\n  \[LENGTH len\].

This statement passes the name of the dynpro element on which the cursor is positioned during a user action into the variable f. If the cursor is on a field, the system sets `sy-subrc` to 0, otherwise to 4.

The addition ...

-   Filling input fields
-   Users can enter values in any input field on the dynpro, or change the value using the mouse, in the case of radio buttons and checkboxes. The content is placed in the corresponding dynpro field. Filling an input field does not normally trigger the PAI event. Exceptions to this are checkboxes and radio buttons with function codes and input fields with dropdown boxes.
-   Triggering the PAI event
-   There is a series of user actions that conclude the user's interaction with the dynpro in the SAP GUI and pass control back to the runtime environment on the application server, where the PAI event is triggered. These are the following:

-   Choosing a pushbutton on the dynpro
-   Selecting a checkbox or radio button to which a function code is assigned.
-   Choosing a function in the menu, standard toolbar, or application toolbar. Choosing a function key on the keyboard
-   Selecting an entry from a drop down box.

-   All of these actions have in common that they are linked to a function code.

-   The function code of a pushbutton, checkbox, radio button, or dropdown box on the dynpro is set in the corresponding element attributes.
-   The function codes in menus, the standard toolbar, and the application toolbar are set in the GUI status.
-   The function codes of function keys are also assigned in the GUI status.

-   Local program fields
-   If input/output fields are to be used in one program only, the fields should be declared in the ABAP program first (except for checkboxes and radio buttons), then the program activated, and finally the fields applied from the ABAP program to the dynpro in Screen Painter. From now on, however, the fields must not be changed in the ABAP program.
-   Dynpro fields with dictionary reference
-   If input/output fields are required in more than one program and information from the ABAP Dictionary is required, such as field labels, field helps, and input helps, the corresponding fields should be applied from ABAP Dictionary. Both flat structures and database tables can be referenced here.
-   The identically named fields must then be declared as an interface work area in the ABAP program using the statement `TABLES`. Declaring an identically named field using a `TYPES` reference to the data type in ABAP Dictionary is not enough for the data to be passed between the dynpro and the ABAP program.
-   To avoid naming conflicts between dynpro fields, internal work areas in programs, and database tables, it is often best to define a separate ABAP Dictionary structure for dynpros, containing all of the required input/output fields to be used for one or more dynpros of a program or of a whole package. The work areas declared using `TABLES` in the ABAP program then function exclusively as an interface between the program and the dynpro. If necessary, values can be assigned to the interface work area and back.
-   The advantage of referring to ABAP Dictionary data types is that both the dynpro fields and the fields in the ABAP program are updated automatically if the data type changes.

-   Very important and frequently-used function codes that should appear on the dynpro as well as in the GUI status, for example, the execute, display, and change functions on the initial dynpro of the ABAP Editor.
-   Applications that only use pushbuttons, where function codes in the GUI status make no sense - for example, in a calculator application. The function codes of the corresponding pushbuttons have no corresponding function in the GUI status elements, and only exist as attributes of dynpro elements.
-   When you have a GUI status that is used for a large number of dynpros, but use it on dynpros that have a particular function that is not required anywhere else. In this case, you should place it on the dynpro as a pushbutton.

-   For processing parts of dynpros (context-sensitive processing). For example, only when a radio button or checkbox is selected is particular data read and placed in the corresponding input/output fields.
-   You can fill fields with patterns depending on checkboxes or radio buttons. A typical example would be formatting settings for letters. The input fields can all be processed separately, but it is possible to fill all input fields simultaneously and consistently by choosing a pattern.
-   You can control dynamic dynpro modifications directly using checkboxes or radio buttons. For example, you can make sure that an input/output field cannot accept input until the user selects a radio button.

-   Dialog status
-   Dialog box
-   Context menus

-   A dialog status comprises a menu bar, a toolbar, an application toolbar, and the function key settings.
-   A status for a dialog box only contains a toolbar. The standard function codes of the toolbar and function codes that are associated with function keys but not with the application toolbar are available using the keyboard.
-   A context menu consists solely of a context menu and is used as the static model for the dynamic creation of context menus.

-   F1 calls the field help.
-   F4 calls the input help.
-   F10 places the cursor in the menu bar.

-   The ENTER key is associated with the icon in the standard toolbar, and is always active, even if no function is assigned to it in the GUI status, or if there is no GUI status set at all. The PAI event is always triggered when the user chooses ENTER. The following function codes can be passed to `sy-ucomm` or the `ok_code` field:

-   When an entry is made in the command field on the toolbar, it is passed to `sy-ucomm` and the `ok_code` field as a function code.
-   If no entry is made in the command field and a function code is assigned to the ENTER key in Menu Painter, this function code is passed to`sy-ucomm` and the `ok_code` field.
-   If the command field does not contain an entry and no function code is assigned to the ENTER key in Menu Painter, the function code is empty and therefore not passed `sy-ucomm` or the `ok_code` field.

-   The F2 key is always associated with a mouse double click. If a function code in the GUI status is assigned to the F2 key, the PAI event can be triggered either when F2 is chosen or when a dynpro element is double-clicked. In both cases, the associated function code is passed to `sy-ucomm` and the `ok_code` field. If the associated cursor position in the ABAP program also needs to be used, this must be determined using `GET CURSOR`.

-   `OFFSET` writes the cursor position within the dynpro element to the variable `off`.
-   `LINE` writes the line number of the table to the variable `lin` if the cursor is positioned in a table control. If the cursor is not in a table control, `lin` is set to zero.
-   `VALUE` writes the content of the dynpro field in display format - that is, with all of its formatting characters - as a string to the variable `val`.
-   `LENGTH` writes the display length of the dynpro field to the variable `len`.

**1** **2**\\ Ctrl+S or F11 Save F3 Back Shift+F3 Exit Esc or F12 Cancel Ctrl+P Print Ctrl+F Find Ctrl+G Find Next Ctrl+PgUp First Page PgUp Previous Page PgDn Next Page Ctrl+PgDn Last Page abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_processing\_screens.html