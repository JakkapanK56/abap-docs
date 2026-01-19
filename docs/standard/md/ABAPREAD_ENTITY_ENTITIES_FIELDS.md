---
title: "ABAPREAD_ENTITY_ENTITIES_FIELDS"
description: |
  ABAPREAD_ENTITY_ENTITIES_FIELDS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREAD_ENTITY_ENTITIES_FIELDS.htm"
abapFile: "ABAPREAD_ENTITY_ENTITIES_FIELDS.html"
keywords: ["select", "do", "if", "case", "try", "class", "data", "types", "internal-table", "ABAPREAD", "ENTITY", "ENTITIES", "FIELDS"]
---

``...  \{ FROM [`fields_tab`](ABAPEML_FIELDS_TAB.html)\ \}\     |\ \{ FIELDS ( comp1 comp2 ... ) WITH [`fields_tab`](ABAPEML_FIELDS_TAB.html)\ \}\     |\ \{ ALL FIELDS WITH [`fields_tab`](ABAPEML_FIELDS_TAB.html)\ \} ...``

[1. `... FROM fields_tab ...`](#ABAP_VARIANT_1@1@)

[2. `... FIELDS ( comp1 comp2 ... ) WITH fields_tab ...`](#ABAP_VARIANT_2@1@)

[3. `... ALL FIELDS WITH fields_tab ...`](#ABAP_VARIANT_3@1@)

The field specification expressions are used to specify input parameters on whose basis read operations can be performed for on [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html). All variants can be used for direct [read](ABENRAP_READ_OPERATION_GLOSRY.html) and [read-by-association operations](ABENRAP_RBA_OPERATION_GLOSRY.html). The variant `FROM` is the only option for read operations executing functions (using the keyword `EXECUTE`) in most cases.

The parameters that are taken into account for read operations must be specified in an internal table ([`fields_tab`](ABAPEML_FIELDS_TAB.html)). It is essential that the internal table is typed with the required [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html). Depending on the operation and the variant, the parameters of the internal table comprise [special components](ABAPDERIVED_TYPES_COMP.html).

The following table provides an overview on the operations, which field specification expressions are possible for the operations, and which type and components of the required internal table are relevant:

`bdef` is the root entity name, `_assoc` the name of the association defined in the underlying CDS view of the root entity, and `function` the name of a function specified in the BDEF. See the details on the components in the documentation for [Components of BDEF Derived Types](ABAPDERIVED_TYPES_COMP.html).

The read operation considers input parameters specified in an internal table ([`fields_tab`](ABAPEML_FIELDS_TAB.html)). It can be used for all operations.

The [`%control`](ABAPDERIVED_TYPES_COMP.html) structure must be filled explicitly in `fields_tab`.

The following source code section taken from `CL_DEMO_RAP_EML_READ_OP_FIELDS` shows the use of `FROM` with a `READ` operation. The `%control` structure shows that some fields are requested, some are not.

Fields to be returned by the read operation are specified in a field list in brackets after the keyword `FIELDS`. The input parameters for the read operation are specified in an internal table ([`fields_tab`](ABAPEML_FIELDS_TAB.html)). The fields (`comp1`, `comp2`, etc.) can be any of the entity's fields. Key fields can but need not be explicitly specified since they are read and returned by default even if not specified. At least one field must be specified in the field list. The fields are not separated by a comma. The order of the fields is irrelevant. However, the order of the columns, for example, of the read result table corresponds to the order in the database table.

The variant is a convenience variant and shortcut for `FROM`. `%control` is filled implicitly in `fields_tab`. The advantage of using the variant is that it provides static compiler checks and code completion. For example, static field attributes such as `readonly` and `mandatory` are respected.

The following source code section taken from `CL_DEMO_RAP_EML_READ_OP_FIELDS` shows the use of `FIELDS ... WITH` with a read-by-association operation.

The `FIELDS ( ... ) WITH` addition supports the setting of `%control` regarding components in [`deep` input parameters](ABENBDL_ACTION_INPUT_PARAM.html) in the context of deep [action](ABENRAP_ACTION_GLOSRY.html) and [function](ABENRAP_FUNCTION_GLOSRY.html) parameters. In this context, setting values of the `%control` structure is only possible if the [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) for a [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html) is defined with [`with hierarchy;`](ABENBDL_BDEF_ABSTRACT_HEADER.html) and the behavior for one or more of the nodes of the [CDS composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) is defined with [`define behavior for ... with control`](ABENBDL_DEFINE_BEH_ABSTRACT.html).

With the following syntax options, the setting of `%control` values (in [`%param`](ABAPDERIVED_TYPES_PARAM.html)) can be more detailed out for components of associated entities, for example, if only subcomponents of associated abstract entities are to be flagged and not the whole abstract entity itself:

In the following code snippets, `a` represents a field of the parent abstract entity, `_ent` represents an associated abstract entity. `b` represents a subcomponent contained in `_ent`. The example demonstrates the effect on the `%control` structures contained in `%param`:

... FIELDS ( a \_ent ) WITH ... \\n"%param-%control-a: flagged \\n"%param-%control-\_ent: flagged \\n"%param-\_ent-%control-b: not flagged \\n\\ \\n... FIELDS ( a \_ent ( b ) ) WITH ... \\n"%param-%control-a: flagged \\n"%param-%control-\_ent: not flagged \\n"%param-\_ent-%control-b: flagged \\n\\ \\n... FIELDS ( a \_ent +( b ) ) WITH ... \\n"%param-%control-a: flagged \\n"%param-%control-\_ent: flagged \\n"%param-\_ent-%control-b: flagged

See the class `CL_DEMO_RAP_EML_DEEP_PARA_FLDS` that visualizes these syntax options using an action.

All fields of an instance are read according to input parameters for the read operation specified in an internal table ([`fields_tab`](ABAPEML_FIELDS_TAB.html)).

The variant is a convenience variant and shortcut for `FROM`. It cannot be used for `EXECUTE`. `%control` is filled implicitly in `fields_tab`.

The following source code section taken from `CL_DEMO_RAP_EML_READ_OP_FIELDS` shows the use of `ALL FIELDS WITH` with a `READ` operation.

-   The read statement must be completed by specifying a [result](ABAPEML_RESULT.html) after `fields_tab`. Optionally, [`response_param`](ABAPEML_RESPONSE.html) can also be specified after `fields_tab`.
-   Depending on the context, the components listed in the **Components** column of the overview table might cover more than mentioned there. For example, the draft indicator `%is_draft` is available in case of drafts only. `%pid` is only available in late numbering scenarios.
-   In the internal table (`fields_tab`), all key fields must be specified, otherwise the read operation fails. In read-by-association operations, all key fields of an associated entity are returned by default.
-   The additions `FIELDS ( ... ) WITH` and [`SET FIELDS WITH`](ABAPMODIFY_ENTITY_ENTITIES_FIELDS.html) are only possible for read operations executing functions (using `EXECUTE`) if the function is defined with [`deep [table] parameter`](ABENBDL_ACTION_INPUT_PARAM.html) and without a [`selective`](ABENBDL_ACTION_OUTPUT_PARA.html) parameter in the BDEF.

-   An additional pair of parentheses following an associated abstract entity `_ent` containing components (e. g. `comp1`) denotes that `_ent` is not flagged itself but the subcomponents specified: `... FIELDS ( ... _ent ( comp1 comp2 ... ) ... ) WITH ...`
-   `+` before the additional pair of parentheses following an associated abstract entity `_ent` containing components (e. g. `comp1`) denotes that the specified subcomponents are flagged and the abstract entity `_ent` itself, too: `... FIELDS ( ... _ent +( comp1 comp2 ... ) ... ) WITH ...`

-   The example [`READ`: Field Specification Expressions](ABENEML_READ_OP_FIELDS_ABEXA.html) demonstrates several different variants of field specification expressions with a simple managed RAP BO.
-   For more examples on `READ` operations in general, see [Examples for ABAP EML `READ`](ABAPEML_READ_EXAMPLES_ABEXAS.html).

READ ENTITY demo\_spfli\_flights \\n FROM VALUE #( \\n ( %key-Carrid = 'AZ' \\n %key-Connid = 790 \\n %control = VALUE #( Airpfrom = if\_abap\_behv=>mk-on \\n Airpto = if\_abap\_behv=>mk-on \\n Cityfrom = if\_abap\_behv=>mk-on \\n Cityto = if\_abap\_behv=>mk-on \\n Countryfr = if\_abap\_behv=>mk-on \\n Countryto = if\_abap\_behv=>mk-on \\n Deptime = if\_abap\_behv=>mk-off \\n Arrtime = if\_abap\_behv=>mk-off \\n Distance = if\_abap\_behv=>mk-off \\n Fltime = if\_abap\_behv=>mk-on \\n ) ) ) \\n RESULT FINAL(read\_from) \\n FAILED FINAL(failed\_from). READ ENTITY demo\_spfli\_flights \\n BY \\\\\_Flights \\n FIELDS ( Carrid Connid Currency Price Planetype ) \\n WITH VALUE #( ( %key-Carrid = 'AA' \\n %key-Connid = 26 ) ) \\n RESULT FINAL(rba\_fields\_with) \\n FAILED FINAL(failed\_rba\_fields\_with). READ ENTITY demo\_spfli\_flights \\n BY \\\\\_Flights \\n ALL FIELDS WITH VALUE #( ( %key-Carrid = 'DL' \\n %key-Connid = 1699 ) ) \\n RESULT FINAL(rba\_all\_fields\_with) \\n FAILED FINAL(failed\_rba\_all\_fields\_with). **Operation** **Field Specification Expression** **Type of Internal Table`fields_tab`** **Components of Internal Table**\\ Direct read operation (for example, `READ ENTITY bdef FROM`) \\ `FROM` \\
`FIELDS (...) WITH` \\
`ALL FIELDS WITH` `TYPE TABLE FOR READ IMPORT bdef` \\ `%control` \\
`%key` \\
`%pky` \\
`%tky`\\ Read-by-association operation (`... BY \\_assoc ...`) \\ `FROM` \\
`FIELDS (...) WITH` \\
`ALL FIELDS WITH` \\ `TYPE TABLE FOR READ IMPORT bdef\\_assoc` `%control` \\
`%key` \\
`%pky` \\
`%tky`\\ Read operation executing a function (using the keyword `EXECUTE`) \\ `FROM` `TYPE TABLE FOR FUNCTION IMPORT bdef~function` `%key` \\
`%pky` \\
`%tky` abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html abapread\_entity\_entities.html abapread\_entity\_entities\_op.html