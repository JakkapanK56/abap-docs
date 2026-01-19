---
title: "ABENBDL_EXTENSIBILITY_ABSTRACT"
description: |
  ABENBDL_EXTENSIBILITY_ABSTRACT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_EXTENSIBILITY_ABSTRACT.htm"
abapFile: "ABENBDL_EXTENSIBILITY_ABSTRACT.html"
keywords: ["ABENBDL", "EXTENSIBILITY", "ABSTRACT"]
---

An [abstract BDEF extension](ABENRAP_ABS_BDEF_EXT_GLOSRY.html) is a repository object that extends an [abstract behavior definition](ABENCDS_ABSTRACT_BDEF_GLOSRY.html) using the statement [`extension for abstract`](ABENBDL_EXTENSION_FOR_ABSTRACT.html).

As a prerequisite, the respective abstract BDEF must explicitly allow extensions as described in topic [RAP - Extensibility Enabling for Abstract BDEFs](ABENBDL_EXT_ENABLING_ABSTRACT.html).

The following extensions are possible:

Details are described in the topic [RAP - `extension for abstract`](ABENBDL_EXTENSION_FOR_ABSTRACT.html).

-   Extending an existing node using the statement `extend behavior for AbstractEntity`.
-   Adding new nodes to the hierarchical type of the abstract BDEF using the statement `define behavior for AbstractEntity`.
-   Adding new scalar entities to the hierarchical type using the statement `scalar entity AbstractEntity`.

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html