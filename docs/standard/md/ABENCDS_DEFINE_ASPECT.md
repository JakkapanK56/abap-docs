---
title: "ABENCDS_DEFINE_ASPECT"
description: |
  ABENCDS_DEFINE_ASPECT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_DEFINE_ASPECT.htm"
abapFile: "ABENCDS_DEFINE_ASPECT.html"
keywords: ["if", "case", "data", "types", "ABENCDS", "DEFINE", "ASPECT"]
---

``\  [[`@aspect_annot1`](ABENCDS_DDL_ASPECT_ANNO.html)]\  [[`@aspect_annot2`](ABENCDS_DDL_ASPECT_ANNO.html)]\  ...  DEFINE ASPECT aspect         [`element_list`](ABENCDS_DDL_ASPECT_ELEMENT_LIST.html)``\\ 

Defines a [CDS aspect](ABENCDS_ASPECT_GLOSRY.html) in the [CDS DDL](ABENCDS_DDL_GLOSRY.html).

The name of the aspect is defined after the `DEFINE ASPECT` statement. The usual rules for ABAP Dictionary [views](ABENDDIC_VIEWS.html) apply to this name and it is not case-sensitive (it is transformed internally into uppercase letters). It can have a maximum of 30 characters and is in the namespace of all [global types](ABENGLOBAL_TYPE_GLOSRY.html) of an AS ABAP. The name of the DDL source and of the CDS object must be identical.

The following aspect contains various different data types that can then be reused in numerous CDS entities.

-   [`aspect annotations`](ABENCDS_DDL_ASPECT_ANNO.html) can be used to define optional header annotations for the CDS aspect.
-   [`element_list`](ABENCDS_DDL_ASPECT_ELEMENT_LIST.html) is used to declare elements.

@EndUserText.label: 'Demo Aspect' \\ndefine aspect DEMO\_CDS\_ASPECT\_ALL\_TYPES \\{ \\n\\ \\n key id : abap.char(1); \\n int1 : abap.int1; \\n int2 : abap.int2; \\n int4 : abap.int4; \\n int8 : abap.int8; \\n dec10\_2 : abap.dec(10,2); \\n d16n : abap.decfloat16; \\n d34n : abap.decfloat34; \\n fltp : abap.fltp; \\n char10 : abap.char(10); \\n sstring512 : abap.sstring(512); \\n string : abap.string(0); \\n raw10 : abap.raw(10); \\n dats : abap.dats; \\n tims : abap.tims; \\n datn : abap.datn; \\n timn : abap.timn; \\n utcl : abap.utclong; \\n numc1 : abap.numc(1); \\n numc10 : abap.numc(10); \\n clnt : abap.clnt; \\n lang : abap.lang; \\n unit2 : abap.unit(2); \\n geom\_ewkb : abap.geom\_ewkb; \\n lchr\_int : abap.int4; \\n @Semantics.amount.currencyCode : 'cuky' \\n curr10\_2 : abap.curr( 10, 2 ); \\n cuky : abap.cuky; \\n @Semantics.quantity.unitOfMeasure : 'unit2' \\n quan10\_2 : abap.quan(10,2); \\n\\ \\n\\} abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_aspects.html