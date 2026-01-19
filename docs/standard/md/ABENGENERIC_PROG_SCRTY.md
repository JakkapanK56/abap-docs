---
title: "ABENGENERIC_PROG_SCRTY"
description: |
  ABENGENERIC_PROG_SCRTY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENGENERIC_PROG_SCRTY.htm"
abapFile: "ABENGENERIC_PROG_SCRTY.html"
keywords: ["insert", "delete", "do", "if", "case", "data", "types", "ABENGENERIC", "PROG", "SCRTY"]
---

[ABAP command injections](ABENABAP_COMM_INJECTION_GLOSRY.html), the injection of malicious ABAP code into programs, is a potential risk in generic programming. The most important statements in generic programming are

Both of these statements can be used to create executable ABAP code, some or all of which can originate outside of the program. Careful checks must be made on those parts of programs created in this way that originate from outside of the program. The greater the number of these parts, the more difficult this is. For this reason, it is recommended that all other dynamic programming techniques are tried before resorting to program generation. If it is absolutely necessary to use program generation, the dynamic parts of programs should be kept as few as possible. Persistently saved forms are useful here, in which only placeholders are replaced by dynamic parts and which can otherwise be checked statically. If the content for the placeholders of the forms originate outside the program, they must be checked in accordance with how they are used in the form.

The following program is a perfect example of a worst case scenario. Every user with authorization for this program can enter and execute source code at will. The minimum action that must be taken is to check the development authorization of the current user (see the example for [authorizations](ABENAUTHORITY_SCRTY.html)). Another option is to check whether the system in question is a development or production system. Checking entered program code, on the other hand, is very difficult, particularly if the entire program is modifiable (as here) and not just a single line in a pattern.

-   [`GENERATE SUBROUTINE POOL`](ABAPGENERATE_SUBROUTINE_POOL.html)
-   [`INSERT REPORT`](ABAPINSERT_REPORT.html)

-   In principle, the ABAP command injections cover all individual security risks listed here. Generic programs containing fully dynamic statements are susceptible to potential injections. See, for example, [SQL Injections Using Generic Programming](ABENSQL_INJ_GEN_PROG_SCRTY.html).
-   The [profile parameter](ABENPROFILE_PARAMETER_GLOSRY.html)\\ `abap/dyn_abap_log` can be used to activate logging of all dynamic source code changes using [`GENERATE SUBROUTINE POOL`](ABAPGENERATE_SUBROUTINE_POOL.html)\\ [`INSERT REPORT`](ABAPINSERT_REPORT.html), and [`DELETE REPORT`](ABAPDELETE_REPORT.html). The database table `DYNABAPHDR` then contains the associated events, which can be evaluated using the program `RDYNABAP_SHOW`. The generic programming statements are also used by the development tools, which means logging of this kind is useful only in non-development systems.

TYPES prog TYPE TABLE OF string WITH EMPTY KEY. \\nDATA(text) = concat\_lines\_of( VALUE prog( \\n ( |PROGRAM.\\\\n\\\\n| ) \\n ( |FORM do\_it.\\\\n| ) \\n ( | ...\\\\n| ) \\n ( |ENDFORM.| ) ) ). \\nCALL FUNCTION 'DEMO\_INPUT\_TEXT' \\n CHANGING \\n text\_string = text \\n EXCEPTIONS \\n canceled = 4. \\nIF sy-subrc = 4. \\n LEAVE PROGRAM. \\nENDIF. \\nSPLIT text AT |\\\\n| INTO TABLE DATA(prog). \\nGENERATE SUBROUTINE POOL prog NAME DATA(pool). \\nIF sy-subrc = 0. \\n PERFORM do\_it IN PROGRAM (pool). \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_security.html abendynamic\_programming\_scrty.html