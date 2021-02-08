---
title: 2009-03-01-from-sina-msn
date:  2009-03-01
draft: false
keywords: []
description: "Imported from Sina Blog"
tags: ["新浪博客", "MSN搬家"]
categories: 
    - "日记本"
---
USE MATLAB TO CALL C++ dll(zz)
## USE MATLAB TO CALL C++ dll(zz)

 原文发布于：*2009-03-29 10:10:20*

#### What are my options for interfacing MATLAB code with code in
other programming languages like C, C++, or FORTRAN?

[
MATLAB 6.5 (R13) or below](http&#58;//www.mathworks.com/support/tech-notes/1600/1622_files/1622_R13.html)

---

##### Index

1. [
How do I call C or FORTRAN code from MATLAB?](http&#58;//www.mathworks.com/support/tech-notes/1600/1622.html#Call_C_from_MATLAB)
2. [
How do I call MATLAB from C or FORTRAN stand-alone
programs?](http&#58;//www.mathworks.com/support/tech-notes/1600/1622.html#Call_MATLAB_from_C)
3. [
How do I convert my M-code into a C or C++ shared library?](http&#58;//www.mathworks.com/support/tech-notes/1600/1622.html#Convert_M_to_C)
4. [
How do I know when I would need to buy MATLAB Compiler and when I
would need only MATLAB?](http&#58;//www.mathworks.com/support/tech-notes/1600/1622.html#Product_comparison)

---

#### Section 1&#58; How do I call C or FORTRAN code from
MATLAB?

You can call your existing C or FORTRAN programs from MATLAB by
creating MEX-files.

**What is a MEX file?**

MEX is a built-in utility that enables you to call C or FORTRAN
code in MATLAB by compiling your code into a MATLAB Executable
called a MEX-file. MEX-files are dynamically linked subroutines
that are called as regular MATLAB functions. This requires you to
replace your application's main() with a special gateway function -
called "mexFunction" - to pass inputs and outputs to and from
MATLAB. MEX is discussed in the [
MATLAB External Interfaces Guide](http&#58;//www.mathworks.com/access/helpdesk/help/techdoc/matlab_external/f29502.html). For in-depth examples and
other detailed MEX information, see the MEX-files Guide, [
Technical Note 1605](http&#58;//www.mathworks.com/support/tech-notes/1600/1605.html). To use MEX, you do not need additional
MathWorks products; all you need is MATLAB and a supported C or
FORTRAN compiler. On 32-bit Windows, a supported compiler (LCC) is
distributed with MATLAB. See the [
Supported and Compatible Compiler list](http&#58;//www.mathworks.com/support/compilers/current_release/) for a complete list of
supported C compilers. For example, to compile foo.c into a MEX
function, use the following syntax&#58;

    
    mex foo.c
    

The documentation has several examples of [
C MEX-files](http&#58;//www.mathworks.com/access/helpdesk/help/techdoc/matlab_external/f12977.html) and [
FORTRAN MEX-files](http&#58;//www.mathworks.com/access/helpdesk/help/techdoc/matlab_external/f21779.html).

**Can I create C++ or Fortran MEX-files?**

Yes, you can create C++ MEX-files in MATLAB. For an example, look
at file

    
    mexcpp.cpp
    

in matlabroot/extern/examples/mex, where "matlabroot" is the root
directory of your MATLAB installation.

#### Section 2&#58; How do I call MATLAB from C or
FORTRAN stand-alone programs?

The MATLAB Engine allows C or FORTRAN programs to communicate
with a separate MATLAB process via pipes in UNIX and through
ActiveX on Windows. For more information on the MATLAB Engine, see
[
using the MATLAB Engine](http&#58;//www.mathworks.com/access/helpdesk/help/techdoc/matlab_external/f38569.html).

#### Section 3&#58; How do I convert my M-code into a C
or C++ shared library?

You can convert M-code into a C or C++ shared library using the
MATLAB Compiler. This shared library can then be incorporated into
a Visual Studio project, or be combined with a driver file into a
stand-alone application. To compile your M-code, for example foo1.m
and foo2.m, into a C shared library use the following
syntax&#58;

    
    mcc -B csharedlib&#58;libmyfoo foo1.m foo2.m
    

For an example on building a C shared library and a driver file,
refer to the [
C shared library example](http&#58;//www.mathworks.com/access/helpdesk/help/toolbox/compiler/f2-1000836.html) of the documentation. It is further
possible to integrate these shared libraries into Visual Studio
applications in [
Visual Studio .NET 2003](http&#58;//www.mathworks.com/support/solutions/data/1-UR7P0.html?1-UR7P0) and [
Visual Studio 2005](http&#58;//www.mathworks.com/support/solutions/data/1-2Q3TJ5.html?solution=1-2Q3TJ5).

#### Section 4&#58; How do I know when I would need to
buy MATLAB Compiler and when I would need only MATLAB?

If you have C or FORTRAN code and want to

- generate MEX-files to execute C, C++, or FORTRAN code in
MATLAB, or
- link to a MATLAB session in order to execute MATLAB code in C,
C++, or FORTRAN in a stand-alone program you need MATLAB and a
[
supported C, C++, or FORTRAN compiler](http&#58;//www.mathworks.com/support/compilers/current_release/) to compile the source
code.

If you have C or C++ code as well as M-code and you want to

- create a C or C++ shared library to integrate into an existing
application and custom MATLAB code, or
- create a COM/ .NET object from M-code using MATLAB Builder for
.NET to integrate with an existing Visual Studio application,
or
- create an Excel plug-in from M-code using MATLAB Builder for
Excel to integrate with an existing Excel project you need MATLAB,
MATLAB Compiler, and a [
supported C, C++, or FORTRAN compiler](http&#58;//www.mathworks.com/support/compilers/current_release/) to compile the source
code.


晨练让你更健康
## 晨练让你更健康

 原文发布于：*2009-03-29 08:35:32*

晨练是健康的零存整取，晨练时聪明人保持健康的技巧

晨练是生活充实而幸福的小细节，晨练是每天忙碌生活的美好开端。


