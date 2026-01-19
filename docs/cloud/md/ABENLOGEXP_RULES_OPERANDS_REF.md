---
title: "ABENLOGEXP_RULES_OPERANDS_REF"
description: |
  ABENLOGEXP_RULES_OPERANDS_REF - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLOGEXP_RULES_OPERANDS_REF.htm"
abapFile: "ABENLOGEXP_RULES_OPERANDS_REF.html"
keywords: ["do", "if", "catch", "data", "types", "internal-table", "field-symbol", "ABENLOGEXP", "RULES", "OPERANDS", "REF"]
---

It is possible to compare data references with data references and object references with object references, but it is not possible to compare data references with object references. Two reference variables are identical if they point to the same object. Size comparisons are defined internally and always produce similar results in similar situations.

The [null reference](ABENNULL_REFERENCE_GLOSRY.html) in an initial reference variable is always smaller than any non-initial reference. However, a non-initial invalid reference that no longer points to an object cannot be compared. A comparison with a non-initial invalid reference always produces an uncatchable exception.

The following comparisons are both true. Although all references created with the reference operator `REF` point to the same data object in the memory, the reference created using `<fs2>` is not equal to the other two because it references another data type.

-   For data references to be identical, the data type of the referenced objects must be [compatible](ABENCOMPATIBILITY.html) and it is not enough for the operands just to contain the same reference. If, for example, two reference variables contain the same memory address, with one pointing to a structure and the other to the first component of the structure, these variables are not identical since the data type of the operands is incompatible. Reference variables filled using [`GET REFERENCE`](ABAPGET_REFERENCE.html) might not be identical, even though they point to the same data object if `GET REFERENCE` or the reference operator `REF` is executed for a field symbol to which the data object was assigned using [casting](ABENCAST_CASTING_GLOSRY.html).
-   The fact that non-initial invalid references cannot be compared affects all operations with internal tables where comparisons take place, for example, `WHERE` conditions, sorts, or accesses using a sorted key. If a comparison with a non-initial invalid reference takes place, a runtime error occurs.

DATA dobj TYPE d. \\nASSIGN dobj TO FIELD-SYMBOL(). \\nIF REF #( dobj ) = REF #( ). \\n ... \\nENDIF. \\n\\ \\nTYPES text TYPE c LENGTH 8. \\nFIELD-SYMBOLS TYPE text. \\nASSIGN dobj TO CASTING. \\nIF REF #( dobj ) <> REF #( ). \\n ... \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenlogexp\_comp.html abenlogexp\_rules.html