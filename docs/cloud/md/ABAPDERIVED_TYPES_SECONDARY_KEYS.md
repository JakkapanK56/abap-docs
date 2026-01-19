---
title: "ABAPDERIVED_TYPES_SECONDARY_KEYS"
description: |
  ABAPDERIVED_TYPES_SECONDARY_KEYS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPDERIVED_TYPES_SECONDARY_KEYS.htm"
abapFile: "ABAPDERIVED_TYPES_SECONDARY_KEYS.html"
keywords: ["insert", "delete", "loop", "if", "case", "method", "class", "data", "types", "internal-table", "ABAPDERIVED", "TYPES", "SECONDARY", "KEYS"]
---

BDEF derived types can include predefined and custom [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html).

The following topics are covered in this section:

[Internal tables](ABENINTERNAL_TABLE_GLOSRY.html) that are typed with [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html), that is, with [`TYPE TABLE FOR ...`](ABAPTYPE_TABLE_FOR.html), are [standard tables](ABENSTANDARD_TABLE_GLOSRY.html) with an empty [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html). However, most of these internal tables have predefined [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html). In this case, the secondary table keys are always non-unique [sorted keys](ABENSORTED_KEY_GLOSRY.html). The following secondary table keys are currently available:

The following source code demonstrates the secondary keys of an internal table type with `TYPE TABLE FOR CREATE` and [table expressions](ABENTABLE_EXPRESSION_GLOSRY.html).

You can execute the class `CL_DEMO_RAP_DSPLY_DER_TYPE_KS` to explore multiple BDEF derived types ([`TYPE TABLE FOR ...`](ABAPTYPE_TABLE_FOR.html)) and their keys.

The class makes use of three different RAP scenarios:

The example is based on dummy [BDEFs](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) and [behavior pools (ABP)](ABENBEHAVIOR_POOL_GLOSRY.html) that just serve the purpose of including many specifications to display a variety of BDEF derived types:

You can create your own secondary table keys for BDEF derived types. Such [BDEF secondary keys](ABENRAP_SECONDARY_KEY_GLOSRY.html) are declared in [RAP behavior definitions](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) (BDEF) as described [here](ABENBDL_DEFINE_KEY.html). They are used to define the signature of a [RAP key function](ABENRAP_KEY_FUNCTION_GLOSRY.html), and can be used in ABAP statements specifying secondary table keys. The keys are relevant for all BDEF derived types that include [`%data`](ABAPDERIVED_TYPES_DATA.html). For these, [secondary table indices](ABENSECONDARY_TABLE_INDEX_GLOSRY.html) are created. For other BDEF derived types, they are not created. Like the predefined secondary table keys, the custom keys are always non-unique sorted keys.

When using the secondary table keys with ABAP statements, for example, a loop across the result of an ABAP EML read request, it makes only sense to use them when the complete secondary table key was requested, i.e. when [`%control`](ABAPDERIVED_TYPES_CONTROL.html) was specified for all key components accordingly.

The following source code demonstrates the use of a BDEF secondary table key.

-   [RAP external numbering](ABENRAP_EXT_NUMBERING_GLOSRY.html) (non-draft and non-late numbering)
-   [Late numbering](ABENBDL_LATE_NUMBERING.html) (non-draft)
-   [Draft](ABENBDL_WITH_DRAFT.html)

