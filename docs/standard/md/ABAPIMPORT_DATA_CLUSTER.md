---
title: "ABAPIMPORT_DATA_CLUSTER"
description: |
  ABAPIMPORT_DATA_CLUSTER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPIMPORT_DATA_CLUSTER.htm"
abapFile: "ABAPIMPORT_DATA_CLUSTER.html"
keywords: ["do", "if", "class", "data", "internal-table", "ABAPIMPORT", "DATA", "CLUSTER"]
---

[Short Reference](ABAPIMPORT_SHORTREF.html)

``IMPORT [`parameter_list`](ABAPIMPORT_PARAMETERLIST.html) FROM [`medium`](ABAPIMPORT_MEDIUM.html)\ [[`conversion_options`](ABAPIMPORT_CONVERSION.html)].``

Imports data objects specified in [`parameter_list`](ABAPIMPORT_PARAMETERLIST.html) from a [data cluster](ABENDATA_CLUSTER_GLOSRY.html) stored in storage medium [`medium`](ABAPIMPORT_MEDIUM.html) with statement [`EXPORT`](ABAPEXPORT_DATA_CLUSTER.html). If necessary, the data is automatically converted to the current byte order (endian) and character format. The additions [`conversion_options`](ABAPIMPORT_CONVERSION.html) can be used to make adaptations to the current platform.

If the internal addition [`USING subr`](ABAPIMPORT_INTERNAL.html) is used, a different rule applies to `sy-subrc`.

See also [Classes for Data Clusters](ABENCL_ABAP_EXPIMP.html).

Reading of a link table of the ABAP keyword documentation that is buffered in a data cluster of a database table into an internal table.

DATA: \\n abapdocu\_temp\_id TYPE abapdocu\_temp-srtfd, \\n abapdocu\_temp\_wa TYPE abapdocu\_temp, \\n index\_tab TYPE cl\_abap\_docu=>abap\_index\_tab. \\n\\ \\nabapdocu\_temp\_id = 'MAN\_INDEX.' && sy-langu. \\nIMPORT man\_index\_tab = index\_tab \\n FROM DATABASE abapdocu\_temp(mx) \\n ID abapdocu\_temp\_id \\n TO abapdocu\_temp\_wa. \\n\\ \\nIF sy-subrc = 0. \\n ... \\nENDIF. `**sy-subrc**` **Meaning** 0 The specified data cluster was found and the content of the parameters in the data cluster was passed to the respective data objects. Nonexistent parameters were ignored. 4 The specified data cluster was not found. abenabap.html abenabap\_reference.html abendata\_cluster.html