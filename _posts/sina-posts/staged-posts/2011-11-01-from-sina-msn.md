---
title: 2011-11-01-from-sina-msn
date:  2011-11-01
draft: false
keywords: []
description: "Imported from Sina Blog"
tags: ["新浪博客", "MSN搬家"]
categories: 
    - "日记本"
---
Format a Row Based on the Value in a Cell in&n
## Format a Row Based on the Value in a Cell in&n

 原文发布于：*2011-11-08 21:09:35*

[http://www.ecs.psu.edu/training/Software_Tips/Excel.htm#Tip
70](http://www.ecs.psu.edu/training/Software_Tips/Excel.htm#Tip%2070)

Tip #71 - Format a Row Based on the Value in a Cell in the Same
Row(Version 2003)

You can conditionally format a row of cells based on the value
of a cell within the same row. For example, suppose you have a
spreadsheet displaying student names along with test percentage
scores as shown below:

&#160;
NameScoreSue52Debby68Nancy75Joe85Fred95
Using this example, you can tell Excel to format score values
with a red font color if the student's score is less than 50, with
a green font color if between 50 to 59, and with a blue font color
if between 60 and 69. Here's how:

1. Highlight cells A2 through B6.

2. From the Format menu, choose Conditional
Formatting.

3. Select Formula Is from the Condition 1 drop-down
list.

4. Set the condition to =$B2<50, click the
Format button and set the font color to red. Click
Ok to return to the Conditional Formatting dialog box.

5. Click the Add button, select Formula Is from
the Condition 1 drop-down list and enter an additional formula,
such as =$B2<60. Click the Format
button and set the font color to green. Click Ok
to return to the Conditional Formatting dialog box.

6. To add another conditional formula, click the Add
button again, select Formulas Is from the Condition 1
drop-down list and enter an additional formula, such as
=$B2<70. Click theFormat button and
set the font color to blue. Click Ok to return to the
Conditional Formatting dialog box.

5. Click Ok to close the Conditional Formatting dialog
box.

Scores less than 50 will be red, scores between 50 to 59 will be
green and scores 60 to 69 will be blue.


