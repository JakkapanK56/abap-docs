---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_OBJ_PROGR_MODEL_GUIDL.html"
abapFile: "ABENABAP_OBJ_PROGR_MODEL_GUIDL.html"
type: "abap-reference"
---

## Background

ABAP is a hybrid programming language that supports both a procedural and an object-oriented programming model. The procedural programming model is based on the modularization of programs in procedural processing blocks (event blocks, dialog modules, function modules, and subroutines). In ABAP Objects, the class conceptually supersedes the procedural program, and modularization is implemented using methods. From a technical point of view, classes are still declared and implemented in programs.

Both models possess interoperability, meaning that classes can be accessed in procedural processing blocks and procedural programs and procedures can be called within methods. The hybrid nature of the language is mainly due to the downward compatibility. This is because ABAP has procedural roots, and the introduction of the object-oriented programming model was intended to make sure entire programs and reusable procedures (primarily function modules) could still be used.

## Rule

**Use ABAP objects**

Use ABAP objects wherever possible for new and further developments. Procedural processing blocks should only be created in exceptional cases.

## Details

The need to achieve [separation of concerns](ABENSEPARATION_CONCERNS_GUIDL.md) is best supported by using ABAP objects as much as possible. Object-oriented programming - particularly ABAP Objects in comparison to procedural ABAP - is better suited. Here are the reasons why:

1.  **Data encapsulation**
2.  ABAP Objects enables an advanced type of data encapsulation to be used. In procedural programming, the state of an application is determined by the content of the global variables of a program. In object-oriented programming, the state is encapsulated in classes or objects as instances of classes. The distribution of data across the different visibility sections of a class - public, protected and private - allows a clear differentiation between externally and internally usable data. Even without in-depth object-oriented modeling, application programs benefit from these properties in terms of stability and maintainability.
3.  **Explicit instantiation**
4.  ABAP Objects enables multiple instantiation of a class, by using explicit object creation with the `CREATE OBJECT` statement. Each instance of a class (object) has its own state that is determined using the values of its attributes. It can be changed using class methods. Automatic garbage collection ensures that any objects no longer required are deleted from the memory. Procedural models do not offer multiple instantiation. Therefore stateless functions must be applied to data stored in separate repositories.
5.  **Inheritance**
6.  ABAP Objects enables the reuse of classes through inheritance, where classes with special behaviors are derived from more general classes. Only the differences must be implemented again. In the procedural model, only existing functions can be used as they are, or new functions must be created.
7.  **Interfaces**
8.  In ABAP Objects, objects can be addressed using standalone interfaces. This means that developers do not need to concern themselves with the implementation details of the class behind the interface. The provider of an interface can change the underlying implementations, without having to modify the programs that the interface uses. The procedural model does not have this concept of standalone interfaces.
9.  **Events**
10.  ABAP Objects makes it easier to implement event-driven program flows. A publish-and-subscribe mechanism can loosely couple applications. The event trigger does not need to know anything about any possible handlers. This allows greater flexibility than the procedural approach, where the programs are much stronger coupled and the program flow is usually much more strictly defined.
11.  **Explicit orthogonal concepts**
12.  ABAP Objects contains a small number of closely defined, mutually orthogonal, fundamental concepts, which makes it more reliable and less error-prone than procedural ABAP. Procedural ABAP is dominated by implicit behaviors, where programs are controlled by implicit events of the runtime framework and by global data. The concepts of ABAP Objects, however, are explicitly shown in a program. ABAP Objects is easier to learn and use than procedural ABAP.
13.  **Cleansed syntax**
14.  ABAP Objects uses cleansed syntax rules and semantics rules. Procedural ABAP is a language that has evolved over time, and contains several obsolete and overlapping concepts. The introduction of ABAP Objects meant that classes and methods provided a field for cleansed syntax and semantics rules, which was completely unaffected by downward compatibility requirements. This meant that most obsolete and error-prone language constructs were forbidden in ABAP Objects syntax (within classes and methods). Also, any questionable and potentially incorrect data accesses are checked more closely and can also be forbidden. The syntax cleansing enforces the use of the ABAP language in classes, which can only be requested using the [Modern ABAP](ABENMODERN_ABAP_GUIDL.md) guideline, outside of classes.
15.  **Access to new technologies**
16.  ABAP Objects is often the only way of dealing with new ABAP technologies. For example, GUI controls, Web Dynpro ABAP, runtime type services (RTTS), or Internet Connection Framework (ICF) only provide class-based interfaces. If programs that use these services were still implemented on a purely procedural basis, this would result in an unnecessary mix of programming models and increased complexity.

Therefore the urgent recommendation to use ABAP Objects has both formal and content-related issues:

