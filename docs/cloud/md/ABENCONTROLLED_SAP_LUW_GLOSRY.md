---
title: "ABENCONTROLLED_SAP_LUW_GLOSRY"
description: |
  ABENCONTROLLED_SAP_LUW_GLOSRY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCONTROLLED_SAP_LUW_GLOSRY.htm"
abapFile: "ABENCONTROLLED_SAP_LUW_GLOSRY.html"
keywords: ["if", "method", "class", "ABENCONTROLLED", "SAP", "LUW", "GLOSRY"]
---

An extension of the [SAP LUW](ABENSAP_LUW_GLOSRY.html) concept. The controlled SAP LUW introduces a checking mechanism to detect transactional consistency violations. The controlled SAP LUW is automatically and implicitly supported by newer ABAP concepts such as [RAP](ABENRAP_GLOSRY.html). In non-RAP transactions, the controlled SAP LUW can be used by explicitly setting transactional phases using the static methods of the [`CL_ABAP_TX`](ABAPRAP_CL_ABAP_TX.html) class. In addition, [released APIs](ABENRELEASED_API_GLOSRY.html) can have special classifications (starting with [`IF_ABAP_TX...`](ABAPAPI_CLASSIFICATION.html)) that enable specific transactional contracts that are checked in the [transactional phases](ABENTR_PHASE_GLOSRY.html).

[**\-> More about**](ABENCONTROLLING_SAP_LUW.html)

ABENTECHNO\_GLOSSARY.html ABENRAP\_GLOSSARY.html