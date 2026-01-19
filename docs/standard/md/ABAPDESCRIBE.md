---
title: "ABAPDESCRIBE"
description: |
  ABAPDESCRIBE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDESCRIBE.htm"
abapFile: "ABAPDESCRIBE.html"
keywords: ["class", "data", "types", "internal-table", "ABAPDESCRIBE"]
---

1\. `DESCRIBE FIELD ...`

2\. `DESCRIBE TABLE ...`

3\. `DESCRIBE DISTANCE ...`

The variants of the statement `DESCRIBE` listed above can be used to determine some of the properties that data objects have at runtime.

[Field Properties](ABAPDESCRIBE_FIELD.html)

[Properties of an Internal Table](ABAPDESCRIBE_TABLE.html)

[Distance Between Two Fields](ABAPDESCRIBE_DISTANCE.html)

-   The statement `DESCRIBE` is mainly suitable for determining the properties of data objects of elementary data types. When `DESCRIBE` is used for structures or data objects of [deep](ABENDEEP_GLOSRY.html) data types like strings, internal tables, or reference variables, only elementary properties can be determined. Additional information, for example the static or dynamic type of a reference variable, cannot be determined by `DESCRIBE`. For this kind of information, the type description classes of [runtime type services](ABENRUN_TIME_TYPE_SERVICES_GLOSRY.html) (RTTS) should be used. These enable all data object properties of all data types to be determined. Since the functions of the RTTS type description classes cover all functions of the `DESCRIBE` statement, the system classes can be used instead of the statement.
-   The variant [`DESCRIBE LIST`](ABAPDESCRIBE_LIST.html) determines the properties of lists in the list buffer.

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendescribe\_field.html