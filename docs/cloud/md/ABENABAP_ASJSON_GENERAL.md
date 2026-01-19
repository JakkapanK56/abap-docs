---
title: "ABENABAP_ASJSON_GENERAL"
description: |
  ABENABAP_ASJSON_GENERAL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_ASJSON_GENERAL.htm"
abapFile: "ABENABAP_ASJSON_GENERAL.html"
keywords: ["if", "case", "class", "data", "ABENABAP", "ASJSON", "GENERAL"]
---

The following lines show the general format of the [canonical JSON representation](ABENCANONICAL_JSON_REPRESEN_GLOSRY.html). Any line breaks and indents are included for clarification purposes only.

\\{ \\n  "bn1":... \\n  "bn2":... \\n   ... \\n  "%heap":\\{...\\} \\n\\}

The top level contains the object `\{ \}`. The object components with the names `bn1`, `bn2` ... represent the ABAP data objects specified in the addition `source` of the statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html) as `e1`\\ `e2` ... or in the addition `result` as `f1`\\ `f2` ... The names of the object components `bn1`, `bn2`, ... are the names specified there in uppercase.

The values of the object components represent the content of named data object in accordance with the type-dependent mapping described in the following sections. Here, reference variables are always represented as object components whose content is objects that reference the content of referenced anonymous data objects and instances of classes in an optional object component `%heap` of the top object.

The same rules apply to the names of the object components `bn1`, `bn2` ... as in [asXML](ABENABAP_XSLT_ASXML_GENERAL.html) and replacements can be made as defined the table specified there.

[asJSON, General Format](ABENABAP_HELLO_JSON_ABEXA.html)

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_json.html abenabap\_json\_trafos.html abenabap\_asjson.html