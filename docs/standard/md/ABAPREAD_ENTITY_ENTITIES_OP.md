---
title: "ABAPREAD_ENTITY_ENTITIES_OP"
description: |
  ABAPREAD_ENTITY_ENTITIES_OP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREAD_ENTITY_ENTITIES_OP.htm"
abapFile: "ABAPREAD_ENTITY_ENTITIES_OP.html"
keywords: ["select", "insert", "do", "if", "case", "try", "class", "data", "types", "internal-table", "ABAPREAD", "ENTITY", "ENTITIES"]
---

``... [[`field_spec`](ABAPREAD_ENTITY_ENTITIES_FIELDS.html)\ [`RESULT result_tab`](ABAPEML_RESULT.html)]\      [BY \\_assoc [`field_spec`](ABAPREAD_ENTITY_ENTITIES_FIELDS.html)\ \{\ \{[`RESULT result_tab`](ABAPEML_RESULT.html)\}\ |\ \{LINK link_tab\}\ \}\                             |\ \{[`RESULT result_tab`](ABAPEML_RESULT.html) LINK link_tab\}\ ]\      [EXECUTE function [`field_spec`](ABAPREAD_ENTITY_ENTITIES_FIELDS.html)\ [REQUEST request]\ [`RESULT result_tab`](ABAPEML_RESULT.html)\ ] ...``

