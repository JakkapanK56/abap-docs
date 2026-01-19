---
title: "ABENAUTHORITY_SCRTY"
description: |
  ABENAUTHORITY_SCRTY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENAUTHORITY_SCRTY.htm"
abapFile: "ABENAUTHORITY_SCRTY.html"
keywords: ["do", "if", "class", "data", "ABENAUTHORITY", "SCRTY"]
---

Adequate authorization checks are an important part of secure ABAP programming. In many statements, an appropriate authorization check is performed implicitly, for example:

There are, however, many critical statements where no implicit authorization checks are performed, for example:

Any places in a program that a user can reach without sufficient authorizations and where no implicit authorization check takes place must be secured explicitly using the statement [`AUTHORITY-CHECK`](ABAPAUTHORITY-CHECK.html) and the result of the check analyzed carefully.

A prerequisite for both implicit and explicit authorization checks is that all components required for the SAP authorization concept, such as [authorizations](ABENAUTHORIZATION_GLOSRY.html), [authorization objects](ABENAUTHORIZATION_OBJECT_GLOSRY.html), [authorization objects](ABENAUTHORIZATION_PROFILE_GLOSRY.html), and so on are defined. Care must also be taken to set the [check indicator](ABENCHECK_INDICATOR_GLOSRY.html) correctly, to enable all required checks to take place.

Checks explicitly whether the current user can create temporary programs. This check could be used to secure the [ABAP command injections](ABENGENERIC_PROG_SCRTY.html) example.

-   In [`CALL TRANSACTION`](ABAPCALL_TRANSACTION.html) (with the addition [`WITH AUTHORITY-CHECK`](ABAPCALL_TRANSACTION_AUTHORITY.html)) and in [`LEAVE TO TRANSACTION`](ABAPLEAVE_TO_TRANSACTION.html).
-   When an [authorization group](ABENAUTHORIZATION_GROUP_GLOSRY.html) is created for the called program in [`SUBMIT`](ABAPSUBMIT.html).
-   Using the automatic authorization checks in the [ABAP file interface](ABENFILE_INTERFACE_GLOSRY.html).

-   [`CALL TRANSACTION`](ABAPCALL_TRANSACTION.html) without the addition [`WITH AUTHORITY-CHECK`](ABAPCALL_TRANSACTION_AUTHORITY.html) (and if the table [`TCDCOUPLES`](ABAPCALL_TRANSACTION_AUTH_OBS.html) does not contain any appropriate entries).
-   [`SUBMIT`](ABAPSUBMIT.html) for programs without [authorization groups](ABENAUTHORIZATION_GROUP_GLOSRY.html)
-   [SQL](ABENSQL_GLOSRY.html) reads performed on database tables

AUTHORITY-CHECK OBJECT 'S\_DEVELOP' \\n ID 'DEVCLASS' FIELD '$TMP' \\n ID 'OBJTYPE' FIELD 'PROG' \\n ID 'OBJNAME' DUMMY \\n ID 'P\_GROUP' DUMMY \\n ID 'ACTVT' FIELD '02'. \\nIF sy-subrc <> 0. \\n LEAVE PROGRAM. \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_security.html abenother\_programming\_scrty.html