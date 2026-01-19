---
title: "ABENBDL_EXTENSIBILITY_ENABLNG_INTF"
description: |
  ABENBDL_EXTENSIBILITY_ENABLNG_INTF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_EXTENSIBILITY_ENABLNG_INTF.htm"
abapFile: "ABENBDL_EXTENSIBILITY_ENABLNG_INTF.html"
keywords: ["update", "delete", "if", "ABENBDL", "EXTENSIBILITY", "ENABLNG", "INTF"]
---

``[`interface`](ABENBDL_BO_INTERFACE_HEADER.html)\  [...]\  [`extensible`](ABENBDL_EXTENSIBLE.html)\  \{\ [`entity behavior definition`](ABENBDL_DEFINE_BEH_INTERFACE.html)\ \}\  ...``

In a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html), the keyword `extensible` can be specified in the BDEF header to allow for [BDEF extensions](ABENRAP_EXTENSION_GLOSRY.html). This specification includes all RAP BO entities and components that are included in the interface.

A RAP BO interface cannot be extended directly, but extensions always refer to the underlying base BO. The base BO refers to the RAP BO interface with the addition [`using interface`](ABENBDL_USING_INTERFACE.html).

The RAP BO interface `DEMO_RAP_EXT_DET_ACT_INT` is declared as `extensible`.

It can now be used for base BDEF extensions with the addition [`using interface`](ABENBDL_USING_INTERFACE.html).

interface;\\nuse draft;\\nextensible;\\nuse side effects;\\n\\ndefine behavior for DEMO\_RAP\_EXT\_DET\_ACT\_INT alias Root\\n\\{\\n use create;\\n use update;\\n use delete;\\n\\n use action trigger\_all;\\n\\n use action Activate;\\n use action Discard;\\n use action Edit;\\n use action Resume;\\n use action Prepare;\\n\\n use association \_child \\{ create; with draft; \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_EXT\_DET\_ACT\_INT\_CH alias Child\\n\\{\\n use update;\\n use delete;\\n\\n use association \_parent \\{ with draft; \\}\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_enabling.html