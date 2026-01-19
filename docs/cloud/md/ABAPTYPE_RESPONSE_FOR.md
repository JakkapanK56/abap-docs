---
title: "ABAPTYPE_RESPONSE_FOR"
description: |
  ABAPTYPE_RESPONSE_FOR - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPTYPE_RESPONSE_FOR.htm"
abapFile: "ABAPTYPE_RESPONSE_FOR.html"
keywords: ["update", "delete", "do", "if", "case", "try", "method", "data", "types", "internal-table", "ABAPTYPE", "RESPONSE", "FOR"]
---

`... RESPONSE FOR \{ FAILED                   | MAPPED                   | REPORTED                     \{\ [EARLY | LATE]\ \}\                     bdef \} ...`

[BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) used for [RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html) and operands of [ABAP EML statements](ABENEML.html) for the purpose of providing or storing [RAP responses](ABENRAP_RESPONSE_GLOSRY.html).

The BDEF derived types with `TYPE RESPONSE FOR ...` are basically [deep structures](ABENDEEP_STRUCTURE_GLOSRY.html) containing one internal table as nested component for each entity of the RAP BO. Therefore, all information on all entities of a RAP BO can be provided and retrieved at once. `bdef` stands for the source name of a [RAP BO root entity](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html). The addition `EARLY` applies to responses from within the [RAP interaction phase](ABENRAP_INT_PHASE_GLOSRY.html); the addition `LATE` applies to responses in the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html).

**Where Used**

**Details on the Syntax**

The nested internal tables are of type [`TYPE TABLE FOR`](ABAPTYPE_TABLE_FOR.html) (plus `EARLY` or `LATE` depending on the context) and comprise special components. The addition `EARLY` is the default, even if not explicitly specified. For example, if response parameters are explicitly declared with the type `TYPE RESPONSE FOR FAILED`, they automatically have the type `TYPE RESPONSE FOR FAILED EARLY`. The addition `LATE` is only possible if:

The following overview shows the variants of the structured data type, its purpose as well as the nested internal tables that are themselves typed with a BDEF derived type and their special components. See the details on the components in the documentation for [Components of Derived Types](ABAPDERIVED_TYPES_COMP.html).

The following image shows the *Variables* tab in the debug mode of [ADT](ABENADT_GLOSRY.html). The variables `ls_report`, `ls_map` and `ls_fail` are typed with the structured data type `TYPE RESPONSE FOR`. Once expanded, the nested internal tables for each of the entities contained in the [composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) of `DEMO_MANAGED_ROOT` are displayed. In this case, there are entries for one entity available. See the context of the image in the executable example [ABAP EML - `TYPE RESPONSE FOR`](ABENEML_RESPONSES_2_ABEXA.html) that demonstrates the response parameters.

See further information and rules on response parameters in implementations of the [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) in the Development guide for the ABAP RESTful Application Programming Model, section [General RAP BO Implementation Contract](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/1040b81372d44ed38b07a409fa0e1769?version=sap_cross_product_abap).

-   The three predefined [formal parameters](ABENFORMAL_PARAMETER_GLOSRY.html) of [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) and [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html)\\ `mapped`, `failed` and `reported` - whose names are also reflected in the syntax here - are typed with these BDEF derived types.
-   In [ABAP behavior pools](ABENBEHAVIOR_POOL_GLOSRY.html), the parameters of the said methods typed with this BDEF derived type are implicitly available. The following images show the F2 help information in [ADT](ABENADT_GLOSRY.html) for a RAP handler method for which the response parameters have not been explicitly specified:
-   `METHODS create FOR MODIFY IMPORTING entities FOR CREATE demo_unmanaged_root_2.`
-   F2 help information in ADT:

-   The operands following the `MAPPED`, `FAILED` and `REPORTED` additions of nondynamic forms of [ABAP EML statements](ABENEML.html) are typed with these BDEF derived types. **Note:** The operands following these additions in dynamic ABAP EML statements are internal tables of type `ABP_BEHV_RESPONSE_TAB`, see [here](ABAPEML_RESPONSES_DYN.html). The operands store the RAP responses when an ABAP EML statement triggers the calling of a method in the behavior pool. One example is the internally created data object `f_resp` in the statement `MODIFY ENTITY ... FROM ... FAILED FINAL(f_resp) ...`.
-   In ABAP programs, these BDEF derived types can also be used to declare data objects and types, for example, as follows:
-   `DATA f TYPE RESPONSE FOR FAILED demo_managed_root. \ TYPES r TYPE RESPONSE FOR REPORTED demo_managed_root. \ DATA m TYPE RESPONSE FOR MAPPED demo_managed_root.`

