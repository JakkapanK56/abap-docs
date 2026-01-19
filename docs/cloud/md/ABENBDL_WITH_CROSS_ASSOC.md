---
title: "ABENBDL_WITH_CROSS_ASSOC"
description: |
  ABENBDL_WITH_CROSS_ASSOC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_WITH_CROSS_ASSOC.htm"
abapFile: "ABENBDL_WITH_CROSS_ASSOC.html"
keywords: ["update", "delete", "do", "if", "case", "method", "class", "data", "ABENBDL", "WITH", "CROSS", "ASSOC"]
---

`...  with cross associations;  ...`

The addition `with cross associations` prepares a [managed RAP business objects](ABENMANAGED_RAP_BO_GLOSRY.html) for cross-BO transactional interaction. It offers an improved runtime implementation for all operations for associations that are defined in the behavior definition. This includes syntax checks and error handling concerning cross-BO modeling. If not defined differently by using the `unmanaged`\\ [association implementation type](ABENRAP_ASSOC_IMPL_TYPE_GLOSRY.html) for individual associations, all [operations for associations](ABENRAP_OPERATION_ASSOC_GLOSRY.html) are handled and orchestrated by the [managed BO provider](ABENMANAGED_RAP_BO_PROV_GLOSRY.html). They do not have to be implemented in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html).

**Note** The same functionality can be achieved by other syntax elements that are defined for the individual association, for example by using the *managed*\\ [association implementation type](ABENRAP_ASSOC_IMPL_TYPE_GLOSRY.html) or [association \_assoc using TargetEntity \\{...\\}](ABENBDL_ASSOCIATION.html).

The syntax `with cross associations` is added in the [RAP behavior definition header](ABENCDS_BDEF_HEADER_GLOSRY.html) as it enables the functionality for the entire business object. It is not possible to define `with cross associations` for individual [entities](ABENRAP_BO_ENTITY_GLOSRY.html) within a business object. In extension BDEFs `with cross associations` can be defined independently from the usage of this syntax in the core BDEF.

The keyword `with cross associations` is necessary to ensure that transactional enablement works for the most common associations. For example, it supports cross-BO scenarios with a target entity that has [RAP late numbering](ABENRAP_LATE_NUMBERING_GLOSRY.html), which would not work without it.

The addition `with cross associations` enables cross-BO transactional enablement to all associated BO entities of foreign business objects. There are several related syntax elements in the behavior definition:

The following example is based on two separate BOs, `DEMO_R_A` serving as the source and `DEMO_R_B` serving as the target entity. `DEMO_R_A` has the BDEF header definition `with cross associations` enabling the association `_b` to target a late numbering BO in a source-resolved association. For this association the managed BO provider implements the relevant operations for associations that are specified for the association, namely `read by association`, `create by association`, `link action`, `unlink action` and `inverse function`.

When a `create by association` is executed creating an instance of `DEMO_R_B` the temporary key `%pid` is written to the `%pid_b` field of the associated instance of entity A in the transactional buffer. This can be retrieved by reading the associated instance of entity A.

The following figure displays the read result.

When committing the modify and read request, the save handlers of both BOs are called. The save handler of `DEMO_R_B` calls the `adjust_numbers` method, which assigns the final key value of `BKey`. The save handler of `DEMO_R_A` then invokes the `link action` to update the foreign key field `BKey` with the final value. A subsequent read, shows the result of the saved instance with the foreign key value set.

The following figure displays the read result of the saved instance.

This example demonstrates that the RAP managed runtime implements and orchestrates the respective handler methods in cross-BO scenarios, when `with cross associations` is defined.

-   [Managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html)
-   In [projection BDEFs](ABENRAP_PROJECTION_BO_GLOSRY.html) and in [interface BDEFs](ABENCDS_INTERFACE_BDEF_GLOSRY.html), cross-BO transactional enablement is switched on automatically for all used associations if it was specified in the base behavior definition header with `with cross associations`.

