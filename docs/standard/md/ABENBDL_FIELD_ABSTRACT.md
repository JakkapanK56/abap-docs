---
title: "ABENBDL_FIELD_ABSTRACT"
description: |
  ABENBDL_FIELD_ABSTRACT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_FIELD_ABSTRACT.htm"
abapFile: "ABENBDL_FIELD_ABSTRACT.html"
keywords: ["update", "delete", "do", "if", "case", "class", "data", "types", "ABENBDL", "FIELD", "ABSTRACT"]
---

`... field(suppress) Field1, Field2, ...;         | (mandatory:execute) Field1, Field2, ...;`

[1. `... field(suppress) Field1, Field2, ...`](#ABAP_VARIANT_1@1@)

[2. `... field(mandatory:execute) Field1, Field2, ...`](#ABAP_VARIANT_2@1@)

This topic lists field attributes for the [fields](ABENRAP_BO_FIELD_GLOSRY.html) of an [abstract BDEF](ABENCDS_ABSTRACT_BDEF_GLOSRY.html).

Commas can be used to classify multiple fields in the same way. Example: `field(suppress) Field1, Field2, Field3;`.

A typical use case for `field(suppress)` was to exclude foreign-key fields used in the `ON` condition of the [to-parent association](ABENCDS_ABSENT_TO_PARENT_ASSOC.html) to appear redundantly in the hierarchical type. This was particularly useful when it was still mandatory to define an `ON` condition in to-parent associations of CDS abstract entities. However, since release 7.85, the `ON` condition can be left out.

The following abstract BDEF suppresses one field from its derived type.

When using [`IN LOCAL MODE`](ABAPIN_LOCAL_MODE.html), `mandatory:execute` does not have any effect.

The following abstract BDEF defines the field `NUM1` as `mandatory:execute`. It fulfills the mandatory prerequisites and uses both the additions `with hierarchy` and `with control`.

This abstract BDEF is used as input parameter for the action `ACTION_DEEP_PARAM` in the managed BDEF `DEMO_MANAGED_HIERARCHY`.

The ABAP class `CL_DEMO_MANDATORY_EXECUTE` executes the action `ACTION_DEEP_PARAM`. It supplies a value for the field `NUM1` and sets the [`%control`](ABAPDERIVED_TYPES_COMP.html) structure for this field to `if_abap_behv=>mk-on`.

Code Snippet:

The following code results in a runtime error, since the `%control` structure for field `NUM1` is set to `if_abap_behv=>mk-off`.

Code Snippet:

An executable example is available in topic [Using `TYPE TABLE` /`TYPE STRUCTURE FOR HIERARCHY`](ABENDERIVED_TYPE_HIERARCHY_ABEXA.html).

-   Removes a field from all [derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html) generated for the BDEF. In particular, the redundancy is avoided in the [`TYPE TABLE FOR HIERARCHY`](ABAPTYPE_TABLE_FOR.html) / [`TYPE STRUCTURE FOR HIERARCHY`](ABAPTYPE_STRUCTURE_FOR.html) types.
-   This is possible for all fields except for [key fields](ABENKEY_FIELD_GLOSRY.html) and fields used by the current BDEF.

-   Declares a field of an abstract BDEF as mandatory. Whenever the hierarchical type is used as [input parameter](ABENBDL_ACTION_INPUT_PARAM.html) for a [RAP action](ABENRAP_ACTION_GLOSRY.html) or a [RAP function](ABENRAP_FUNCTION_GLOSRY.html), a value must be supplied. Otherwise, a [runtime error](ABENRUNTIME_ERROR_GLOSRY.html) occurs.
-   As a prerequisite, the addition [`with hierarchy`](ABENBDL_BDEF_ABSTRACT_HEADER.html) must be used in the [behavior definition header](ABENCDS_BDEF_HEADER_GLOSRY.html) and [`with control`](ABENBDL_DEFINE_BEH_ABSTRACT.html) must be specified for the [entity behavior definition](ABENCDS_ENTITY_BDEF_GLOSRY.html) in question. Moreover, [BDEF strict mode](ABENRAP_STRICT_MODE_GLOSRY.html) must be enabled.

abstract;\\nstrict(2);\\n\\ndefine behavior for DEMO\_CDS\_SCALAR\_ROOT\_3 alias Root\\n\\{\\n field ( suppress ) field2;\\n\\} abstract;\\nstrict(2);\\nwith hierarchy;\\n\\ndefine behavior for DEMO\_ABSTRACT\_ROOT\\nwith control\\n\\{\\n association \_item1;\\n association \_item2;\\n association \_scalar;\\n\\n field ( mandatory:execute ) num1;\\n\\n\\}\\n\\ndefine behavior for DEMO\_HIER\_ABS\_ITEM1\\nwith control\\n\\{\\n field ( suppress ) root2\_id;\\n association \_root2 with hierarchy;\\n\\}\\n\\ndefine behavior for DEMO\_HIER\_ABS\_ITEM2\\nwith control\\n\\{\\n\\}\\n\\nscalar entity DEMO\_HIER\_ABS\_SCALAR field char1; managed implementation in class bp\_demo\_managed\_hierarchy unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_MANAGED\_HIERARCHY\\npersistent table demo\_tab\_root\_6\\nlock master\\nauthorization master ( global )\\n\\n\\{\\n create;\\n update;\\n delete;\\n\\n field ( readonly, numbering : managed ) id;\\n\\n // flat\\n static action action\_flat\_param parameter\\n DEMO\_ABSTRACT\_ROOT result \[1..\*\] $self;\\n\\n // structure as input parameter\\n static action action\_deep\_param deep parameter\\n DEMO\_ABSTRACT\_ROOT result \[1..\*\] $self;\\n\\n // table as input parameter\\n static action action\_deep\_table\_param deep table\\n parameter DEMO\_ABSTRACT\_ROOT result \[1..\*\] $self;\\n\\n static action storeHData deep parameter\\n DEMO\_ABSTRACT\_ROOT result \[1..\*\] $self;\\n\\n static action returnHData deep result \[1\] DEMO\_ABSTRACT\_ROOT;\\n\\n\\} MODIFY ENTITY demo\_managed\_hierarchy \\n EXECUTE action\_deep\_param \\n FROM VALUE #( ( %cid = 'cid\_deep\_param' \\n %param = VALUE #( \\n char1 = 'a' \\n char2 = 'b' \\n "num1 and the corresponding field of the \\n "control-structure are mandatory. \\n num1 = 1 \\n %control-num1 = if\_abap\_behv=>mk-on \\n num2 = 2 \\n %control-num2 = if\_abap\_behv=>mk-off ) ) ) \\n RESULT FINAL(lt\_result2) \\n MAPPED FINAL(ls\_mapped2) \\n REPORTED FINAL(ls\_reported2) \\n FAILED FINAL(ls\_failed2). MODIFY ENTITY demo\_managed\_hierarchy \\n EXECUTE action\_deep\_param \\n FROM VALUE #( ( %cid = 'cid\_deep\_param' \\n %param = VALUE #( \\n char1 = 'a' \\n char2 = 'b' \\n num1 = 1 \\n %control-num1 = if\_abap\_behv=>mk-off \\n num2 = 2 \\n %control-num2 = if\_abap\_behv=>mk-off ) ) ) \\n RESULT FINAL(lt\_result2) \\n MAPPED FINAL(ls\_mapped2) \\n REPORTED FINAL(ls\_reported2) \\n FAILED FINAL(ls\_failed2). abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_abstract.html abenbdl\_define\_beh\_abstract.html abenbdl\_body\_abstract.html