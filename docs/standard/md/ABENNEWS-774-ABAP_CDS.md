---
title: "ABENNEWS-774-ABAP_CDS"
description: |
  ABENNEWS-774-ABAP_CDS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-774-ABAP_CDS.htm"
abapFile: "ABENNEWS-774-ABAP_CDS.html"
keywords: ["if", "ABENNEWS", "774", "ABAP", "CDS"]
---

[1\. Hierarchy Load Options](#ABAP_MODIFICATION_1@4@)

[2\. Handling of Annotation Values](#ABAP_MODIFICATION_2@4@)

The [hierarchy generator](ABENCDS_F1_DEFINE_HIERARCHY.html)\\ [`DEFINE HIERARCHY`](ABENCDS_F1_DEFINE_HIERARCHY.html) can now use the new addition `LOAD BULK|INCREMENTAL|load_option` to specify the load policy for a generated hierarchy.

A change in the handling of [annotation values](ABENANNOTATION_VALUE_GLOSRY.html) has been introduced with the following consequences:

These changes are slightly incompatible.

-   Annotations that require an [enumeration symbol](ABENCDS_ANNOTATIONS_SYNTAX_VALUE.html) as annotation value no longer accept string values. They only accept enumeration symbols.
-   Example: Until release 7.74, the following was accepted: `@AccessControl.authorizationCheck: '#CHECK'`. From release 7.74, this is no longer accepted. The quotation marks must be removed.
-   If *#* is the first or the only character of `EndUserText.label` or `EndUserText.quickInfo`, then it is not removed from the unescaped value any more.

abenabap.html abennews.html abennews-77.html abennews-774.html