---
title: "ABAPEML_FIELDS_TAB"
description: |
  ABAPEML_FIELDS_TAB - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPEML_FIELDS_TAB.htm"
abapFile: "ABAPEML_FIELDS_TAB.html"
keywords: ["delete", "do", "if", "data", "types", "internal-table", "ABAPEML", "FIELDS", "TAB"]
---

Internal table that is typed with the required [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) (`TYPE TABLE FOR ...`) containing specific components for the communication between a [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) and [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html). The components are determined by the context in which the internal table is used, i. e. the use and number of the components of the internal table to be specified, for example, for a delete or create operation differ. See the details of the type ([`TYPE TABLE FOR`](ABAPTYPE_TABLE_FOR.html)) and components ([Components of Derived Types](ABAPDERIVED_TYPES_COMP.html)) in the respective documentation.

The internal table can be constructed in an [operand position](ABENOPERAND_POSITION_GLOSRY.html) using [constructor expressions](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html), for example with the [value operator](ABENVALUE_OPERATOR_GLOSRY.html) (`VALUE`) and other [constructor operators](ABENCONSTRUCTOR_EXPRESSIONS.html) to fill the internal table with instances as input parameters after the respective keyword (for example, `FROM`).

If a field of a parent or child entity is marked as `readonly` in the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html), it cannot be changed and assigned a new value with any of the [modify operations](ABENRAP_MODIFY_OPERATION_GLOSRY.html). A modification can only be done using the addition `IN LOCAL MODE`. See more details in the documentation for [`IN LOCAL MODE`](ABAPIN_LOCAL_MODE.html).

The following code example shows an internal table that is explicitly declared with a BDEF derived type. It is then used in a `MODIFY` statement (assuming that `create_root` contains values). This is also true for the second example. Yet, the internal table following the statement `CREATE SET FIELDS WITH` is declared inline using the value operator.

... \\nDATA create\_root TYPE TABLE FOR CREATE demo\_managed\_root. \\n\\ \\nMODIFY ENTITY demo\_managed\_root \\n CREATE SET FIELDS WITH create\_root. \\n\\ \\n... \\n\\ \\nMODIFY ENTITY demo\_managed\_root \\n CREATE SET FIELDS WITH VALUE \\n #( ( %cid = 'cid1' key\_field = '1' data\_field1\_root = 'aaa' \\n data\_field2\_root = 'bbb') \\n ( %cid = 'cid2' key\_field = '2' data\_field1\_root = 'ccc' \\n data\_field2\_root = 'ddd') \\n ). \\n... abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html abapcommon\_eml\_elements.html