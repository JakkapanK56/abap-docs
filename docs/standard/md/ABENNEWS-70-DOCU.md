---
title: "ABENNEWS-70-DOCU"
description: |
  ABENNEWS-70-DOCU - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-70-DOCU.htm"
abapFile: "ABENNEWS-70-DOCU.html"
keywords: ["select", "do", "if", "ABENNEWS", "DOCU"]
---

In ABAP release 7.0, the ABAP keyword documentation has been expanded as follows:

[1\. Full Text Search](#ABAP_MODIFICATION_1@4@)

[2\. Subject Search](#ABAP_MODIFICATION_2@4@)

[3\. Diagrams](#ABAP_MODIFICATION_3@4@)

[4\. Language](#ABAP_MODIFICATION_4@4@)

[5\. Terminology Change for Narrowing and Widening Casts](#ABAP_MODIFICATION_5@4@)

[6\. Adjustment of Font Size](#ABAP_MODIFICATION_6@4@)

Considerable improvements have been made to the performance of the full text search in the ABAP keyword documentation. The occurrences found by the full text search are now marked in the display. As before, the full text search can be called from the display window of the documentation. It is also available on the initial screens for the documentation (ABAP Editor, transaction `ABAPHELP`) as an alternative to the index search.

An alphabetical [subject directory](ABENABAP_SUBJECTS.html) has been added to the ABAP keyword documentation. The index search now evaluates this directory in addition to the [ABAP index](ABENABAP_INDEX.html) and [ABAP glossary](ABENABAP_GLOSSARY.html).

Using access to the `MIME` repository, diagrams can now be displayed in the ABAP keyword documentation.

Example: [Sessions and Memory Areas](ABENMEMORY_ORGANIZATION.html)

It is now possible to select the language in which the documentation is displayed on the initial screen of the transaction `ABAPHELP`. The user can choose between the logon language, English, and German. The logon language is the standard setting. When the ABAP keyword documentation is called from ABAP Editor, the logon language is always used.

The use of the terms [narrowing cast](ABENNARROWING_CAST_GLOSRY.html) and [widening cast](ABENWIDENING_CAST_GLOSRY.html), which refers to the view that a reference variable offers to an object, has been modified to reflect more general usage, which refers to the value set covered by a variable. Now the unambiguous terms [upcast](ABENUP_CAST_GLOSRY.html) and [downcast](ABENDOWN_CAST_GLOSRY.html) are now used almost everywhere.

If the font size is changed when *adjusting the local layout* in the SAP GUI, this also applies to the display of the ABAP keyword documentation. Previously, only changes in color affected the ABAP keyword documentation. Within a user session, the GUI font size dependency can be deactivated by setting the standard font size.

abenabap.html abennews.html abennews-70\_ehps.html abennews-70.html