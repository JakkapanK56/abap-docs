---
title: "ABENCDS_SIMPLE_TYPE"
description: |
  ABENCDS_SIMPLE_TYPE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_SIMPLE_TYPE.htm"
abapFile: "ABENCDS_SIMPLE_TYPE.html"
keywords: ["types", "ABENCDS", "SIMPLE", "TYPE"]
---

`... simple_type  ...`

A [CDS simple type](ABENCDS_SIMPLE_TYPE_GLOSRY.html) can be typed using another CDS simple type. The annotations of the underlying simple type are inherited. It is possible to overwrite these annotations using locally defined annotations in the overlying simple type.

When stacking CDS simple types, the maximum nesting depth is five. This means that a stack of simple types can have a maximum of five layers, from base to top-most.

The following CDS simple type is created with reference to another CDS simple type. It inherits all the properties and annotations of the referenced simple type.

define type DEMO\_SIMPLE\_TYPE\_2 : DEMO\_SIMPLE\_TYPE; abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_tdl.html abencds\_define\_type.html abencds\_simple\_types.html abencds\_define\_simple\_type.html