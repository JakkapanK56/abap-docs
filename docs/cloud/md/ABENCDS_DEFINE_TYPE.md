---
title: "ABENCDS_DEFINE_TYPE"
description: |
  ABENCDS_DEFINE_TYPE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_DEFINE_TYPE.htm"
abapFile: "ABENCDS_DEFINE_TYPE.html"
keywords: ["data", "types", "ABENCDS", "DEFINE", "TYPE"]
---

`1. [[@type_annot1](ABENCDS_SIMPLE_TYPE_ANNO.html)]\ [[@type_annot2](ABENCDS_SIMPLE_TYPE_ANNO.html)]\ ... DEFINE TYPE simple_type : [dtype](ABENCDS_OVERVIEW_BUILTIN_TYPES.html)\ |\ [data_element](ABENCDS_DTEL.html)\ |\ [simple_type](ABENCDS_SIMPLE_TYPE.html)`

`2. [[@type_annot1](ABENCDS_ENUM_TYPE_ANNO.html)]\ [[@type_annot2](ABENCDS_ENUM_TYPE_ANNO.html)]\ ... DEFINE TYPE EnumType : BaseType ENUM \{ [@enum_annot1]\ EnumConstant1 = EnumValue1 | initial; [@enum_annot2]\ EnumConstant2 = EnumValue2 | initial; [...]\ \} | DEFINE TYPE EnumType : EnumType[;]`

The statement `DEFINE TYPE` defines a [CDS user-defined type](ABENCDS_USER_DEFINED_TYPE_GLOSRY.html).

[CDS Simple Types](ABENCDS_SIMPLE_TYPES.html)

[CDS Enumerated Types](ABENCDS_ENUMERATION_TYPES.html)

-   Without the addition `ENUM`, the type is a [CDS simple type](ABENCDS_SIMPLE_TYPE_GLOSRY.html) that defines an [elementary data type](ABENELEMENTARY_DATA_TYPE_GLOSRY.html).
-   With the addition `ENUM`, the type is a [CDS enumerated type](ABENCDS_ENUM_TYPE_GLOSRY.html) that defines an [enumerated type](ABENENUM_TYPE_GLOSRY.html).

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_tdl.html