-   Since variables cannot be declared with many of the BDEF derived types outside of the implementation class, the global class contains variables that are typed with various BDEF derived types. The methods `get_keys`, `get_keys_ln`, and `get_keys_dt` in the respective classes are responsible for providing the key tables.
-   The availability of secondary keys varies depending on the specification in the BDEF, for example, `draft` is only available for draft scenarios. `pid` is only available for late numbering scenarios.
-   *E* in the `KEY_KIND` field means empty key. *U* means user-defined key.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA create\_tab TYPE TABLE FOR CREATE demo\_managed\_root\_4. \\n\\ \\ncreate\_tab = VALUE #( %control-key\_field = if\_abap\_behv=>mk-on \\n %control-field1 = if\_abap\_behv=>mk-on \\n %control-field2 = if\_abap\_behv=>mk-on \\n %control-field3 = if\_abap\_behv=>mk-on \\n %control-field4 = if\_abap\_behv=>mk-on \\n ( %cid = 'cid1' \\n %key-key\_field = 1 \\n field1 = 'aaa' \\n field2 = 'bbb' \\n field3 = 11 \\n field4 = 111 ) \\n ( %cid = 'cid2' \\n %key-key\_field = 2 \\n field1 = 'ccc' \\n field2 = 'ddd' \\n field3 = 22 \\n field4 = 222 ) ). \\n\\ \\nFINAL(line1) = create\_tab\[ KEY cid COMPONENTS %cid = 'cid1' \\n %key-key\_field = 1 \]. \\n\\ \\nFINAL(line2) = create\_tab\[ KEY entity COMPONENTS %key-key\_field = 2 \]. \\n\\ \\nout->write( line1 ). \\nout->write( line2 ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDELETE FROM demo\_dbtab\_root. \\nINSERT demo\_dbtab\_root FROM TABLE @( VALUE #( \\n( key\_field = 1 data\_field = \`F\` char\_field = 'X' dec\_field = '0.2' ) \\n( key\_field = 2 data\_field = \`E\` char\_field = 'X' dec\_field = '0.5' ) \\n( key\_field = 3 data\_field = \`D\` char\_field = 'X' dec\_field = '0.1' ) \\n( key\_field = 4 data\_field = \`C\` char\_field = 'X' dec\_field = '0.2' ) \\n( key\_field = 5 data\_field = \`B\` char\_field = 'X' dec\_field = '0.6' ) \\n( key\_field = 6 data\_field = \`A\` char\_field = 'X' dec\_field = '0.4' ) \\n) ). \\n\\ \\nREAD ENTITY demo\_rap\_r\_m\_define\_key \\nALL FIELDS WITH VALUE #( \\n ( key\_field = 1 ) ( key\_field = 2 ) ( key\_field = 3 ) \\n ( key\_field = 4 ) ( key\_field = 5 ) ( key\_field = 6 ) ) \\n RESULT DATA(read\_result) \\n FAILED DATA(fr) \\n REPORTED DATA(rr). \\n\\ \\n"Using the BDEF secondary table key in an ABAP statement \\n"In the example, the BDEF secondary table key includes the components \\n"char\_field and dec\_field. key\_field which is of type i is added to \\n"an internal table to visualize the secondary table index. \\n\\ \\nDATA key\_tab TYPE TABLE OF i WITH EMPTY KEY. \\nLOOP AT read\_result INTO DATA(sec) USING KEY secondindex. \\n APPEND sec-key\_field TO key\_tab. \\nENDLOOP. \\n\\ \\nout->write( key\_tab ). \\n\\ \\nout->display( ). **Secondary Table Key** **Details**\\ `entity` The table key `entity` always includes the component [`%key`](ABAPDERIVED_TYPES_KEY.html) and is available in all BDEF derived types that have `%key` as a component. `cid` The table key `cid` includes the components [`%cid`](ABAPDERIVED_TYPES_CID.html) or [`%cid_ref`](ABAPDERIVED_TYPES_CID_REF.html). Depending on the BDEF derived type, the components can also include [`%key`](ABAPDERIVED_TYPES_KEY.html) and [`%pid`](ABAPDERIVED_TYPES_PID.html). `draft` The table key `draft` includes the component [`%is_draft`](ABAPDERIVED_TYPES_IS_DRAFT.html) and is only available in [draft](ABENBDL_WITH_DRAFT.html) scenarios. Depending on the BDEF derived type, the components can also include [`%pid`](ABAPDERIVED_TYPES_PID.html) and [`%key`](ABAPDERIVED_TYPES_KEY.html). `pid` Only available in the context of [late numbering](ABENRAP_LATE_NUMBERING_GLOSRY.html) scenarios. The table key `pid` includes the component [`%pid`](ABAPDERIVED_TYPES_PID.html). Depending on the BDEF derived type, the components can also include [`%tmp`](ABAPDERIVED_TYPES_TMP.html) and [`%key`](ABAPDERIVED_TYPES_KEY.html) `id` is available for this secondary table key. `id` It is an [alias name](ABENALIAS_GLOSRY.html) for either `entity`, `draft`, or `pid` depending on the context. If a BDEF derived type contains `entity` as secondary table key, and not `draft` or `pid`, then `id` is an alias for `entity`. If a BDEF derived type contains `pid` as secondary table key, no matter if `entity` is available or the context is a draft-enabled RAP BO, then `id` is an alias for `pid`. If a BDEF derived type contains `draft` as secondary table key, even if `entity` is available, then `id` is an alias for `draft`. \\
\\
**Note:** For *id* to be available, the [BDEF strict mode](ABENRAP_STRICT_MODE_GLOSRY.html)\\ *strict(2);* must be specified. **Scenario** **Data model** **BDEF** **ABP**\\ RAP external numbering Root entity: `DEMO_MANAGED_ROOT_TEST` \\
\\
Child entity: `DEMO_MANAGED_CHILD_TEST`\\ \\ `DEMO_MANAGED_ROOT_TEST` \\ `BP_DEMO_MANAGED_ROOT_TEST`\\ Late numbering Root entity: `DEMO_MANAGED_ROOT_TEST_LN` \\
\\
Child entity: `DEMO_MANAGED_CHILD_TEST_LN`\\ \\ `DEMO_MANAGED_ROOT_TEST_LN` \\ `BP_DEMO_MANAGED_ROOT_TEST_LN`\\ Draft Root entity: `DEMO_MANAGED_ROOT_TEST_DT` \\
\\
Child entity: `DEMO_MANAGED_CHILD_TEST_DT`\\ \\ `DEMO_MANAGED_ROOT_TEST_DT` \\ `BP_DEMO_MANAGED_ROOT_TEST_DT` abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html abapderived\_types\_comp.html