[1. `... field_spec RESULT result_tab ...`](#ABAP_VARIANT_1@1@)

[2. `... BY \\_assoc field_spec RESULT result_tab LINK link ...`](#ABAP_VARIANT_2@1@)

[3. `... EXECUTE function field_spec [REQUEST request] RESULT result_tab ...`](#ABAP_VARIANT_3@1@)

The ABAP EML `READ` statement includes three kinds of operations:

All read operations require an internal table ([`field_spec`](ABAPREAD_ENTITY_ENTITIES_FIELDS.html)) as input parameter to specify, for example, whether all fields or only a specific set of fields should be read from RAP BO entities. Read operations always have a result, which is stored in an internal table ([`result_tab`](ABAPEML_RESULT.html)). Note that read-by-association operations must either have a read result or return the associated keys. They can also return both.

See further information and rules for using ABAP EML statements in implementations of the [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) and [consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) in the Development guide for the ABAP RESTful Application Programming Model, section [RAP Business Object Contract](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

Used to read directly from a RAP BO entity, either a [root](ABENROOT_ENTITY_GLOSRY.html) or [child entity](ABENCHILD_ENTITY_GLOSRY.html), with input parameters specified in [`field_spec`](ABAPREAD_ENTITY_ENTITIES_FIELDS.html).

The keyword `RESULT` is the only additional mandatory keyword. The internal table `result_tab` is used to store the result of the read operation. It must be typed with a [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) that depends on the read operation variant. See more details in the documentation for [`RESULT result_tab`](ABAPEML_RESULT.html).

The following source code section taken from `CL_DEMO_RAP_EML_READ_OPRTNS` demonstrates a `READ` operation directly from a RAP BO entity.

[`... LINK link_tab`](#ABAP_ONE_ADD@1@)

Used for read-by-association operations, that is, to read [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html) of associated entities via the keys of the [parent entity](ABENPARENT_ENTITY_GLOSRY.html). This includes associated [child entities](ABENCHILD_ENTITY_GLOSRY.html) that are part of the composition tree but also cross-BO entities that are not part of it. It is also possible to read parent entities via the child entities, however, only from within the implementation class. `_assoc` is the name of the association as specified in the underlying CDS view. As a prerequisite, child entities to be read from must be defined in the same BDEF. For read access to a cross-BO entity, it is a prerequisite that behavior is defined for it in another BDEF.

[`field _spec`](ABAPREAD_ENTITY_ENTITIES_FIELDS.html) is an internal table specifying the input parameters for the read-by-association operation. The internal table [`RESULT result_tab`](ABAPEML_RESULT.html) is used to store the result of the read operation. It must be typed with a [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) that depends on the read operation variant. The component [`%target`](ABAPDERIVED_TYPES_COMP.html) must be filled in the in the internal table `field_spec`.

The statement provides an additional target variable (`link_tab`) after the `LINK` keyword. `link_tab` is an internal table containing keys of the source (i. e. the parent, or the child respectively if instances are read from the parent via the child) and keys of the target (associated entity) as nested structures. `link_tab` must be typed with the BDEF derived type [`TYPE TABLE FOR READ LINK`](ABAPTYPE_TABLE_FOR.html).

The following source code section taken from `CL_DEMO_RAP_EML_READ_OPRTNS` demonstrates a read-by-association operation.

[`... REQUEST request`](#ABAP_ONE_ADD@2@)

The keyword `EXECUTE` triggers the calling of a [RAP function](ABENRAP_FUNCTION_GLOSRY.html) for a read-only operation. In both managed and unmanaged scenarios, the function must be user-implemented in a [behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html).

[`field _spec`](ABAPREAD_ENTITY_ENTITIES_FIELDS.html) is an internal table specifying the input parameters for the operation. The internal table `result_tab` is used to store the result of the read operation. It must be typed with a BDEF derived type that depends on the read operation variant. See more details in the documentation for [`RESULT result_tab`](ABAPEML_RESULT.html).

The consumption of [RAP key functions](ABENRAP_KEY_FUNCTION_GLOSRY.html) using ABAP EML `READ` statements works like consuming static [RAP functions](ABENRAP_FUNCTION_GLOSRY.html).

The following source code section taken from `CL_DEMO_RAP_EML_READ_OP_FUNC` demonstrates a read operation executing a function.

Used to specify whether the result should be returned completely or only parts of it (for example, only the keys) for the purpose of improving performance. `request` must be typed with the required [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html): `TYPE STRUCTURE FOR FUNCTION REQUEST`. The components of the structure are all key and data fields of the RAP BO entity. They are of type `ABP_BEHV_FLAG` and can be flagged whether to include the respective fields or not.

It is optional and can only be used for functions specified in the BDEF with the addition [`result selective`](ABENBDL_ACTION_OUTPUT_PARA.html). In the context of [RAP key functions](ABENRAP_KEY_FUNCTION_GLOSRY.html), the `REQUEST` addition can be specified even if there is no explicit specification in the BDEF regarding the result. In this case, the RAP key function is implicitly specified with `result selective [1] $self`.

-   [Read operations](ABENRAP_READ_OPERATION_GLOSRY.html): Read entities directly via key fields.
-   [Read-by-association operations](ABENRAP_RBA_OPERATION_GLOSRY.html): Read [child entities](ABENCHILD_ENTITY_GLOSRY.html) via key fields of the [parent entity](ABENPARENT_ENTITY_GLOSRY.html). It is also possible to read parent entities via the child entities, however, only from within the implementation class.
-   Execute functions: Carry out a user-defined read operation, for example, if parameters are required.

-   After the keyword `BY` for read-by-association operations, it is required to insert the backslash (`\\`) before the associations are displayed via the code completion.
-   In case of read-by-association operations, the explicit specification of the [`full_rba`](ABAPHANDLER_METH_READ.html) parameter is only possible for the dynamic form of the ABAP EML `READ` statement ([`READ ENTITIES OPERATIONS`](ABAPREAD_ENTITIES_OPERATIONS.html)). With the short form ([`READ ENTITY`](ABAPREAD_ENTITY_SHORT.html)) and long form ([`READ ENTITIES`](ABAPREAD_ENTITIES_LONG.html)), the explicit specification of the [`full_rba`](ABAPHANDLER_METH_READ.html) parameter is not possible. In these cases, the specification is irrelevant because it is anyway specified if the links ([`link_rba`](ABAPHANDLER_METH_READ.html) parameter) or the data are requested.

-   The example [`READ`: Operations and Field Selection](ABENEML_READ_OP_FIELDS_ABEXA.html) demonstrates several different variants of field selection with a simple managed RAP BO.
-   For more examples on `READ` operations in general, see [Examples for ABAP EML `READ`](ABAPEML_READ_EXAMPLES_ABEXAS.html).

READ ENTITY demo\_spfli\_flights \\n FROM VALUE #( \\n ( %key-Carrid = 'AZ' %key-Connid = 790 \\n %control = VALUE #( Airpfrom = if\_abap\_behv=>mk-on \\n Airpto = if\_abap\_behv=>mk-on \\n Cityfrom = if\_abap\_behv=>mk-on \\n Cityto = if\_abap\_behv=>mk-on \\n Countryfr = if\_abap\_behv=>mk-on \\n Countryto = if\_abap\_behv=>mk-on \\n Deptime = if\_abap\_behv=>mk-on \\n Arrtime = if\_abap\_behv=>mk-on \\n Distance = if\_abap\_behv=>mk-on \\n Fltime = if\_abap\_behv=>mk-on \\n ) ) ) \\n RESULT FINAL(read\_from) \\n FAILED FINAL(read\_failed). READ ENTITY demo\_spfli\_flights \\n BY \\\\\_Flights \\n ALL FIELDS WITH VALUE #( ( %key-Carrid = 'AA' \\n %key-Connid = 26 ) ) \\n RESULT FINAL(rba\_all\_fields\_with) \\n FAILED FINAL(read4\_failed). READ ENTITIES OF demo\_spfli\_flights \\n ENTITY demo\_spfli\_flights \\n EXECUTE FunctionResultEntity \\n FROM VALUE #( ( %tky-Carrid = 'AA' \\n %tky-Connid = 17 ) ) \\n RESULT FINAL(result) \\n FAILED FINAL(failed) \\n REPORTED FINAL(reported). abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html abapread\_entity\_entities.html