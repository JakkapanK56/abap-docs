---
title: "ABAPINCLUDE_TYPE"
description: |
  ABAPINCLUDE_TYPE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPINCLUDE_TYPE.htm"
abapFile: "ABAPINCLUDE_TYPE.html"
keywords: ["select", "insert", "do", "if", "method", "class", "data", "types", "ABAPINCLUDE", "TYPE"]
---

[Short Reference](ABAPINCLUDE_TYPE_SHORTREF.html)

`INCLUDE \{\ \{TYPE struc_type\}\          |\ \{STRUCTURE struc\}\ \}\          [AS name [RENAMING WITH SUFFIX suffix]].`

[1. `... AS name`](#ABAP_ADDITION_1@3@)

[2. `... RENAMING WITH SUFFIX suffix`](#ABAP_ADDITION_2@3@)

This statement can only be executed within a structure definition with the additions `BEGIN OF` and `END OF` of the statements [`TYPES`](ABAPTYPES.html), [`DATA`](ABAPDATA.html), [`CLASS-DATA`](ABAPCLASS-DATA.html), and [`STATICS`](ABAPSTATICS.html). It includes all components of a structured type at this position in the current structure definition. The structured type can be specified as follows:

The `INCLUDE` statement does not create a [substructure](ABENSUBSTRUCTURE_GLOSRY.html), which means the components are inserted as if they were listed individually instead of the statement `INCLUDE`.

By specifying the name `name` after the addition `AS`, the components of the included structure `struc_type` or `struc` become a [component group](ABENCOMPONENT_GROUP_GLOSRY.html) also known as [named include](ABENNAMED_INCLUDE_GLOSRY.html). Besides regular addressing using the name of the including structure, they either can be addressed together using the name `name` or as individual components using the structure component selector (`name-`). The name `name` must be unique within the structure into which the components are included. This means that there must not be any other component with this name and it must not be specified in a different `INCLUDE` statement after `AS`.

The addition `RENAMING WITH SUFFIX` is used to rename each individual component by appending the extension `suffix`, which prevents naming conflicts between components with the same name. `suffix` must be specified directly.

In this example, the structure `week` is defined by repeated transfer of the components of the structured type `t_day`. The components of `week` are all at the same level and can be addressed as follows: `week-work_mon`, `week-free_mon`, `week-work_tue`, and so on. Alternatively, they can also be addressed as follows: `week-monday-work`, `week-monday-free`, `week-tuesday-work`, and so on.

-   As a structured data type `struc_type` after `TYPE`, both visible and usable at this position. `struc_type` can be a local structured type, a visible structured type of a global class or global interface, or a structure from ABAP Dictionary.
-   As a structured data object `struc` after `STRUCTURE`, visible at this position. Its structured data type is used. `struc` must be a structure of the same program or a visible attribute of a global class or global interface.

-   Note the following when using the `INCLUDE` statement:

-   If the statement `INCLUDE` is used to add more structure components to existing components, or if multiple `INCLUDE` statements are used in a structure, this can produce syntax errors due to naming conflicts. This is particularly problematic if structures are included that are not defined in the same program and that are subsequently changed.
-   The included structures cannot be addressed as such without restrictions.
-   The necessary metadata is stored again for each component of an included structure, whereas the metadata for the components of a [substructure](ABENSUBSTRUCTURE_GLOSRY.html) is only stored once when the substructure is defined.
-   In contrast to real substructures, structures included using `INCLUDE` cannot be declared as [static boxes](ABENSTATIC_BOX_GLOSRY.html) when embedded.

-   Where possible, real [substructures](ABENSUBSTRUCTURE_GLOSRY.html) should be created instead of the statement `INCLUDE`. However, the addition `RENAMING WITH SUFFIX` should be used to avoid naming conflicts. This recommendation also applies to [includes of structures](ABENDDIC_INCLUDE_STRUCTURE.html) in ABAP Dictionary, where the structures of database tables particularly cannot contain any real substructures.
-   As usual, the addition `TYPE` is used to specify a data type. Like the addition [`LIKE`](ABAPTYPES_REFERRING.html), the addition `STRUCTURE` is used to specify a data object. Outside of ABAP objects, [flat structures](ABENFLAT_STRUCTURE_GLOSRY.html), database tables, or [views](ABENVIEW_GLOSRY.html) of the ABAP Dictionary can also be specified for `struc` with the addition `STRUCTURE`.
-   In constant structures defined with [`CONSTANTS`](ABAPCONSTANTS.html), no components can be included using `INCLUDE` because it is not possible to assign a [start value](ABENSTART_VALUE_GLOSRY.html) to them.
-   In regard to their [alignments](ABENALIGNMENT_GLOSRY.html), structures included using `INCLUDE` behave like substructures, which means [alignment gaps](ABENALIGNMENT_GAP_GLOSRY.html) can occur before the first or after the last component. These do not occur when the components are declared directly.
-   A structure that is included using `INCLUDE` is handled by the method `GET_COMPONENTS` of the class `CL_ABAP_STRUCTDESCR` of [RTTI](ABENRUN_TIME_TYPE_IDENTIFIC_GLOSRY.html) like a substructure. The returned component table only contains one line for an included structure. The component type is represented by an object from `CL_ABAP_STRUCTDESCR`, but the `AS_INCLUDE` column contains the value *X*. The method `GET_INCLUDED_VIEW` can be used to resolve components of included structures.
-   When a [static box](ABENSTATIC_BOX_GLOSRY.html) is inherited by one structure from another, its boxed component property is also inherited.

-   Included components for which a name is specified after `AS`, can be addressed in the same way as if they were components of a substructure `name`.
-   A name `name` specified with `AS name` is used only for an additional explicit addressing option and is ignored by an implicit addressing in statements such as [`MOVE-CORRESPONDING`](ABAPMOVE-CORRESPONDING.html) or [`SELECT INTO CORRESPONDING`](ABAPINTO_CLAUSE.html). A component renamed using `RENAMING WITH SUFFIX` actually has this name and is therefore never ignored.

-   The use of the `RENAMING WITH SUFFIX` addition makes it possible to include an individual structure multiple times.
-   Renaming the components of included structures can prevent errors during an upgrade of these structures.

TYPES: BEGIN OF t\_day, \\n work TYPE c LENGTH 8, \\n free TYPE c LENGTH 16, \\n END OF t\_day. \\n\\ \\nDATA BEGIN OF week. \\n INCLUDE TYPE t\_day AS monday RENAMING WITH SUFFIX \_mon. \\n INCLUDE TYPE t\_day AS tuesday RENAMING WITH SUFFIX \_tue. \\n INCLUDE TYPE t\_day AS wednesday RENAMING WITH SUFFIX \_wed. \\n ... \\nDATA END OF week. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abentypes\_statements.html abaptypes.html abaptypes\_struc.html