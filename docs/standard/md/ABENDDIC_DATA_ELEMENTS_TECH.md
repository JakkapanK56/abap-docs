---
title: "ABENDDIC_DATA_ELEMENTS_TECH"
description: |
  ABENDDIC_DATA_ELEMENTS_TECH - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_DATA_ELEMENTS_TECH.htm"
abapFile: "ABENDDIC_DATA_ELEMENTS_TECH.html"
keywords: ["do", "if", "class", "data", "types", "ABENDDIC", "DATA", "ELEMENTS", "TECH"]
---

A data element describes an [elementary data type](ABENELEMENTARY_DATA_TYPE_GLOSRY.html) or a [reference type](ABENREFERENCE_TYPE_GLOSRY.html) with the following technical properties:

The data element `S_CONN_ID` inherits its technical properties (data type `NUMC`, length 4) from the domain `S_CONN_ID`. The data element `S_CONN_ID` has documentation and further texts that describe its semantics. It is used as a data type of many table fields that match these semantic properties, such as the column `CONNID` of the DDIC database tables `SPFLI`, `SBOOK`, and `SFLIGHT`.

-   **Elementary type**
-   A data element that describes an elementary type has a [built-in data type](ABENDDIC_BUILTIN_TYPES.html) from the ABAP Dictionary, a length, and, if necessary, a number of decimal places as its technical properties. These technical properties are defined either directly in the data element or they are inherited from a [domain](ABENDDIC_DOMAINS.html).
-   **Reference type**
-   A data element that describes a reference type is either a type for a [data reference variable](ABENDATA_REFERENCE_VARIABLE_GLOSRY.html) or for an [object reference variable](ABENOBJECT_REFER_VARIABLE_GLOSRY.html).

-   The [static type](ABENSTATIC_TYPE_GLOSRY.html) for a data reference variable is either the generic type `DATA`, any existing data type from the ABAP Dictionary (including [DDIC database tables](ABENDDIC_DATABASE_TABLES.html) or [views](ABENDDIC_VIEWS.html)), or a directly specified [built-in data type](ABENDDIC_BUILTIN_TYPES.html).
-   The [static type](ABENSTATIC_TYPE_GLOSRY.html) for an object reference variable is either the generic type `OBJECT` or an existing global class or a global interface from the [class library](ABENCLASS_LIBRARY_GLOSRY.html).

-   When existing data elements are modified, all consumers of the data element are also affected. In particular, [foreign keys](ABENDDIC_DATABASE_TABLES_FORKEY.html) can become inconsistent when used for fields of DDIC database tables, which makes [adjustments](ABENDDIC_DATABASE_TABLES_ADJ.html) necessary.
-   Global reference types from the ABAP Dictionary can be used for typing in ABAP programs. They cannot, however, be used for fields of database tables or for elements of CDS entities.

abenabap.html abenabap\_dictionary.html abenddic\_data\_types.html abenddic\_data\_elements.html