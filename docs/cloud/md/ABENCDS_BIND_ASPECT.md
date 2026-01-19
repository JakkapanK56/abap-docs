---
title: "ABENCDS_BIND_ASPECT"
description: |
  ABENCDS_BIND_ASPECT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_BIND_ASPECT.htm"
abapFile: "ABENCDS_BIND_ASPECT.html"
keywords: ["select", "case", "class", "data", "types", "ABENCDS", "BIND", "ASPECT"]
---

``\  BIND ASPECT aspect ( [`element1`](ABENCDS_ASPECT_ELEMENT.html) =>\ [`$projection.element1`](ABENCDS_REUSABLE_EXPRESSION_V2.html),                       [`element2`](ABENCDS_ASPECT_ELEMENT.html) =>\ [`$projection.element2`](ABENCDS_REUSABLE_EXPRESSION_V2.html)\                       ...                      ) as _aspectName``

Binds a [CDS aspect](ABENCDS_ASPECT_GLOSRY.html) in the [CDS DDL](ABENCDS_DDL_GLOSRY.html). Elements from the [CDS view entity](ABENCDS_V2_VIEWS.html) or [CDS projection view](ABENCDS_PROJ_VIEWS.html) are mapped to the elements of the bound CDS aspect using the syntax `=>`. The corresponding element in the CDS view entity is denoted using the syntax `$projection. ...`. The corresponding element, namely the right hand side of the aspect bindings, support the following expressions:

Binding when the field type inside the CDS aspect is a [built-in data type](ABENCDS_OVERVIEW_BUILTIN_TYPES.html) and the corresponding type is the same, without checking for the usage of the same typing (e.g. the same data element or simple type). This is, however, not supported in the opposite direction.

The names of the fields of the view in which the aspect is included are mapped to the corresponding fields of the CDS aspect. The field names of the CDS view entity or projection view entity and the CDS aspect must be unique, as they exist in the same namespace.

The following example showcases how a CDS aspect is bound to a CDS view entity, as well as how some or all of these bound fields can be included in the entity.

-   [parameter expressions](ABENCDS_F1_ANNOTATE_VIEW_PARA_LIST.html)
-   [typed literals](ABENCDS_TYPED_LITERAL_V2.html)
-   [enumerated values](ABENCDS_ENUMERATION_TYPES.html)

@AbapCatalog.viewEnhancementCategory: \[#NONE\]\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'Selecting all DDIC Types'\\n@Metadata.ignorePropagatedAnnotations: true\\n@ObjectModel.usageType:\\{\\n serviceQuality: #X,\\n sizeCategory: #S,\\n dataClass: #MIXED\\n\\}\\ndefine view entity DEMO\_CDS\_VE\_ASPECT\_USE\\n as select from demo\_ddic\_types\\n bind aspect DEMO\_CDS\_ASPECT\_ALL\_TYPES (\\n id => $projection.IdVE,\\n int1 => $projection.Int1VE,\\n int2 => $projection.Int2VE,\\n int4 => $projection.Int4VE,\\n int8 => $projection.Int8VE,\\n dec10\_2 => $projection.Dec102,\\n d16n => $projection.D16nVE,\\n d34n => $projection.D34nVE,\\n fltp => $projection.FltpVE,\\n char10 => $projection.Char10VE,\\n sstring512 => $projection.Sstring512VE,\\n string => $projection.StringVE,\\n raw10 => $projection.Raw10VE,\\n dats => $projection.DatsVE,\\n tims => $projection.TimsVE,\\n datn => $projection.DatnVE,\\n timn => $projection.TimnVE,\\n utcl => $projection.UtclVE,\\n numc1 => $projection.Numc1VE,\\n numc10 => $projection.Numc10VE,\\n clnt => $projection.ClntVE,\\n lang => $projection.LangVE,\\n unit2 => $projection.Unit2VE,\\n geom\_ewkb => $projection.GeomEwkbVE,\\n lchr\_int => $projection.LchrIntVE,\\n curr10\_2 => $projection.Curr102,\\n cuky => $projection.CukyVE,\\n quan10\_2 => $projection.Quan102\\n )\\n\\{\\n\\n key id as IdVE,\\n include DEMO\_CDS\_ASPECT\_ALL\_TYPES.d34n,\\n include DEMO\_CDS\_ASPECT\_ALL\_TYPES.utcl,\\n include DEMO\_CDS\_ASPECT\_ALL\_TYPES.unit2,\\n include DEMO\_CDS\_ASPECT\_ALL\_TYPES.cuky,\\n\\n int1 as Int1VE,\\n int2 as Int2VE,\\n int8 as Int8VE,\\n d16n as D16nVE,\\n d34n as D34nVE,\\n fltp as FltpVE,\\n char10 as Char10VE,\\n sstring512 as Sstring512VE,\\n string as StringVE,\\n raw10 as Raw10VE,\\n rawstring as RawstringVE,\\n dats as DatsVE,\\n tims as TimsVE,\\n datn as DatnVE,\\n timn as TimnVE,\\n utcl as UtclVE,\\n numc1 as Numc1VE,\\n numc10 as Numc10VE,\\n clnt as ClntVE,\\n lang as LangVE,\\n unit2 as Unit2VE,\\n geom\_ewkb as GeomEwkbVE,\\n lchr\_int as LchrIntVE,\\n @Semantics.quantity.unitOfMeasure: 'unit2'\\n quan10\_2 as Quan102,\\n\\n\\n dec10 as Dec10,\\n dec10\_2 as Dec102,\\n dec20 as Dec20,\\n dec20\_4 as Dec204,\\n df16\_raw as Df16Raw,\\n char1 as Char1,\\n sstring256 as Sstring256,\\n raw1 as Raw1,\\n unit3 as Unit3,\\n\\n @Semantics.amount.currencyCode: 'cuky'\\n curr10\_2 as Curr102,\\n @Semantics.amount.currencyCode: 'cuky'\\n curr10\_4 as Curr104,\\n @Semantics.amount.currencyCode: 'cuky'\\n curr20\_2 as Curr202,\\n @Semantics.amount.currencyCode: 'cuky'\\n curr20\_4 as Curr204,\\n cuky as CukyVE,\\n @Semantics.quantity.unitOfMeasure: 'unit2'\\n quan10 as Quan10,\\n\\n @Semantics.quantity.unitOfMeasure: 'unit2'\\n quan10\_4 as Quan104,\\n @Semantics.quantity.unitOfMeasure: 'unit2'\\n quan20 as Quan20,\\n @Semantics.quantity.unitOfMeasure: 'unit2'\\n quan20\_2 as Quan202,\\n @Semantics.quantity.unitOfMeasure: 'unit2'\\n quan20\_4 as Quan204,\\n\\n \\n accp as Accp,\\n df16\_dec as Df16Dec,\\n df34\_dec as Df34Dec,\\n df34\_raw as Df34Raw,\\n int4 as Int4VE\\n \\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_aspects.html