---
title: "ABENRFC_PROTOCOL"
description: |
  ABENRFC_PROTOCOL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENRFC_PROTOCOL.htm"
abapFile: "ABENRFC_PROTOCOL.html"
keywords: ["select", "do", "if", "method", "data", "types", "ABENRFC", "PROTOCOL"]
---

The RFC protocol describes how data is passed to and from the RFC interface.

[basXML](ABENBASXML_GLOSRY.html) is available as a uniform format for all types of parameter passing. To use basXML, it must be specified in both transaction `SM59` and in the *transmission protocol* for the destination and explicitly when creating an [RFM](ABENRFM_GLOSRY.html).

If one of these two prerequisites is not met, for example, for communication with systems in earlier releases, in which basXML is not yet available, the RFC protocol is selected implicitly depending on the parameter type:

The protocol *fast serialization* is described in the documentation [RFC](https://help.sap.com/docs/ABAP_PLATFORM_NEW/753088fc00704d0a80e7fbd6803c8adb/4888068AD9134076E10000000A42189D) in SAP Help Portal.

With *fast serialization*, data is passed using a name-based method and incompatible parameters are handled according to the rules of [lossless assignments](ABENLOSSLESS_ASSIGNMENT_GLOSRY.html).

For more information about the RFC protocols, see the documentation [RFC](https://help.sap.com/docs/ABAP_PLATFORM_NEW/753088fc00704d0a80e7fbd6803c8adb/4888068AD9134076E10000000A42189D) in SAP Help Portal.

-   An internal binary format is used for flat parameters as well as when using [`TABLES`](ABAPCALL_FUNCTION_DESTINATION_PARA.html) parameters.
-   An XML format known as xRFC is used for deep parameters.

-   For reasons of uniformity, the use of basXML is recommended as an RFC protocol for all types of parameter passes.
-   The performance of basXML is currently somewhere between the quicker binary format and the slower xRFC.
-   The binary format should therefore only be used for RFMs with critical performance requirements.

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapcall\_function.html abapcall\_function\_destination-.html abenrfc.html