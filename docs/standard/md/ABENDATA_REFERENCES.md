---
title: "ABENDATA_REFERENCES"
description: |
  ABENDATA_REFERENCES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDATA_REFERENCES.htm"
abapFile: "ABENDATA_REFERENCES.html"
keywords: ["delete", "do", "if", "class", "data", "types", "internal-table", "ABENDATA", "REFERENCES"]
---

References are pointers to instances. Pointers to data objects are [data references](ABENDATA_REFERENCE_GLOSRY.html). Pointers to instances of classes are [object references](ABENDATA_REFERENCE_GLOSRY.html). References occur in ABAP as the content of reference variables. Reference variables are data objects whose data type is a reference type.

Reference types are always created using the addition [`REF TO`](ABAPTYPES_REFERENCES.html). The content of reference variables can be checked using the predicate expression [`IS BOUND`](ABENLOGEXP_BOUND.html).

The reference type is the static type of a reference variable. It defines to which types of instances its references can point. The dynamic type of a reference variable is the type from which an object was instantiated to which a reference variable points. The static type is always more general than or the same as the dynamic type. A dynamic type can be a data type or a class. A reference type or static type can be a type for a [data reference variable](ABENDATA_REFERENCE_VARIABLE_GLOSRY.html) or an [object reference variable](ABENOBJECT_REFER_VARIABLE_GLOSRY.html). The latter are subdivided into [class reference variables](ABENCLASS_REFERENCE_VARIABL_GLOSRY.html) and [interface reference variables](ABENINTERFACE_REF_VARIABLE_GLOSRY.html).

Special [conversion rules](ABENCONVERSION_REFERENCES.html) apply to assignments between reference variables, depending on the static type. These rules ensure that the dynamic type is never more general than the static type ([upcast](ABENUP_CAST_GLOSRY.html), [downcast](ABENDOWN_CAST_GLOSRY.html)).

Depending on where the object referenced by a reference variable is stored, memory-preserving [heap references](ABENHEAP_REFERENCE_GLOSRY.html) or non-memory-preserving [stack references](ABENSTACK_REFERENCE_GLOSRY.html) can be distinguished. Special [weak references](ABENWEAK_REFERENCE_GLOSRY.html) that are represented by objects of a system class, do not keep an object alive.

A reference in a reference variable is valid if it points to an object. For this, the predicate expression [`IS BOUND`](ABENLOGEXP_BOUND.html) is true. A non-initial reference can be invalid if it points to deleted objects. A [heap reference](ABENHEAP_REFERENCE_GLOSRY.html) that points to a line in an internal table can become invalid if the line is deleted. A [stack reference](ABENSTACK_REFERENCE_GLOSRY.html) can become invalid if the referenced data object is removed from the stack.

-   [Data references](ABENDATA_REFERENCE_TYPE.html)
-   [Object references](ABENOBJECT_REFERENCE_TYPE.html)
-   [Heap references and stack references](ABENHEAP_STACK_REFERENCE.html)
-   [Weak references](ABENCL_ABAP_WEAK_REFERENCE.html)

-   From a technical perspective, a reference in ABAP does not refer directly to an object but to a header instead, which contains the address of the actual object and other administrative information. See also [Memory Management of Deep Data Objects](ABENMEMORY_CONSUMPTION.html).
-   Internally, [strings](ABENSTRING_GLOSRY.html), [internal tables](ABENINTERNAL_TABLE_GLOSRY.html), and [boxed components](ABENBOXED_COMPONENT_GLOSRY.html) are also addressed using references, which do not appear as the content of reference variables.

abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html