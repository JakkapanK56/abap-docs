---
title: "ABENUSING_TYPES_GUIDL"
description: |
  ABENUSING_TYPES_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENUSING_TYPES_GUIDL.htm"
abapFile: "ABENUSING_TYPES_GUIDL.html"
keywords: ["select", "do", "if", "case", "class", "data", "types", "field-symbol", "ABENUSING", "TYPES", "GUIDL"]
---

You can use the data types declared according to the rules on [Bound and Standalone Data Types](ABENBOUND_INDEPENDENT_DTYPE_GUIDL.html) and [Declaration of Data Types and Constants](ABENDECLARATION_DTYPES_CONST_GUIDL.html) for declaring and creating data objects, as well as for typing field symbols or interface parameters. You specify them after the `TYPE` addition of the corresponding statement.

**Use semantically appropriate data types only**

Use existing types only if they match the semantics of the typed object. You must not select an existing type based only on the technical properties.

As long as it extends beyond an elemental ABAP type, the type of a data object or an interface parameter provides the source code reader with information about the semantics of these variables. This makes it easier to recognize the meaning of individual variables.

For this reason, you must use only data types whose semantics match the usage. The technical properties of a type alone do not justify its use in a specific context, as this impedes the readability of the program.

In particular, this applies to the reuse or multiple use of existing types. If you require a data type with specific technical properties for an application, you should not simply use any type with these properties from ABAP Dictionary. In the past, this has frequently been the chosen procedure. Consequently applying package encapsulation may help prevent the unwanted use of own data types.

This rule applies especially for the use of structures from ABAP Dictionary. For example, you should never use a structure defining a database table as a template for input or output fields of classic dynpros or in Web Dynpro. This would violate the [SoC principle](ABENSEPARATION_CONCERNS_GUIDL.html).

In the following source code a variable is declared, whose name and use clearly indicate that it is used for a truth value. The variable is declared with a technically correct, but semantically incorrect, data type. `syst-batch`, after all, is the data type for the [system field](ABENSYSTEM_FIELDS_GDL.html)\\ `sy-batch`, which indicates whether a program is executed in the background.

The following source code shows an improved example compared to the source code above. In this case, the `abap_bool` type of type pool `abap`, which is intended for [truth values](ABENDATAOBJECTS_TRUE_VALUE_GUIDL.html), is used. In addition, the request of the truth value is performed using a specifically designated constant from the same type pool.

DATA is\_empty TYPE syst-batch. \\n... \\nIF is\_empty IS INITIAL. \\n ... \\nENDIF. DATA is\_empty TYPE abap\_boolean. \\n... \\nIF is\_empty EQ abap\_false. \\n ... \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abendata\_type\_obj\_gdl.html