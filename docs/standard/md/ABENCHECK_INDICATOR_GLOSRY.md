---
title: "ABENCHECK_INDICATOR_GLOSRY"
description: |
  ABENCHECK_INDICATOR_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCHECK_INDICATOR_GLOSRY.htm"
abapFile: "ABENCHECK_INDICATOR_GLOSRY.html"
keywords: ["do", "ABENCHECK", "INDICATOR", "GLOSRY"]
---

Indicates whether an [authorization object](ABENAUTHORIZATION_OBJECT_GLOSRY.html) is checked by [authorization check](ABENAUTHORIZATION_CHECK_GLOSRY.html) in a certain context, for example a [transaction](ABENTRANSACTION_GLOSRY.html). Check indicators for authorization objects are defined at SAP by the transaction `SU22` and in customer systems by the transaction `SU24`. Check indicators can have the statuses *check* and *do not check*, where *check* is given a proposal status with the values *empty* (not yet set), *yes*, and *no*. The changes made in transaction `SU22` have the role of proposal values in customer systems and can be passed to transaction `SU24` with transaction `SU25`.

ABENTECHNO\_GLOSSARY.html