---
title: "ABENCDS_LOCALIZED"
description: |
  ABENCDS_LOCALIZED - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_LOCALIZED.htm"
abapFile: "ABENCDS_LOCALIZED.html"
keywords: ["do", "if", "data", "types", "ABENCDS", "LOCALIZED"]
---

`... _assoc1[._assoc2][._assoc3].field_name [AS alias]: LOCALIZED`

Defines a [CDS localized field](ABENCDS_LOCALIZED_FIELD_GLOSRY.html)\\ `field_name` in the [projection list](ABENCDS_PROJ_VIEW_ELEMENT_LIST.html) of a [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html). CDS localized fields are [SQL path target field](ABENSQL_TARGET_FIELD_GLOSRY.html) whose original data source is a [CDS text provider view](ABENCDS_TEXT_PROVIDER_GLOSRY.html). CDS localized fields are text fields for which for which translations in different languages are maintained. The keyword `LOCALIZED` causes automatic and implicit filtering to the current system language using the [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ [`system_language`](ABENCDS_SESSION_VAR_BUILTIN_V2.html), so the text elements are displayed in the current system language.

The following rules apply to the field `field_name`:

The [CDS association path](ABENCDS_ASSOCIATION_PATH_GLOSRY.html) that precedes the field `field_name` can consist of one or more associations `_assoc1[._assoc2][._assoc3] ...`. It must satisfy the following conditions:

The syntax `LOCALIZED` can be used for a [cast expression](ABENCDS_CAST_EXPRESSION_V2.html) with the addition `PRESERVING TYPE`, under the condition that the field and the CDS association path fulfill the requirements explained above. For example, the following is supported:

CAST( \_assoc1.field\_name as data\_element PRESERVING TYPE) : localized

Developer guide for the ABAP RESTful Programming Model, section about [text associations](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/ab8283b2064d474fa160871fc23825df?version=sap_cross_product_abap).

The keyword `LOCALIZED` has the same effect as filtering a text association with the filter condition `[to exact one:Language=$session.system_language]`.

The following CDS transactional query defines the field `MaterialName` as CDS localized field. All prerequisites are met:

The SQL statement that is generated on the database contains a nested join expression with a filter condition on the current session language.

So the keyword `LOCALIZED` is a realization of the path expression `_Material._Text[to exact one:Language=$session.system_language].material_name`.

-   It must be a [SQL path target field](ABENSQL_TARGET_FIELD_GLOSRY.html).
-   It must have a character-like data type, more specifically, [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) or [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html).
-   The original data source of the field `field_name`, here `_assoc3`, must be a [CDS text provider view](ABENCDS_TEXT_PROVIDER_GLOSRY.html) whose [primary key](ABENPRIMARY_KEY_GLOSRY.html) consists of multiple [key fields](ABENKEY_FIELD_GLOSRY.html), one of which is of data type [`LANG`](ABENDDIC_BUILTIN_TYPES.html) and length 1. A text provider view is used to store texts with translations in different languages.

-   The last association, here `_assoc3`, must be a [CDS text association](ABENCDS_TEXT_ASSOCIATION_GLOSRY.html). This means, it must be a regular CDS association whose [association target](ABENASSOCIATION_TARGET_GLOSRY.html) is a [CDS text provider view](ABENCDS_TEXT_PROVIDER_GLOSRY.html). The [target cardinality](ABENTARGET_CARDINALITY_GLOSRY.html) of the CDS text association must be `TO MANY`. If the association path consists of exactly one association, this association must be a CDS text association.
-   The text association must bind all the key fields of its association target in the `ON` condition, except for the language key of type [`LANG`](ABENDDIC_BUILTIN_TYPES.html). The key fields must be bound in a comparison with the [comparison operator](ABENCDS_COND_EXPR_COMP_V2.html)\\ *\=*. The second operand of the comparison can be a field of the association source or a [literal](ABENCDS_LITERAL_GLOSRY.html). No other operands are allowed.
-   The first and intermediate associations, here `_assoc1` and `_assoc2`, must have the target cardinality [`TO ONE`](ABENCDS_CARDINALITY_V2.html) or [`TO EXACT ONE`](ABENCDS_CARDINALITY_V2.html). These associations can be regular or specialized, i.e. to-parent or to-child associations are possible.

-   `MaterialName` has the data type `CHAR`.
-   The association `_Text` has a text provider view as its association target and it has the cardinality `TO MANY`.
-   The first association `_Material` has the target cardinality `TO ONE`.

@EndUserText.label: 'Projection View Sales Order Item List'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@AbapCatalog.entityBuffer.propagationAllowed: true\\ndefine root view entity DEMO\_SALES\_PV\_SO\_I\_LIST1\\n provider contract transactional\_query\\n as projection on DEMO\_SALES\_CDS\_SO\_I1\\n\\{\\n key material as MaterialId,\\n posnr as PositionNumber,\\n \_Material.\_Text.material\_name as MaterialName : localized\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_proj\_views.html abencds\_pv\_transactional\_query.html abencds\_proj\_view\_element\_list.html abencds\_proj\_view\_element.html