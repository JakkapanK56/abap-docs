---
title: "ABENABAP_FIELD_SYMBOLS"
description: |
  ABENABAP_FIELD_SYMBOLS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_FIELD_SYMBOLS.htm"
abapFile: "ABENABAP_FIELD_SYMBOLS.html"
keywords: ["do", "if", "data", "internal-table", "field-symbol", "ABENABAP", "FIELD", "SYMBOLS"]
---

Field symbols are declared using the statement [`FIELD-SYMBOLS`](ABAPFIELD-SYMBOLS.html) or the declaration operator [`FIELD-SYMBOL`](ABENFIELD-SYMBOL_INLINE.html) and are either placeholders or symbolic names for existing data objects, or parts of existing data objects to which a memory area can be assigned at program runtime. A field symbol does not reserve physical space in the [data area](ABENDATA_AREA_GLOSRY.html) of a program like a [data object](ABENDATA_OBJECT_GLOSRY.html). Instead, it works as a dynamic identifier of a memory area, where a specific data object or part of an object is located. A field symbol can be used instead of data objects at operand positions of statements. When such a statement is executed, a memory area must be assigned to the field symbol using the statement [`ASSIGN`](ABAPASSIGN.html) or the addition `ASSIGNING` when [processing internal tables](ABENTABLE_PROCESSING_STATEMENTS.html).

Field symbols can point to almost any data object. A field symbol is similar to a [data reference variable](ABENDATA_REFERENCE_VARIABLE_GLOSRY.html) dereferenced using `->*`. Unlike data reference variables, [value semantics](ABENVALUE_SEMANTICS_GLOSRY.html) are used to access a field symbol. Accessing a field symbol is like accessing the named data object or part of the object itself. For data reference variables, however, [reference semantics](ABENREFERENCE_SEMANTICS_GLOSRY.html) apply.

Field symbols are used for generic work with data objects and for explicit [casting](ABENCAST_CASTING_GLOSRY.html) of data objects, which is only possible using field symbols.

[Use field symbols and data references in appropriate ways](ABENDYN_ACCESS_DATA_OBJ_GUIDL.html)

-   Field symbols to which data objects or parts of data objects are assigned in the [heap](ABENHEAP_GLOSRY.html) act memory-preserving, like [heap references](ABENHEAP_REFERENCE_GLOSRY.html).
-   From a technical perspective, the field symbols are implemented by references or pointers, which are comparable to references in [data reference variables](ABENDATA_REFERENCE_VARIABLE_GLOSRY.html). A data reference variable is declared in the same way as every other data object and the memory area for the reference it contains is in the [data area](ABENDATA_AREA_GLOSRY.html) of the ABAP program. However, the pointer assigned to a field symbol is exclusively managed by the ABAP runtime framework and is located in a memory area, which cannot be accessed directly in an ABAP program.

abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html