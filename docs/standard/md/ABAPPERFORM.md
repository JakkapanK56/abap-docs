---
title: "ABAPPERFORM"
description: |
  ABAPPERFORM - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPPERFORM.htm"
abapFile: "ABAPPERFORM.html"
keywords: ["do", "if", "method", "ABAPPERFORM"]
---

[Short Reference](ABAPPERFORM_SHORTREF.html)

1\. `PERFORM [subr_identifier](ABAPPERFORM_FORM.html)\ [[parameter_list](ABAPPERFORM_PARAMETERS.html)].`

2\. `PERFORM subr ON \{\ \{COMMIT [LEVEL idx]\}\ |\ \{ROLLBACK\}\ \}.`

Calls or registers [subroutines](ABENSUBROUTINE_GLOSRY.html).

Subroutines can be called statically and dynamically, internally and externally. Parameters can only be passed if they are called statically. Furthermore, subroutines can be registered for execution at the end of an [SAP LUW](ABENSAP_LUW_GLOSRY.html).

[Do not implement in function modules and subroutines](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.html)

Subroutines are obsolete. No new subroutines should be created in new programs. Methods should be used instead. Subroutines that have been created in existing programs for internal modularization can continue to be called. Whenever possible, however, external subroutine calls from other programs should be avoided.

[General Subroutine Call](ABAPPERFORM_GENERAL.html)

[Registration of Subroutines](ABAPPERFORM_ON_COMMIT.html)

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html