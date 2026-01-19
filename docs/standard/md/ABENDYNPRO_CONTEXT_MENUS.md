---
title: "ABENDYNPRO_CONTEXT_MENUS"
description: |
  ABENDYNPRO_CONTEXT_MENUS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNPRO_CONTEXT_MENUS.htm"
abapFile: "ABENDYNPRO_CONTEXT_MENUS.html"
keywords: ["select", "do", "if", "case", "method", "class", "ABENDYNPRO", "CONTEXT", "MENUS"]
---

The user interface of a dynpro is defined by a [GUI status](ABENGUI_STATUS_GLOSRY.html) with type *dialog status*, defined in the [Menu Painter](ABENMENU_PAINTER_GLOSRY.html). For each dialog status, the system automatically creates a standard context menu, which the user can display by making a right-click on the screen of the dynpro (or by choosing Shift + F10). The standard context menu contains all of the [function keys](ABENFUNCTION_KEY_GLOSRY.html) with which functions are associated. It therefore makes it easy to access any function code that is available using the keyboard since normally only the most important are assigned to the application toolbar.

Additionally, context-specific menus can be defined for dynpros for any of the following screen elements:

When one of these elements is selected using the right-hand mouse button, a dynamic context menu can be created in the ABAP program. This context menu can contain any function, not just the function keys. Pushbuttons, checkboxes, and radio buttons cannot have their own context menus. They can, however, be given unique function codes.

**Class**\\ `CL_CTMENU`

Context menus are objects of the global class `CL_CTMENU`. In the [class library](ABENCLASS_LIBRARY_GLOSRY.html), this class is one of the `Frontend Services` components, alongside the [Control Framework](ABENCONTROL_FRAMEWORK_GLOSRY.html) classes (see [dynpro - Custom Controls](ABENDYNPRO_CUSTOM_CONTROLS.html)). It contains methods that allow context menus to be defined dynamically in the local program. Dedicated context menus to be used as templates can be created statically in the Menu Painter.

The most important methods of the class `CL_CTMENU` are:

In the above table, a context menu in the local program means an object of class `CL_CTMENU`. `CL_CTMENU` is used in different ways depending on the context:

Note the following aspects regarding context menus:

[dynpro - Context Menus](ABENDYNPRO_CONTEXT_MENU_ABEXA.html)

-   Input/output fields
-   Text fields
-   Table controls
-   Group boxes
-   Subscreens

-   If a context menu is used in a control, the need to create objects of the class `CL_CTMENU` depends on the wrapper of the class. The relevant functions may already be encapsulated in the control class. Normally, control users do not have to create their own context menus. This ensures that no conflicts occur with the event handler of the control. For more information, see the documentation of the individual control classes.
-   When context menus are defined on dynpros (or on lists), the associated objects in class `CL_CTMENU` are created automatically by the runtime environment and not explicitly in the program. References to the object are passed as the parameters of special callback routines in the ABAP program.

