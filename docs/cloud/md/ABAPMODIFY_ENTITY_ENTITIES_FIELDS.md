---
title: "ABAPMODIFY_ENTITY_ENTITIES_FIELDS"
description: |
  ABAPMODIFY_ENTITY_ENTITIES_FIELDS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPMODIFY_ENTITY_ENTITIES_FIELDS.htm"
abapFile: "ABAPMODIFY_ENTITY_ENTITIES_FIELDS.html"
keywords: ["select", "update", "delete", "do", "if", "case", "class", "data", "types", "internal-table", "ABAPMODIFY", "ENTITY", "ENTITIES", "FIELDS"]
---

``...  \{ FROM [`fields_tab`](ABAPEML_FIELDS_TAB.html)\ \}\     |\ \{ AUTO FILL CID WITH [`fields_tab`](ABAPEML_FIELDS_TAB.html)\ \}\     |\ \{\ [AUTO FILL CID] FIELDS ( comp1 comp2 ... ) WITH [`fields_tab`](ABAPEML_FIELDS_TAB.html)\ \}\     |\ \{\ [AUTO FILL CID] SET FIELDS WITH [`fields_tab`](ABAPEML_FIELDS_TAB.html)\ \} ...``

[1. `... FROM fields_tab`](#ABAP_VARIANT_1@1@)

[2. `... AUTO FILL CID WITH fields_tab`](#ABAP_VARIANT_2@1@)

[3. `... [AUTO FILL CID] FIELDS ( comp1 comp2 ... ) WITH fields_tab`](#ABAP_VARIANT_3@1@)

[4. `... [AUTO FILL CID] SET FIELDS WITH fields_tab`](#ABAP_VARIANT_4@1@)

[`... AUTO FILL CID`](#ABAP_ONE_ADD@1@)

Field specification expressions define input parameters for modify operations on entity instances.

The `FIELDS (...) WITH` and `SET FIELDS WITH` variants can be used for operations that use the `CREATE`, `CREATE BY` and `UPDATE` ABAP EML statements. The `FROM` variant is the only option for `DELETE` and `EXECUTE` in most cases. The variants with `AUTO FILL CID` can be used for the operations `CREATE` and `CREATE BY`.

The parameters that are respected for modify operations must be specified in an internal table ([`fields_tab`](ABAPEML_FIELDS_TAB.html)). It is essential that the internal table is typed with the required [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html). Depending on the operation and the variant, the parameters of the internal table comprise [special components](ABAPDERIVED_TYPES_COMP.html).

The following table provides an overview of the operations, which field specification expressions are possible for the operations, and which type and components of the required internal table are relevant. Depending on the context, the components listed in the **Components** column might cover more than mentioned. For example, the draft indicator `%is_draft` is available in case of [draft](ABENBDL_WITH_DRAFT.html) scenarios only. `%pid` is only available in [`late numbering`](ABENBDL_LATE_NUMBERING.html) scenarios.

`bdef` is the root entity name, `_assoc` the name of the association defined in the underlying CDS view of the root entity, and `action` the name of an action specified in the BDEF. See the details on the components in the documentation for [Components of BDEF Derived Types](ABAPDERIVED_TYPES_COMP.html).

The modify operation respects input parameters specified in an internal table ([`fields_tab`](ABAPEML_FIELDS_TAB.html)). It can be used for all operations (`CREATE`, `CREATE BY`, `UPDATE`, `DELETE`, `EXECUTE`) and it is the only option for `DELETE` and `EXECUTE`. The [`%control`](ABAPDERIVED_TYPES_COMP.html) structure must be filled explicitly in the internal table `fields_tab` for `CREATE`, `CREATE BY` and `UPDATE`.

**Note**

The following source code section taken from `CL_DEMO_RAP_EML_MODIFY_OPRTNS` demonstrates the keyword `FROM` within a `MODIFY` statement.

It is basically the variant `... FROM fields_tab` using the addition `AUTO FILL CID`. In this case, the keyword `WITH` must be used before `fields_tab` instead of `FROM`. The [`%control`](ABAPDERIVED_TYPES_COMP.html) structure must be filled explicitly in the internal table `fields_tab`. The variant can be used for `CREATE` and `CREATE BY`. See the details on `AUTO FILL CID` further down.

The following source code section taken from `CL_DEMO_RAP_EML_AUTO_FILL_CID` demonstrates the use of `AUTO FILL CID WITH` with a create operation as part of an ABAP EML `MODIFY` statement.

Using this variant, you specify the fields that should be respected by a [RAP BO operation](ABENRAP_BO_OPERATION_GLOSRY.html) in a field list in parentheses after the keyword `FIELDS`. For example, you specify the fields of [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html) that should be updated. The input parameters are specified in an internal table ([`fields_tab`](ABAPEML_FIELDS_TAB.html)). The fields (`comp1`, `comp2`, etc.) can be any of the entity's fields. At least one field must be specified in the field list. The fields are not separated by a comma. The order of the fields provided in this list is irrelevant.

The variant is a convenience variant and a shortcut for `FROM`. It cannot be used for `DELETE` and `EXECUTE`. `%control` is filled implicitly in `fields_tab`. If a field is specified within the brackets of `FIELDS (...) WITH`, it is set to the hexadecimal value *01* in the `%control` structure. Otherwise, it is set to the hexadecimal value *00*.

**Note**

The following source code demonstrates the implicit setting of the `%control` structure component values using `FIELDS (...) WITH` within `MODIFY` statements.

First, an internal table typed with a [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) is created and filled. This table is used to create a [RAP BO instance](ABENRAP_BO_INSTANCE_GLOSRY.html) in the context of a [RAP create operation](ABENRAP_CREATE_OPERATION_GLOSRY.html). All data fields are specified within the parentheses of the `FIELDS (...) WITH` addition as part of an ABAP EML `MODIFY` statement. As a next step, the internal table is filled with other values followed by another ABAP EML `MODIFY` statement. Here, the fields specified within the parentheses of `FIELDS (...) WITH` purposely do not include all fields.

The outcome shows the effect of the field specification and the implicit setting of the `%control` structure. Before the ABAP EML modify request, all hexadecimal values of the input table are *00*. For the first ABAP EML modify request in which all fields are specified, all values in the `%control` structure are set to *01*. For the second ABAP EML modify request, only those components in the `%control` structure are set to the hexadecimal value *01* that are specified within the parentheses of the `FIELDS (...) WITH` addition. Consequently, despite specifying values in the input table, these fields have their initial value in the created instance.

The following source code section taken from `CL_DEMO_RAP_EML_MODIFY_OPRTNS` demonstrates the keywords `FIELDS (...) WITH` within a `MODIFY` statement.

The `FIELDS ( ... ) WITH` addition supports the setting of `%control` regarding components in [`deep` input parameters](ABENBDL_ACTION_INPUT_PARAM.html) in the context of deep [action](ABENRAP_ACTION_GLOSRY.html) and [function](ABENRAP_FUNCTION_GLOSRY.html) parameters. In this context, setting values of the `%control` structure is only possible if the [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) for a [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html) is defined with [`with hierarchy;`](ABENBDL_BDEF_ABSTRACT_HEADER.html) and the behavior for one or more of the nodes of the [CDS composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) is defined with [`define behavior for ... with control`](ABENBDL_DEFINE_BEH_ABSTRACT.html).

With the following syntax options, the setting of `%control` values (in [`%param`](ABAPDERIVED_TYPES_PARAM.html)) can be more detailed out for components of associated entities, for example, if only subcomponents of associated abstract entities are to be flagged and not the whole abstract entity itself:

In the following code snippets, `a` represents a field of the parent abstract entity, `_ent` represents an associated abstract entity. `b` represents a subcomponent contained in `_ent`. The example demonstrates the effect on the `%control` structures contained in `%param`:

... FIELDS ( a \_ent ) WITH ... \\n"%param-%control-a: flagged \\n"%param-%control-\_ent: flagged \\n"%param-\_ent-%control-b: not flagged \\n\\ \\n... FIELDS ( a \_ent ( b ) ) WITH ... \\n"%param-%control-a: flagged \\n"%param-%control-\_ent: not flagged \\n"%param-\_ent-%control-b: flagged \\n\\ \\n... FIELDS ( a \_ent +( b ) ) WITH ... \\n"%param-%control-a: flagged \\n"%param-%control-\_ent: flagged \\n"%param-\_ent-%control-b: flagged

See the class `CL_DEMO_RAP_EML_DEEP_PARA_FLDS` that visualizes these syntax options using an action.

It is a convenience variant and shortcut for `FROM`. The modify operation respects input parameters specified in an internal table ([`fields_tab`](ABAPEML_FIELDS_TAB.html)).

**Using this variant is not recommended** for the following reasons:

The variant cannot be used for `DELETE` and `EXECUTE`. `%control` is filled implicitly in `fields_tab`. If a field is specified in `fields_tab`, it is set to the hexadecimal value *01* in the `%control` structure. Otherwise, it is set to the hexadecimal value *00*.

**Note**

The following source code section taken from `CL_DEMO_RAP_EML_MODIFY_OPRTNS` demonstrates the keywords `SET FIELDS WITH` within an ABAP EML `MODIFY` statement.

The addition `AUTO FILL CID` can be specified to automatically fill [`%cid`](ABAPDERIVED_TYPES_COMP.html) in the following contexts:

Specifying `%cid` should be done even if the [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) is not interested. Especially in the context of [`early numbering`](ABENBDL_EARLY_NUMB.html) and [`late numbering`](ABENBDL_LATE_NUMBERING.html) scenarios, `%cid` must be specified to avoid issues.

If the addition is specified and `%cid` is initial, `%cid` gets automatically filled with dummy values that have the prefix `%ABAP_EML_CID__`. This prefix is followed by numbers, for example, `%ABAP_EML_CID__1`, `%ABAP_EML_CID__2`, and so on. If the addition is specified and `%cid` is specified manually, too, only the manually specified value for `%cid` is valid.

If `%cid_ref` is to be used, `%cid` must be specified manually since `%cid_ref` cannot refer to an automatically created value.

If `AUTO FILL CID` is used, `%cid` must not be filled with a value prefixed by `%ABAP_EML_CID__` in capital letters. Otherwise, the runtime error `BEHAVIOR_RESERVED_PREFIX` occurs.

The following source code (see more examples here: `CL_DEMO_RAP_EML_AUTO_FILL_CID`) demonstrates the use of `AUTO FILL CID` and `FIELDS ( ... ) WITH` with a create-by-association operation as part of an ABAP EML `MODIFY` statement.

-   In case of operations for which `%cid_ref` can be specified in the internal table, the mandatory specification of the keys in the internal table can be omitted if a clear reference to the instance that is to be modified is given using `%cid_ref`.
-   In case of create and create-by-association operations, `%cid` should be specified even if the [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) is not interested in `%cid`.
-   The additions `FIELDS ( ... ) WITH` and `SET FIELDS WITH` are only possible for modify operations executing actions (using `EXECUTE`) if the action is defined with [`deep [table] parameter`](ABENBDL_ACTION_INPUT_PARAM.html) and without a [`selective`](ABENBDL_ACTION_OUTPUT_PARA.html) parameter in the BDEF.

-   Due to the explicit filling of the `%control` structure, more lines of code are necessary compared with the variants `FIELDS (...) WITH` and `SET FIELDS WITH`.
-   A syntax check on static read-only fields is not possible with this variant (in contrast to `FIELDS (...) WITH`).
-   Fields can be set to initial values.

-   A syntax check on static read-only fields is possible with this variant when specifying the fields within the parentheses of `FIELDS (...) WITH`.
-   Fields can be set to initial values.
-   If the key is not specified within the parentheses, the initial value for the key is used for the operation (even if a concrete value for the key is specified in the BDEF derived type). The initial value for the key is also used if the key is specified within the parentheses but a concrete value is not specified in the BDEF derived type.

-   An additional pair of parentheses following an associated abstract entity `_ent` containing components (e. g. `comp1`) denotes that `_ent` is not flagged itself but the subcomponents specified: `... FIELDS ( ... _ent ( comp1 comp2 ... ) ... ) WITH ...`
-   `+` before the additional pair of parentheses following an associated abstract entity `_ent` containing components (e. g. `comp1`) denotes that the specified subcomponents are flagged and the abstract entity `_ent` itself, too: `... FIELDS ( ... _ent +( comp1 comp2 ... ) ... ) WITH ...`

-   The variant is very slow if the input is very large. Hence, using it leads to a syntax warning that can be removed by the pragma `##SETFIELDS_OK`. Note that the syntax warning does not come up if the internal table following `SET FIELDS WITH` is specified using a [constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html) with the [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html).
-   A syntax check on static read-only fields is not possible with this variant (in contrast to `FIELDS (...) WITH`).
-   Fields **cannot** be set to initial values.

-   A syntax check on static read-only fields is not possible with this variant (in contrast to `FIELDS (...) WITH`).
-   Fields **cannot** be set to initial values.

-   Create operations (`MODIFY ... CREATE AUTO FILL CID ...`)
-   Create-by-association operations (`MODIFY ... CREATE BY \\assoc AUTO FILL CID ...`)
-   [Factory actions](ABENBDL_ACTION.html) (`MODIFY ... EXECUTE action AUTO FILL CID ...`)
-   [Repeatable actions](ABENRAP_REPEATABLE_ACTION_GLOSRY.html)

-   The example [`MODIFY`: Field Specification Expressions](ABENEML_MODIFY_OP_FIELDS_ABEXA.html) demonstrates the variants of field selection when setting up internal tables for different modify statements and hence the manipulation of a simple managed RAP BO.
-   The class `CL_DEMO_RAP_EML_AUTO_FILL_CID` demonstrates create and create-by-association operations with manually specified `%cid` components and automatically created ones using `AUTO FILL CID`. The output shows the [`MAPPED` responses](ABAPEML_RESPONSE.html) of the operations as well as the instances that are persisted to the database following [`COMMIT ENTITIES`](ABAPCOMMIT_ENTITIES.html) statements.
-   For more examples on `MODIFY` operations in general, see [Examples for ABAP EML `MODIFY`](ABAPEML_MODIFY_EXAMPLES_ABEXAS.html).

MODIFY ENTITY demo\_managed\_root \\n CREATE FROM VALUE #( \\n ( %cid = 'cid1' \\n key\_field = 1 \\n %control-key\_field = if\_abap\_behv=>mk-on \\n data\_field1\_root = 'aaa' \\n %control-data\_field1\_root = if\_abap\_behv=>mk-on \\n data\_field2\_root = 'bbb' \\n %control-data\_field2\_root = if\_abap\_behv=>mk-on ) \\n ( %cid = 'cid2' \\n key\_field = 2 \\n %control-key\_field = if\_abap\_behv=>mk-on \\n data\_field1\_root = 'ccc' \\n %control-data\_field1\_root = if\_abap\_behv=>mk-on \\n data\_field2\_root = 'ddd' \\n %control-data\_field2\_root = if\_abap\_behv=>mk-on ) \\n ( %cid = 'cid3' \\n key\_field = 3 \\n %control-key\_field = if\_abap\_behv=>mk-on \\n data\_field1\_root = 'eee' \\n %control-data\_field1\_root = if\_abap\_behv=>mk-on \\n data\_field2\_root = 'fff' \\n %control-data\_field2\_root = if\_abap\_behv=>mk-on ) \\n ( %cid = 'cid4' \\n key\_field = 4 \\n %control-key\_field = if\_abap\_behv=>mk-on \\n data\_field1\_root = 'ggg' \\n %control-data\_field1\_root = if\_abap\_behv=>mk-on \\n data\_field2\_root = 'hhh' \\n %control-data\_field2\_root = if\_abap\_behv=>mk-on ) \\n ) \\n CREATE BY \\\\\_child FROM VALUE #( \\n ( %cid\_ref = 'cid1' \\n %target = VALUE #( \\n ( %cid = 'cid5' \\n data\_field1\_child = 'zzz' \\n %control-data\_field1\_child = if\_abap\_behv=>mk-on \\n data\_field2\_child = 'yyy' \\n %control-data\_field2\_child = if\_abap\_behv=>mk-on ) \\n ) ) \\n ( %cid\_ref = 'cid2' \\n %target = VALUE #( \\n ( %cid = 'cid6' \\n data\_field1\_child = 'xxx' \\n %control-data\_field1\_child = if\_abap\_behv=>mk-on \\n data\_field2\_child = 'www' \\n %control-data\_field2\_child = if\_abap\_behv=>mk-on ) \\n ) ) \\n ) \\n UPDATE FROM VALUE #( \\n ( %cid\_ref = 'cid3' \\n data\_field1\_root = 'iii' \\n %control-data\_field1\_root = if\_abap\_behv=>mk-on \\n data\_field2\_root = 'jjj' \\n %control-data\_field2\_root = if\_abap\_behv=>mk-on ) \\n ) \\n DELETE FROM VALUE #( ( %cid\_ref = 'cid4' ) ) \\n FAILED FINAL(failed) \\n REPORTED FINAL(reported). MODIFY ENTITY demo\_managed\_root\_4 \\n CREATE AUTO FILL CID WITH VALUE #( \\n ( key\_field = 3 \\n %control-key\_field = if\_abap\_behv=>mk-on \\n field1 = 'create\_5' \\n %control-field1 = if\_abap\_behv=>mk-on \\n field2 = 'create\_6' \\n %control-field2 = if\_abap\_behv=>mk-on \\n field3 = 5 \\n %control-field3 = if\_abap\_behv=>mk-on \\n field4 = 6 \\n %control-field4 = if\_abap\_behv=>mk-on ) \\n ( key\_field = 4 \\n %control-key\_field = if\_abap\_behv=>mk-on \\n field1 = 'create\_7' \\n %control-field1 = if\_abap\_behv=>mk-on \\n field2 = 'create\_8' \\n %control-field2 = if\_abap\_behv=>mk-on \\n field3 = 7 \\n %control-field3 = if\_abap\_behv=>mk-on \\n field4 = 8 \\n %control-field4 = if\_abap\_behv=>mk-on ) \\n ) \\n MAPPED FINAL(mapped\_auto\_cid\_root). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDELETE FROM demo\_tab\_root\_3. \\n\\ \\nDATA input TYPE TABLE FOR CREATE demo\_managed\_root\_4. \\ninput = VALUE #( ( key\_field = 1 field1 = 'a' field2 = 'a' field3 = 1 \\n field4 = 1 ) ). \\n\\ \\nout->write( input ). \\n\\ \\nMODIFY ENTITY demo\_managed\_root\_4 \\n CREATE FIELDS ( key\_field field1 field2 field3 field4 ) WITH input. \\n\\ \\nout->write( input ). \\n\\ \\ninput = VALUE #( ( key\_field = 2 field1 = 'b' field2 = 'b' field3 = 2 \\n field4 = 2 ) ). \\n\\ \\nMODIFY ENTITY demo\_managed\_root\_4 \\n CREATE FIELDS ( key\_field field1 field4 ) WITH input. \\n\\ \\nout->write( input ). \\n\\ \\nCOMMIT ENTITIES. \\n\\ \\nSELECT \* FROM demo\_tab\_root\_3 INTO TABLE @FINAL(itab). \\nout->write( itab ). \\n\\ \\nout->display( ). MODIFY ENTITY demo\_managed\_root \\n CREATE FIELDS ( key\_field data\_field1\_root \\n data\_field2\_root ) \\n WITH VALUE #( \\n ( %cid = 'cid7' \\n key\_field = 5 \\n data\_field1\_root = 'kkk' \\n data\_field2\_root = 'lll' ) \\n ( %cid = 'cid8' \\n key\_field = 6 \\n data\_field1\_root = 'mmm' \\n data\_field2\_root = 'nnn' ) \\n ) \\n CREATE BY \\\\\_child FIELDS ( data\_field1\_child \\n data\_field2\_child ) \\n WITH VALUE #( \\n ( %cid\_ref = 'cid8' \\n %target = VALUE #( ( %cid = 'cid9' \\n data\_field1\_child = 'vvv' \\n data\_field2\_child = 'uuu' ) \\n ) ) \\n ) \\n UPDATE FIELDS ( data\_field1\_root \\n data\_field2\_root ) \\n WITH VALUE #( \\n ( %cid\_ref = 'cid7' \\n data\_field1\_root = 'ooo' \\n data\_field2\_root = 'ppp' ) \\n ) \\n FAILED FINAL(failed) \\n REPORTED FINAL(reported). MODIFY ENTITY demo\_managed\_root \\n CREATE SET FIELDS ##SETFIELDS\_OK \\n WITH VALUE #( \\n ( %cid = 'cid10' \\n key\_field = 7 \\n data\_field1\_root = 'qqq' \\n data\_field2\_root = 'rrr' ) \\n ( %cid = 'cid11' \\n key\_field = 8 \\n data\_field1\_root = 'sss' \\n data\_field2\_root = 'ttt' ) \\n ) \\n CREATE BY \\\\\_child SET FIELDS WITH VALUE #( \\n ( %cid\_ref = 'cid10' \\n %target = VALUE #( ( %cid = 'cid12' \\n data\_field1\_child = 'ttt' \\n data\_field2\_child = 'sss' ) \\n ) ) \\n ( %cid\_ref = 'cid11' \\n %target = VALUE #( ( %cid = 'cid13' \\n data\_field1\_child = 'rrr' \\n data\_field2\_child = 'qqq' ) \\n ) ) \\n ) \\n UPDATE SET FIELDS WITH VALUE #( \\n ( %cid\_ref = 'cid11' \\n data\_field1\_root = 'uuu' \\n data\_field2\_root = 'vvv' ) \\n ) \\n FAILED FINAL(failed) \\n REPORTED FINAL(reported). MODIFY ENTITY demo\_managed\_root\_4 \\n CREATE BY \\\\\_child AUTO FILL CID \\n FIELDS ( key\_field\_child field1 field2 field3 field4 ) \\n WITH VALUE #( \\n ( key\_field = 3 \\n %target = VALUE #( \\n ( key\_field\_child = 3 \\n field1 = 'cba\_5' \\n field2 = 'cba\_6' \\n field3 = 5 \\n field4 = 6 ) \\n ) ) \\n ( key\_field = 4 \\n %target = VALUE #( \\n ( key\_field\_child = 4 \\n field1 = 'cba\_7' \\n field2 = 'cba\_8' \\n field3 = 7 \\n field4 = 8 ) \\n ) ) ) \\n MAPPED FINAL(mapped\_auto\_cid\_child). **Operation** **Field Specification Expression** **Type of Internal Table `fields_tab`** **Components of Internal Table**\\ `CREATE` \\ `FROM` \\
`AUTO FILL CID WITH` \\
`FIELDS (...) WITH` \\
`SET FIELDS WITH` `TABLE FOR CREATE bdef` \\ `%cid` \\
`%control` \\
`%data` \\
`%key` \\
\\
**Note:** In case of *FROM* and *AUTO FILL CID WITH*, *%control* must be filled explicitly. `CREATE BY _assoc` \\ `FROM` \\
`AUTO FILL CID WITH` \\
`FIELDS (...) WITH` \\
`SET FIELDS WITH` \\ `TABLE FOR CREATE bdef\\_assoc` `%cid_ref` \\
`%key` \\
`%pky` \\
`%target` \\
`%tky` \\
\\
**Note:** In case of *FROM* and *AUTO FILL CID WITH*, *%control* must be filled explicitly within *%target*. `UPDATE` \\ `FROM` \\
`FIELDS (...) WITH` \\
`SET FIELDS WITH` `TABLE FOR UPDATE bdef` \\ `%cid_ref` \\
`%control` \\
`%data` \\
`%key` \\
`%pky` \\
`%tky` \\
\\
**Note:** In case of *FROM*, *%control* must be filled explicitly. `DELETE` \\ `FROM`\\ `TABLE FOR DELETE bdef` \\ `%cid_ref` \\
`%key` \\
`%pky` \\
`%tky`\\ `EXECUTE` \\ `FROM`\\ `TABLE FOR ACTION IMPORT bdef~action` \\ `%cid_ref` \\
`%key` \\
`%param` \\
`%pky` \\
`%tky` abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html abapmodify\_entity\_entities.html abapmodify\_entity\_entities\_op.html