---
title: "ABENCDS_ENUMERATION_TYPES"
description: |
  ABENCDS_ENUMERATION_TYPES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_ENUMERATION_TYPES.htm"
abapFile: "ABENCDS_ENUMERATION_TYPES.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABENCDS", "ENUMERATION", "TYPES"]
---

A [CDS enumerated type](ABENCDS_ENUM_TYPE_GLOSRY.html) is a [CDS user-defined type](ABENCDS_USER_DEFINED_TYPE_GLOSRY.html) in [ABAP CDS](ABENABAP_CDS_GLOSRY.html) that defines an [enumerated type](ABENENUM_TYPE_GLOSRY.html). CDS enumerated types are defined with the following [CDS TDL](ABENCDS_TDL_GLOSRY.html) statement in [ADT](ABENADT_GLOSRY.html):

CDS enumerated types are mainly used to check allowed values. They restrict the values that can be passed to CDS elements or CDS parameters, which are typed with an enumerated type.

A [CDS enumerated type](ABENCDS_ENUM_TYPE_GLOSRY.html) cannot be used as a data type in [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html).

Frameworks:

*ABAP Data Models* development guide, section on [CDS enumerated types](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/3a696faff43246cebba2309fb0842acb?version=sap_cross_product_abap).

-   [CDS TDL - `DEFINE TYPE ENUM`](ABENCDS_DEFINE_ENUM_TYPE.html)

-   In ABAP CDS, enumerated types can be used for typing of elements or parameters, in cast expressions, as operands in expressions, and in comparisons. The methods of the class `CL_DD_SOBJECT_FACTORY` handle CDS enumerated types and evaluate fields typed with reference to an enumerated type.
-   In ABAP, a CDS enumerated type can be directly used for the typing of enumeration variables and its enumeration constants can be used as operands in read positions. Before the first usage in an ABAP program, an [enumerated structure](ABENENUMERATED_STRUCTURE_GLOSRY.html) with the name of the CDS enumerated type is implicitly declared in the global context of the program. The enumerated constants of the CDS enumerated type are represented by the components of this structure in alphabetical order. From that point on, a CDS enumerated type can be used in exactly the same way as ABAP enumerated type with such an enumerated structure. For a complete description of the use of enumerated objects in ABAP, see the topic [Enumerated Objects (enum)](ABENENUMERATED_TYPES_USAGE.html).

-   CDS user-defined types are supported by analytical runtimes such as the [ABAP Analytical Engine](ABENABAP_AE_GLOSRY.html).
-   The [annotations](ABENCDS_ANNOTATION_GLOSRY.html) of a CDS user-defined type can be [evaluated](ABENCDS_ANNOTATIONS_ANALYSIS.html) using the methods of the class `CL_DD_DDL_ANNOTATION_SERVICE`.
-   CDS enumerated types can currently **not** be used in OData scenarios and in Fiori applications built with the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html).

-   Enumerated types are also available in the ABAP programming language. Enumerated types in ABAP are described in the following topics:

-   [`TYPES, BEGIN OF ENUM enum_type`](ABAPTYPES_ENUM.html)
-   [Enumerated Objects (enum)](ABENENUMERATED_TYPES_USAGE.html)

-   CDS enumerated types are the successor of [DDIC domains](ABENDOMAIN_GLOSRY.html) with [fixed values](ABENFIXED_VALUE_GLOSRY.html).
-   However, DDIC domains with fixed values are evaluated for the input help of dynpro fields and they are ignored in ABAP programs. CDS enumerated types, on the other hand, make enumerations globally available and reusable in different contexts.

abenabap.html abencds.html abencds\_tdl.html abencds\_types.html abencds\_define\_type.html