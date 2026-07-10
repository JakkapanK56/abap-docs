---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENUSE_DYNAMIC_PROGR_TECH_GUIDL.html"
abapFile: "ABENUSE_DYNAMIC_PROGR_TECH_GUIDL.html"
type: "abap-reference"
---

## Background

The use of dynamic programming techniques includes the following:

-   Accessing dynamic memory objects, that is, dynamic data objects (strings and internal tables), as well as instances of classes and anonymous data objects
-   Dynamically accessing data objects using reference variables and field symbols (to a certain extent, this also includes accessing generically typed formal parameters in procedures)
-   Dynamically invoking procedures or entire programs
-   Creating data types generically and using them to create anonymous data objects
-   Generic program development, where parts of the statements are specified using dynamic tokens or entire programs are not created until runtime

In this sense, handling reference variables can also be considered a dynamic technique. The dynamic type (the object to which the reference points) can be more specific than the static type of the variable, which entails polymorphic behavior and becomes apparent in assignments made using [upcasts](ABENUP_CAST_GLOSRY.md) or [downcasts](ABENDOWN_CAST_GLOSRY.md).

## Rule

**Use dynamic programming techniques with care**

Use dynamic programming techniques only when this is necessary and reasonable. Use only as many dynamic language elements as required to carry out the assigned task.

## Details

The advantage of dynamic programming techniques is an increased flexibility when creating programs. Dynamic programming techniques enable flexible and generic services to be developed that meet various requirements. The price to be paid for this advantage is that dynamic programming techniques may decrease the static checkability, legibility, maintainability, testability, performance, and also [security](ABENABAP_SECURITY.md). [Security standards](ABENCORRECTNESS_QUALITY_GUIDL.md) may even prohibit the use of high-risk dynamic programming techniques.

This section describes various dynamic programming techniques. These range from [using strings](ABENSTRINGS_GUIDL.md), which we explicitly recommend, and [using internal tables](ABENITAB_GDL.md), which form a basis of ABAP programming, to [generating entire programs](ABENGENERIC_PROGR_GUIDL.md), which we advise against. The higher the dynamics, the more comprehensive the precautionary measures to be taken when using these techniques. Already the simple access to data objects involves a corresponding partial aspect, which was addressed in the rule for [Runtime Errors when Accessing Data Objects](ABENRUNTIME_ERROR_DYN_PROC_GUIDL.md). The rules in this section expand these specific rules and provide a more general framework.

Always consider the following aspects when deploying dynamic techniques:

-   Programs that work with dynamic techniques are usually more complex and harder to understand than programs that use only static techniques. This has a negative effect on maintainability.
-   In dynamic programming, many checks that are otherwise performed in compilations can be performed only at runtime. This considerably increases the risk of exceptions or runtime errors.
-   Checking the dynamic parts at runtime can reduce the processing speed, as the checks must be repeated each time the parts are used again.
-   More tests are required, since numerous states of a dynamic program and possible error situations must be checked.
-   If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class `CL_ABAP_DYN_PRG` or the built-in function [`escape`](ABENESCAPE_FUNCTIONS.md).

The significance of these aspects differs for the various dynamic programming techniques. For example, a program that uses strings is by no means more complex than a program that works only with text fields. In cases like this, a range of details must nevertheless be taken into account.
