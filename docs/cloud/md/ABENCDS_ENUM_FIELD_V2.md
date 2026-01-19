---
title: "ABENCDS_ENUM_FIELD_V2"
description: |
  ABENCDS_ENUM_FIELD_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_ENUM_FIELD_V2.htm"
abapFile: "ABENCDS_ENUM_FIELD_V2.html"
keywords: ["select", "if", "data", "types", "ABENCDS", "ENUM", "FIELD"]
---

`... EnumType.#EnumConstant ...`

Specifies an [enumerated constant](ABENENUMERATED_CONSTANT_GLOSRY.html)\\ `EnumConstant` of a [CDS enumerated type](ABENCDS_ENUM_TYPE_GLOSRY.html)\\ `EnumType` in the `SELECT` list of a CDS view entity. An enumerated constant `EnumConstant` defines a value of the value set of an enumerated type. A CDS enumerated constant is specified using the name of the enumerated type `EnumType`, followed by a period (.), a hash character (#), and the name of an enumerated constant `EnumConstant`. An enumerated constant has the data type `ENUM`.

The CDS view entity shown below specifies the element `friday` as enumerated constant in the `SELECT` list.

-   [ABAP CDS - Enumerated Types](ABENCDS_ENUMERATION_TYPES.html)

@EndUserText.label: 'CDS view entity, enumerated types'\\n\\ndefine view entity DEMO\_CDS\_ENUM\_TYPE\_USAGE\_1\\n as select from demo\_expressions\\n\\{\\n key id as Id,\\n num1 as integer1,\\n DEMO\_CDS\_ENUM\_STACK.#FRI as friday\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_operands\_v2.html