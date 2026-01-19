---
title: "ABAPMETHODS_FOR_RAP_BEHV"
description: |
  ABAPMETHODS_FOR_RAP_BEHV - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMETHODS_FOR_RAP_BEHV.htm"
abapFile: "ABAPMETHODS_FOR_RAP_BEHV.html"
keywords: ["update", "delete", "loop", "do", "if", "case", "method", "class", "data", "types", "ABAPMETHODS", "FOR", "RAP", "BEHV"]
---

**Handler method definitions:**

```[`METHODS`](ABAPMETHODS.html) meth [[`FINAL`](ABAPMETHODS_ABSTRACT_FINAL.html)]\     FOR \{\ [`` `DETERMINE ON \{ SAVE | MODIFY \}` ``](ABAPHANDLER_METH_DET.html) ... [[`` `IMPORTING` ``](ABAPMETHODS_GENERAL.html)] ... FOR ... \}\       |\ \{\ [`` `GLOBAL AUTHORIZATION` ``](ABAPHANDLER_METH_GLOBAL_AUTH.html)  ...  [[`` `IMPORTING` ``](ABAPMETHODS_GENERAL.html)] ... FOR ... \}\       |\ \{\ [`` `GLOBAL FEATURES` ``](ABAPHANDLER_METH_GLOBAL_FEATURES.html) ... [[`` `IMPORTING` ``](ABAPMETHODS_GENERAL.html)] ... FOR ... \}\       |\ \{\ [`` `[INSTANCE] AUTHORIZATION` ``](ABAPHANDLER_METH_AUTH.html) ... [[`` `IMPORTING` ``](ABAPMETHODS_GENERAL.html)] ... FOR ... \}\       |\ \{\ [`` `[INSTANCE] FEATURES` ``](ABAPHANDLER_METH_FEATURES.html) ... [[`` `IMPORTING` ``](ABAPMETHODS_GENERAL.html)] ... FOR ... \}\       |\ \{\ [`` `LOCK` ``](ABAPHANDLER_METH_LOCK.html) ... [[`` `IMPORTING` ``](ABAPMETHODS_GENERAL.html)] ... FOR ... \}\       |\ \{\ [`` `MODIFY` ``](ABAPHANDLER_METH_MODIFY.html) ... [[`` `IMPORTING` ``](ABAPMETHODS_GENERAL.html)] ... FOR ... \}\       |\ \{\ [`` `NUMBERING` ``](ABAPHANDLER_METH_NUMBERING.html) ... [[`` `IMPORTING` ``](ABAPMETHODS_GENERAL.html)] ... FOR ... \}\       |\ \{\ [`` `PRECHECK` ``](ABAPHANDLER_METH_PRECHECK.html) ... [[`` `IMPORTING` ``](ABAPMETHODS_GENERAL.html)] ... FOR ...  \}\       |\ \{\ [`` `READ` ``](ABAPHANDLER_METH_READ.html) ... [[`` `IMPORTING` ``](ABAPMETHODS_GENERAL.html)] ... FOR ... \}\       |\ \{\ [`` `VALIDATE ON SAVE` ``](ABAPHANDLER_METH_VALIDATE.html) ... [[`` `IMPORTING` ``](ABAPMETHODS_GENERAL.html)] ... FOR ... \}\     [[`` `CHANGING` ``](ABAPMETHODS_GENERAL.html)\ \{\ [[`` `failed` ``](ABAPTYPE_RESPONSE_FOR.html) TYPE [`` `data` ``](ABENBUILT_IN_TYPES_GENERIC.html)]\ [[`` `reported` ``](ABAPTYPE_RESPONSE_FOR.html) TYPE [`` `data` ``](ABENBUILT_IN_TYPES_GENERIC.html)]\ [[`` `mapped` ``](ABAPTYPE_RESPONSE_FOR.html) TYPE [`` `data` ``](ABENBUILT_IN_TYPES_GENERIC.html)]\ \}].```

**Handler method implementations:**

``[`METHOD`](ABAPMETHODS.html) meth.     ...  [`ENDMETHOD`](ABAPMETHODS.html).``

[Handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) must be defined and implemented in a [handler class](ABENABP_HANDLER_CLASS_GLOSRY.html) of an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). The method name (`meth`) can be freely chosen except for the predefined [draft actions](ABENBDL_DRAFT_ACTION.html) (whose implementation is only relevant if they are specified with `with additional implementation` in the BDEF), the method names in the context of [`augment`](ABENBDL_AUGMENT_PROJECTION.html) operations, and the method names in the context of [RAP default values functions](ABAPRAP_HANDLER_DEFAULT_VAL_FUNC.html). The `METHODS` statements of handler methods in behavior pools contain RAP-specific ABAP words like `FOR MODIFY`, `FOR CREATE` or `FOR READ` as well as optional or mandatory ABAP words like `REQUEST` and `RESULT` that are followed by parameters typed with [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html).

The following list provides an overview on parameters of handler methods:

At least one of the three methods with the predefined names `MODIFY`, `READ` and `LOCK` must be implemented in each handler class. Apart from that, helper methods can be implemented.

The following code snippet shows several handler method definitions. The method `create` includes an explicit specification of the `CHANGING` keyword and the parameters for the information retrieval.