-   `[unmanaged](ABENBDL_ASSOC_IMPL_TYPE.html) association AssociationName;`:
-   You can define an association in a [managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html) for which `with cross associations` is defined as `unmanaged`. In that case, the implementation methods for all defined [operation´s for associations](ABENRAP_OPERATION_ASSOC_GLOSRY.html) (standard and nonstandard) must be implemented in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html).
-   `[association](ABENBDL_ASSOCIATION.html) AssociationName \{ \};`:
-   The association is read-enabled. In [managed RAP BOs](ABENMANAGED_RAP_BO_GLOSRY.html) with the definition `with cross associations` the `read-by-association` implementation is given by the managed RAP BO provider for all association targets if the association is not specified as `unmanaged`.
-   `\ [association](ABENBDL_ASSOCIATION.html) AssociationName \{ create; \}`:
-   The association is create-enabled. In [managed RAP BOs](ABENMANAGED_RAP_BO_GLOSRY.html) with the definition `with cross associations` the `create-by-association` implementation is given by the managed RAP BO provider for all association targets if the association is not specified as `unmanaged`.
-   `association AssociationName \{ [inverse function](ABENBDL_INVERSE_FUNCT.html) InverseFunctionName; \}`:
-   The [inverse function](ABENRAP_INVERSE_FUNCTION_GLOSRY.html) is relevant to retrieve all entity instances of targets in [target-resolved associations](ABENTARGET_RESOLVED_ASSOC_GLOSRY.html). The inverse function on the target entity's association is then executed.
-   In managed RAP BOs with `with cross associations` on BDEF header, the function is available to RAP BO consumers without any implementation in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) if the association is not specified as `unmanaged`.
-   The inverse function can only be declared for [source-resolved associations](ABENSOURCE_RESOLVED_ASSOC_GLOSRY.html).
-   `associations AssociationName \{ [link action](ABENBDL_LINK_UNLINK_ACTION.html) LinkActionName; [unlink action](ABENBDL_LINK_UNLINK_ACTION.html) UnlinkActionName; \}`:
-   These [operations for associations](ABENRAP_OPERATION_ASSOC_GLOSRY.html) are responsible to connect and disconnect associated entity instances of source and target entities in cross-BO associations. For associations with implementation type managed, the actions are available to RAP BO consumers without any implementation in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) if the association is not specified as `unmanaged`.
-   The link and unlink action of a cross-BO association can only be declared on [source-resolved associations](ABENSOURCE_RESOLVED_ASSOC_GLOSRY.html).

managed implementation in class bp\_demo\_r\_a unique;\\nstrict ( 2 );\\nwith cross associations;\\n\\ndefine behavior for DEMO\_R\_A //alias <alias\_name>\\npersistent table demo\_db\_a\\nlock master\\nauthorization master ( none )\\n\\n\\{\\n create ;\\n update;\\n delete;\\n field ( readonly : update ) AKey, Bkey;\\n\\n association \_b abbreviation B\\n \\{\\n create;\\n link action link\_B;\\n unlink action unlink\_B;\\n inverse function inverse\_function;\\n \\}\\n\\n mapping for demo\_db\_a\\n \\{\\n aKey = a\_key;\\n bKey = B\_key;\\n CharField = char\_field;\\n \\}\\n\\n\\} \*\*\*Reset Tables \\n DELETE FROM demo\_db\_a. \\n DELETE FROM demo\_db\_b. \\n\\ \\n\*\*\* Cross-BO CBA, create instance of A, \\n\*\*\* create instance of B with preliminary key \\n MODIFY ENTITIES OF demo\_r\_a \\n ENTITY demo\_r\_a \\n CREATE \\n FIELDS ( AKey CharField ) \\n WITH VALUE #( ( %cid = 'MyCid\_Create\_A' \\n AKey = '002' \\n CharField = 'xxx' ) ) \\n CREATE BY \\\\\_b \\n FIELDS ( BKey CharField ) \\n WITH VALUE #( ( %cid\_ref = 'MyCid\_Create\_A' \\n %target = VALUE #( ( %cid = 'MyCid\_CBA' \\n charfield = 'YYY' ) ) \\n\\ \\n ) ) \\n FAILED DATA(failed) \\n MAPPED DATA(mapped) \\n REPORTED DATA(reported). \\n\\ \\n\\ \\n\*\*\* read newly created instance of A, \\n\*\*\* %pid\_B is filled, Bkey empty \\n READ ENTITIES OF demo\_r\_a \\n ENTITY demo\_r\_a \\n ALL FIELDS WITH VALUE #( ( akey = '002' ) ) \\n RESULT DATA(result\_a). \*\*\*\* commit entities --> Finalize A, finalize B, adjust numbers B, \\n\*\*\*\* save A + B(including link action = update of A with foreign keyB) \\n COMMIT ENTITIES. \\n\\ \\n\*\*\*\* read saved instances of A, Bkey is set \\n READ ENTITIES OF demo\_r\_a \\n ENTITY demo\_r\_a \\n ALL FIELDS WITH VALUE #( ( akey = '002' ) ) \\n RESULT DATA(result\_a\_after\_save). abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_bdef\_header.html