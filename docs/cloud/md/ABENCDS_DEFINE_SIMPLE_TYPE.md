---
title: "ABENCDS_DEFINE_SIMPLE_TYPE"
description: |
  ABENCDS_DEFINE_SIMPLE_TYPE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_DEFINE_SIMPLE_TYPE.htm"
abapFile: "ABENCDS_DEFINE_SIMPLE_TYPE.html"
keywords: ["select", "if", "data", "types", "ABENCDS", "DEFINE", "SIMPLE", "TYPE"]
---

``[[`@type_annot1`](ABENCDS_SIMPLE_TYPE_ANNO.html)]\  [[`@type_annot2`](ABENCDS_SIMPLE_TYPE_ANNO.html)]\  ...  DEFINE TYPE simple_type : [`dtype`](ABENCDS_OVERVIEW_BUILTIN_TYPES.html)\                          |\ [`data_element`](ABENCDS_DTEL.html)\                          |\ [`simple_type`](ABENCDS_SIMPLE_TYPE.html)``

Defines a [CDS simple type](ABENCDS_SIMPLE_TYPE_GLOSRY.html). A CDS simple type defines an [elementary data type](ABENELEMENTARY_DATA_TYPE_GLOSRY.html) natively in [ABAP CDS](ABENABAP_CDS_GLOSRY.html).

A CDS simple type can be enriched with [CDS annotations](ABENCDS_ANNOTATION_GLOSRY.html)\\ [`type_annot`](ABENCDS_SIMPLE_TYPE_ANNO.html). All annotations are optional and a simple type can also be created without any annotations. If specified, the type annotations must be defined in front of the statement `DEFINE TYPE`.

The name `simple_type` of the CDS simple type is defined after the `DEFINE TYPE` statement. It is in the namespace of all [global types](ABENGLOBAL_TYPE_GLOSRY.html) of an AS ABAP. The general rules for CDS object names described in topic [ABAP CDS - General Syntax Rules](ABENCDS_GENERAL_SYNTAX_RULES.html) apply. The name of the CDS simple type must be the same as the name of the source code.

A simple type can be typed as follows:

CDS simple types can be used in the following places:

If a CDS DDIC-based views (obsolete) selects from a view entity that is typed with a simple type, then the simple type information is available in the metadata of the CDS entity, but not in the metadata of the [CDS-managed DDIC view](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html).

-   Using a built-in ABAP Dictionary data type [`dtype`](ABENCDS_OVERVIEW_BUILTIN_TYPES.html). All possible types and rules are described in the topic [ABAP CDS - Built-In Data Types](ABENCDS_OVERVIEW_BUILTIN_TYPES.html).
-   Using a [DDIC data element](ABENDATA_ELEMENT_GLOSRY.html)\\ [`data_element`](ABENCDS_DTEL.html). The rules, including inheritance rules, are described in topic [CDS Simple Type, `data_element`](ABENCDS_DTEL.html).
-   Using another CDS simple type [`simple_type`](ABENCDS_SIMPLE_TYPE.html). The rules are described in topic [CDS Simple Type, `simple_type`](ABENCDS_SIMPLE_TYPE.html).

-   To type another CDS simple type.
-   **Note** The maximum nesting depth is five. This means that a stack of simple types can have a maximum of five layers, from base to top-most.
-   In [cast expressions in CDS view entities](ABENCDS_CAST_EXPRESSION_V2.html).
-   In [cast expressions in CDS projection views](ABENCDS_PROJ_VIEW_ELEMENT.html).
-   **Note** Remember that casting in CDS projection views is only possible with the addition `PRESERVING TYPE`.
-   **Example**: `cast(ProjField as MySimpleType preserving type) as NewProjField`
-   For [typing](ABENCDS_TYPING.html) of elements in [CDS custom entities](ABENCDS_CUSTOM_ENTITY_GLOSRY.html) and in [CDS abstract entities](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html).
-   For [typing](ABENCDS_TYPING.html) of parameters in [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), [CDS analytical projection views](ABENCDS_ANALYTICAL_PV_GLOSRY.html), CDS custom entities, CDS abstract entities, and [CDS hierarchies](ABENCDS_HIERARCHY_GLOSRY.html).
-   For typing of [CDS virtual elements](ABENCDS_VIRTUAL_ELEMENT_GLOSRY.html) in [CDS projection views](ABENCDS_PROJECTION_VIEW_GLOSRY.html).
-   For [typing](ABENCDS_SCALAR_TYPING.html) the input parameters or the return parameter of [SQL-based scalar functions](ABENCDS_SQL_SCALAR_GLOSRY.html).
-   In ABAP for typing data objects with the statement `TYPE`.

-   CDS simple types cannot be used in [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html).
-   CDS simple types cannot be used for typing in DDIC objects such as [DDIC data types](ABENDDIC_DATA_TYPES.html), DDIC views, and [DDIC extensions](ABENDDIC_EXTENSION_GLOSRY.html).
-   Unlike DDIC data elements, there is no [search help assignment](ABENSEARCH_HELP_GLOSRY.html) available for CDS simple types.
-   CDS simple types cannot be used in [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html).

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_tdl.html abencds\_define\_type.html abencds\_simple\_types.html