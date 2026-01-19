---
title: "ABENDECLARATION_VARIABLES_GUIDL"
description: |
  ABENDECLARATION_VARIABLES_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDECLARATION_VARIABLES_GUIDL.htm"
abapFile: "ABENDECLARATION_VARIABLES_GUIDL.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "field-symbol", "ABENDECLARATION", "VARIABLES", "GUIDL"]
---

Variables can be declared in the following contexts:

Variables that are declared within most of the event blocks or dialog modules as well as between completed processing blocks also belong to the global declaration part of a program, but violate the rule [implement global declarations centrally](ABENGLOBAL_DECLAR_GUIDL.html).

Program-local variables that are declared in the global declaration part of a program are generally referred to as *global variables*.

**Do not declare global variables**

Do not declare variables in the global declaration part of a program. Variables may only be declared as attributes of classes and interfaces or locally in methods.

This rule is directly derived from the basic rule [use ABAP objects](ABENABAP_OBJ_PROGR_MODEL_GUIDL.html). If you disregard helper variables in procedures ([methods](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.html)), the content of the variable of a program indicates the state of the program and consequently the state of an application. In object-oriented programming, the class replaces the program, and the state of an application is no longer the state of the programs but the state of the classes or objects.

Furthermore, the rule [exploit the benefits of encapsulation](ABENENCAPSULATION_GUIDL.html) also assumes a critical role. The data of an application is sufficiently protected from misuse only in the visibility sections of classes.

Except for the following exception, you should not declare any global variables in a new ABAP program. They indicate a poor programming style that disregards proven concepts such as task sharing and encapsulation. If you need to access the same data of a program from multiple local classes and interfaces, you must create them in an appropriate visibility section of a local class or an interface. These can also be local classes or interfaces that contain nothing but such attributes.

The above rule also applies to the declaration of [field symbols](ABENDYN_ACCESS_DATA_OBJ_GUIDL.html) with the `FIELD-SYMBOLS` statement.

If classic dynpros and selections screens are still used instead of [SAPUI5](ABENINTERFACE_TECH_GUIDL.html) or [Web Dynpro ABAP](ABENINTERFACE_TECH_GUIDL.html), global variables are required as interfaces for the communication between ABAP and classic dynpros. Global variables can be declared using the following statements for this purpose alone:

In these cases, you have to ensure the maximum possible [encapsulation](ABENENCAP_CLASS_INTERF_GUIDL.html) of those global variables.

The following source code shows the top include of a function pool for document display. In addition to the required interface work area, which is declared with `TABLES`, further global variables exist that indicate the state of the display. However, according to the above rule, you are not allowed to use global variables for purposes other than communication with a classic dynpro.

The following source code shows an improved example. The previously global variables are encapsulated in a class that is specifically provided for the state of the display, and can be addressed using `display_status=>` in the other classes of the program.

-   As attributes of global classes and interfaces across programs
-   Locally in the program

-   in the global declaration part of a program
-   as attributes of local classes and interfaces
-   in procedures ([Methods](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.html))

-   `DATA`, [`TABLES`](ABENTABLE_WORK_AREA_GUIDL.html) and `CONTROLS` for general dynpros
-   `PARAMETERS` and `SELECT-OPTIONS` for selection screens

FUNCTION-POOL show\_documents. \\nTABLES document\_structure. \\nDATA: g\_language TYPE sy-langu, \\n g\_display\_mode TYPE ... \\n ... \\nCLASS screen\_handler DEFINITION. \\n PUBLIC SECTION. \\n ... FUNCTION-POOL show\_documents. \\nTABLES document\_structure. \\nCLASS display\_status DEFINITION. \\n PUBLIC SECTION. \\n CLASS-DATA: language TYPE sy-langu, \\n display\_mode TYPE ... \\n ... \\nENDCLASS. \\nCLASS screen\_handler DEFINITION. \\n PUBLIC SECTION. \\n ... abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abendata\_type\_obj\_gdl.html