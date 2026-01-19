---
title: "ABAPIMPORT_DATA_CLUSTER"
description: |
  ABAPIMPORT_DATA_CLUSTER - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPIMPORT_DATA_CLUSTER.htm"
abapFile: "ABAPIMPORT_DATA_CLUSTER.html"
keywords: ["if", "data", "ABAPIMPORT", "DATA", "CLUSTER"]
---

``IMPORT [`parameter_list`](ABAPIMPORT_PARAMETERLIST.html) FROM [`medium`](ABAPIMPORT_MEDIUM.html)\ [[`conversion_options`](ABAPIMPORT_CONVERSION.html)].``

Imports data objects specified in [`parameter_list`](ABAPIMPORT_PARAMETERLIST.html) from a [data cluster](ABENDATA_CLUSTER_GLOSRY.html) stored in storage medium [`medium`](ABAPIMPORT_MEDIUM.html) with statement [`EXPORT`](ABAPEXPORT_DATA_CLUSTER.html). If necessary, the data is automatically converted to the current byte order (endian) and character format. The additions [`conversion_options`](ABAPIMPORT_CONVERSION.html) can be used to make adaptations to the current platform.

If the internal addition `USING subr` is used, a different rule applies to `sy-subrc`.

Writing and reading of a byte string of two numbers.

DATA buffer TYPE xstring. \\nDATA num1 TYPE i. DATA num2 TYPE i. \\n\\ \\nEXPORT name1 = 1 name2 = 2 TO DATA BUFFER buffer. \\nIMPORT name1 = num1 name2 = num2 FROM DATA BUFFER buffer. `**sy-subrc**` **Meaning** 0 The specified data cluster was found and the content of the parameters in the data cluster was passed to the respective data objects. Nonexistent parameters were ignored. 4 The specified data cluster was not found. abenabap.html abenabap\_reference.html abendata\_cluster.html