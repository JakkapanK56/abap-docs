---
title: "ABENPROGRAM_GROUP_GLOSRY"
description: |
  ABENPROGRAM_GROUP_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENPROGRAM_GROUP_GLOSRY.htm"
abapFile: "ABENPROGRAM_GROUP_GLOSRY.html"
keywords: ["if", "class", "data", "ABENPROGRAM", "GROUP", "GLOSRY"]
---

Organizational unit of programs in the [internal session](ABENINTERNAL_SESSION_GLOSRY.html). There is always one [main program group](ABENMAIN_PROGRAM_GROUP_GLOSRY.html) and multiple [additional program groups](ABENADDITIONAL_PROG_GROUP_GLOSRY.html). Each program group has a [main program](ABENMAIN_PROGRAM_GLOSRY.html). An additional program group is always created when [function pools](ABENFUNCTION_POOL_GLOSRY.html) and [class pools](ABENCLASS_POOL_GLOSRY.html) are loaded. If, however, using a program that is not a function pool or class pool causes the program to be loaded, it is loaded into the program group of the consumer. All programs of a program group share the [interface work areas](ABENINTERFACE_WORK_AREA_GLOSRY.html) declared using [`TABLES`](ABAPTABLES.html), [`NODES`](ABAPNODES.html), and [`COMMON PART`](ABAPDATA_COMMON.html). Within a program group, [`CALL SCREEN`](ABAPCALL_SCREEN.html) can call the [dynpros](ABENDYNPRO_GLOSRY.html) of the main program only.

[**\-> More about**](ABENINTERNAL_SESSION.html)

ABENABALA\_GLOSSARY.html