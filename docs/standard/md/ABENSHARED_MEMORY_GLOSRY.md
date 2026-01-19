---
title: "ABENSHARED_MEMORY_GLOSRY"
description: |
  ABENSHARED_MEMORY_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSHARED_MEMORY_GLOSRY.htm"
abapFile: "ABENSHARED_MEMORY_GLOSRY.html"
keywords: ["if", "data", "ABENSHARED", "MEMORY", "GLOSRY"]
---

Memory area of an [AS instance](ABENAS_INSTANCE_GLOSRY.html) in which the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) stores programs, program data, buffers, and so on. In the shared memory of the current AS instance, [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html) can either access [data clusters](ABENDATA_CLUSTER_GLOSRY.html) in [cross-transactional application buffers](ABENCROSSTRANS_APP_BUFFER_GLOSRY.html) or [shared objects](ABENSHARED_OBJECTS_GLOSRY.html) in the [shared objects memory](ABENSHARED_OBJECTS_MEMORY_GLOSRY.html). The amount of shared memory that can be occupied by the different consumers is defined statically using [profile parameters](ABENPROFILE_PARAMETER_GLOSRY.html). [Transaction](ABENTRANSACTION_GLOSRY.html)\\ `ST02` (SAP Memory Management) shows the current occupancy of the shared memory and the corresponding profile parameters.

[**\-> More about**](ABENMEMORY_ORGANIZATION.html)

ABENTECHNO\_GLOSSARY.html