-   [`late numbering`](ABENBDL_LATE_NUMBERING.html) is defined for a RAP BO.
-   the statement [`COMMIT ENTITIES RESPONSE OF`](ABAPEMLCOMMIT_ENTITIES_LONG.html) is used. The operands for storing the responses must be typed with the `LATE` addition.

-   The example [ABAP EML - `TYPE RESPONSE FOR`](ABENEML_RESPONSES_2_ABEXA.html) demonstrates the response parameters with a simple managed RAP BO. To show content for the responses, errors are intentionally produced in the context of an ABAP EML `MODIFY` statement trying to create new instances.
-   The example [ABAP EML - Responses](ABENEML_RESPONSES_ABEXA.html) demonstrates the response parameters using modify operations to change a simple managed RAP BO.

**Types of Response Structures** **Purpose** **Types of Nested Internal Tables** \\ [Components of Nested Internal Tables](ABAPDERIVED_TYPES_COMP.html)\\ `TYPE RESPONSE FOR FAILED` \\
`TYPE RESPONSE FOR FAILED EARLY` \\
`TYPE RESPONSE FOR FAILED LATE` Used for logging instances for which an operation has failed during the interaction phase. If the addition `LATE` is used, the logs are provided during the save phase. Depending on the structured data type used, the nested internal tables are of the following types: \\
`TYPE TABLE FOR FAILED` \\
`TYPE TABLE FOR FAILED EARLY` \\
`TYPE TABLE FOR FAILED LATE`\\ \\
`%action` \\
`%assoc` \\
`%cid` \\
`%create` \\
`%delete` \\
`%fail` \\
`%key` \\
`%op` \\
`%pky` \\
`%tky` \\
`%update` \\
\\
In case of a table typed with the addition `LATE`, `%cid` is not available. \\
If `late numbering` is defined for a BO, the component `%pid` is available. \\
In case of a [draft-enabled BO](ABENDRAFT_RAP_BO_GLOSRY.html), the component `%is_draft` is available. `TYPE RESPONSE FOR MAPPED` \\
`TYPE RESPONSE FOR MAPPED EARLY` \\
`TYPE RESPONSE FOR MAPPED LATE`\\ For modify operations, internal tables are returned that map the key values of created instances to the provided content IDs (`%cid`). All subsequent operations must use the mapped keys. \\
The mapping information is available in the interaction phase by default. `%cid` is then mapped to the real key or to `%pid`. The addition `LATE` specifies that the mapping information is available only when saving. In the save phase, `%pid` is mapped to the real key. Depending on the structured data type used, the nested internal tables are of the following types: \\
`TYPE TABLE FOR MAPPED` \\
`TYPE TABLE FOR MAPPED EARLY` \\
`TYPE TABLE FOR MAPPED LATE`\\ Components of a table typed without an addition or with the addition `EARLY`: \\
`%cid` \\
`%key` \\
`%pky` \\
`%tky`\\
\\
Components of a table typed with the addition `LATE`: \\
`%key` \\
`%pre` \\
`%tmp` \\
\\
If `late numbering` is defined for a BO, the component `%pid` is available for all additions. \\
In case of a draft-enabled BO, the component `%is_draft` is only available for `EARLY`. `TYPE RESPONSE FOR REPORTED` \\
`TYPE RESPONSE FOR REPORTED EARLY` \\
`TYPE RESPONSE FOR REPORTED LATE`\\ Used for returning messages on specific instances, for example, for which failures occurred during the interaction phase. If the addition `LATE` is used, the messages are provided during the save phase. Depending on the structured data type used, the nested internal tables are of the following types: \\
`TYPE TABLE FOR REPORTED` \\
`TYPE TABLE FOR REPORTED EARLY` \\
`TYPE TABLE FOR REPORTED LATE`\\ `%cid` \\
`%element` \\
`%global` \\
`%key` \\
`%msg` \\
`%pky` \\
`%state_area` \\
`%tky` \\
\\
In case of a table typed with the addition `LATE`, `%cid` is not available. \\
If `late numbering` is defined for a BO, the component `%pid` is available. \\
In case of a draft-enabled BO, the component `%is_draft` is available. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html