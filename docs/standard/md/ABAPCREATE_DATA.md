---
title: "ABAPCREATE_DATA"
description: |
  ABAPCREATE_DATA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCREATE_DATA.htm"
abapFile: "ABAPCREATE_DATA.html"
keywords: ["delete", "do", "if", "catch", "data", "types", "internal-table", "field-symbol", "ABAPCREATE", "DATA"]
---

[Short Reference](ABAPCREATE_DATA_SHORTREF.html)

1\. `CREATE DATA dref [[area_handle](ABAPCREATE_DATA_AREA_HANDLE.html)].`

2\. `CREATE DATA dref [[area_handle](ABAPCREATE_DATA_AREA_HANDLE.html)]`\\
`TYPE \{abap_type|(name)\}`\\
`[LENGTH len]\ [DECIMALS dec].`

3\. `CREATE DATA dref [[area_handle](ABAPCREATE_DATA_AREA_HANDLE.html)]`\\
`\{\ \{TYPE [LINE OF]\ \{type|(name)\}\}`\\
`|\ \{LIKE [LINE OF] dobj\}\ \}.`

4\. `CREATE DATA dref [[area_handle](ABAPCREATE_DATA_AREA_HANDLE.html)]`\\
`TYPE HANDLE handle.`

5\. `CREATE DATA dref``\ [[area_handle](ABAPCREATE_DATA_AREA_HANDLE.html)]`\\
`TYPE REF TO \{type|(name)\}.`

6\. `CREATE DATA dref``\ [[area_handle](ABAPCREATE_DATA_AREA_HANDLE.html)]`\\
`\{\ \{TYPE [STANDARD]|SORTED|HASHED TABLE`\\
`OF [REF TO]\ \{type|(name)\}\}`\\
`|\ \{LIKE [STANDARD]|SORTED|HASHED TABLE OF dobj\}\ \}`\\
`[\ \{WITH [UNIQUE|NON-UNIQUE]\ \{KEY \{comp1 comp2 ...\}|(keytab)\}|\{DEFAULT KEY\}\}`\\
`|\ \{WITH EMPTY KEY\}\ ]`\\
`[INITIAL SIZE n].`\\

7\. `CREATE DATA dref TYPE ([der_type](ABAPDERIVED_TYPES_DECLARATION.html)).`

The statement `CREATE DATA` creates an [anonymous data object](ABENANONYMOUS_DATA_OBJECT_GLOSRY.html) and assigns the reference to the data object to the reference variable `dref`.

By default, the data object is created in the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) ([heap](ABENHEAP_GLOSRY.html)) of the current program and is preserved there for as long as it is required. If no [data references](ABENDATA_REFERENCE_GLOSRY.html) and no [field symbols](ABENFIELD_SYMBOL_GLOSRY.html) point to the data object or to a part of the data object, it is deleted by the [Garbage Collector](ABENGARBAGE_COLLECTOR_GLOSRY.html).

The data object can be created as a [shared object](ABENSHARED_OBJECT_GLOSRY.html) using the addition [`area_handle`](ABAPCREATE_DATA_AREA_HANDLE.html).

The reference variable `dref` must be declared as a data reference variable. The content of a data object created using `CREATE DATA` can only be accessed using dereferenced data variables or field symbols (see [Data Objects in Operand Positions](ABENOPERANDS_DATA_OBJECTS.html)).

The data type of the created data object can be defined using the addition `TYPE` and a type specification or using the addition `LIKE` and a data object specification.

The syntax allows the dynamic definition of elementary data types, reference types, and table types. The addition `HANDLE` can be used to refer to any [RTTS](ABENRUN_TIME_TYPE_SERVICES_GLOSRY.html) type description objects. According to the rules in the section [Assignments Between Data Reference Variables](ABENCONVERSION_REFERENCES_DATA.html), the static type of the data reference variable must be more general than the data type of the created data object, or be identical to it.

If a catchable exception is raised when the object is created, the object is not created and the `dref` data reference variable keeps its previous state.

`CX_SY_CREATE_DATA_ERROR`

[Defining the Data Type Implicitly](ABAPCREATE_DATA_IMPLICIT.html)

[Defining the Data Type Using Built-in ABAP Types](ABAPCREATE_DATA_BUILT_IN.html)

[Defining the Data Type Using an Existing Type](ABAPCREATE_DATA_EXISTING.html)

[Creating Data with Reference to a Type Description Object](ABAPCREATE_DATA_HANDLE.html)

[Creating Reference Variables](ABAPCREATE_DATA_REFERENCE.html)

[Creating Internal Tables](ABAPCREATE_DATA_ITAB.html)

[Create Data Object with BDEF Derived Types](ABAPDERIVED_TYPES_DECLARATION.html)

-   Unlike the statement [`DATA`](ABAPDATA.html), `CREATE DATA` creates the data object at the time of execution. Data objects declared using `DATA` are created when the associated program unit is loaded.
-   The statement `CREATE DATA` creates a [heap reference](ABENHEAP_REFERENCE_GLOSRY.html). All references that point to the anonymous data object or its parts are also heap references and keep the data object alive. The same applies to field symbols.
-   When a data type is used, the [instance operator](ABENINSTANCE_OPERATOR_GLOSRY.html)\\ [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) acts like the statement `CREATE DATA dref TYPE type` and can be used in [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html).
-   Unlike [`CREATE OBJECT`](ABAPCREATE_OBJECT.html), the return code `sy-subrc` is not set for `CREATE DATA`.

-   *Cause:* Illegal value for the addition `DECIMALS`.
    *Runtime error:*\\ `CREATE_DATA_ILLEGAL_DECIMALS`
-   *Cause:* Illegal value for the addition `INITIAL SIZE`.
    *Runtime error:*\\ `CREATE_DATA_ILLEGAL_INIT_SIZE`
-   *Cause:* Illegal value for the addition `LENGTH`.
    *Runtime error:*\\ `CREATE_DATA_ILLEGAL_LENGTH`
-   *Cause:* The addition `LENGTH` was used for a type other than `c`, `n`, `x`, or `p`.
    *Runtime error:*\\ `CREATE_DATA_LEN_NOT_ALLOWED`
-   *Cause:* The type specified dynamically in the addition `TYPE` is not typed in full.
    *Runtime error:*\\ `CREATE_DATA_NOT_ALLOWED_TYPE`
-   *Cause:* The type specified dynamically in the addition `TYPE` is not known.
    *Runtime error:*\\ `CREATE_DATA_UNKNOWN_TYPE`

-   *Cause:* The variable `dref` does not have the correct type.
    *Runtime error:*\\ `CREATE_DATA_REFERENCE_EXPECTED`

abenabap.html abenabap\_reference.html abencreate\_objects.html