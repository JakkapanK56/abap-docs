---
title: "ABENCDS_TYPING"
description: |
  ABENCDS_TYPING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_TYPING.htm"
abapFile: "ABENCDS_TYPING.html"
keywords: ["select", "if", "case", "class", "data", "types", "ABENCDS", "TYPING"]
---

`... dtype | data_element | cds_type  ...`

Types elements or parameters of [CDS entities](ABENCDS_ENTITY_GLOSRY.html) and [aspects](ABENCDS_ASPECTS.html) in [CDS DDL](ABENCDS_DDL_GLOSRY.html). The following is typed:

Typing can be specified as follows:

The following CDS view entity has two input parameters. `p_date` is typed with the CDS simple type `DEMO_BT_DATE` and `p_num` is typed with the built-in data type `DEC` with a specified length and number of decimal places.

The class `CL_DEMO_CDS_PARAMETER_TYPE` accesses the view using the following `SELECT` statement:

-   Elements of CDS entities:

-   Elements of the element list [`element_list`](ABENCDS_TABLE_ENTITY_ELEMENT_LIST.html) in a [CDS table entity](ABENCDS_TABLE_ENTITY_GLOSRY.html).
-   Elements of the element list [`element_list`](ABENCDS_F1_RETURN_LIST.html) in a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html).
-   Elements of the element list [`element_list`](ABENCDS_EE_ELEM_LIST.html) in a [CDS external entity](ABENCDS_EXTERNAL_ENTITY_GLOSRY.html).
-   Elements of the element list [`element_list`](ABENCDS_F1_CUSTOM_ELEMENT_LIST.html) in a [CDS custom entity](ABENCDS_CUSTOM_ENTITY_GLOSRY.html).
-   Elements of the element list [`element_list`](ABENCDS_F1_ABSENT_ELEMENT_LIST.html) of a [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html).
-   Elements of the element list [`element_list`](ABENCDS_F1_ABSENT_ELEMENT_LIST.html) of a [CDS aspect](ABENCDS_ASPECTS.html).
-   [Typed literals](ABENCDS_TYPED_LITERAL_V2.html) in a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) or a [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html).
-   [CDS virtual elements](ABENCDS_VIRTUAL_ELEMENT_GLOSRY.html) in a [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html).

-   Input parameters of CDS entities

-   Input parameters of the parameter list [`parameter_list`](ABENCDS_PARAMETER_LIST_V2.html) in a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html)
-   Input parameters of the parameter list [`parameter_list`](ABENCDS_PARAMETER_LIST_APV.html) in a [CDS analytical projection view](ABENCDS_ANALYTICAL_PV_GLOSRY.html)
-   Input parameters of the parameter list [`parameter_list`](ABENCDS_F1_FUNC_PARAMETER_LIST.html) in a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html).
-   Input parameters of the parameter list [`parameter_list`](ABENCDS_F1_HIERA_PARAMETER_LIST.html) in a [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html).
-   Input parameters of the parameter list [`parameter_list`](ABENCDS_F1_ENTITY_PARAMETER_LIST.html) in an [CDS custom entity](ABENCDS_CUSTOM_ENTITY_GLOSRY.html).
-   Input parameters of the parameter list [`parameter_list`](ABENCDS_F1_ENTITY_PARAMETER_LIST.html) in an [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html).
-   Input parameters of the parameter list [`parameter_list`](ABENCDS_PARAMETER_LIST_V1.html) in a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html)

-   Using a built-in data type from ABAP Dictionary. The addition `PRESERVING TYPE` cannot be specified in this case. All available data types are listed in the topic [ABAP CDS - Built-In Data Types](ABENCDS_OVERVIEW_BUILTIN_TYPES.html).
-   Using the name of a [CDS user-defined type](ABENCDS_USER_DEFINED_TYPE_GLOSRY.html)\\ `cds_type`.
-   Using the name of a [DDIC data element](ABENDATA_ELEMENT_GLOSRY.html)\\ `data_element`.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_PARAMETER\_TYPE\_VE\\n with parameters\\n p\_date :DEMO\_BT\_DATE,\\n p\_num :abap.dec( 10, 3 )\\n as select from demo\_expressions\\n\\{\\n key id,\\n $parameters.p\_date as col\_date,\\n $parameters.p\_num + dec3 as col\_num\\n\\};\\n SELECT id, col\_date, col\_num \\n FROM demo\_cds\_parameter\_type\_ve( p\_date = @sy-datlo, \\n p\_num = '1.234' ) \\n INTO TABLE @DATA(result). abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_ddl\_common\_elements.html