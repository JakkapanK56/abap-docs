---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSOURCE_CODE_MODULAR_GUIDL.html"
abapFile: "ABENSOURCE_CODE_MODULAR_GUIDL.html"
type: "abap-reference"
---

## Background

The unit in ABAP that corresponds to a source code file capable of being inserted into another program is known as an *include program*. Include programs are used for source code modularization and are inserted into compilation units for this purpose. Include programs are not compilation units (which means they cannot be compiled as standalone programs), but can be activated and transported separately. The [compilation units](ABENPROGRAM_TYPE_GUIDL.md) of include programs (such as class pools, interface pools, function pools, subroutine pools, or executable programs) are compilation units in which, when compiled, an `INCLUDE` statement is replaced by the content of the specified include program.

## Rule

**Use include programs to modularize source code.**

Distribute the source code of large ABAP programs across several include programs, remembering to choose a granularity for the modules that suits the structure of the program's structure.

## Details

A suitable level of source code modularization using include programs makes it easier to develop and modify larger programs in several ways:

-   The lock management of ABAP Editor works at the level of include programs. In this way, several developers can make changes to a large program at the same time, as long as the source code sections in question are in different include programs.
-   Include programs are activated separately. This means that corrections or new developments in a compilation unit can be activated independently of each other, as long as they are in separate include programs.
-   Include programs can be transported separately. In this way, specific corrections can be distributed across a system landscape without the need to transport the entire compilation unit. This minimizes the potential for conflicts between correction levels.

The [ABAP development environment](ABENABAP_DEV_ENVIR_GLOSRY.md) already provides modularization templates using includes for many compilation units. For example, the visibility sections and methods of global classes or function modules of a function pool are saved in separate include programs. The source code-based Class Builder displays the resolved include programs as a single programs, but saves each part separately. The top include for global declarations is also supported by ABAP Workbench and ABAP Compiler.

As well as this, you can perform manual modularization using include programs, if required. Here, you can perform some of the extra modularizations on the include programs defined by ABAP Workbench. Or you can create include programs for compilation units that are not modularized automatically (such as subroutine pools and executable programs).

Include programs that you create manually must contain a logically related section of the source code and this section must represent an independently maintainable and transportable unit. Logically related units such as individual procedures ([methods](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.md)) or the declaration parts of local classes should not be distributed across multiple include programs, however. (The declaration parts of global classes are distributed automatically across multiple include programs, as specified by ABAP Compiler. There is no reason why ABAP developers should distribute local classes in the same way.)

Include programs you create manually should be named in accordance with the naming conventions of ABAP Workbench for automatically generated include programs. These conventions emphasize the relationship between the include program and the compilation unit and prevent include programs [from being used more than once](ABENMULTIPLE_USE_INCLUDE_GUIDL.md).
