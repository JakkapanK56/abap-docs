---
title: "ABENHEAP_STACK_REFERENCE"
description: |
  ABENHEAP_STACK_REFERENCE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENHEAP_STACK_REFERENCE.htm"
abapFile: "ABENHEAP_STACK_REFERENCE.html"
keywords: ["delete", "do", "if", "case", "method", "class", "data", "types", "internal-table", "field-symbol", "ABENHEAP", "STACK", "REFERENCE"]
---

The objects referenced by references can be in the [heap](ABENHEAP_GLOSRY.html) or in the [stack](ABENSTACK_GLOSRY.html). Objects in the heap are instances of classes or are [anonymous data objects](ABENANONYMOUS_DATA_OBJECT_GLOSRY.html). Objects in the stack are the global data objects of programs and the local data objects of procedures stacked there.

A non-initial object reference always points to an instance of a class and is therefore always a heap reference. A data reference can be a heap reference or a stack reference:

A part of a data object is either a [structure component](ABENSTRUCTURE_COMPONENT_GLOSRY.html), a line of an [internal table](ABENINTERNAL_TABLE_GLOSRY.html), or a subarea specified by an [offset/length](ABENOFFSET_LENGTH_SPECIFIC_GLOSRY.html).

Heap references preserve memory and therefore cannot become invalid, with one exception: a heap reference to a line of an internal table becomes invalid if the table line is deleted. Stack references also become invalid if the referenced data object is removed from the stack, that is, when the associated procedure ends. The latter also applies to the local data in instance methods. The [predicate expression](ABENPREDICATE_EXPRESSION_GLOSRY.html)\\ [`IS BOUND`](ABENLOGEXP_BOUND.html) for an invalid reference is false.

The heap reference `heap_ref` on the [stack](ABENSTACK_GLOSRY.html) points to an anonymous data object in the [heap](ABENHEAP_GLOSRY.html). The stack reference `stack_ref` also on the stack points to `heap_ref`.

-   **Heap references** point to objects or parts of objects in the heap
-   Heap references are object references or data references. They are created either when new objects are created in the heap using the statements [`CREATE OBJECT`](ABAPCREATE_OBJECT.html) or [`CREATE DATA`](ABAPCREATE_DATA.html), or when applying the statement [`GET REFERENCE`](ABAPGET_REFERENCE.html) or the addition [`REFERENCE INTO`](ABAPREAD_TABLE_OUTDESC.html) to data objects in the heap. Heap references are always memory-preserving, which means that for as long as a heap reference points to an object or a part of an object, it is not deleted by the [Garbage Collector](ABENGARBAGE_COLLECTOR_GLOSRY.html).
-   **Stack references** point to objects or parts of objects in the stack
-   Stack references are always data references and are created exclusively by applying the statement [`GET REFERENCE`](ABAPGET_REFERENCE.html), the reference operator [`REF`](ABENCONSTRUCTOR_EXPRESSION_REF.html), or the addition [`REFERENCE INTO`](ABAPREAD_TABLE_OUTDESC.html) to data objects in the stack. Stack references are not memory-preserving.

-   A data reference is a heap reference if it

-   points to an instance attribute or a part of an instance attribute of an object,
-   points to an anonymous data object or a part of an anonymous data object.

-   A data reference that points to a data object or a part of a data object in the stack is a stack reference.

-   For [field symbols](ABENFIELD_SYMBOL_GLOSRY.html), the same applies in regard to preserving memory and validity as to data references. Field symbols to which objects or parts of objects are assigned in the heap are memory-preserving.
-   Internal tables are [dynamic data objects](ABENDYNAMIC_DATA_OBJECT_GLOSRY.html) and have a special role because they have their own memory management, which occupies and releases memory regardless of the statement `CREATE` and Garbage Collector. This means that heap references that point to lines in internal tables can become invalid. This is not the case for strings, since no references to substrings of strings are allowed.
-   Whether a reference is classified as a heap reference or a stack reference is determined by its value and not by the type of the reference variable in which it is stored. Assignments between reference variables in particular do not change the corresponding properties of the copied references.

FINAL(heap\_ref) = NEW i( 111 ). \\nFINAL(stack\_ref) = REF #( heap\_ref ). abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html abendata\_references.html