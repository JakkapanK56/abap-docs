---
title: "ABENCDS_ANNOTATIONS"
description: |
  ABENCDS_ANNOTATIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_ANNOTATIONS.htm"
abapFile: "ABENCDS_ANNOTATIONS.html"
keywords: ["do", "if", "class", "data", "ABENCDS", "ANNOTATIONS"]
---

A [CDS annotation](ABENCDS_ANNOTATION_GLOSRY.html) enriches [CDS objects](ABENCDS_OBJECT_GLOSRY.html) with metadata. It can be specified in fixed [annotation syntax](ABENCDS_ANNOTATION_SYNTAX_GLOSRY.html) for specific scopes of a [CDS](ABENCDS_OBJECT_GLOSRY.html) object, namely specific places in a piece of [CDS](ABENCDS_SOURCE_CODE_GLOSRY.html) source code.

The metadata specified by annotations is saved internally when a CDS object is activated. The system class `CL_DD_DDL_ANNOTATION_SERVICE` is used to evaluate the annotations of [CDS entities](ABENCDS_ENTITY_GLOSRY.html).

Only those annotations should be specified that have an annotation definition and the way they are specified should follow the rules in the definition. SAP delivers a set of predefined [SAP annotations](ABENSAP_ANNOTATION_GLOSRY.html).

Currently, only those [SAP annotations](ABENSAP_ANNOTATION_GLOSRY.html) predefined by SAP should be used.

For further details on annotations in ABAP CDS, see [*Annotations in ABAP CDS*](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/b22c173af13f426689e977ecff7ccf2b?version=sap_cross_product_abap) in the ABAP Data Models guide on SAP Help Portal.

-   [Specifying annotations](ABENCDS_ANNO_USAGE.html)
-   [SAP annotations](ABENCDS_ANNOTATIONS_SAP.html)

-   Only those annotations should be specified in [CDS source code](ABENCDS_SOURCE_CODE_GLOSRY.html) for which an annotation definition exists.
-   Partners and customers cannot currently define their own annotations.

abenabap.html abencds.html