**Method** **Function**\\ `LOAD_GUI_STATUS` Appends a context menu predefined statically in Menu Painter to a context menu in the local program. `ADD_FUNCTION` Appends a single function to a context menu in the local program. `ADD_MENU` Appends another context menu to the current context menu in the local program. `ADD_SUBMENU` Appends another context menu to the current context menu in the local program as a cascading menu. `ADD_SEPARATOR` Adds a separator. `HIDE_FUNCTIONS` Hides functions `SHOW_FUNCTIONS` Shows functions `DISABLE_FUNCTIONS` Deactivates functions `ENABLE_FUNCTIONS`\\ Activates functions `SET_DEFAULT_FUNCTION` Defines a default function, which is highlighted when the menu is displayed. **Aspect** **Details**\\ Context menus for elements on dynpros To associate a context menu with one of the screen elements above, only the *ID* context must be entered in the *Context Menu* field in the element attributes in the Screen Painter. If a context menu is not defined for a particular screen element, it inherits the context menu from the next highest element in the hierarchy. For example, all screen elements in a group box that do not have their own context menu would inherit the context menu of the group box. The highest hierarchy level is the default context menu, containing all of the key settings of the current dialog status. \\
\\
If a screen element is associated with a context menu (either its own menu or one that it has inherited), a special [subroutine](ABENSUBROUTINE_GLOSRY.html)\\ `on_ctmenu_context` is called in the ABAP program when the user clicks the right-hand mouse button (or SHIFT + F10). The [PAI](ABENPAI_GLOSRY.html) event is not triggered. This subroutine (callback routine) is used to define the context menu dynamically and must be programmed in the processing logic. If an appropriate subroutine does not exist, the context menu is not displayed. \\
\\
The same context menu can be associated with any number of screen elements. They then all work with the same subroutine. Defining context menus in the processing logic For each context menu context to be called for an element on a dynpro, a corresponding callback routine must be programmed in the ABAP program: `FORM on_ctmenu_context USING l_menu TYPE REF TO cl_ctmenu. ... ENDFORM.` \\
\\
Each of these routines must have a single `USING` parameter, typed as a reference variable to the class `CL_CTMENU`. For each context menu assigned to an element on a screen, the runtime environment automatically creates an object of the class. When the user requests the context menu by right-clicking with the mouse (or by using SHIFT + F10), the system calls the corresponding subroutine and passes a reference to the corresponding object to the formal parameter. \\
\\
When the object is passed it is initial and the context menu does not contain any entries. In the subroutine, the methods of the object (as listed above) can now be used to construct the context menu dynamically. Using predefined context menus Apart from dialog statuses and dialog box statuses, there is a third kind of GUI status that can be defined in the Menu Painter: context menus. For information about creating context menus in the Menu Painter in ABAP Workbench, see [Creating Context Menus](https://help.sap.com/docs/ABAP_PLATFORM_NEW/bd833c8355f34e96a6e83096b38bf192/e25d3bb2e06411d295a900a0c94260a5). \\
\\
Predefined context menus enable groups of statically defined function codes from an ABAP program to be provided in a context-specific form. The method `LOAD_GUI_STATUS` makes it possible to append a context menu from any ABAP program to a context menu in the local program. As a rule, predefined context menus reuse the function codes from a dialog status with the same semantics, but in a context-specific way. Once a predefined context menu is loaded to a context menu in the local program, it can be modified in any way. Other predefined context menus can be appended, functions added or removed, other context menus added. Defining new context menus Completely new context-specific menus can be created either by modifying predefined context menus or by constructing menus from new functions. \\
\\
Any number of new functions can be added to a context menu. When a new function is added, a function text, function code, and function type (for example, *E* for an unconditional module call) must be specified. \\
\\
However, it is also possible to add any other context menu objects from the local program. In this case, it is enough just to pass a reference to another context menu. A collection of context menu objects can be created in the program and used and combined as necessary. Submenus can also be constructed. Deeply nested menus can be created by adding submenus to existing submenus. Style guidelines When creating context menus, the following rules should be observed: \\
\\
\- The functions in a context menu should be a subset of the functions in the program. This can be observed by using predefined context menus. \\
\\
\- Context menus should not contain more than ten entries at a single level. \\
\\
\- If a context menu is used for a screen element, it should ideally contain all of the functions possible for that element, at the very least the standard commands, like `Select`, `Copy`, `Cut`, and `Paste`. \\
\\
\- The order of the functions should be: object-specific commands, copying commands, further commands. \\
\\
\- Functions that can be selected using the left-hand mouse button should not be duplicated in a context menu. Displaying the context menu Once the context menu is defined dynamically in the callback routine, it is displayed on the screen immediately. When the user chooses a function from the menu, the system triggers the PAI event and passes the corresponding function code to the ABAP program in `sy-ucomm` and the `OK` field. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_elements.html abenabap\_dynpros\_screen.html