-   As described in points 1 through 5, the object-oriented programming model is better suited to keeping the complexity of software manageable through principles, such as encapsulation and inheritance. Admittedly, a good object-oriented design is not an easy task, and there are developers with only limited experience in this area even today. Given these facts, anyone who is still considering approaching a new development in the procedural way, must bear in mind that the procedural event-driven ABAP programming model with its system events is also not easy to understand.
-   Points 6 through 8 describe more formal aspects. These points suggest that procedures should be created only as methods, even in the absence of a real object-oriented design. Function modules and subroutines should be created only in exceptional cases, where ABAP Objects does not currently provide any alternatives.

The section [Object-Oriented Programming](ABENOBJ_ORIENTED_GDL.md) provides notes and recommendations on the optimal use of ABAP Objects.

## Use

The following properties are still missing in ABAP Objects. They are needed to replace procedural processing blocks with methods:

-   Remote Method Invocation (RMI) as a replacement for Remote Function Call (RFC)
-   A replacement for the call of update function modules (`CALL FUNCTION IN UPDATE TASK`)
-   A replacement for the call of subroutines during `COMMIT WORK` and `ROLLBACK WORK` (`PERFORM ON COMMIT|ROLLBACK`)
-   Object-oriented handling of classic dynpros, including selection screens as a replacement for dialog transactions, `CALL SCREEN` and `CALL SELECTION-SCREEN`
-   Dynamic creation of classes as a replacement for dynamic program creation (`GENERATE SUBROUTINE POOL`)
-   Direct support for background processing as a substitute for calling executable programs (`SUBMIT VIA JOB`)

In these cases, the following procedural processing blocks can still be created in new programs:

-   [Function modules](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.md) are still required for RFC and the update and are recommended for calling [classic dynpros and selection screens](ABENENCAP_CLASS_INTERF_GUIDL.md).
-   [Subroutines](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.md) are still required for `PERFORM ON COMMIT$/ROLLBACK` and in dynamically generated subroutine pools (`GENERATE SUBROUTINE POOL`).
-   [Dialog modules and event blocks](ABENDIAL_MOD_EVENT_BLOCK_GUIDL.md) for selection screen events are still required in function pools that [wrap](ABENPROGRAM_TYPE_GUIDL.md) the classic dynpros and selection screens.
-   The `START-OF-SELECTION` event block is still required in executable programs that are intended for background processing.

Within this type of processing block, however, the execution should be delegated immediately to a suitable method. This does not have to be a method of a global class, but it can be located in the associated compilation unit within the scope of a local class. To ensure that the system implements the same stricter check in these processing blocks as in the methods, the obsolete statements check (OO context) can be activated in the [extended program check](ABENEXTENDED_PROGRAM_CHECK_GUIDL.md).

## Bad Example

The following source code contains a rudimentary implementation for handling different types of bank accounts in a function pool and their use in a program. Only the *withdrawal of an amount* function is shown. The function modules of the function pool work on external data that is loaded into a global internal table in the `LOAD-OF-PROGRAM` event. An input parameter checks whether money is being withdrawn from a checking account or a savings account. Next, the handling is delegated to various subroutines using a `CASE`\-`WHEN` control structure. No reuse takes place. The subroutines access the global internal table. The function module for withdrawing money is called for different accounts in an application program. Classic exception handling is performed using further `CASE`\-`WHEN` control structures for querying `sy-subrc`.

