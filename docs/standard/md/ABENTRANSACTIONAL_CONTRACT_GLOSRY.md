---
title: "ABENTRANSACTIONAL_CONTRACT_GLOSRY"
description: |
  ABENTRANSACTIONAL_CONTRACT_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTRANSACTIONAL_CONTRACT_GLOSRY.htm"
abapFile: "ABENTRANSACTIONAL_CONTRACT_GLOSRY.html"
keywords: ["if", "class", "data", "ABENTRANSACTIONAL", "CONTRACT", "GLOSRY"]
---

Specifies which ABAP statements and operations are allowed and which are not allowed in a [transactional phase](ABENTR_PHASE_GLOSRY.html). The following transactional contracts are available, each of which specifies restrictions to ensure transactional consistency: `SAVE`, `MODIFY`, `FUNCTIONAL`, `SURFACE`, `READ`, `COMPLETE`. The `SAVE` and `MODIFY` contracts are implicitly enabled in both transactional phases.

The transactional contracts can be set explicitly by [API classifications](ABAPAPI_CLASSIFICATION.html) (starting with `IF_ABAP_TX...`, for example, `IF_ABAP_TX_SAVE`). In the [controlled SAP LUW](ABENCONTROLLED_SAP_LUW_GLOSRY.html) and when in a transactional context, transactional contracts are checked.

For example, an API contains database changes and has the classification `IF_ABAP_TX_SAVE`. The classification ensures that the API is not called in the modify [transactional phase](ABENTR_PHASE_GLOSRY.html) by causing a violation that is either logged or results in a [runtime error](ABENRUNTIME_ERROR_GLOSRY.html).

ABENABALA\_GLOSSARY.html