---
title: "ABENCDS_DEFINE_SIMPLE_TYPE"
description: |
  ABENCDS_DEFINE_SIMPLE_TYPE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_DEFINE_SIMPLE_TYPE.htm"
abapFile: "ABENCDS_DEFINE_SIMPLE_TYPE.html"
keywords: ["select", "if", "try", "catch", "method", "class", "data", "types", "ABENCDS", "DEFINE", "SIMPLE", "TYPE"]
---

``[[`@type_annot1`](ABENCDS_SIMPLE_TYPE_ANNO.html)]\  [[`@type_annot2`](ABENCDS_SIMPLE_TYPE_ANNO.html)]\  ...  DEFINE TYPE simple_type : [`dtype`](ABENCDS_OVERVIEW_BUILTIN_TYPES.html)\                          |\ [`data_element`](ABENCDS_DTEL.html)\                          |\ [`simple_type`](ABENCDS_SIMPLE_TYPE.html)``

Defines a [CDS simple type](ABENCDS_SIMPLE_TYPE_GLOSRY.html) in the [CDS TDL](ABENCDS_TDL_GLOSRY.html). A CDS simple type defines an [elementary data type](ABENELEMENTARY_DATA_TYPE_GLOSRY.html) natively in [ABAP CDS](ABENABAP_CDS_GLOSRY.html).

A CDS simple type can be enriched with [CDS annotations](ABENCDS_ANNOTATION_GLOSRY.html)\\ [`type_annot`](ABENCDS_SIMPLE_TYPE_ANNO.html). All annotations are optional and a simple type can also be created without any annotations. If specified, the type annotations must be defined in front of the statement `DEFINE TYPE`.

The name `simple_type` of the CDS simple type is defined after the `DEFINE TYPE` statement. It is in the namespace of all [global types](ABENGLOBAL_TYPE_GLOSRY.html) of an AS ABAP. The general rules for CDS object names described in topic [ABAP CDS - General Syntax Rules](ABENCDS_GENERAL_SYNTAX_RULES.html) apply. The name of the CDS simple type must be the same as the name of the TDL source code.

A simple type can be typed as follows:

CDS simple types can be used in the following places:

If a CDS DDIC-based views (obsolete) selects from a view entity that is typed with a simple type, then the simple type information is available in the metadata of the CDS entity, but not in the metadata of the [CDS-managed DDIC view](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html).

The following CDS simple type is based on a DDIC data element.

The semantic information of the data element is inherited to the simple type and translated into annotations. These annotations and their values can be seen in the *Active Annotations* view in ADT:

The class `CL_DEMO_CDS_SIMPLE_TYPE` demonstrates the following:

The following CDS view entity uses a CDS simple type for typing of parameter `p1`. It casts element `cast_bt` into a simple type.

The following code snippet demonstrates how the metadata of the CDS view entity can be evaluated using the class `CL_DD_CDS_READ_API_FACTORY`. The tables that are generated as output have columns that indicate whether a field or parameter is typed with reference to a simple type.

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
-   CDS simple types cannot be used for typing in DDIC objects such as [DDIC data types](ABENDDIC_DATA_TYPES.html), [DDIC views](ABENDDIC_VIEW_GLOSRY.html), and [DDIC extensions](ABENDDIC_EXTENSION_GLOSRY.html).
-   Unlike DDIC data elements, there is no [search help assignment](ABENSEARCH_HELP_GLOSRY.html) available for CDS simple types.
-   CDS simple types cannot be used in [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html).

-   The data type and length of a CDS simple type can be evaluated using [RTTI](ABENRUN_TIME_TYPE_IDENTIFIC_GLOSRY.html) methods.
-   The annotations of the CDS simple type can be [evaluated](ABENCDS_ANNOTATIONS_ANALYSIS.html) using the class `CL_DD_DDL_ANNOTATION_SERVICE`.

define type demo\_simple\_type\_de : demo\_destination; @AbapCatalog.viewEnhancementCategory: \[#NONE\]\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity, simple types'\\n@Metadata.ignorePropagatedAnnotations: true\\ndefine view entity DEMO\_CDS\_SIMPLE\_TYPE\_USAGE\\n\\n with parameters\\n p1 : demo\_simple\_type\\n\\n as select from demo\_expressions\\n\\{\\n key id as Id,\\n num1 as Num1,\\n char1,\\n $parameters.p1 as Parameter1,\\n cast( char2 as demo\_simple\_type\_de ) as cast\_bt\\n\\}\\n DATA(o) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: \\n lo\_api\_entity TYPE REF TO if\_dd\_cds\_read\_api\_entity, \\n lo\_api\_param TYPE REF TO if\_dd\_cds\_read\_api\_parameter. \\nTRY. \\n DATA(result) = cl\_dd\_cds\_read\_api\_factory=>create( \\n iv\_stobname = 'DEMO\_CDS\_SIMPLE\_TYPE\_USAGE' ). \\n\\ \\n DATA(result\_header) = result->get\_header( ). \\n lo\_api\_entity = CAST #( result ). \\n lo\_api\_param = CAST #( result ). \\n DATA(lt\_field) = lo\_api\_entity->get\_fields( ). \\n DATA(lt\_param) = lo\_api\_param->get\_all( ). \\n CATCH cx\_dd\_cds\_read\_api. \\nENDTRY. \\n\\ \\no->next\_section( 'Evaluation of the view fields' \\n)->write( lt\_field \\n)->next\_section( 'Evaluation of the view parameters' \\n)->write( lt\_param \\n)->display( ). abenabap.html abencds.html abencds\_tdl.html abencds\_types.html abencds\_define\_type.html abencds\_simple\_types.html