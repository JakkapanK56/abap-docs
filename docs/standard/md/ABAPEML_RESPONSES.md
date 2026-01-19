---
title: "ABAPEML_RESPONSES"
description: |
  ABAPEML_RESPONSES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEML_RESPONSES.htm"
abapFile: "ABAPEML_RESPONSES.html"
keywords: ["update", "delete", "do", "if", "case", "data", "types", "internal-table", "ABAPEML", "RESPONSES"]
---

`... [FAILED failed_resp]\      [MAPPED mapped_resp]\      [REPORTED reported_resp] ...`

Used for [RAP responses](ABENRAP_RESPONSE_GLOSRY.html) in the context of nondynamic (i. e. short or long) forms of ABAP EML statements such as [`MODIFY ENTITY`](ABAPMODIFY_ENTITY_SHORT.html) or [`MODIFY ENTITIES`](ABAPMODIFY_ENTITIES_LONG.html). All variants can be used together where possible. The operands `failed_resp`, `mapped_resp` and `reported_resp` after the respective ABAP word represent deep structures that must be typed with the [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html)\\ [`TYPE RESPONSE FOR`](ABAPTYPE_RESPONSE_FOR.html). These structures can be constructed inline using the declaration operators [`DATA`](ABENDATA_INLINE.html) and [`FINAL`](ABENFINAL_INLINE.html).

The deep structures contain one internal table as a nested component for each entity of the RAP BO. Therefore, all information on all entities of a RAP BO can be retrieved at once.

The nested internal tables are of type [`TYPE TABLE FOR`](ABAPTYPE_TABLE_FOR.html) (plus `EARLY` or `LATE` depending on the context) and comprise special components. The addition `EARLY` is the default, even if not explicitly specified. For example, if response parameters are explicitly declared with the type `TYPE RESPONSE FOR FAILED`, they automatically have the type `TYPE RESPONSE FOR FAILED EARLY`. The addition `LATE` is only possible if:

The following overview shows the variants of the structured data type, its purpose as well as the nested internal tables that are themselves typed with a BDEF derived type and their special components. See the details on the components in the documentation for [Components of Derived Types](ABAPDERIVED_TYPES_COMP.html).

See further information and rules on response parameters in implementations of the [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) in the Development Guide for the ABAP RESTful Application Programming Model, section [General RAP BO Implementation Contract](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/1040b81372d44ed38b07a409fa0e1769?version=sap_cross_product_abap).

-   [`late numbering`](ABENBDL_LATE_NUMBERING.html) is defined for a RAP BO.
-   the statement [`COMMIT ENTITIES RESPONSE OF`](ABAPEMLCOMMIT_ENTITIES_LONG.html) is used. The operands for storing the responses must be typed with the `LATE` addition.

-   The example [ABAP EML - Responses](ABENEML_RESPONSES_ABEXA.html) demonstrates the RAP response parameters using modify operations to change a simple managed RAP BO.

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
In case of a draft-enabled BO, the component `%is_draft` is available. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html abapcommon\_eml\_elements.html abapeml\_response.html