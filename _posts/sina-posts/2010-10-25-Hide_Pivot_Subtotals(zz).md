---
title: 2010-10-25-Hide_Pivot_Subtotals(zz)
date:  2010-10-25
draft: false
keywords: []
description: "Imported from Sina Blog"
tags: ["新浪博客"]
categories: 
    - "日记本"
---
Hide Pivot Subtotals(zz)
## Hide Pivot Subtotals(zz)

 原文发布于：*2010-10-25 23:50:58*

#### [
http&#58;//www.contextures.com/xlPivot03.html#Subtotals](http&#58;//www.contextures.com/xlPivot03.html#Subtotals)

#### Hide Pivot Subtotals

When you add more than one field to the row or column area, the
pivot table will display subtotals. The following code removes all
subtotals from the pivot table.

    
    Sub NoSubtotals()
    'pivot table tutorial by contextures.com
    'turns off subtotals in pivot table
    '.PivotFields could be changed to
    '.RowFields or .ColumnFields
    Dim pt As PivotTable
    Dim pf As PivotField
    On Error Resume Next
    For Each pt In ActiveSheet.PivotTables
      For Each pf In pt.PivotFields
        'First, set index 1 (Automatic) to True,
        'so all other values are set to False
        pf.Subtotals(1) = True
        pf.Subtotals(1) = False
      Next pf
    Next pt
    
    End Sub
    

[![Hide&nbsp;<wbr>Pivot&nbsp;<wbr>Subtotals(zz)](http&#58;//www.contextures.com/images/scrollup.gif)](http&#58;//www.contextures.com/#Top)

> > ![Hide&nbsp;<wbr>Pivot&nbsp;<wbr>Subtotals(zz)](http&#58;//www.contextures.com/images/pt12.gif)
> > 
> > Download the zipped [sample
> > file](http&#58;//www.contextures.com/PivotSales.zip) for this pivot table tutorial


