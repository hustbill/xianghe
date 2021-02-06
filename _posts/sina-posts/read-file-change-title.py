
import re

import os

rootdir = './demo/'   # 需要遍历的文件夹，这里设定为当前文件夹
list = os.listdir(rootdir)
for line in list:
    filepath = os.path.join(rootdir, line)
    if os.path.isdir(filepath):
        print("dir:" + filepath)
    if os.path.isfile(filepath):
        print("file:" + filepath)
        src = filepath
        fname = filepath
        with open(fname, 'r', encoding='utf-8') as f:  # 打开文件
            lines = f.readlines()  # 读取所有行
            first_line = lines[0]  # 取第一行
            forth_line = lines[3]  # 取第四行

            no_date_index = forth_line.find('*3C')
            #  原文发布于：*3C//DTD XHTML 1.0
            print("no_date_index: ", no_date_index )
            
            if no_date_index == -1: 
                first_index = forth_line.find('*')
                print('first_index: ', first_index)
                second_index = first_index + len('2015-10-09') + 1
                third_index = first_index + len('2015-10-09 06:07:14')
                date_str = forth_line[first_index + 1 : second_index]
                date_time_str = forth_line[first_index + 1 : third_index]

                file_name_withspace = date_str + '-' + first_line[0: len(first_line) - 1] + '.md'
                file_name =  re.sub('\s+',' ',file_name_withspace).replace(" ", "_")
                
                # print('文件' + fname + '第一行为：'+ first_line)
                # print('文件' + fname + '第四行为：' + forth_line)
                # print('date_time_str: ' + date_time_str)
                dst = file_name
                if no_date_index == 7:
                    dst = first_line[0: len(first_line) - 1] + '.md'
                print('dst: ' + dst)
                os.rename(src, dst)



