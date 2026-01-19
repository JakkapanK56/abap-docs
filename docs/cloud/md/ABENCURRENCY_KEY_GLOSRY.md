---
title: "ABENCURRENCY_KEY_GLOSRY"
description: |
  ABENCURRENCY_KEY_GLOSRY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCURRENCY_KEY_GLOSRY.htm"
abapFile: "ABENCURRENCY_KEY_GLOSRY.html"
keywords: ["if", "data", "types", "ABENCURRENCY", "KEY", "GLOSRY"]
---

Component of a [DDIC structure](ABENDDIC_STRUCTURE_GLOSRY.html), or [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) of the type [`CUKY`](ABENDDIC_BUILTIN_TYPES.html) defined in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html). A currency key can be linked to a [currency field](ABENCURRENCY_FIELD_GLOSRY.html) of a structure, database table, or view. The currency key contains a [currency code](ABENCURRENCY_ID_GLOSRY.html) from the database table `TCURC`, and is used to define the currency for the currency field. By default, the number of decimal places of a currency is always two. Currencies with a different number of decimal places must be entered additionally in the table `TCURX`, where the number of decimal places can be defined explicitly.

[**\-> More about**](ABENDDIC_CURRENCY_FIELD.html)

ABENDDIC\_GLOSSARY.html