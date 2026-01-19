---
title: "ABENDATA_TYPES"
description: |
  ABENDATA_TYPES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDATA_TYPES.htm"
abapFile: "ABENDATA_TYPES.html"
keywords: ["do", "if", "case", "class", "data", "types", "field-symbol", "ABENDATA", "TYPES"]
---

Data types are a subtree of the [ABAP type hierarchy](ABENTYPE_HIERARCHY.html). Data types are type-only descriptions. No memory for storing working data is attached, but they may require space for administrative information. A data type characterizes the technical properties of all [data objects](ABENDATA_OBJECT_GLOSRY.html) that have this type. In ABAP, data types occur as properties of data objects, but they can also be defined independently.

The definition of [standalone data types](ABENSTAND-ALONE_DATA_TYPE_GLOSRY.html) is based on a set of [built-in data types](ABENBUILTIN_DATA_TYPE_GLOSRY.html). The definition can be made within a program using the statement [`TYPES`](ABAPTYPES.html) in the global declaration part of a program, in the declaration part of a class or an interface, locally in procedures, or in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html).

Built-in and user-defined data types can be used to create data objects and for [typing](ABENTYPING_GLOSRY.html). Particularly in the latter case, [built-in generic data types](ABENBUILT_IN_TYPES_GENERIC.html) are available. A [generic data type](ABENGENERIC_DATA_TYPE_GLOSRY.html) is a data type that does not determine all properties of a [data object](ABENDATA_OBJECT_GLOSRY.html). Generic data types can only be used for typing [formal parameters](ABENFORMAL_PARAMETER_GLOSRY.html) and [field symbols](ABENFIELD_SYMBOL_GLOSRY.html).

Data types can be divided into elementary, reference, and complex data types.

-   [Elementary types](ABENELEMENTARY_DATA_TYPE_GLOSRY.html) are 'atomic' in the sense that they are not composed of other types. They are further divided into elementary types of fixed and variable length.

-   There are 14 [built-in elementary data types](ABENBUILT_IN_TYPES_COMPLETE.html) of fixed length in ABAP.
-   Eight [numeric](ABENNUMERIC_DATA_TYPE_GLOSRY.html) types: Integers (`b`, `s`, `i`, `int8`), decimal floating point numbers (`decfloat16`, `decfloat34`), binary floating point numbers (`f`), and packed numbers (`p`).
-   Two [character-like](ABENCHARLIKE_DATA_TYPE_GLOSRY.html) types: text fields (`c`) and numeric text fields (`n`).
-   One [byte-like](ABENBYTE_LIKE_DATA_TYP_GLOSRY.html) type: byte fields (`x`).
-   Two character-like [date](ABENDATE_TYPE_GLOSRY.html) and [time types](ABENTIME_TYPE_GLOSRY.html): date fields (`d`) and time fields (`t`).
-   A [time stamp type](ABENTIMESTAMP_TYPE_GLOSRY.html): Time stamp fields (`utclong`).
-   The data types `c`, `n`, `x`, and `p` are generic in terms of their length. `p` is also generic in terms of the number of decimal places. The numeric data types `b` and `s` cannot be specified directly in programs for short integers.
-   There are two [built-in elementary data types](ABENBUILT_IN_TYPES_COMPLETE.html) of variable length in ABAP. A [character-like](ABENCHARLIKE_DATA_TYPE_GLOSRY.html) type, namely text string (`string`), and a [byte-like](ABENBYTE_LIKE_DATA_TYP_GLOSRY.html) type, namely byte string (`xstring`).
-   An [enumerated type](ABENENUM_TYPE_GLOSRY.html) describes a value set in addition to the elementary data type. An [enumerated object](ABENENUMERATED_OBJECT_GLOSRY.html) can have only [enumerated values](ABENENUMERATED_VALUE_GLOSRY.html) from this set.

-   [Reference types](ABENREFERENCE_TYPE_GLOSRY.html) describe data objects that contain references to other objects (data objects and instances of classes), which are known as [reference variables](ABENREFERENCE_VARIABLE_GLOSRY.html). There are no built-in reference types in ABAP. A reference type must either be defined in the ABAP program or in ABAP Dictionary. Reference types form a hierarchy that represents the hierarchy of the objects to which the references can point.
-   [Complex data types](ABENCOMPLEX_DATA_TYPE_GLOSRY.html) are composed of other types. They allow the administration and processing of semantically related datasets under one name. A data object of a complex type can be accessed overall or by component. Apart from the structure [`sy`](ABENSYSTEM_FIELDS.html), there are no built-in complex data types in ABAP. A complex type must either be defined in the ABAP program or in ABAP Dictionary. There are two kinds of complex data types:

-   A [structured type](ABENSTRUCTURED_TYPE_GLOSRY.html) is a sequence of any elementary, reference, or complex data types. Structures are used to summarize work areas that logically belong together.
-   [Table types](ABENTABLE_TYPE_GLOSRY.html) consist of a sequence of any number of lines of the same data type. Table types are characterized by a [line type](ABENROW_TYPE_GLOSRY.html) that can be any elementary type, reference type, or complex data type, by the [table category](ABENTABLE_CATEGORY_GLOSRY.html), which defines how tables can be accessed, and by a [table key](ABENTABLE_KEY_GLOSRY.html) that is used to identify the table lines.
-   A [mesh type](ABENMESH_TYPE_GLOSRY.html) is a special structured type with tabular components between which there are [mesh associations](ABENMESH_ASSOCIATION_GLOSRY.html).

abenabap.html abenabap\_reference.html abentypes\_and\_objects.html