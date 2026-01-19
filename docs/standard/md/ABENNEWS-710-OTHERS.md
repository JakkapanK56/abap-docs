---
title: "ABENNEWS-710-OTHERS"
description: |
  ABENNEWS-710-OTHERS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-710-OTHERS.htm"
abapFile: "ABENNEWS-710-OTHERS.html"
keywords: ["select", "do", "while", "if", "case", "try", "method", "class", "data", "ABENNEWS", "710", "OTHERS"]
---

[1\. Lossless Assignments](#ABAP_MODIFICATION_1@4@)

[2\. New RTTC Methods](#ABAP_MODIFICATION_2@4@)

[3\. New API for Creating UUIDs](#ABAP_MODIFICATION_3@4@)

[4\. New Time Formats](#ABAP_MODIFICATION_4@4@)

[5\. String Constants in PXA](#ABAP_MODIFICATION_5@4@)

[6\. Class for Generation Limits](#ABAP_MODIFICATION_6@4@)

[7\. Splitter Control on Dynpros](#ABAP_MODIFICATION_7@4@)

[8\. Extended Jump Distance](#ABAP_MODIFICATION_8@4@)

[9\. Dynamic Programming](#ABAP_MODIFICATION_9@4@)

[10\. File Interface](#ABAP_MODIFICATION_10@4@)

The new addition [`EXACT`](ABAPMOVE_EXACT.html) of the statements [`MOVE`](ABAPMOVE_OBS.html) and [`MOVE-CORRESPONDING`](ABAPMOVE-CORRESPONDING.html) enables [lossless assignments](ABENLOSSLESS_ASSIGNMENT_GLOSRY.html); if data is lost or values are invalid, an exception is raised.

The new `GET` method of classes `CL_ABAP_STRUCTDESCR`, `CL_ABAP_TABLEDESCR`, `CL_ABAP_REFDESCR`, plus `GET_BY_NAME` of class `CL_ABAP_REFDESCR` return the type description object specified by the input parameters. A new type description object is created or an existing one is used again.

The methods of the class `CL_SYSTEM_UUID` create [UUIDs](ABENUUID_GLOSRY.html) in different formats, such as 16-digit byte-like UUIDs, 22-digit character-like UUIDs with uppercase and lowercase letters, and 32-digit character-like UUIDs in hexadecimal. They also make it possible to convert the UUIDs from one type to another.

While number and date formats for output have always been formatted according to the [formatting setting](ABENCOUNTRY.html) of the [language environment](ABENLANGUAGE_ENVIRONMENT_GLOSRY.html), until now only the 24-hour format has been available for time output.

From SP14 in ABAP release 7.0, four additional 12 hour formats have been introduced. These formats can be selected in the *fixed values* in the [user master record](ABENUSER_MASTER_RECORD_GLOSRY.html) or stored specifically for each country in a new column `TIMEFM` in the [`T005X`](ABENCOUNTRY_FORMATS.html) database table.

If enough space is available, a time is displayed on the dynpro in 12-hour format when the relevant settings are made in the user master record.

In ABAP, new formats can be used by means of the new [`ENVIRONMENT TIME FORMAT`](ABAPWRITE_TO_OPTIONS.html) addition of the `WRITE TO` and `WRITE` statements as well as by using the [`environment`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html) and [`COUNTRY`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html) formatting options for [embedded expressions](ABENSTRING_TEMPLATES_EXPRESSIONS.html) in [string templates](ABENSTRING_TEMPLATE_GLOSRY.html).

The new class `CL_ABAP_TIMEFM` contains methods for converting between external and internal times, as well as some auxiliary methods.

The [predefined time formats](ABENWRITE_FORMATS.html) of the statements `WRITE TO` and `WRITE` cannot be affected automatically due to downward compatibility.

The new formats are supported on [dynpros](ABENDYNPRO_GLOSRY.html) and in [Screen Painter](ABENSCREEN_PAINTER_GLOSRY.html) from EhP2.

From ABAP release 7.0, EhP2, [strings](ABENSTRING_GLOSRY.html) declared as constants are saved globally in [PXA](ABENPXA_GLOSRY.html) in the same way as all constants. This can significantly reduce the amount of memory required.

From ABAP release 7.0, EhP2, the static method `GET_VALUES` of class `CL_ABAP_GEN_LIMITS` returns the generation limits for an ABAP program.

This change was previously introduced in ABAP release 7.0, SP16.

From ABAP release 7.0, EhP2, [splitter controls](ABENDYNP_SPLITTER_CONTROL_SPCL.html) can be used on classic dynpros. A splitter control enables two subscreens to be arranged above and below or beside one another in a way that allows the border between the subscreen areas to be adjusted.

Prior to ABAP release 7.0, EhP2, errors could occur in ABAP programs in which jump distances were too large. This could also occur, for example, if processing blocks were exited with `RETURN`, since this statement jumps to the end of the block. From ABAP release 7.0, EhP2, the jump distance is essentially unlimited.

The unlimited jump distance should not be intentionally exploited. It enables errors to prevented in large procedures or control blocks, but the maximum recommended number of statements to be used in a procedure must always be adhered to as outlined in the programming guidelines.

The documented class `CL_ABAP_DYN_PRG` provides a set of static methods that support error-free, secure dynamic programming.

The documented class `CL_FS_PATH` provides a set of static methods that support the error-free, secure handling of file names.

abenabap.html abennews.html abennews-70\_ehps.html abennews-71.html