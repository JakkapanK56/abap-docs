---
title: "ABENNEWS-640-DATACLUSTER"
description: |
  ABENNEWS-640-DATACLUSTER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-640-DATACLUSTER.htm"
abapFile: "ABENNEWS-640-DATACLUSTER.html"
keywords: ["if", "method", "class", "data", "ABENNEWS", "640", "DATACLUSTER"]
---

[1. New System Class `CL_ABAP_EXPIMP_CONV`](#ABAP_MODIFICATION_1@4@)

[2. Conversion Additions in `IMPORT`](#ABAP_MODIFICATION_2@4@)

[3. Stricter Structure Check in `IMPORT`](#ABAP_MODIFICATION_3@4@)

The methods of the class `CL_ABAP_EXPIMP_CONV` convert the release-dependent internal format of [data clusters](ABENDATA_CLUSTER_GLOSRY.html).

This change was also transported back to ABAP release 6.20.

The [conversion additions](ABAPIMPORT_CONVERSION.html)\\ `ACCEPTING PADDING`, `ACCEPTING TRUNCATION`, and `IGNORING STRUCTURE BOUNDARIES` are now also possible in [`IMPORT FROM SHARED BUFFER`](ABAPIMPORT_MEDIUM.html).

The rule that structures and substructures (in the addition `ACCEPTING PADDING`) in a target structure in the statement [`IMPORT`](ABAPIMPORT_PARAMETERLIST.html) can have more components than the source structure can lead to problems in references to the structures defined in ABAP Dictionary, if the structure is indicated there as extensible. From ABAP release 6.40, this situation can therefore produce a warning from the extended program check.

abenabap.html abennews.html abennews-6.html abennews-640.html