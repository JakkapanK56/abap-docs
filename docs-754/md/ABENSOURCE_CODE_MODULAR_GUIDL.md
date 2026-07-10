---
title: "Source Code Modularization - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensource_code_modular_guidl.htm"
abapFile: "abensource_code_modular_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Structure and Style](ABENSTRUCTURE_STYLE_GUIDL.md) →  [Source Code Organization](ABENSOURCE_CODE_ORGA_GUIDL.md) → 

Source Code Modularization

Background

The unit in the ABAP environment that corresponds to a source code file capable of being inserted into another program is known as an include program. Include programs are used for source code modularization and are inserted into master programs for this purpose. Include programs are not compilation units (which means they cannot be compiled as standalone programs), but can be activated and transported separately. The [master programs](ABENPROGRAM_TYPE_GUIDL.md "Guideline") of include programs (such as class pools, interface pools, function groups, subroutine pools, or executable programs) are compilation units in which, when compiled, an INCLUDE statement is replaced by the content of the specified include program.

Rule

Use include programs to modularize source code.

Distribute the source code of large ABAP programs across several include programs, remembering to choose a granularity for the modules that suits the structure of the program's structure.

Details

A suitable level of source code modularization using include programs makes it easier to develop and modify larger programs in several ways:

-   The lock management of ABAP Editor works at the level of include programs. In this way, several developers can make changes to a large program at the same time, as long as the source code sections in question are in different include programs.

-   Include programs are activated separately. This means that corrections or new developments in a master program can be activated independently of each other, as long as they are in separate include programs.

-   Include programs can be transported separately. In this way, specific corrections can be distributed across a system landscape without the need to transport the entire master program. This minimizes the potential for conflicts between correction levels.

The development environment already provides modularization templates using includes for many master programs. For example, the visibility sections and methods of global classes or function modules of a function group are saved in separate include programs. The source code-based Class Builder displays the resolved include programs as a single programs, but saves each part separately. The top include for global declarations is also supported by ABAP Workbench and ABAP Compiler.

As well as this, you can perform manual modularization using include programs, if required. Here, you can perform some of the extra modularizations on the include programs defined by ABAP Workbench. Or you can create include programs for master programs that are not modularized automatically (such as subroutine pools and executable programs).

Include programs that you create manually must contain a logically related section of the source code and this section must represent an independently maintainable and transportable unit. Logically related units such as individual procedures ([methods](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.md "Guideline")) or the declaration parts of local classes should not be distributed across multiple include programs, however. (The declaration parts of global classes are distributed automatically across multiple include programs, as specified by ABAP Compiler. There is no reason why ABAP developers should distribute local classes in the same way.)

Include programs you create manually should be named in accordance with the naming conventions of ABAP Workbench for automatically generated include programs. These conventions emphasize the relationship between the include program and the master program and prevent include programs [from being used more than once](ABENMULTIPLE_USE_INCLUDE_GUIDL.md "Guideline").
