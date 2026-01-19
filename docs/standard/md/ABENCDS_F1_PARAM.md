---
title: "ABENCDS_F1_PARAM"
description: |
  ABENCDS_F1_PARAM - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_PARAM.htm"
abapFile: "ABENCDS_F1_PARAM.html"
keywords: ["select", "if", "case", "data", "types", "ABENCDS", "PARAM"]
---

``... [[`@parameter_annot1`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html)]\      [[`@parameter_annot2`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html)]\      ...      pname : [`typing`](ABENCDS_TYPING.html)\      [[`@<parameter_annot1`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html)]\      [[`@<parameter_annot2`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html)]\      ...``

[`... @parameter_annot | ... @<parameter_annot`](#ABAP_ONE_ADD@1@)

Defines a `CDS parameter` called `pname` in one of the following:

The name `pname` must comply with the naming rules for [names](ABENCDS_GENERAL_SYNTAX_RULES.html). Furthermore, `pname` cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name `pname` must be unique and be located in the namespace of the elements and exposed CDS associations of the current CDS entity. In table functions, the reserved name `connection` cannot be used. All reserved names that cannot be used are specified in the DDIC database table `TRESE`. The evaluation of names is not case-sensitive. Blanks in the comma-separated parameter list are ignored and can be omitted.

Each parameter must be typed with an elementary data type. All data types listed in topic [`Typing`](ABENCDS_TYPING.html) are allowed, except for `abap.accp`, `abap.geom_ewkb`, `abap.rawstring`, and `abap.string`. In CDS view entities and CDS table functions, parameters can also have data type `abap.string`.

A [CDS persistent entity](ABENCDS_SQL_ENTITY_GLOSRY.html) for which CDS parameters are defined as input parameters can be used as

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[`... cds_entity( pname1 : act1, pname2 : act2, ...) ...`](ABENCDS_SELECT_PARAMETERS_V2.html),

This list must be specified directly after the name of the view when using an entity with parameters (both within the CDS DDL in ABAP CDS and in ABAP SQL). In ABAP SQL, an equal sign (`=`) is used instead of a colon (`:`).

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [`@Environment.systemField`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html) can be used, however, to make ABAP SQL pass ABAP system fields to an input parameter implicitly.

Specifies annotations for the parameter. The annotations can be specified before the parameter using [`@parameter_annot`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html) or after the parameter using [`<@parameter_annot`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html). The latter is possible only for [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html), and [CDS hierarchies](ABENCDS_HIERARCHY_GLOSRY.html) but not for [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), [CDS custom entities](ABENCDS_CUSTOM_ENTITY_GLOSRY.html), and [CDS abstract entities](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html).

The example shows a CDS view entity with one CDS parameter called `P_MyParameter`.

-   [Parameter list](ABENCDS_PARAMETER_LIST_V2.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html)
-   [Parameter list](ABENCDS_PARAMETER_LIST_APV.html) of a [CDS analytical projection view](ABENCDS_ANALYTICAL_PV_GLOSRY.html)
-   [Parameter list](ABENCDS_F1_FUNC_PARAMETER_LIST.html) of a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html)
-   [Parameter list](ABENCDS_F1_HIERA_PARAMETER_LIST.html) of a [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html)
-   [Parameter list](ABENCDS_F1_CUSTOM_PARAMETER_LIST.html) of a [CDS custom entity](ABENCDS_CUSTOM_ENTITY_GLOSRY.html)
-   [Parameter list](ABENCDS_F1_ENTITY_PARAMETER_LIST.html) of an [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html)
-   [Parameter list](ABENCDS_PARAMETER_LIST_V1.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html)

-   data source or in a path expression of a different [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) or [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html)
-   A [data source](ABAPSELECT_DATA_SOURCE.html) of a [`SELECT`](ABAPSELECT.html) statement from ABAP SQL in ABAP

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'SDDL: Interface (BO) View for BuPa'\\ndefine root view entity DEMO\_SALES\_CDS\_SO\_PARAM\_VE\\n with parameters\\n P\_MyParameter : abap.char( 5 )\\n as select from\\n demo\_sales\_bupa as bupa\\n \\{\\n key id,\\n given\_name,\\n middle\_name,\\n family\_name,\\n $parameters.P\_MyParameter as my\_parameter\\n \\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_ddl\_common\_elements.html