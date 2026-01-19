---
title: "ABAPENHANCEMENT-POINT"
description: |
  ABAPENHANCEMENT-POINT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPENHANCEMENT-POINT.htm"
abapFile: "ABAPENHANCEMENT-POINT.html"
keywords: ["select", "insert", "delete", "while", "if", "data", "ABAPENHANCEMENT", "POINT"]
---

[Short Reference](ABAPENHANCEMENT-POINT_SHORTREF.html)

`ENHANCEMENT-POINT enh_id SPOTS spot1 spot2 ...`\\ 
                  `[STATIC]`\\ 
                  `[INCLUDE BOUND].`

[1. `... STATIC`](#ABAP_ADDITION_1@3@)

[2. `... INCLUDE BOUND`](#ABAP_ADDITION_2@3@)

This statement defines an explicit [enhancement option](ABENENHANCEMENT_POINT_GLOSRY.html) at the current position in the program at which a [source code enhancement](ABENSOURCE_CODE_ENHANCEMENT_GLOSRY.html) can be made. When the program is generated, the [source code plug-ins](ABENSOURCE_CODE_PLUGIN_GLOSRY.html) of the assigned [enhancement implementation](ABENENHANCEMENT_IMPL_GLOSRY.html) that exist in the current system and that have a [switch](ABENSWITCH_GLOSRY.html) in the state *stand-by* or *on* are inserted at this position.

If the addition `STATIC` is not specified, the source code enhancement is dynamic. This means that, when the program is executed, only those source code plug-ins are executed whose [switch](ABENSWITCH_GLOSRY.html) has the state *on*. If no switch is assigned to a source code plug-in, it is handled as if the switch has the state *on*.

`enh_id` must be used to specify an ID for the enhancement option directly and this ID must be unique without the addition `INCLUDE BOUND` in the current [compilation unit](ABENCOMPILATION_UNIT_GLOSRY.html) and it must be unique with this addition in the current include program. At least one [enhancement spot](ABENENHANCEMENT_SPOT_GLOSRY.html) must be assigned to the enhancement option by specifying [simple enhancement spots](ABENSIMPLE_ENHANCEMENT_SPOT_GLOSRY.html)\\ `spot1`, `spot2`, ....

Within [enhancements](ABENENHANCEMENT_GLOSRY.html), one or more [source code plug-ins](ABENSOURCE_CODE_PLUGIN_GLOSRY.html) can be created for each enhancement option. A source code plug-in is created by the assignment of an [enhancement implementation](ABENENHANCEMENT_IMPL_GLOSRY.html) in the [Enhancement Builder](ABENENHANCEMENT_BUILDER_GLOSRY.html). This creates an empty source code plug-in with a unique ID automatically, which appears underneath `ENHANCEMENT-POINT` in the ABAP Editor, where the actual enhancement can be implemented between [`ENHANCEMENT`](ABAPENHANCEMENT.html) and [`ENDENHANCEMENT`](ABAPENDENHANCEMENT.html).

A source code plug-in is assigned to exactly one enhancement option. Multiple source code plug-ins from multiple enhancement implementations can be assigned to a single enhancement option.

The addition `STATIC` is used to define a static source code enhancement. In a static source code enhancement, all included source code plug-ins are respected when the program is executed, including those whose [switch](ABENSWITCH_GLOSRY.html) has the state *stand-by*.

The addition `STATIC` is intended for the enhancement of data declarations, while the statement `ENHANCEMENT-POINT` without the addition `STATIC` is intended for the enhancement of executable code. When the statement is created using *Enhancements -> Create Enhancement*, the addition is set according to this selection.

This addition can be specified in include programs and binds the source code enhancement to the current include program. Each program that includes an include program only includes the source code enhancements that are defined using this addition. The names of the enhancement options created using the addition `INCLUDE BOUND` must be unique within the include program. Internally, the names of include-bound enhancement options always refer to their include program, which means there can be no naming conflicts between include programs and the [compilation unit](ABENCOMPILATION_UNIT_GLOSRY.html) when binding to a unit and no naming conflicts between multiple bound include programs.

If the addition `INCLUDE BOUND` is not used, a source code enhancement is assigned to only one compilation unit. If the statement `ENHANCEMENT-POINT` is specified in an include program without this addition, a compilation unit must be assigned to it in the Enhancement Builder.

-   In the terminology of the [ABAP Enhancement Framework](ABENENHANCEMENT_FRAMEWORK_GLOSRY.html), the statement `ENHANCEMENT-POINT` includes both the [enhancement spot element definition](ABENENHANCEMENT_SPOT_DEF_GLOSRY.html) and the [enhancement spot invocation](ABENENHANCEMENT_SPOT_INVOC_GLOSRY.html) of the enhancement option.
-   The statement `ENHANCEMENT-POINT` can either be entered directly or created by choosing *Edit -> Enhancement Operations -> Create Enhancement* in [Enhancement Builder](ABENENHANCEMENT_BUILDER_GLOSRY.html). After the program has been saved or created using *Edit -> Enhancement Operations -> Create Enhancement*, the statement can only be deleted by choosing *Edit -> Enhancement Operations -> Delete Enhancement*.
-   In addition to the enhancement options explicitly specified by `ENHANCEMENT-POINT`, ABAP programs also contain [implicit enhancement options](ABENIMPLICIT_ENH_POINTS.html), which can also be enhanced using source code plug-ins.
-   The statement `ENHANCEMENT-POINT` can also be specified in a source code plug-in.

-   In an include program, include-bound and non-include-bound source code enhancements cannot both be defined at the same time. This also applies if an include program includes other include programs.
-   In an include program that is included in the same program more than once, only include-bound source code enhancements are allowed.

abenabap.html abenabap\_reference.html abenenhancement\_framework.html abensource\_code\_enhancement.html abenexplicit\_enh\_points.html