---
title: "ABENCDS_SIMPLE_TYPES"
description: |
  ABENCDS_SIMPLE_TYPES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_SIMPLE_TYPES.htm"
abapFile: "ABENCDS_SIMPLE_TYPES.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABENCDS", "SIMPLE", "TYPES"]
---

A [CDS simple type](ABENCDS_SIMPLE_TYPE_GLOSRY.html) is a [CDS user-defined type](ABENCDS_USER_DEFINED_TYPE_GLOSRY.html) in [ABAP CDS](ABENABAP_CDS_GLOSRY.html) that defines an [elementary data type](ABENELEMENTARY_DATA_TYPE_GLOSRY.html). CDS simple types are defined with the following special [CDS DDL](ABENCDS_DDL_GLOSRY.html) statement in [ADT](ABENADT_GLOSRY.html):

CDS simple types can be used for typing in the following contexts:

When used for typing, simple types pass their metadata defined by [CDS annotations](ABENCDS_ANNOTATION_GLOSRY.html). In addition, simple types can be nested, providing extended reuse capabilities compared to DDIC data elements and DDIC domains.

A [CDS simple type](ABENCDS_SIMPLE_TYPE_GLOSRY.html) cannot be used as a data type in [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html). For example, it cannot be used to type [DDIC data elements](ABENDATA_ELEMENT_GLOSRY.html) or DDIC views.

Frameworks:

CDS simple types are a successor of [DDIC domains](ABENDOMAIN_GLOSRY.html) and [DDIC data elements](ABENDATA_ELEMENT_GLOSRY.html). They are mainly intended for use within frameworks such as the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html). They support metadata for [OData](ABENODATA_GLOSRY.html) and SAP Fiori-based scenarios.

*ABAP Data Models* development guide, section about [CDS simple types](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/ad9e96b6630348378cde737cde66ffc9?version=sap_cross_product_abap).

-   [CDS DDL - `DEFINE TYPE simple_type`](ABENCDS_DEFINE_SIMPLE_TYPE.html)

-   In ABAP CDS, simple types can be used for typing of elements or parameters or in cast expressions. The methods of the class `CL_DD_SOBJECT_FACTORY` handle CDS simple types and evaluate fields typed with reference to a simple type.
-   In ABAP, a simple type can be specified after the addition `TYPE`. The properties of the type can be evaluated using [RTTI](ABENRUN_TIME_TYPE_IDENTIFIC_GLOSRY.html).

-   CDS types are specifically designed for the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html). They support metadata for [OData](ABENODATA_GLOSRY.html) and SAP Fiori-based scenarios.
-   CDS types are supported by analytical runtimes such as the [ABAP Analytical Engine](ABENABAP_AE_GLOSRY.html).
-   The [annotations](ABENCDS_ANNOTATION_GLOSRY.html) of a CDS type can be evaluated using the methods of the class `CL_DD_DDL_ANNOTATION_SERVICE`.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_tdl.html abencds\_define\_type.html