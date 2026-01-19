---
title: "ABENNEWS-71-RFC"
description: |
  ABENNEWS-71-RFC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-71-RFC.htm"
abapFile: "ABENNEWS-71-RFC.html"
keywords: ["if", "class", "data", "ABENNEWS", "RFC"]
---

[1\. Background RFC](#ABAP_MODIFICATION_1@4@)

[2\. Local Data Queue](#ABAP_MODIFICATION_2@4@)

[3\. SAP RFC SDK](#ABAP_MODIFICATION_3@4@)

[4\. RFC Connectivity in SAP Java Enterprise Edition (Java EE)](#ABAP_MODIFICATION_4@4@)

[5\. basXML as New RFC Protocol](#ABAP_MODIFICATION_5@4@)

[6\. Identification of Trusted Systems](#ABAP_MODIFICATION_6@4@)

With the new [Background RFC](ABENBG_REMOTE_FUNCTION_GLOSRY.html) (bgRFC) Remote Function Calls can be carried out safely in a transaction and in the call sequence. The calling application and the called application are connected asynchronously. bgRFC replaces the functions previously provided by tRFC and qRFC (but not qRFC no-Send).

This modification was also added to ABAP release 7.0 in SP14.

The Local Data Queue (LDQ) is a persistence layer into which data can be placed. This data can only be read in the order that it is recorded in. This involves separation of data recording from data retrieval by the receiver like in an inbox. Since the access order is defined according to the First-In First-Out (FIFO) principle, queues are used as the organizational element for the individual receivers. The LDQ replaces the functions previously provided by the qRFC No-Send scenario.

The new SAP RFC SDK replaces the classic RFC SDK. It supports a revised API that can be used like the SAP Java Connector.

For the SAP Java Enterprise Edition (Java EE), the SAP Java Resource Adapter (SAP JRA) for SAP JCo is provided. It provides connections to resources in accordance with JCA 1.5 SAP JCo.

The [basXML](ABENBASXML_GLOSRY.html) format is supported as the new standard [RFC protocol](ABENRFC_PROTOCOL.html) and replaces the previous formats.

In transaction `SMT1` for editing [RFC trust relationships](ABENSMT1_2.html), the installation number is now also used when creating [trusted systems](ABENTRUSTED_SYSTEM_GLOSRY.html) by entering the system ID (name of the [AS ABAP](ABENAS_ABAP_GLOSRY.html)). This applies to all trusted systems from ABAP releases 7.02, EhP2 and 7.2 (including 7.1).

When creating a trusted relationship from ABAP release 7.0, EhP2, the [trusting system](ABENTRUSTING_SYSTEM_GLOSRY.html) checks the installation number of the calling system, if it is specified in transaction `SMT1`. For trust relationships of this kind, the relevant authorizations need to be modified so that field `RFC_INFO` in authorization object `S_RFCACL` contains the installation number of the calling system.

abenabap.html abennews.html abennews-70\_ehps.html abennews-71.html