... \\n    METHODS create FOR MODIFY \\n    IMPORTING entities FOR CREATE demo\_bdef \\n    CHANGING failed TYPE DATA mapped TYPE DATA reported TYPE DATA.\\ 
\\ 
    METHODS cba\_child FOR MODIFY \\n    IMPORTING entities\_cba FOR CREATE demo\_bdef\\\\\_assoc.\\ 
\\ 
    METHODS update FOR MODIFY \\n    IMPORTING entities FOR UPDATE demo\_bdef.\\ 
\\ 
    METHODS delete FOR MODIFY \\n    IMPORTING keys FOR DELETE demo\_bdef.\\ 
\\ 
    METHODS read FOR READ \\n    IMPORTING keys FOR READ demo\_bdef RESULT result.\\ 
\\ 
    METHODS rba\_child FOR READ \\n    IMPORTING keys\_rba FOR READ demo\_bdef\\\\\_child \\n    FULL result\_requested RESULT result LINK association\_links. \\n...

-   Nearly all parameters are typed with [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html) that have [RAP components](ABAPDERIVED_TYPES_COMP.html). The parameters' names can be chosen freely.
-   Each handler method must have at least one importing parameter. The addition [`IMPORTING`](ABAPMETHODS_GENERAL.html) is optional since it is used implicitly.
-   All handler methods have changing parameters. The changing parameters for retrieving mapping information (`mapped`) or information on failures (`failed`) and error messages (`reported`) have predefined names and are used implicitly. The addition [`CHANGING`](ABAPMETHODS_GENERAL.html) and the explicit specification of those changing parameters is optional. The availability of the `mapped`, `failed` and `reported` parameters depends on the handler method used. When used explicitly, for example, for the method `... FOR MODIFY ... FOR CREATE ...`, the syntax can be as follows:
-   `METHODS create FOR MODIFY IMPORTING entities FOR CREATE bdef CHANGING failed TYPE DATA mapped TYPE DATA reported TYPE DATA.`
-   For the explicit declaration of the changing parameters, the generic type [`DATA`](ABENBUILT_IN_TYPES_GENERIC.html) is used. At runtime, the typed parameters, e. g. `failed`, implicitly has the BDEF derived type [`TYPE RESPONSE FOR`](ABAPTYPE_RESPONSE_FOR.html).
-   In many cases, parameters can be passed by reference (see [`REFERENCE`](ABAPMETHODS_PARAMETERS.html)), however, they cannot be passed by value ([`VALUE`](ABAPMETHODS_PARAMETERS.html)). Hence, the importing parameters cannot be changed in the methods.

-   It is recommended that the `CHANGING` parameters `failed`, `reported` and `mapped` are filled with returned information, for example, if an instance cannot be read. The components of each of the `CHANGING` parameters can vary depending on how it is typed with a BDEF derived type. Here is an example on how a `CHANGING` parameter can be filled within the method implementation:
-   `LOOP AT import_params ASSIGNING FIELD-SYMBOL(<fs>). ... APPEND VALUE #( %key = <fs>-%key %fail = if_abap_behv=>cause-not_found ... ) TO failed-bdef. APPEND VALUE #( %msg = new_message_with_text( severity = if_abap_behv_message=>severity-error text = 'Issue occurred.' %key = <fs>-%key ... ) TO reported-bdef. ENDLOOP.`
-   In some cases, the F2 help of the [ADT](ABENADT_GLOSRY.html) shows further `CHANGING` parameters for RAP handler methods apart from `failed`, `reported` and `mapped`. `RESULT` is a RAP-specific ABAP word that must be explicitly specified. Hence, the `CHANGING` parameter `result` cannot be specified using the ABAP word `CHANGING`:
-   `METHODS read FOR READ IMPORTING keys FOR READ bdef RESULT result.`
-   Similarly, the `IMPORTING` parameter `requested_field` must be specified in combination with the ABAP word `REQUEST` in the handler method definition.
-   The handler method `FOR MODIFY` can handle multiple entities and operations within one processing step. However, it might be useful to split the handler method implementation into separate methods in the interest of readability and keeping the complexity on a lower level. In doing so, multiple RAP handler classes within one ABP or multiple ABPs can be defined. The following handler method definition demonstrates a handler method `FOR MODIFY` that includes multiple operations:
-   `... METHODS modify_meth FOR MODIFY IMPORTING create_imp_param FOR CREATE bdef update_imp_param FOR UPDATE bdef delete_imp_param FOR DELETE bdef action_imp_param FOR ACTION bdef~action cba_imp_param FOR CREATE bdef\\_assoc. ...`
-   Exceptions cannot be raised in handler methods, hence, the addition [`RAISING`](ABAPMETHODS_GENERAL.html) cannot be used.
-   Obsolete language elements in the context of handler methods:

-   Addition [`FOR BEHAVIOR`](ABAPMETHODS_FOR_BEHAVIOR.html) for the variants `READ`, `MODIFY` and `LOCK`.
-   [`METHODS, FOR DETERMINATION, VALIDATION`](ABAPMETHODS_FOR_DET_VAL_OBS.html)

-   The example [Example for RAP Handler Methods](ABENRAP_HANDLER_METHODS_ABEXA.html) demonstrates RAP handler methods within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.
-   The example [ABAP EML - `MODIFY AUGMENTING ENTITY`](ABENEML_MODIFY_AUGMENTING_ABEXA.html) demonstrates the three handler methods `augment_create`, `augment_update` and `augment_cba_assoc` (`assoc` refers to the name of the association) with a RAP projection business object.

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html abenabap\_behavior\_pools.html abenabp\_handler\_class.html