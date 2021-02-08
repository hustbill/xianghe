---
title: 2009-11-01-from-sina-msn
date:  2009-11-01
draft: false
keywords: []
description: "Imported from Sina Blog"
tags: ["新浪博客", "MSN搬家"]
categories: 
    - "日记本"
---
VMware: 扩展硬盘空间
## VMware: 扩展硬盘空间

 原文发布于：*2009-11-02 12:50:33*

*******************************************************************

###### VMware&#58; 扩展硬盘空间

Steps&#58;

1)  关闭要扩展的虚拟机。

2)  打开主机DOS命令窗口，用"cd"命令转到VMware安装路径&#58;

D&#58;\soft\VMware\VMware
Workstation>vmware-vdiskmanager.exe -x 20GB
"d&#58;\My Virtual

Machines\Windows XP Professional\Windows XP
Professional.vmdk"

注明：  

    a) -x 表示extend；

    b) 20Gb表示要扩展之后要达到的总空间；

   c)
要扩展的vmdk，不能带snapshot。如果有，需删除后再做扩展；

    如果虚拟机没有跟VMware
server放在同一目录，需要带上虚拟机的路径(d&#58;\xxx)。

4) 等待主机分配空间

Using log file
C&#58;\Temp\vmware-zhangb\vdiskmanager.log

  Grow&#58; 100% done.

The old geometry C/H/S of the disk is&#58;
16383/16/63

The new geometry C/H/S of the disk is&#58;
16383/16/63

Disk expansion completed successfully.

WARNING&#58; If the virtual disk is partitioned, you
must use a third-party

         utility in the
virtual machine to expand the size of the

         partitions. For
more information, see&#58;

        [
http&#58;//www.vmware.com/support/kb/enduser/std_adp.php?p_faqid=1647](http&#58;//www.vmware.com/support/kb/enduser/std_adp.php?p_faqid=1647)

5) 启动虚拟机.

6)如果虚拟机中没有其他分区，则在虚拟机中打开DOS命令窗口,输入diskpart.exe。
此时DOS路径会消失，命令窗口显示DISKPART>

a) 输入DISKPART>list
volume.屏幕会列出所有硬盘分区，自己对照盘符，确定D盘对应哪个volume,假设对应volume 2

b) 输入DISKPART>select volume 2.

c) 输入DISKPART>extend

d) 完成。

****************************************************************

7) 如果虚拟机中有其他分区，则要在虚拟机上安装第三方分区工具，例如Norton
PartitionMagic，用它在虚拟机上重新设置分区大小，重启系统生效。


转载--未得到和已失去
## 转载--未得到和已失去

 原文发布于：*2009-11-26 23:39:54*

有人说这则故事给人的感悟是：珍惜现在所拥有的。我不否认这句话的真谛，但是却想认认真真地思考“未得到和已失去”这句话的真实内涵之所在。

人活在这个世界上，幸福和快乐似乎总是和我们相隔甚远，却觉得总是有着那么多的痛苦和悲伤。其实，这是人性丑陋的一面的真实反映，因为“人心不足蛇吞象”，对于自己享受到的幸福和快乐总是视而不见，就象跟人博弈打牌那样，输的时候总是耿耿于怀而赢得的时候却记忆模糊。这也就是因为未得到和已失去的理念在左右着人们的思想观念：得不到的，永远是最美丽的；而已失去的，却永远是最珍贵的。当你看到别人生活快乐，就会羡慕，因为未得到和已失去；看到别人升官发财，也会羡慕，也因为未得到和已失去；看到别人夫妻恩爱，还会羡慕，还因为未得到和已失去；看到别人……其实有很多很多。举一个具体明了的例子来说说：为什么每个人对初恋的情怀一生难忘，为什么当爱情失去后会那么的悲恸欲绝，其实也是在于未得到和已失去。幸福的真谛在于珍惜和满足现在所拥有的，但是未得到和已失去，却是人世间所有遗憾、悲伤、痛苦的潘多拉之盒。世间多凡人，往往大多数的人更看重的是未得到和已失去，只是固守着现在所拥有的，即所谓的随遇而安！人生如逆水行舟，不进则退。未得到和已失去，是一种欲望。人最悲伤的就是未得到和已失去，如果你换个角度想呢？答案大相庭径，就是已得到和未失去！

不妨用“未得到和已失去的”的话题来看世上的男男女女们：女人是不容易满足的，美丽的容貌，漂亮的衣裳，炫丽的首饰，对女人永远有着不可抵御的吸引力。相比较而言，女人更实在，更物质，尤其是在这个物欲横流的年代。未得到和已失去，对于女人来讲，有着巨大的诱惑力。而男人呢，男人是喜新厌旧的，当一个男人喜欢上一个女人的时候，其实是想得到这个女人的身体，未得到之前，极尽所能的讨巧，当得到之后，假如女人不能变着花样保持男人好奇，那么，就会像玩具般被男人遗弃。在恋爱中，女人渴望男人裸露心灵，男人希望女人裸露身体，很精辟的一句话啊。人与人之间是讲求缘分的，可不是完全讲求缘分，缘分只是负责让你们认识，之后的事就要看各自是否有心珍惜了吧。对待感情，往往很少有人会珍惜现在所拥有的，更多的是在不停的挥霍！感情出轨，可以看做是一种偶然，也可以说是一种必然。每个人都希望自己遇到艳遇，只是区别在于条件是否允许。但是也有一个前提，欲望谁都有，但是每个人的自制力不同，克制住了，是为圣人，克制不住，即为凡人。

呵呵，那些盲目地死心眼地认定当初的抉择、那些失眠时掉的眼泪、那些放在心里反反复复想说却没有说出口的话、那些痴迷到不计得失交付出去的热情还有那些放低自尊苦苦追问的答案……所有的一切都变得无迹可寻。“过我眼即我有”，这句话既是自嘲，也不仅是自嘲。苍茫宇宙，孤单前行，就如两只蚂蚁相遇，能拥抱一下更好，不能也算了，目光送她离去，反正总要离去的。未得到和已失去，就犹如饕餮，贪婪的吞噬着每个人的欲望。在未得到中挣扎，在已失去中迷失，谁也无法逃避。玫瑰的魅力在于绽放，樱花的绚丽在于凋零。已经失去的因永不再来而显得珍贵，还没有得到的因潜意识中不可预计的美好而令人激动，没得到的是好是坏并无从证明，而失去的东西却会在无数次追忆里日趋完好。我们一定要珍惜我们所拥有的，而不要一直沉浸在已失去的痛苦之中。所谓的要化悲痛为力量，就是激励我们从中得到继续奋斗的动力啊！

