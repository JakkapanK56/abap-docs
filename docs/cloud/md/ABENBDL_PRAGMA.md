---
title: "ABENBDL_PRAGMA"
description: |
  ABENBDL_PRAGMA - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_PRAGMA.htm"
abapFile: "ABENBDL_PRAGMA.html"
keywords: ["update", "delete", "do", "if", "case", "class", "ABENBDL", "PRAGMA"]
---

`... ##code...`

Pragmas can be used to hide [syntax check](ABENSYNTAX_CHECK_GLOSRY.html) warnings.

A pragma is not case-sensitive and does not contain blanks. A pragma starts with two hash characters (`##`), followed by the pragma code `code`. The pragma code determines the effect.

A pragma applies to the current statement, that is to the statement that ends at the next semicolon ( *;* ) or curly bracket ( *\\{* ), or ( *\\}*).

Pragmas can be used at specific positions in the source code, namely:

Pragmas used at a wrong position have no effect.

The long text of the error message provides the information on which pragma can be used to hide a specific syntax check warning.

The following BDEF uses different pragmas to suppress syntax check warnings:

-   At the start of a line, after any number of blanks
-   At the end of a line, only followed by a semicolon ( *;* ), or a curly bracket ( *\\{* ), or ( *\\}* ).
-   *Not* before, after, or within parentheses `( ... )`.
-   Multiple pragmas may be positioned one after another, separated by blanks, at allowed positions.

-   `##DRAFT_ASSOC`: Suppresses a syntax check warning that is issued because the association `_child` is not draft-enabled.
-   `##TYPE`: Suppresses a syntax check warning that is issued because the action parameter `DEMO_CDS_ABSTRACT_ROOT` is a deep structure, but it is only used as a flat parameter in the current BDEF.

managed implementation in class bp\_demo\_rap\_pragma unique;\\nstrict ( 2 );\\nwith draft;\\n\\ndefine behavior for DEMO\_RAP\_PRAGMA alias Root\\npersistent table demo\_dbtab\_root\\ndraft table demo\_dbtab\_d6\\nlock master\\ntotal etag lchg\_date\_time\\nauthorization master ( instance, global )\\n\\n\\{\\n create;\\n update;\\n delete;\\n association \_child ##DRAFT\_ASSOC \\{ create; \\}\\n\\n action MyAction parameter DEMO\_CDS\_ABSTRACT\_ROOT ##TYPE;\\n\\n field ( readonly : update ) key\_field;\\n field ( readonly ) lchg\_date\_time;\\n\\n draft action Edit;\\n draft action Activate optimized;\\n draft action Discard;\\n draft action Resume;\\n draft determine action Prepare;\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_PRAGMA\_CHILD alias Child\\npersistent table demo\_dbtab\_child\\ndraft table demo\_draft\_ch6\\nlock dependent by \_parent\\nauthorization dependent by \_parent\\n//etag master <field\_name>\\n\\{\\n update;\\n delete;\\n field ( readonly ) key\_field, key\_field\_child;\\n association \_parent ##DRAFT\_ASSOC;\\n\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl\_syntax.html