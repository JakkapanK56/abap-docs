---
title: "ABAPDERIVED_TYPES_PID"
description: |
  ABAPDERIVED_TYPES_PID - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDERIVED_TYPES_PID.htm"
abapFile: "ABAPDERIVED_TYPES_PID.html"
keywords: ["insert", "delete", "loop", "do", "while", "if", "case", "try", "catch", "method", "class", "data", "types", "ABAPDERIVED", "TYPES", "PID"]
---

`%pid` is a component of [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html) and of type `ABP_BEHV_PID`. It is used as a preliminary ID for [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html) and only available if [late numbering](ABENBDL_LATE_NUMBERING.html) is defined in the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). In the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html), `%pid` is transformed to the final key values.

Regarding `%pid` in the ...

Regarding the RAP BO instance identification in late numbering scenarios:

**Where used**

[Using Keys and Identifying RAP BO Instances in a Nutshell](ABAPDERIVED_TYPES_KEYS_IDENTIFIERS.html)

The following source code section taken from the `BP_DEMO_UMANAGED_ROOT_LATE_NUMCCIMP` of the global class of the [behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) `BP_DEMO_UMANAGED_ROOT_LATE_NUM` demonstrates the component `%pid` in the context of a `create` method that is responsible for creating `%pid` and mapping it to [`%cid`](ABAPDERIVED_TYPES_CID.html) in an unmanaged scenario. See the executable program for this example in the topic [Using `%pid`](ABENDERIVED_TYPES_PID_ABEXA.html).

-   [RAP interaction phase](ABENRAP_INT_PHASE_GLOSRY.html):

-   `%pid` is assigned as a temporary identifier for [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html) in the [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) for [create operations](ABAPMODIFY_ENTITY_ENTITIES_OP.html).
-   In these methods, [`%cid`](ABAPDERIVED_TYPES_CID.html) must be mapped to `%pid` in the [RAP response parameter](ABENRAP_RESPONSE_PARAM_GLOSRY.html)\\ `mapped`.

-   [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html):

-   To assign the final key values to the instances, the method [`adjust_numbers`](ABENSAVER_ADJUST_NUMBERS.html) is called before the actual saving happens with the [`save`](ABENSAVER_METHOD_SAVE.html) method. The `adjust_numbers` method transforms `%pid` into the final key values.

-   In contrast to `%pid`, `%cid` and [`%cid_ref`](ABAPDERIVED_TYPES_CID_REF.html) are only available on a short-term basis for the current ABAP EML request within the RAP interaction phase. They are no longer available in the RAP save sequence whereas `%pid` is indeed available there as the unique identifier for an instance. `%pid` is then transformed into the final keys in the RAP saver method `adjust_numbers`. Hence, `%pid` serves as a long-term and stable ID until the final key creation which can happen at a later point in time after the instance has been created. For example, in case of a [draft](ABENBDL_WITH_DRAFT.html) scenario, the final key value creation can be days or weeks after the creation of an instance.
-   Apart from using `%cid` or `%cid_ref`, the instance identification from a RAP consumer's point of view can also be done using `%pid` or, as it is recommended, the [component group](ABENCOMPONENT_GROUP_GLOSRY.html)\\ [`%tky`](ABAPDERIVED_TYPES_TKY.html) which includes `%pid` and more (for example, [`%key`](ABAPDERIVED_TYPES_KEY.html) if `%key` is to be used for containing the preliminary key instead of `%pid`).

