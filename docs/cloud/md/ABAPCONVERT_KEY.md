---
title: "ABAPCONVERT_KEY"
description: |
  ABAPCONVERT_KEY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCONVERT_KEY.htm"
abapFile: "ABAPCONVERT_KEY.html"
keywords: ["loop", "do", "if", "case", "method", "class", "data", "types", "internal-table", "ABAPCONVERT", "KEY"]
---

`CONVERT KEY OF [bdef|(bdef)]\    FROM [TEMPORARY] pre_key    TO final_key.`

Used to retrieve the final keys (`final_key`) from preliminary keys (`pre_key`) in the context of [RAP late numbering](ABENRAP_LATE_NUMBERING_GLOSRY.html).

Outside of [RAP behavior implementations](ABENBEHAVIOR_IMPLEMENT_GLOSRY.html), [transaction owners](ABENTRANSACTION_OWNER_GLOSRY.html) can only specify `CONVERT KEY` statements between `COMMIT ENTITIES BEGIN ... COMMIT ENTITIES END.` statements.

Within behavior implementations, `CONVERT KEY` statements are specified without `COMMIT ENTITIES BEGIN... COMMIT ENTITIES END.` statements in [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html) when accessing other RAP BOs that specify late numbering to retrieve their final keys. Typically, use the `CONVERT KEY` statements in the `save` or `save_modified` methods. Use this statement in `adjust_numbers` only if the business objects' saving order in the save sequence is guaranteed. For example, in the implementation of `adjust_numbers` for BO *B*, you can specify `CONVERT KEY` for BO *A* if *B* follows *A* in the save sequence. Ensure *A* is identified as the predecessor of *B*, either by declaring a dependent BO or explicitly stating [`save after`](ABENBDL_SAVE_AFTER.html) in the BDEF.

Details on the syntax elements:

The following source code section taken from `CL_DEMO_RAP_EML_COMMIT_3` demonstrates the `COMMIT ENTITIES BEGIN ... END` variant and `CONVERT KEY OF`.

The following source code section taken from `CL_DEMO_RAP_DRVD_TYPES_LATENU2` demonstrates the `COMMIT ENTITIES BEGIN ... END` variant and `CONVERT KEY OF` with the addition `TEMPORARY`.

-   The example [`COMMIT ENTITIES BEGIN`, `END` with `CONVERT KEY OF`](ABENCOMMIT_ENTITIES_BEGINEND_ABEXA.html) demonstrates the use of this `COMMIT ENTITIES` statement including `CONVERT KEY OF`.
-   The example [Using `%pre` / `%tmp`](ABENDERIVED_TYPES_PRE_TMP_ABEXA.html) demonstrates the use of `%pre` and `%tmp` with an [unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html) in a [`late numbering`](ABENBDL_LATE_NUMBERING.html) scenario. In this context, a `COMMIT ENTITIES` statement including `CONVERT KEY OF` with the addition `TEMPORARY` is used.

DATA: mapped\_early TYPE RESPONSE FOR MAPPED EARLY \\n demo\_umanaged\_root\_late\_num. \\n\\ \\nCOMMIT ENTITIES BEGIN. \\n\\ \\n LOOP AT mapped\_early-demo\_umanaged\_root\_late\_num \\n ASSIGNING FIELD-SYMBOL(). \\n\\ \\n CONVERT KEY OF demo\_umanaged\_root\_late\_num \\n FROM \-%pid \\n TO FINAL(lv\_root\_key). \\n\\ \\n ENDLOOP. \\n\\ \\nCOMMIT ENTITIES END. CLASS demo DEFINITION. \\n PUBLIC SECTION. \\n DATA: \\n\\ \\n mapped\_early TYPE RESPONSE FOR MAPPED EARLY \\n demo\_umanaged\_root\_late\_num3. \\n\\ \\n METHODS main. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n\\ \\n METHOD main. \\n ... \\n COMMIT ENTITIES BEGIN RESPONSES FAILED DATA(failed\_late) \\n REPORTED DATA(reported\_late). \\n ... \\n LOOP AT mapped\_early-demo\_umanaged\_root\_late\_num3 \\n ASSIGNING FIELD-SYMBOL(). \\n\\ \\n CONVERT KEY OF demo\_umanaged\_root\_late\_num3 \\n FROM TEMPORARY VALUE #( %pid = \-%pid \\n %tmp = \-%key ) \\n TO DATA(lv\_final\_key). \\n ENDLOOP. \\n ... \\n COMMIT ENTITIES END. \\n\\ \\n ENDMETHOD. \\nENDCLASS. **Syntax Elements** **Details**\\ `CONVERT KEY OF bdef ...` Specifies the [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html)\\ `bdef` for which the keys should be converted. The entity name can also be specified dynamically within a pair of parentheses. The entity name must be compatible with `ABP_ENTITY_NAME`. \\
\\
Unlike other EML statements, the `CONVERT KEY OF` statement does not operate on mass data, i. e. internal tables, but on single values (`pre_key`, `final_key`). `... FROM [TEMPORARY] pre_key ...` Specifies the value of the preliminary key `pre_key`. The type of `pre_key` must be compatible with [`%pid`](ABAPDERIVED_TYPES_PID.html) or [`%pre`](ABAPDERIVED_TYPES_PRE.html) in case of using the addition `TEMPORARY`. \\
\\
The optional addition `TEMPORARY` is only relevant in late numbering scenarios in which `%pre` is used to contain the preliminary keys during the [RAP interaction phase](ABENRAP_INT_PHASE_GLOSRY.html) - instead of [`%pid`](ABAPDERIVED_TYPES_PID.html). \\
\\
For more information on the use of `%pid`, `%pre` and `%key` in the context of late numbering scenarios, see the topic [Using Keys and Identifying RAP BO Instances in a Nutshell](ABAPDERIVED_TYPES_KEYS_IDENTIFIERS.html). `... TO final_key.` `final_key` specifies the final key value. The type of `final_key` must be compatible with the primary key's type. You can use a structure of type [`TYPE STRUCTURE FOR KEY`](ABAPTYPE_STRUCTURE_FOR.html), especially when specifying the entity dynamically. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html