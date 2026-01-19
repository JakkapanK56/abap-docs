---
title: "ABAPENHANCEMENT-SECTION"
description: |
  ABAPENHANCEMENT-SECTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPENHANCEMENT-SECTION.htm"
abapFile: "ABAPENHANCEMENT-SECTION.html"
keywords: ["select", "delete", "do", "if", "data", "ABAPENHANCEMENT", "SECTION"]
---

[Short Reference](ABAPENHANCEMENT-SECTION_SHORTREF.html)

`ENHANCEMENT-SECTION enh_id SPOTS spot1 spot2 ...`\\ 
                    `[STATIC]`\\ 
                    `[INCLUDE BOUND].`\\ 
  `...`\\ 
`END-ENHANCEMENT-SECTION.`

[1. `... STATIC`](#ABAP_ADDITION_1@3@)

[2. `... INCLUDE BOUND`](#ABAP_ADDITION_2@3@)

These statements turn a section of the current program into an explicit [enhancement option](ABENENHANCEMENT_POINT_GLOSRY.html), as a result of which the section can be replaced by a [source code enhancement](ABENSOURCE_CODE_ENHANCEMENT_GLOSRY.html). When the program is generated, exactly one [source code plug-in](ABENSOURCE_CODE_PLUGIN_GLOSRY.html) of the assigned [enhancement implementation](ABENENHANCEMENT_IMPL_GLOSRY.html), whose [switch](ABENSWITCH_GLOSRY.html) has the state *stand-by* or *on*, replaces this program section. If no switch is assigned to a source code plug-in, it is handled as if the switch has the state *on*.

If the addition `STATIC` is not specified, the source code enhancement is dynamic. In a dynamic source code enhancement, [declarative statements](ABENABAP_DECLARATIONS.html) are not replaced. Instead, the declarative statements of the source code plug-in are added to the declarative statements in the program section. Furthermore, only source code plug-ins whose [switches](ABENSWITCH_GLOSRY.html) have the state *on* are respected by dynamic source code enhancements when a program is executed.

The program section may only contain complete [control structures](ABENCONTROL_STRUCTURE_GLOSRY.html) and [processing blocks](ABENPROCESSING_BLOCK_GLOSRY.html). If no suitable source code plug-in is found, the original section is executed.

`enh_id` must be used to specify an ID for the enhancement option directly and this ID must be unique without the addition `INCLUDE BOUND` in the current [compilation unit](ABENCOMPILATION_UNIT_GLOSRY.html) and it must be unique with this addition in the current include program. At least one [enhancement spot](ABENENHANCEMENT_SPOT_GLOSRY.html) must be assigned to the enhancement option by specifying [simple enhancement spots](ABENSIMPLE_ENHANCEMENT_SPOT_GLOSRY.html)\\ `spot1`, `spot2`, ....

One or more [source code plug-ins](ABENSOURCE_CODE_PLUGIN_GLOSRY.html) can be created for a single enhancement option. A source code plug-in is created by assigning an [enhancement implementation](ABENENHANCEMENT_IMPL_GLOSRY.html) for the element definition in the [Enhancement Builder](ABENENHANCEMENT_BUILDER_GLOSRY.html). This creates a source code plug-in with a unique ID automatically, which appears after `END-ENHANCEMENT-SECTION` in the editor. Initially, the plug-in contains the code to be replaced between [`ENHANCEMENT`](ABAPENHANCEMENT.html) and [`ENDENHANCEMENT`](ABAPENDENHANCEMENT.html) and the code can be overwritten there. A source code plug-in is assigned to exactly one enhancement option.

Multiple source code plug-ins of multiple enhancement implementations can be assigned to one enhancement option. If multiple source code plug-ins with the switch position *on* or *stand-by* are found when the program is executed, a [conflict resolution](ABENCONFLICT_RESOLUTION_GLOSRY.html) is performed internally and the [conflict resolving enhancement implementation](ABENCONFLICT_RESOL_IMPL_GLOSRY.html) that takes precedence is used. If more than one conflict resolving enhancement implementation takes precedence or if there is no conflict resolving enhancement implementation, the conflict cannot be resolved correctly. Instead, one of the primary conflict resolving enhancement implementations or one of the conflict resolving enhancement implementations is used. Exactly which implementation is used is the same for each program execution but is otherwise undefined.

The addition `STATIC` is used to define a static source code enhancement. The declarative statements of a source code plug-in are not added but replace the ones from the program section.

In a static source code enhancement, all incorporated source code plug-ins are respected when the program is executed, including those whose [switch](ABENSWITCH_GLOSRY.html) has the state *stand-by*.

Unlike the statement [`ENHANCEMENT-POINT`](ABAPENHANCEMENT-POINT_SHORTREF.html), the addition `STATIC` of the statement `ENHANCEMENT-SECTION` should only be used with maximum caution when changing data declarations because a replacement takes place and not an enhancement. Application developers at SAP in particular should not use the addition `STATIC` at all with `ENHANCEMENT-SECTION` since the change will be active in the entire customer system.

This addition has the same effect as it does for the statement [`ENHANCEMENT-POINT`](ABAPENHANCEMENT-POINT.html).

-   In the terminology of the [ABAP Enhancement Framework](ABENENHANCEMENT_FRAMEWORK_GLOSRY.html), the section between `ENHANCEMENT-SECTION` and `END-ENHANCEMENT-SECTION` is both the [enhancement spot element definition](ABENENHANCEMENT_SPOT_DEF_GLOSRY.html) and the [enhancement spot element invocation](ABENENHANCEMENT_SPOT_INVOC_GLOSRY.html) of the enhancement option.
-   The statement `ENHANCEMENT-SECTION` can either be entered directly or created after a block of lines is selected by choosing *Enhancements -> Create Enhancement* in the [Enhancement Builder](ABENENHANCEMENT_BUILDER_GLOSRY.html). After the program has been saved or created by choosing *Enhancements -> Create Enhancement*, the statement can only be deleted by choosing *Enhancements -> Delete Enhancement*.
-   The statements `ENHANCEMENT-SECTION` - `END-ENHANCEMENT-SECTION` can also be specified in a source code plug-in.

abenabap.html abenabap\_reference.html abenenhancement\_framework.html abensource\_code\_enhancement.html abenexplicit\_enh\_points.html