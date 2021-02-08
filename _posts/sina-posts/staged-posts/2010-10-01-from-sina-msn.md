---
title: 2010-10-01-from-sina-msn
date:  2010-10-01
draft: false
keywords: []
description: "Imported from Sina Blog"
tags: ["新浪博客", "MSN搬家"]
categories: 
    - "日记本"
---
李开复——21 世纪最需要的 7 种人才 收藏
## 李开复——21 世纪最需要的 7 种人才 收藏

 原文发布于：*2010-10-09 15:37:34*

###  

**创新实践者——What matters is not innovation , but useful
innovation。**

**跨领域合成者——What matters is not analysis but
synthesis。**

**三商合作者——EQ is 9 times more important than
IQ。**

**高效能沟通者——The man who can think and does not know how to
express what he thinks is at the level of him who cannot
think。**

**热爱工作者——If you find a job you love , you will never work
a day in your life。**

**积极主动者——In a few hundred years , the most important event
those historians will see is that for the first time , people will
have a choice. They will have to manage themselves。**

**乐观向上者——The glass is half full or half empty depending on
whether you’re pouring in or out**


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


ZZ_人这一辈子，难得是清醒——与“雷锋传人”郭明义面对面
## ZZ_人这一辈子，难得是清醒——与“雷锋传人”郭明义面对面

 原文发布于：*2010-10-25 13:12:47*

人这一辈子，难得是清醒——与“雷锋传人”郭明义面对面

本报记者　解玉秀　宋歆　刘建伟　通讯员　黄长刚

郭明义在工作中要求就是一个“严”字。 本报记者 柳 军摄

　　有人叫他郭大傻，因为他家徒四壁，没有一件值钱的家具，能捐的都捐了；

　　有人叫他郭大侠，因为他无偿捐献全血和血小板，累计献血量已达6万毫升；

　　有人叫他郭大使，因为他一手拉扯起捐资助学等多支爱心联队；

　　有人远离他，有人追随他，还有人觉得他可敬可爱但很难学；

　　有人理解他，有人误读他，还有人正在思索中尝试做出选择……

　　多年来，面对环境的沧海桑田，面对事业的波峰浪谷，面对人言的莫衷一是，他的选择只有两个字：无悔


