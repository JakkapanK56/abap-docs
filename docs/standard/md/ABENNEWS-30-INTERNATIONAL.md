---
title: "ABENNEWS-30-INTERNATIONAL"
description: |
  ABENNEWS-30-INTERNATIONAL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-30-INTERNATIONAL.htm"
abapFile: "ABENNEWS-30-INTERNATIONAL.html"
keywords: ["while", "if", "case", "try", "data", "ABENNEWS", "INTERNATIONAL"]
---

[1. `SORT ... AS TEXT`: Locale-Friendly Sorting](#ABAP_MODIFICATION_1@4@) 

[2. `CONVERT TEXT`: Conversion of Texts to a Locale-Specific Sortable Format](#ABAP_MODIFICATION_2@4@) 

[3. `SET LOCALE`: Explicit Setting of the Text Environment](#ABAP_MODIFICATION_3@4@)

**Overview**

Since releases 2.1/2.2, ABAP has provided a number of statements to support the internationalization of programs. `SET COUNTRY` can be used to define the date and number formatting for a particular country, while `SET LANGUAGE` makes it possible to change the text pool language. `TRANSLATE f TO LOWER/UPPER CASE` reacts to the locale category `LC_CTYPE`, and when passing data between [AS instance](ABENAS_INSTANCE_GLOSRY.html) and front ends and when passing data using RFC, the system respects the SAP [code page](ABENCODEPAGE_GLOSRY.html).

In ABAP release 3.0, texts can be sorted in a locale-friendly way (specific to culture). Here, the sort order is determined by the locale category `LC_COLLATE`.

In addition, the [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html) which (among other things) defines the locale-specific sort rules is set automatically according to the language of the active user when an [internal session](ABENINTERNAL_SESSION_GLOSRY.html) is opened.

Finally, the basis for internationalization has been modified. Using the SAP text environment table `TCP0C`, text environments are assigned to a four-part key consisting of <`PLATFORM`, `LANGUAGE`, `COUNTRY`, `MODIFIER`\>.

The addition `... AS TEXT` of the language element [`SORT`](ABAPSORT_ITAB.html) enables text data to be sorted in a locale-friendly way.

The new `CONVERT` variant [`CONVERT TEXT t INTO SORTABLE CODE sc`](ABAPCONVERT_TEXT.html) converts a text to a locale-friendly sortable format.

The new `SET` variant [`SET LOCALE`](ABAPSET_LOCALE.html) enables program-driven configuration of the [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html).

abenabap.html abennews.html abennews-30.html