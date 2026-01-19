---
title: "ABENNEWS-758-ABAP_CDS"
description: |
  ABENNEWS-758-ABAP_CDS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-758-ABAP_CDS.htm"
abapFile: "ABENNEWS-758-ABAP_CDS.html"
keywords: ["select", "while", "if", "try", "data", "types", "ABENNEWS", "758", "ABAP", "CDS"]
---

[1\. CDS Analytical Projection View, Projected Entity](#ABAP_MODIFICATION_1@4@)

[2. `@AbapCatalog.preserveKey` is Obsolete](#ABAP_MODIFICATION_2@4@) 

[3\. Release of CDS Simple Types](#ABAP_MODIFICATION_3@4@)

[4\. Release of CDS Enumerated Types](#ABAP_MODIFICATION_4@4@)

[5. Annotation `Environment.sql.passValue`, Scope Enhancement](#ABAP_MODIFICATION_5@4@) 

[6. New Annotation `Environment.sql.passValueForClient`](#ABAP_MODIFICATION_6@4@)

[7\. New Cardinality Syntax for Associations and Joins](#ABAP_MODIFICATION_7@4@)

[8\. CDS Scalar Functions](#ABAP_MODIFICATION_8@4@)

[9. Extension of the `CAST` Matrix](#ABAP_MODIFICATION_9@4@) 

[10. CDS Transactional Interface, `WHERE` Clause](#ABAP_MODIFICATION_10@4@) 

[11\. Further Operand Positions for Typed Literals](#ABAP_MODIFICATION_11@4@)

[12. `$projection` References on Path Expressions](#ABAP_MODIFICATION_12@4@)

[CDS analytical projection views](ABENCDS_ANALYTICAL_PV_GLOSRY.html) can now also have [analytical dimension views](ABENCDS_ANAL_DIM_VIEW_GLOSRY.html) as [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html).

The CDS annotation `@AbapCatalog.preserveKey` is [obsolete](ABENCDS_ANNOTATION_OBSOLETE.html) and has partly a different behavior now.

The annotation was used before Release 7.58 to define the key fields of the [CDS-managed DDIC view](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) of an obsolete [CDS DDIC-based view](ABENCDS_V1_VIEW_GLOSRY.html). The annotation can be kept in existing data definitions, but it no longer has an effect any more and leads to a syntax check warning. The key fields of the CDS-managed DDIC view are always defined by the addition [`key`](ABENCDS_SELECT_LIST_ENTRY_V2.html) in the `SELECT` list.

The change in behavior between 7.57 and 7.58 is incompatible. The key fields of the CDS-managed DDIC view of an obsolete CDS DDIC-based view are defined differently now for views where the annotation was not specified or where it was specified with the value `false`. The value `false` was used to define the key fields of the CDS-managed DDIC view as for a DDIC database views in ABAP Dictionary, regardless of the addition `KEY`. It was also the standard value when the annotation was not specified. Now, the behavior is always as for the value `true`.

[CDS simple types](ABENCDS_SIMPLE_TYPE_GLOSRY.html) define [elementary data types](ABENELEMENTARY_DATA_TYPE_GLOSRY.html) natively in [ABAP CDS](ABENABAP_CDS_GLOSRY.html). A CDS simple type can be enriched with metadata using [CDS annotations](ABENCDS_ANNOTATION_GLOSRY.html). The syntax statement for defining a CDS simple type is [`DEFINE TYPE`](ABENCDS_DEFINE_SIMPLE_TYPE.html).

[CDS enumerated types](ABENCDS_ENUM_TYPE_GLOSRY.html) define [enumerated types](ABENENUM_TYPE_GLOSRY.html) natively in [ABAP CDS](ABENABAP_CDS_GLOSRY.html). The syntax statement for defining a CDS enumerated type is [`DEFINE TYPE ENUM`](ABENCDS_DEFINE_ENUM_TYPE.html).

CDS enumerated types can be used as follows:

The ABAP annotation [`Environment.sql.passValue`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html) is now also available for [CDS parameters](ABENCDS_PARAMETER_GLOSRY.html) in CDS view entities, CDS projection views, and CDS hierarchies. The annotation scope has been enhanced.

A new ABAP annotation is available in CDS view entities, CDS projection views, and CDS hierarchies: [`Environment.sql.passValueForClient`](ABENCDS_F1_ENTITY_ANNOTATIONS.html). It works in a similar way to the annotation `Environment.sql.passValue`, but for client fields. It specifies whether a placeholder *?* or a literal value is passed to the database in an ABAP SQL condition when the client field is compared with a host variable.

A new syntax for specifying the [cardinality](ABENCARDINALITY_GLOSRY.html) of [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html), CDS [joins](ABENJOIN_GLOSRY.html), and of filter conditions of [CDS path expressions](ABENSQL_PATH_EXPRESSION_GLOSRY.html) is now available:

\\{MANY | ONE | EXACT ONE\\} TO \\{MANY | ONE | EXACT ONE\\}

This syntax allows a [source](ABENSOURCE_CARDINALITY_GLOSRY.html) and a [target cardinality](ABENTARGET_CARDINALITY_GLOSRY.html) to be specified, while the previously available numeric syntax only allowed the target cardinality to be specified. The new cardinality syntax can be used to improve query performance. It is available in [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), [CDS projection views](ABENCDS_PROJECTION_VIEW_GLOSRY.html), [CDS custom entities](ABENCDS_CUSTOM_ENTITY_GLOSRY.html), and [CDS abstract entities](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html).

The new CDS entity is available: the [CDS scalar function](ABENCDS_SCALAR_FUNCTION_GLOSRY.html). It is defined using the CDS DDL statement [`DEFINE SCALAR FUNCTION`](ABENCDS_DEFINE_SCALAR_FUNCTION.html).

As of this release, scalar functions are available for two different runtimes:

The matrix of types that can be converted to each other using `CAST` has been enhanced for [CDS DDIC-based views (obsolete)](ABENCDS_DDIC_BASED_ENTITY_GLOSRY.html) and for [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html). Data types `DECFLOAT16` and `DECFLOAT34` can now be cast into data type `CURR`.

A [`WHERE`](ABENCDS_INTERFACE_COND_EXPR.html) condition is now available also for [CDS transactional interfaces](ABENCDS_TRANS_INTERFACE_GLOSRY.html) to restrict the result set that is returned when the transactional interface is accessed.

[Typed literals](ABENTYPED_LITERAL_GLOSRY.html) can now be used in more operand positions in ABAP CDS. They can now be used in the `WHERE` condition of [CDS projection views](ABENCDS_PROJECTION_VIEW_GLOSRY.html) and in the `ON` condition of [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html).

A reuse expression [`$projection.Field`](ABENCDS_REUSABLE_EXPRESSION_V2.html) can now also be used to reuse fields selected via a [path expression](ABENCDS_PATH_EXPRESSION_V2.html).

-   In ABAP CDS for typing and casting, as operands in expressions, and in comparisons.
-   In ABAP for typing after the `TYPES` statement.
-   In ABAP SQL as elementary operands and in cast expressions.

-   The HANA SQL runtime. SQL-based scalar functions can be created internally at SAP and externally by customers and partners.
-   The ABAP Analytical Engine. Analytical scalar functions can be created internally at SAP only. They are delivered to customers.

-   See topic [CDS DDL - DDIC-Based View, `cast_expr`](ABENCDS_CAST_EXPRESSION_V1.html) and
-   topic [CDS DDL - CDS View Entity, `cast_expr`](ABENCDS_CAST_EXPRESSION_V2.html).

abenabap.html abennews.html abennews-75.html abennews-758.html