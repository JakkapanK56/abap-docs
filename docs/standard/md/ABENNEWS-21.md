---
title: "ABENNEWS-21"
description: |
  ABENNEWS-21 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-21.htm"
abapFile: "ABENNEWS-21.html"
keywords: ["select", "update", "delete", "if", "try", "data", "internal-table", "ABENNEWS"]
---

Changes were made in the following areas before development of ABAP release 3.0 started:

[1\. Country-Specific Decimal Point and Date Representation](#ABAP_MODIFICATION_1@4@)

[2\. Lists as Modal Dialog Boxes](#ABAP_MODIFICATION_2@4@)

[3\. Line Width per List or List Level](#ABAP_MODIFICATION_3@4@)

[4. New Language Element `DESCRIBE LIST`](#ABAP_MODIFICATION_4@4@)

[5\. Client-Independent ABAP SQL](#ABAP_MODIFICATION_5@4@)

[6. Client-Independent `EXPORT`/`IMPORT`](#ABAP_MODIFICATION_6@4@)

The new language element [`SET COUNTRY`](ABAPSET_COUNTRY.html) allows the decimal point and date representation for all subsequent output (`WRITE`) to be modified.

Lists can now be sent as modal dialog boxes, if formatted using `LEAVE TO LIST-PROCESSING` in standalone [dynpros](ABENDYNPRO_GLOSRY.html) that

(a) ... have the appropriate attribute set in the dynpro properties.

(b) ... are called using [`CALL SCREEN`](ABAPCALL_SCREEN.html) (more precisely using the addition ... STARTING AT ... ENDING AT).

Previously, the line width for a list was defined by specifying `LINE-SIZE` in the main program (the program started first in a [transaction](ABENTRANSACTION_GLOSRY.html)). This meant that lists created by function modules could **not** define the line width themselves.

**Now**, the `LINE-SIZE` specified in the active ABAP program (the program in which the active dynpros calls its modules) applies. This setting can be changed explicitly per list level using the addition `... LINE-SIZE` in [`NEW-PAGE`](ABAPNEW-PAGE.html).

Previously, `DESCRIBE` could be used to describe the properties of fields, structures, and internal tables. This is now also possible for lists using [`DESCRIBE LIST`](ABAPDESCRIBE_LIST.html).

Table can now be accessed in any client using the addition `CLIENT SPECIFIED` with the ABAP SQL language elements [`SELECT`](ABAPSELECT.html), [`UPDATE`](ABAPUPDATE.html), and [`DELETE`](ABAPDELETE_DBTAB.html).

The addition `CLIENT` of the language elements [`EXPORT ... TO DATABASE`](ABAPEXPORT_DATA_CLUSTER.html), `IMPORT ... FROM DATABASE`, and `DELETE FROM DATABASE` can now be used for client-independent access to appropriate client-dependent cluster databases.

abenabap.html abennews.html