---
title: "ABENSMT1_2"
description: |
  ABENSMT1_2 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSMT1_2.htm"
abapFile: "ABENSMT1_2.html"
keywords: ["do", "if", "data", "ABENSMT1"]
---

A calling AS ABAP can be defined in an AS ABAP to be called as a [trusted system](ABENTRUSTED_SYSTEM_GLOSRY.html). The system to be called is then known as a [trusting system](ABENTRUSTING_SYSTEM_GLOSRY.html). Trust relationships are defined in transaction `SMT1`.

A trusted [AS ABAP](ABENAS_ABAP_GLOSRY.html) can log on to another AS ABAP without a password. These confidential relationships between AS ABAP systems have the following benefits:

For a detailed description of a trusted relationship between two AS ABAP systems, see the documentation [RFC](https://help.sap.com/docs/ABAP_PLATFORM_NEW/753088fc00704d0a80e7fbd6803c8adb/4888068AD9134076E10000000A42189D) in SAP Help Portal.

-   *Single sign-on* can be used across systems borders
-   Passwords are not transported over the network
-   Timeout mechanism for logon data prevents misuse
-   User-specific logon data for the calling system is checked.

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapcall\_function.html abapcall\_function\_destination-.html abenrfc.html