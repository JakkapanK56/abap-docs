---
title: "ABENPXA_GLOSRY"
description: |
  ABENPXA_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENPXA_GLOSRY.htm"
abapFile: "ABENPXA_GLOSRY.html"
keywords: ["if", "data", "ABENPXA", "GLOSRY"]
---

Short for Program Execution Area. Memory for managing the fixed data of a running ABAP program. The PXA notably contains the [byte codes](ABENBYTECODE_GLOSRY.html) of all programs running simultaneously on an [AS instance](ABENAS_INSTANCE_GLOSRY.html). This memory is shared by all [internal sessions](ABENINTERNAL_SESSION_GLOSRY.html) of the AS instance, and there is only one such memory on each server. The byte code of a program that is executed once remains buffered in the PXA as a program [load](ABENLOAD_GLOSRY.html) for as long as possible to prevent reloads from the database if the program is executed again. Furthermore, the PXA buffers shared resources, such as values of [constants](ABENCONSTANT_GLOSRY.html), and is used for the [initial value sharing](ABENINITIAL_VALUE_SHARING_GLOSRY.html) of [boxed components](ABENBOXED_COMPONENT_GLOSRY.html).

ABENTECHNO\_GLOSSARY.html