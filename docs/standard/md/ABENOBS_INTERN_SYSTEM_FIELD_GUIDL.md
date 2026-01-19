---
title: "ABENOBS_INTERN_SYSTEM_FIELD_GUIDL"
description: |
  ABENOBS_INTERN_SYSTEM_FIELD_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENOBS_INTERN_SYSTEM_FIELD_GUIDL.htm"
abapFile: "ABENOBS_INTERN_SYSTEM_FIELD_GUIDL.html"
keywords: ["do", "data", "ABENOBS", "INTERN", "SYSTEM", "FIELD", "GUIDL"]
---

Not all system fields are designed to be used in application programs. All available system fields are components of the structure `SYST` in ABAP Dictionary (or components of the structure `sy` in the debugger). The meaning of the components is included in the accompanying description. Any system fields that are [obsolete](ABENSYSTEM_FIELDS_OBSOLETE.html) or only to be [used internally](ABENSYSTEM_FIELDS_INTERNAL.html) are clearly marked.

**Do not use obsolete or internal system fields**

In application programs, do not use system fields flagged as obsolete or for internal use only in ABAP Dictionary or in the ABAP documentation.

The behavior of obsolete and internal system fields is undefined. This means that ABAP application programs must not make any assumptions about the content of these system fields.

The following source code shows how the system field `sy-fodec`, flagged for internal use, is used illegally in the structure `SYST` after the statement `DESCRIBE FIELD` to count the number of decimal places in a data object.

The following source code demonstrates how decimal places can be counted correctly using the appropriate addition of the statement `DESCRIBE FIELD`.

DATA dobj TYPE p LENGTH 8 DECIMALS 2. \\nDATA type TYPE c LENGTH 1. \\nDATA decimal TYPE i. \\nDESCRIBE FIELD dobj TYPE type. \\ndecimals = sy-fodec. DATA dobj TYPE p LENGTH 8 DECIMALS 2. \\nDATA type TYPE c LENGTH 1. \\nDATA decimals TYPE i. \\nDESCRIBE FIELD dobj TYPE type DECIMALS decimals. abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abensystem\_fields\_gdl.html