```
FUNCTION-POOL account.DATA account_tab TYPE SORTED TABLE OF accounts 
                 WITH UNIQUE KEY id.LOAD-OF-PROGRAM. 
  "fetch amount for all accounts into account_tab 
  ... 
... 
FUNCTION withdraw. 
*"----------------------------------------------------- 
*" IMPORTING 
*"      REFERENCE(id) TYPE accounts-id 
*"      REFERENCE(kind) TYPE c DEFAULT 'C' 
*"      REFERENCE(amount) TYPE accounts-amount 
*" EXCEPTIONS 
*"      negative_amount 
*"      unknown_account_type 
*"------------------------------------------------------ 
  CASE kind. 
    WHEN 'C'. 
      PERFORM withdraw_from_checking_account 
        USING id amount. 
    WHEN 'S'. 
      PERFORM withdraw_from_savings_account 
        USING id amount. 
    WHEN OTHERS. 
      RAISE unknown_account_type. 
  ENDCASE. 
ENDFUNCTION.FORM withdraw_from_checking_account 
  USING l_id     TYPE accounts-id 
        l_amount TYPE accounts-amount. 
  FIELD-SYMBOLS  TYPE accounts. 
  ASSIGN account_tab[ KEY primary_key id = l_id ] TO . 
   =  - l_amount. 
  IF  < 0. 
    "Handle debit balance 
    ... 
  ENDIF. 
ENDFORM.FORM withdraw_from_savings_account 
  USING l_id     TYPE accounts-id 
        l_amount TYPE accounts-amount. 
  FIELD-SYMBOLS  TYPE accounts. 
   ASSIGN account_tab[ KEY primary_key id = l_id ] TO . 
  IF -amount > l_amount. 
     -amount = -amount - l_amount. 
  ELSE. 
     RAISE negative_amount. 
  ENDIF. 
ENDFORM.*********************************************************PROGRAM bank_application. 
...CALL FUNCTION 'WITHDRAW' 
  EXPORTING 
    id                   = ... 
    kind                 = 'C' 
    amount               = ... 
  EXCEPTIONS 
    unknown_account_type = 2 
    negative_amount      = 4. 
CASE sy-subrc. 
  WHEN 2. 
     ... 
  WHEN 4. 
     ... 
ENDCASE. 
... 
CALL FUNCTION 'WITHDRAW' 
  EXPORTING 
    id                   = ... 
    kind                  = 'S' 
    amount               = ... 
  EXCEPTIONS 
    unknown_account_type = 2 
    negative_amount      = 4. 
CASE sy-subrc. 
  WHEN 2. 
    ... 
  WHEN 4. 
      ... 
ENDCASE.
```

## Good Example

The following source code contains a rudimentary implementation for handling different types of bank accounts in classes and their use in a class. Only the *withdrawal of an amount* function is shown.

The different types of accounts are implemented in subclasses of an abstract class for accounts. Each instance of an account is provided with the required data in its constructor. If required, the application class creates instances of accounts of the required type and uses their methods polymorphically by means of a superclass reference variable. Exception handling is carried out using class-based exceptions. `CASE`\-`WHEN` control structures are not required. As already explained in [separation of concerns](ABENSEPARATION_CONCERNS_GUIDL.md), no overhead code is incurred here when using classes, compared to procedural programming.

```
CLASS cx_negative_amount DEFINITION PUBLIC 
                         INHERITING FROM cx_static_check. 
ENDCLASS.CLASS cl_account DEFINITION ABSTRACT PUBLIC. 
  PUBLIC SECTION. 
    METHODS: constructor IMPORTING id     TYPE string, 
             withdraw    IMPORTING amount TYPE i 
                         RAISING cx_negative_amount. 
  PROTECTED SECTION. 
    DATA amount TYPE accounts-amount. 
ENDCLASS.CLASS cl_account IMPLEMENTATION. 
  METHOD constructor. 
    "fetch amount for one account into attribute amount 
     ... 
  ENDMETHOD. 
  METHOD withdraw. 
    me->amount = me->amount - amount. 
  ENDMETHOD. 
ENDCLASS.CLASS cl_checking_account DEFINITION PUBLIC 
                          INHERITING FROM cl_account. 
  PUBLIC SECTION. 
    METHODS withdraw REDEFINITION. 
ENDCLASS.CLASS cl_checking_account IMPLEMENTATION. 
  METHOD withdraw. 
     super->withdraw( amount ). 
     IF me->amount < 0. 
        "Handle debit balance 
         ... 
     ENDIF. 
  ENDMETHOD. 
ENDCLASS.CLASS cl_savings_account DEFINITION PUBLIC 
                         INHERITING FROM cl_account. 
    PUBLIC SECTION. 
      METHODS withdraw REDEFINITION. 
ENDCLASS.CLASS cl_savings_account IMPLEMENTATION. 
  METHOD withdraw. 
    IF me->amount > amount. 
       super->withdraw( amount ). 
    ELSE. 
       RAISE EXCEPTION TYPE cx_negative_amount. 
    ENDIF. 
  ENDMETHOD. 
ENDCLASS. 
********************************************************CLASS bank_application DEFINITION PUBLIC. 
  PUBLIC SECTION. 
   CLASS-METHODS main. 
ENDCLASS.CLASS bank_application IMPLEMENTATION. 
  METHOD main. 
    DATA: account1 TYPE REF TO cl_account, 
          account2 TYPE REF TO cl_account. 
  ...CREATE OBJECT account1 TYPE cl_checking_account 
  EXPORTING 
    id = ...CREATE OBJECT account2 TYPE cl_savings_account 
  EXPORTING 
    id                   = ... 
...   TRY. 
      account1->withdraw( ... ). 
      account2->withdraw( ... ). 
    CATCH cx_negative_amount. 
      ... 
   ENDTRY. 
  ENDMETHOD. 
ENDCLASS.
```
