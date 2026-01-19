---
title: "ABENDDIC_TYPES_NAMES"
description: |
  ABENDDIC_TYPES_NAMES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDIC_TYPES_NAMES.htm"
abapFile: "ABENDDIC_TYPES_NAMES.html"
keywords: ["do", "data", "types", "ABENDDIC", "TYPES", "NAMES"]
---

The name of a DDIC data type must stick to the following rules:

All DDIC data types, alongside [DDIC database tables](ABENDDIC_DATABASE_TABLES.html) and DDIC views, are located in the same namespace which includes all [global types](ABENGLOBAL_TYPE_GLOSRY.html) of an AS ABAP. [DDIC domains](ABENDOMAIN_GLOSRY.html), on the other hand, are in a separate namespace, and can therefore have the same name as, for example, a data element.

-   It can have a maximum of 30 characters.
-   It can consist of letters, digits, and underscores.
-   It must start with a letter.
-   It can be introduced using a [namespace prefix](ABENNAME_SPACE_PREFIX_GLOSRY.html) (`/.../`) of a [prefix namespace](ABENPREFIX_NAME_SPACE_GLOSRY.html)
-   It is in the same namespace of all [global types](ABENGLOBAL_TYPE_GLOSRY.html) of an AS ABAP.
-   It must not be the name of a [built-in data type](ABENBUILT_IN_TYPES.html) in ABAP.

abenabap.html abenabap\_dictionary.html abenddic\_data\_types.html