-   `%pid` occurs in late numbering scenarios only. It is not available in static actions and functions, `TYPE TABLE FOR KEY OF` or `TYPE STRUCTURE FOR KEY OF`. In case of create operations, `%cid` must be mapped to a created `%pid`. Both must be inserted in the [`mapped`](ABAPTYPE_RESPONSE_FOR.html) response parameter.
-   A RAP BO instance must always be identifiable uniquely by its transactional key (`%tky`) for internal processing during the [RAP interaction phase](ABENRAP_INT_PHASE_GLOSRY.html). However, in case of late numbering scenarios, instances are identified using preliminary keys in the interaction phase and the early phase of the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html) before the [`save`](ABENSAVER_METHOD_SAVE.html) method is called. The final key value assignment only takes place in the [`adjust_numbers`](ABENSAVER_ADJUST_NUMBERS.html) method. Therefore, the transactional key `%tky` also includes the preliminary ID `%pid` in late numbering scenarios to ensure the uniqueness also during more than one ABAP session, for example, in draft scenarios. Apart from `%pid`, `%tky` also includes `%key`. Depending on your use case, `%key` can also be used as a preliminary identifier by filling the key values with values that are only temporarily valid and transformed into the final keys not until the `adjust_numbers` method. That means you can either use `%pid` or `%key` as preliminary identifiers and leave the other one initial, or you use both of them in combination for uniquely identifying RAP BO instances. In any case, the component group `%tky` must in total uniquely identify the instance.

-   If `late numbering` is specified in the [RAP BO root entity](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html), then `late numbering` is inherited by the composition tree. Consequently, `%pid` components must also be reflected in the hierarchy of RAP BO instances and non-composition associations before finally setting the keys.
-   `%pid` is contained in the component groups `%tky` and [`%pky`](ABAPDERIVED_TYPES_PKY.html) (while `%pky` itself is a component of `%tky`).

-   The example [Using `%pid`](ABENDERIVED_TYPES_PID_ABEXA.html) demonstrates the use of `%pid` with an unmanaged RAP BO in a late numbering scenario.
-   The example [Using `%pre` / `%tmp`](ABENDERIVED_TYPES_PRE_TMP_ABEXA.html) also touches upon the use of `%pid`.

METHOD create. \\n\\ \\n LOOP AT entities ASSIGNING FIELD-SYMBOL(<entity>). \\n "Create %pid. \\n DATA(system\_uuid) = cl\_uuid\_factory=>create\_system\_uuid( ). \\n TRY. \\n DATA(uuid\_x16) = system\_uuid->create\_uuid\_x16( ). \\n system\_uuid->convert\_uuid\_x16( EXPORTING \\n uuid = uuid\_x16 \\n IMPORTING \\n uuid\_c22 = DATA(uuid\_c22) \\n uuid\_c26 = DATA(uuid\_c26) \\n uuid\_c32 = DATA(uuid\_c32) ). \\n CATCH cx\_uuid\_error. \\n APPEND VALUE #( %cid = <entity>-%cid ) \\n TO failed-demo\_umanaged\_root\_late\_num. \\n ENDTRY. \\n\\ \\n "Insert values into unmanaged transactional buffer \\n APPEND VALUE #( \\n cid = <entity>-%cid \\n pid = uuid\_x16 \\n instance-key\_field = <entity>-key\_field \\n instance-field1 = COND #( WHEN <entity>-%control-field1 \\n NE if\_abap\_behv=>mk-off \\n THEN <entity>-field1 ) \\n instance-field2 = COND #( WHEN <entity>-%control-field2 \\n NE if\_abap\_behv=>mk-off \\n THEN <entity>-field2 ) \\n instance-field3 = COND #( WHEN <entity>-%control-field3 \\n NE if\_abap\_behv=>mk-off \\n THEN <entity>-field3 ) \\n instance-field4 = COND #( WHEN <entity>-%control-field4 \\n NE if\_abap\_behv=>mk-off \\n THEN <entity>-field4 ) \\n changed = abap\_true \\n deleted = abap\_false ) TO lcl\_buffer=>root\_buffer. \\n\\ \\n "Insert mapping information \\n APPEND VALUE #( %pid = uuid\_x16 \\n %cid = <entity>-%cid \\n %key = <entity>-%key ) \\n TO mapped-demo\_umanaged\_root\_late\_num. \\n\\ \\n ENDLOOP. \\nENDMETHOD. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html abapderived\_types\_comp.html abapderived\_types\_keys\_id.html